"use client";
import Checkout from '@/app/_components/Checkout';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/config/firebaseConfig';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js'; // Ensure correct import
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

// Initialize Stripe
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const Payment = () => {
  const searchParams = useSearchParams();
  const paymentId = searchParams.get('paymentId');

  const [paymentData, setPaymentData] = useState(null);
  const [loading, setLoading] = useState(true); // Track loading state

  useEffect(() => {
    const fetchPaymentData = async () => {
      if (paymentId) {
        try {
          const paymentRef = doc(db, 'Payments', paymentId);
          const paymentSnap = await getDoc(paymentRef);
          if (paymentSnap.exists()) {
            setPaymentData(paymentSnap.data());
          } else {
            console.log('No such payment document!');
          }
        } catch (error) {
          console.error("Error fetching payment data:", error);
        } finally {
          setLoading(false); // Mark loading as false after data is fetched
        }
      } else {
        setLoading(false); // Mark loading as false if no paymentId is found
      }
    };

    fetchPaymentData();
  }, [paymentId]);

  // Handle loading state
  if (loading) {
    return <p>Loading payment details...</p>;
  }

  // Handle case where payment data is not found
  if (!paymentData) {
    return <p>No payment data found.</p>;
  }

  // Convert amount to a number in cents
  const amountInCents = parseFloat(paymentData.amount.replace('$', '').replace(',', '')) * 100;

  return (
    <div>
      <h1>Payment Details</h1>
      <div>
        <p>Amount: {paymentData.amount}</p>
        <p>Status: {paymentData.status}</p>
      </div>

      {amountInCents > 0 && (
        <Elements stripe={stripePromise}>
          <Checkout amount={amountInCents} />
        </Elements>
      )}
    </div>
  );
};

export default Payment;
