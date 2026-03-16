import { NextRequest, NextResponse } from "next/server";
import { importPKCS8 } from "jose";
import { randomUUID, sign } from "crypto";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const productId = searchParams.get("productId");
  const offerId = searchParams.get("offerId");
  const bundleId = searchParams.get("bundleId");

  if (!productId || !offerId || !bundleId) {
    return NextResponse.json(
      { error: "Missing required params: productId, offerId, bundleId" },
      { status: 400 }
    );
  }

  const keyId = process.env.APP_STORE_KEY_ID;
  const privateKeyPem = process.env.APP_STORE_PRIVATE_KEY;

  if (!keyId || !privateKeyPem) {
    return NextResponse.json(
      { error: "Server misconfigured: missing signing credentials" },
      { status: 500 }
    );
  }

  try {
    const nonce = randomUUID();
    const timestamp = Math.floor(Date.now() / 1000);

    // Apple requires the invisible separator \u2063 between fields
    const separator = "\u2063";
    const payload = [
      bundleId,
      keyId,
      productId,
      offerId,
      nonce.toLowerCase(),
      timestamp,
    ].join(separator);

    // importPKCS8 from jose returns a KeyObject in Node.js
    const privateKey = await importPKCS8(privateKeyPem, "ES256");

    // Raw ES256 (ECDSA with SHA-256) signature
    const signature = sign("SHA256", Buffer.from(payload), privateKey as any);

    return NextResponse.json({
      keyId,
      nonce,
      signature: signature.toString("base64"),
      timestamp,
    });
  } catch (error) {
    console.error("Failed to sign offer:", error);
    return NextResponse.json(
      { error: "Failed to sign offer" },
      { status: 500 }
    );
  }
}
