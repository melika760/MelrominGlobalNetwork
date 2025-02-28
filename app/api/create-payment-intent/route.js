import { NextResponse } from 'next/server';


// Initialize Stripe with your secret key
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
export async function POST(request) {
  try {
    const { amount } = await request.json();
    if (!amount || typeof amount !== 'number' || amount <= 0) {
        throw new Error('Invalid amount');
      }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: "GBP",
      automatic_payment_methods: { enabled: true },
    });

    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error("Internal Error:", error);
    // Handle other errors (e.g., network issues, parsing errors)
    return NextResponse.json(
      { error: `Internal Server Error: ${error}` },
      { status: 500 }
    );
  }
}
