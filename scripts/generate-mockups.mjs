import sharp from "sharp";
import path from "path";
import { mkdir } from "fs/promises";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

// SVG canvas size (matches the real device SVG)
const SVG_W = 1707;
const SVG_H = 2898;

// Screen area from the device SVG
const SCREEN_X = Math.round(313.742);  // 314
const SCREEN_Y = 203;
const SCREEN_W = 1079;
const SCREEN_H = Math.round(2375.51);  // 2376
const SCREEN_R = Math.round(123.321);  // 123

// Real iPhone 14 Pro Max frame SVG — based on the provided device asset
// Uses evenodd path to cut out the screen area (transparent)
// Keeps all original filters (inner shadows, drop shadows)
const frameSvg = `<svg width="${SVG_W}" height="${SVG_H}" viewBox="0 0 ${SVG_W} ${SVG_H}" fill="none" xmlns="http://www.w3.org/2000/svg">
<defs>
<filter id="filter0_dddd_104_9" x="0" y="0" width="1706.49" height="3054" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="74"/>
<feGaussianBlur stdDeviation="37"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_104_9"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="164"/>
<feGaussianBlur stdDeviation="125"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
<feBlend mode="normal" in2="effect1_dropShadow_104_9" result="effect2_dropShadow_104_9"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-76"/>
<feGaussianBlur stdDeviation="40"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="effect2_dropShadow_104_9" result="effect3_dropShadow_104_9"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-26"/>
<feGaussianBlur stdDeviation="57"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="effect3_dropShadow_104_9" result="effect4_dropShadow_104_9"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect4_dropShadow_104_9" result="shape"/>
</filter>
<filter id="filter1_ii_104_9" x="252.971" y="151.068" width="1191.67" height="2488.93" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="14.7975" operator="dilate" in="SourceAlpha" result="effect1_innerShadow_104_9"/>
<feOffset dx="-9.86497"/>
<feGaussianBlur stdDeviation="11.838"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.129412 0 0 0 0 0.129412 0 0 0 0 0.129412 0 0 0 1 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_104_9"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-4.93249"/>
<feGaussianBlur stdDeviation="9.86497"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.129167 0 0 0 0 0.129167 0 0 0 0 0.129167 0 0 0 1 0"/>
<feBlend mode="normal" in2="effect1_innerShadow_104_9" result="effect2_innerShadow_104_9"/>
</filter>
<filter id="filter2_ii_104_9" x="249.014" y="1042.38" width="13.8109" height="194.015" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="-0.986497"/>
<feGaussianBlur stdDeviation="2.46624"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.0862745 0 0 0 0 0.0862745 0 0 0 0 0.0862745 0 0 0 1 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_104_9"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="0.986497"/>
<feGaussianBlur stdDeviation="0.986497"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.192157 0 0 0 0 0.192157 0 0 0 0 0.192157 0 0 0 1 0"/>
<feBlend mode="normal" in2="effect1_innerShadow_104_9" result="effect2_innerShadow_104_9"/>
</filter>
<filter id="filter3_ii_104_9" x="249.014" y="805.132" width="13.8109" height="196.026" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="-0.986497"/>
<feGaussianBlur stdDeviation="2.46624"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.0862745 0 0 0 0 0.0862745 0 0 0 0 0.0862745 0 0 0 1 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_104_9"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="0.986497"/>
<feGaussianBlur stdDeviation="0.986497"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.192157 0 0 0 0 0.192157 0 0 0 0 0.192157 0 0 0 1 0"/>
<feBlend mode="normal" in2="effect1_innerShadow_104_9" result="effect2_innerShadow_104_9"/>
</filter>
<filter id="filter4_ii_104_9" x="249.014" y="622.176" width="13.8109" height="105.552" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="-0.986497"/>
<feGaussianBlur stdDeviation="2.46624"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.0862745 0 0 0 0 0.0862745 0 0 0 0 0.0862745 0 0 0 1 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_104_9"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="0.986497"/>
<feGaussianBlur stdDeviation="0.986497"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.192157 0 0 0 0 0.192157 0 0 0 0 0.192157 0 0 0 1 0"/>
<feBlend mode="normal" in2="effect1_innerShadow_104_9" result="effect2_innerShadow_104_9"/>
</filter>
<filter id="filter5_ii_104_9" x="1443.66" y="870.475" width="13.8109" height="297.557" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="0.986497"/>
<feGaussianBlur stdDeviation="2.46624"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.0875 0 0 0 0 0.0875 0 0 0 0 0.0875 0 0 0 1 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_104_9"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="-0.986497"/>
<feGaussianBlur stdDeviation="0.986497"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.191667 0 0 0 0 0.191667 0 0 0 0 0.191667 0 0 0 1 0"/>
<feBlend mode="normal" in2="effect1_innerShadow_104_9" result="effect2_innerShadow_104_9"/>
</filter>
</defs>
<g filter="url(#filter0_dddd_104_9)">
<g filter="url(#filter1_ii_104_9)">
<path fill-rule="evenodd" d="M431.528 156H1274.962A169.678 169.678 0 0 1 1444.64 325.678V2470.322A169.678 169.678 0 0 1 1274.962 2640H431.528A169.678 169.678 0 0 1 261.85 2470.322V325.678A169.678 169.678 0 0 1 431.528 156ZM437.063 203H1269.421A123.321 123.321 0 0 1 1392.742 326.321V2455.189A123.321 123.321 0 0 1 1269.421 2578.51H437.063A123.321 123.321 0 0 1 313.742 2455.189V326.321A123.321 123.321 0 0 1 437.063 203Z" fill="#2C2C2C"/>
</g>
<g filter="url(#filter2_ii_104_9)">
<rect x="250" y="1042.38" width="11.838" height="194.015" rx="3.94599" fill="#2C2C2C"/>
</g>
<g filter="url(#filter3_ii_104_9)">
<rect x="250" y="805.132" width="11.838" height="196.026" rx="3.94599" fill="#2C2C2C"/>
</g>
<g filter="url(#filter4_ii_104_9)">
<rect x="250" y="622.176" width="11.838" height="105.552" rx="3.94599" fill="#2C2C2C"/>
</g>
<g filter="url(#filter5_ii_104_9)">
<rect x="1444.65" y="870.475" width="11.838" height="297.557" rx="3.94599" fill="#2C2C2C"/>
</g>
<rect x="703.469" y="242.426" width="293" height="81.4464" rx="38.6525" fill="#2C2C2C"/>
</g>
</svg>`;

