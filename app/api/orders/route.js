import { NextResponse } from "next/server";
import { recentOrders } from "@/lib/mock-data";

export async function GET() {
  return NextResponse.json({
    success: true,
    items: recentOrders
  });
}

export async function POST(request) {
  const payload = await request.json();

  return NextResponse.json({
    success: true,
    message: "Order received in scaffold mode.",
    order: {
      orderNumber: `ORD-${Date.now()}`,
      ...payload
    }
  });
}
