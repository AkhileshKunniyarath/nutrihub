import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json();

  return NextResponse.json({
    success: true,
    mode: body.paymentMethod || "razorpay",
    message:
      "Checkout scaffold is ready. Wire this route to Razorpay order creation and signature verification next."
  });
}
