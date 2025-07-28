import razorpayInstance from '@/lib/razorpay';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { amount, currency = 'INR', receipt = 'receipt_' + Date.now() } = await request.json();

    // Validate amount
    if (!amount || amount < 100) {
      return NextResponse.json(
        { error: 'Invalid amount. Minimum 100 paise (₹1)' },
        { status: 400 }
      );
    }

    // Create order via Razorpay
    const options = {
      amount: Math.round(amount * 100), // Convert to paise
      currency,
      receipt,
      payment_capture: 1, // Auto capture
    };

    const order = await razorpayInstance.orders.create(options);

    return NextResponse.json({
      success: true,
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
    });
  } catch (error) {
    console.error('Error creating Razorpay order:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create order' },
      { status: 500 }
    );
  }
}