// Rounded rect mask for clipping screenshot to screen shape
const maskSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="${SCREEN_W}" height="${SCREEN_H}">
  <rect width="${SCREEN_W}" height="${SCREEN_H}" rx="${SCREEN_R}" ry="${SCREEN_R}" fill="white"/>
</svg>`;

const screenshots = [
  { file: "onboarding.jpeg", name: "mockup-onboarding" },
  { file: "prayer.png",      name: "mockup-prayer" },
  { file: "journal.png",     name: "mockup-journal" },
];

async function generateMockup(screenshot) {
  const screenshotPath = path.join(root, "public/screenshots", screenshot.file);
  const outputPath = path.join(root, "public/mockups", `${screenshot.name}.png`);

  // 1. Resize screenshot to fill screen area
  const resized = await sharp(screenshotPath)
    .resize(SCREEN_W, SCREEN_H, { fit: "cover" })
    .toBuffer();

  // 2. Clip screenshot to rounded corners
  const masked = await sharp(resized)
    .composite([{ input: Buffer.from(maskSvg), blend: "dest-in" }])
    .png()
    .toBuffer();

  // 3. Render device frame SVG
  const frame = await sharp(Buffer.from(frameSvg)).png().toBuffer();

  // 4. Composite: transparent canvas → screenshot → frame
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
      { input: frame, left: 0, top: 0 },
    ])
    .png()
    .toBuffer();

  await sharp(result).toFile(outputPath);
  console.log(`  ✓ ${screenshot.name}.png`);
}

async function main() {
  await mkdir(path.join(root, "public/mockups"), { recursive: true });
  console.log(`\nGenerating ${screenshots.length} mockups at ${SVG_W}×${SVG_H}px...\n`);
  for (const s of screenshots) await generateMockup(s);
  console.log("\nDone! Files in public/mockups/\n");
}

main().catch(console.error);
