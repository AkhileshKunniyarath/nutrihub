import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json();
  const amount = Number(body.amount || 0);

  if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
    return NextResponse.json(
      {
        success: false,
        message: "Razorpay keys are missing. Add them in .env before enabling live checkout."
      },
      { status: 500 }
    );
  }

  return NextResponse.json({
    success: true,
    provider: "razorpay",
    order: {
      id: `order_${Date.now()}`,
      amount,
      currency: "INR"
    },
    message: "Replace this scaffold response with Razorpay SDK order creation."
  });
}
