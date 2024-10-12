import Stripe from "stripe";
import { NextResponse,NextRequest } from "next/server";
const stripe=new Stripe(process.env.NEXT_PUBLIC_API_KEY)
export async function Post() {
    const req=NextRequest;
    const res=NextResponse;
    const payload=await req.text()
    const response=JSON.stringify(payload)
    const sig=req.header("Stripe_Signature")
    const dateTime = new Date(res?.created * 1000).toLocaleDateString();
    const timeString = new Date(res?.created * 1000).toLocaleDateString();
  
    // try {
    //   let event = stripe.webhooks.constructEvent(
    //     payload,
    //     sig!,
    //     process.env.STRIPE_WEBHOOK_SECRET!
    //   );}
  
}