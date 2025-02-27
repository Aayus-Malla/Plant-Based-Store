import React from "react";
import KhaltiCheckout from "khalti-checkout-web";
import config from "../components/KhaltiConfig"; // Ensure this path is correct

const PaymentButton = ({ amount, onSuccess, onError }) => {
  // Update the config object to use the passed onSuccess and onError handlers
  const updatedConfig = {
    ...config,
    eventHandler: {
      ...config.eventHandler,
      onSuccess: (payload) => {
        console.log("Payment successful:", payload);
        onSuccess(payload); // Call the onSuccess prop
      },
      onError: (error) => {
        console.log("Payment failed:", error);
        onError(error); // Call the onError prop
      },
    },
  };

  const checkout = new KhaltiCheckout(updatedConfig);

  return (
    <button
      onClick={() => checkout.show({ amount: amount * 100 })} // Convert amount to paisa
      style={{
        backgroundColor: "#5e60ce",
        color: "#fff",
        padding: "10px 20px",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      Pay with Khalti
    </button>
  );
};

export default PaymentButton;