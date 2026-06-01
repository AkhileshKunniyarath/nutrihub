import { NextResponse } from "next/server";

export async function POST(request) {
  const payload = await request.text();

  return NextResponse.json({
    success: true,
    received: true,
    payloadLength: payload.length,
    message: "Webhook endpoint scaffolded. Add signature verification and payment reconciliation next."
  });
}
