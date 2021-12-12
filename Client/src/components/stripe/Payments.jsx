import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "./CheckoutForm";
import styles from "./Payments.module.css";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// loadStripe is initialized with a fake API key.
const stripePromise = loadStripe("pk_test_51K3ensID6K2ns8zyaC5zsKjtcI0Clhon5424N593vZWvel6uW5pQ0QdGLa7NI15j7UGUep85jjmp1U7KsjuICkJ400diKMKIjO");

export default function Payments() {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:3040/payment/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: 'flat',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="Payments">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}