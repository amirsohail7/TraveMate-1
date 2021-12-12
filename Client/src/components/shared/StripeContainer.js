import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import PaymentForm from "./PaymentForm";

const PUBLIC_KEY =
  "pk_test_51K3ensID6K2ns8zyaC5zsKjtcI0Clhon5424N593vZWvel6uW5pQ0QdGLa7NI15j7UGUep85jjmp1U7KsjuICkJ400diKMKIjO";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

export default function StripeContainer() {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm />
    </Elements>
  );
}
