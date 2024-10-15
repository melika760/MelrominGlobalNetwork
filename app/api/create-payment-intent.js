import { NextResponse } from 'next/server';
import Stripe from 'stripe';

// Initialize Stripe with your secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2022-11-15',
});

export async function POST(request) {
  const { amount } = await request.json();

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd', // Change this to your desired currency
    });

    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error('Error creating payment intent:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
