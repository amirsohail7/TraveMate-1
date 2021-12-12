import { createRequire } from "module";
const require = createRequire(import.meta.url);
const stripe = require("stripe")(
  "sk_test_51K3ensID6K2ns8zyIvlVhsPPd3XybemRaIHG27TnKCkbH2KVro5mnl39MKEmDtPyX10hDYqKcg0FoiF3dv7y9KTn00dGqqgrAk"
);

const calculateOrderAmount = (items) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return 1400;
};
export const makePayment = async (req, res) => {
  const { items } = req.body;

  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "eur",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
};

// import { createRequire } from "module";
// const require = createRequire(import.meta.url);
// //require("dotenv").config();
// //const skey = process.env.STRIPE_SECRET_TEST;
// const stripe = require("stripe")(
//   "sk_test_51K3ensID6K2ns8zyIvlVhsPPd3XybemRaIHG27TnKCkbH2KVro5mnl39MKEmDtPyX10hDYqKcg0FoiF3dv7y9KTn00dGqqgrAk"
// );
// export const makePayment = async (req, res) => {
//   let { amount, id } = req.body;
//   try {
//     const payment = await stripe.paymentIntents.create({
//       amount,
//       currency: "USD",
//       description: "Spatula company",
//       payment_method: id,
//       confirm: true,
//     });
//     console.log("Payment", payment);
//     res.json({
//       message: "Payment successful",
//       success: true,
//     });
//   } catch (error) {
//     console.log("Error", error);
//     res.json({
//       message: "Payment failed",
//       success: false,
//     });
//   }
// };
