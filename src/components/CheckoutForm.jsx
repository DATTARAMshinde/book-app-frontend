// import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
// import axios from "axios";
// import getBaseUrl from "../utils/baseURL";
// import { useNavigate } from "react-router-dom";

// const CheckoutForm = ({
//   amount,
//   setShowPayment,
//   createOrder,
//   cartItems,
//   currentUser
// }) => {

//   const stripe = useStripe();
//   const elements = useElements();
//   const navigate = useNavigate();

//   const handlePayment = async (e) => {
//     e.preventDefault();

//     try {
//       // 👉 create payment intent
//       const { data } = await axios.post(
//   `${getBaseUrl()}/api/payment/create-payment-intent`,
//   { amount: Math.round(amount) }
// );

//       // 👉 confirm payment
//       const result = await stripe.confirmCardPayment(data.clientSecret, {
//         payment_method: {
//           card: elements.getElement(CardElement),
//         },
//       });

//       if (result.error) {
//         alert(result.error.message);
//       } else {
//         if (result.paymentIntent.status === "succeeded") {

//           // ✅ ORDER SAVE
//           const newOrder = {
//             email: currentUser?.email,
//             productIds: cartItems.map(item => item?._id),
//             totalPrice: amount,
//           };

//           await createOrder(newOrder);

//           alert("✅ Payment + Order Successful");

//           setShowPayment(false);
//           navigate("/orders");
//         }
//       }

//     } catch (error) {
//       console.error(error);
//       alert("Payment failed");
//     }
//   };

//   return (
//     <form onSubmit={handlePayment}>
//       <div className="border p-3 rounded mb-4">
//         <CardElement />
//       </div>

//       <button className="w-full bg-blue-600 text-white py-2 rounded">
//         Pay ₹{amount}
//       </button>
//     </form>
//   );
// };

// export default CheckoutForm;