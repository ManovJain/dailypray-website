import sharp from "sharp";
import path from "path";
import { mkdir, readFile } from "fs/promises";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

// SVG canvas size (matches the device SVG viewBox: 248 154 1210 2488)
const SVG_W = 1210;
const SVG_H = 2488;
const VB_X = 248;
const VB_Y = 154;

// Screen area from the device SVG
const SCREEN_X = Math.round(313.742) - VB_X;  // 66
const SCREEN_Y = 203 - VB_Y;                   // 49
const SCREEN_W = 1079;
const SCREEN_H = Math.round(2375.51);          // 2376
const SCREEN_R = Math.round(123.321);          // 123

// Rounded rect mask for clipping screenshot to screen shape
const maskSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="${SCREEN_W}" height="${SCREEN_H}">
  <rect width="${SCREEN_W}" height="${SCREEN_H}" rx="${SCREEN_R}" ry="${SCREEN_R}" fill="white"/>
</svg>`;

const screenshots = [
  { file: "onboarding.webp", name: "mockup-onboarding" },
  { file: "prayer.webp",     name: "mockup-prayer" },
  { file: "journal.webp",    name: "mockup-journal" },
  { file: "shield.webp",     name: "mockup-shield" },
  { file: "widget.webp",     name: "mockup-widget" },
  { file: "notification.webp", name: "mockup-notification" },
];

async function generateMockup(screenshot, frameBuf) {
  const screenshotPath = path.join(root, "public/screenshots", screenshot.file);
  const outputPath = path.join(root, "public/mockups", `${screenshot.name}.png`);

  // 1. Resize screenshot to fit screen area (contain preserves all edges)
  const resized = await sharp(screenshotPath)
    .resize(SCREEN_W, SCREEN_H, {
      fit: "contain",
      background: { r: 255, g: 255, b: 255, alpha: 1 },
    })
    .toBuffer();

  // 2. Clip screenshot to rounded corners
  const masked = await sharp(resized)
    .composite([{ input: Buffer.from(maskSvg), blend: "dest-in" }])
    .png()
    .toBuffer();

  // 3. Composite: transparent canvas → screenshot → frame
  const result = await sharp({
    create: {
      width: SVG_W,
      height: SVG_H,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    },
  })
    .composite([
      { input: masked, left: SCREEN_X, top: SCREEN_Y },
      { input: frameBuf, left: 0, top: 0 },
    ])
    .png()
    .toBuffer();

  await sharp(result).toFile(outputPath);
  console.log(`  ✓ ${screenshot.name}.png`);
}

async function main() {
  await mkdir(path.join(root, "public/mockups"), { recursive: true });

  // Read the device frame SVG and render to PNG at canvas size
  const frameSvgPath = path.join(root, "public/devices/iPhone-14-Pro-Max.svg");
  const frameSvg = await readFile(frameSvgPath, "utf-8");
  const frameBuf = await sharp(Buffer.from(frameSvg))
    .resize(SVG_W, SVG_H)
    .png()
    .toBuffer();

  console.log(`\nGenerating ${screenshots.length} mockups at ${SVG_W}×${SVG_H}px...\n`);
  for (const s of screenshots) await generateMockup(s, frameBuf);
  console.log("\nDone! Files in public/mockups/\n");
}

main().catch(console.error);
