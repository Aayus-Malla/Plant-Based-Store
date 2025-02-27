const config = {
    publicKey: "1a18cd1d631246b4b10044ece5aea753", // Replace with your actual Live Public Key
    productIdentity: "1234567890",
    productName: "Jewelry Shop",
    productUrl: "http://yourwebsite.com/product/1234567890",
    eventHandler: {
      onSuccess(payload) {
        console.log("Payment successful:", payload);
        // Send payment details to your backend for verification
      },
      onError(error) {
        console.log("Payment failed:", error);
      },
      onClose() {
        console.log("User closed the payment popup.");
      },
    },
    paymentPreference: ["KHALTI"], // Only Khalti is supported in live mode
  };
  
  export default config;
  