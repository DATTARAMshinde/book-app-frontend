// import React, { useState } from 'react'
// import { useSelector } from 'react-redux';
// import { useForm } from "react-hook-form"
// import { Link, useNavigate } from 'react-router-dom';
// import { useAuth } from '../../context/AuthContext';

// import Swal from'sweetalert2';
// import { useCreateOrderMutation } from '../../redux/features/orders/ordersApi';

// const CheckoutPage = () => {
//     const cartItems = useSelector(state => state.cart.cartItems);
//     const totalPrice = cartItems.reduce((acc, item) => acc + item.newPrice, 0).toFixed(2);
//     const {  currentUser} = useAuth()
//     const {
//         register,
//         handleSubmit,
//         watch,
//         formState: { errors },
//     } = useForm()

//     const [createOrder, {isLoading, error}] = useCreateOrderMutation();
//     const navigate =  useNavigate()

//     const [isChecked, setIsChecked] = useState(false)
//     const onSubmit = async (data) => {
     
//         const newOrder = {
//             name: data.name,
//             email: currentUser?.email,
//             address: {
//                 city: data.city,
//                 country: data.country,
//                 state: data.state,
//                 zipcode: data.zipcode
        
//             },
//             phone: data.phone,
//             productIds: cartItems.map(item => item?._id),
//             totalPrice: totalPrice,
//         }
        
//         try {
//             await createOrder(newOrder).unwrap();
//             Swal.fire({
//                 title: "Confirmed Order",
//                 text: "Your order placed successfully!",
//                 icon: "warning",
//                 showCancelButton: true,
//                 confirmButtonColor: "#3085d6",
//                 cancelButtonColor: "#d33",
//                 confirmButtonText: "Yes, It's Okay!"
//               });
//               navigate("/orders")
//         } catch (error) {
//             console.error("Error place an order", error);
//             alert("Failed to place an order")
//         }
//     }

//     if(isLoading) return <div>Loading....</div>
//     return (
//         <section>
//             <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
//                 <div className="container max-w-screen-lg mx-auto">
//                     <div>
//                         <div>
//                             <h2 className="font-semibold text-xl text-gray-600 mb-2">Cash On Delevary</h2>
//                             <p className="text-gray-500 mb-2">Total Price: ${totalPrice}</p>
//                             <p className="text-gray-500 mb-6">Items: {cartItems.length > 0 ? cartItems.length : 0}</p>
//                         </div>

                        
//                             <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
//                                 <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3 my-8">
//                                     <div className="text-gray-600">
//                                         <p className="font-medium text-lg">Personal Details</p>
//                                         <p>Please fill out all the fields.</p>
//                                     </div>

//                                     <div className="lg:col-span-2">
//                                         <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
//                                             <div className="md:col-span-5">
//                                                 <label htmlFor="full_name">Full Name</label>
//                                                 <input
//                                                     {...register("name", { required: true })}
//                                                     type="text" name="name" id="name" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
//                                             </div>

//                                             <div className="md:col-span-5">
//                                                 <label html="email">Email Address</label>
//                                                 <input

//                                                     type="text" name="email" id="email" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
//                                                     disabled
//                                                     defaultValue={currentUser?.email}
//                                                     placeholder="email@domain.com" />
//                                             </div>
//                                             <div className="md:col-span-5">
//                                                 <label html="phone">Phone Number</label>
//                                                 <input
//                                                     {...register("phone", { required: true })}
//                                                     type="number" name="phone" id="phone" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="+123 456 7890" />
//                                             </div>

//                                             <div className="md:col-span-3">
//                                                 <label htmlFor="address">Address / Street</label>
//                                                 <input
//                                                     {...register("address", { required: true })}
//                                                     type="text" name="address" id="address" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" />
//                                             </div>

//                                             <div className="md:col-span-2">
//                                                 <label htmlFor="city">City</label>
//                                                 <input
//                                                     {...register("city", { required: true })}
//                                                     type="text" name="city" id="city" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" />
//                                             </div>

//                                             <div className="md:col-span-2">
//                                                 <label htmlFor="country">Country / region</label>
//                                                 <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
//                                                     <input
//                                                         {...register("country", { required: true })}
//                                                         name="country" id="country" placeholder="Country" className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" />
//                                                     <button tabIndex="-1" className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600">
//                                                         <svg className="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                                                             <line x1="18" y1="6" x2="6" y2="18"></line>
//                                                             <line x1="6" y1="6" x2="18" y2="18"></line>
//                                                         </svg>
//                                                     </button>
//                                                     <button tabIndex="-1" className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600">
//                                                         <svg className="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
//                                                     </button>
//                                                 </div>
//                                             </div>

//                                             <div className="md:col-span-2">
//                                                 <label htmlFor="state">State / province</label>
//                                                 <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
//                                                     <input
//                                                         {...register("state", { required: true })}
//                                                         name="state" id="state" placeholder="State" className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" />
//                                                     <button className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600">
//                                                         <svg className="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                                                             <line x1="18" y1="6" x2="6" y2="18"></line>
//                                                             <line x1="6" y1="6" x2="18" y2="18"></line>
//                                                         </svg>
//                                                     </button>
//                                                     <button tabIndex="-1" className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600">
//                                                         <svg className="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
//                                                     </button>
//                                                 </div>
//                                             </div>

//                                             <div className="md:col-span-1">
//                                                 <label htmlFor="zipcode">Zipcode</label>
//                                                 <input
//                                                     {...register("zipcode", { required: true })}
//                                                     type="text" name="zipcode" id="zipcode" className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" />
//                                             </div>

//                                             <div className="md:col-span-5 mt-3">
//                                                 <div className="inline-flex items-center">
//                                                     <input
//                                                         onChange={(e) => setIsChecked(e.target.checked)}
//                                                         type="checkbox" name="billing_same" id="billing_same" className="form-checkbox" />
//                                                     <label htmlFor="billing_same" className="ml-2 ">I am aggree to the <Link className='underline underline-offset-2 text-blue-600'>Terms & Conditions</Link> and <Link className='underline underline-offset-2 text-blue-600'>Shoping Policy.</Link></label>
//                                                 </div>
//                                             </div>



//                                             <div className="md:col-span-5 text-right">
//                                                 <div className="inline-flex items-end">
//                                                     <button
//                                                         disabled={!isChecked}
//                                                         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Place an Order</button>
//                                                 </div>
//                                             </div>

//                                         </div>
//                                     </div>
//                                 </form>
//                             </div>
                        


//                     </div>


//                 </div>
//             </div>
//         </section>
//     )
// }

// export default CheckoutPage
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Swal from 'sweetalert2';
import { useCreateOrderMutation } from '../../redux/features/orders/ordersApi';

const CheckoutPage = () => {

    const cartItems = useSelector(state => state.cart.cartItems);

    const totalPrice = Number(
        cartItems.reduce((acc, item) => acc + item.newPrice, 0).toFixed(2)
    );

    const { currentUser } = useAuth();
    const navigate = useNavigate();

    const { register, handleSubmit } = useForm();

    const [createOrder] = useCreateOrderMutation();

    const [isChecked, setIsChecked] = useState(false);
    const [showPayment, setShowPayment] = useState(false);
    const [formData, setFormData] = useState(null);
    const [paymentMethod, setPaymentMethod] = useState("upi");

    // Payment input states for validation
    const [upiId, setUpiId] = useState("");
    const [cardDetails, setCardDetails] = useState({ number: "", expiry: "", cvv: "" });

    // STEP 1: form submit → open payment UI
    const onSubmit = (data) => {
        setFormData(data);
        setShowPayment(true);
    };

    // STEP 2: confirm payment → save order
    const handleConfirmPayment = async () => {

        // 🔹 Payment Validation
        if(paymentMethod === "upi" && !upiId.trim()) {
            Swal.fire("Error", "Please enter your UPI ID", "error");
            return;
        }

        if(paymentMethod === "card") {
            const { number, expiry, cvv } = cardDetails;
            if(!number.trim() || !expiry.trim() || !cvv.trim()) {
                Swal.fire("Error", "Please fill all card details", "error");
                return;
            }
        }

        // COD me validation nahi chahiye

        // fake loading
        Swal.fire({
            title: "Processing Payment...",
            timer: 2000,
            didOpen: () => {
                Swal.showLoading();
            }
        });

        const newOrder = {
            name: formData.name,
            email: currentUser?.email,
            address: {
                street: formData.address,
                city: formData.city,
                state: formData.state,
                country: formData.country,
                zipcode: formData.zipcode
            },
            phone: formData.phone,
            productIds: cartItems.map(item => item?._id),
            totalPrice: totalPrice,
            paymentMethod: paymentMethod,
            paymentDetails: paymentMethod === "upi" ? { upiId } :
                             paymentMethod === "card" ? { ...cardDetails } :
                             {} // cod
        };

        try {
            await createOrder(newOrder).unwrap();

            Swal.fire("Success 🎉", "Order placed successfully!", "success");

            // Reset payment popup & navigate
            setShowPayment(false);
            navigate("/orders");

        } catch (error) {
            console.error(error);
            Swal.fire("Error", "Order failed", "error");
        }
    };

    return (
        <section>
            <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
                <div className="container max-w-screen-lg mx-auto">

                    <h2 className="text-xl font-bold mb-2">Checkout</h2>

                    <p>Total Price: ₹{totalPrice}</p>
                    <p>Items: {cartItems.length}</p>

                    <div className="bg-white p-6 rounded shadow mt-4">

                        <form onSubmit={handleSubmit(onSubmit)}>

                            <input {...register("name")} placeholder="Full Name" className="border p-2 w-full mb-2" />

                            <input value={currentUser?.email} disabled className="border p-2 w-full mb-2" />

                            <input {...register("phone")} placeholder="Phone" className="border p-2 w-full mb-2" />

                            <input {...register("address")} placeholder="Address" className="border p-2 w-full mb-2" />

                            <input {...register("city")} placeholder="City" className="border p-2 w-full mb-2" />

                            <input {...register("state")} placeholder="State" className="border p-2 w-full mb-2" />

                            <input {...register("country")} placeholder="Country" className="border p-2 w-full mb-2" />

                            <input {...register("zipcode")} placeholder="Zipcode" className="border p-2 w-full mb-3" />

                            <div className="flex items-center gap-2 mb-3">
                                <input
                                    type="checkbox"
                                    onChange={(e) => setIsChecked(e.target.checked)}
                                />
                                <p>I agree to Terms</p>
                            </div>

                            <button
                                disabled={!isChecked}
                                className="bg-blue-500 text-white px-4 py-2 rounded w-full"
                            >
                                Place Order
                            </button>

                        </form>
                    </div>
                </div>
            </div>

            {/* 🔥 PAYMENT POPUP */}
            {showPayment && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded w-96">

                        <h2 className="text-xl font-bold mb-4">Payment</h2>

                        {/* Payment Methods */}
                        <div className="space-y-2 mb-4">

                            <label className="flex items-center gap-2">
                                <input type="radio" value="upi"
                                    checked={paymentMethod === "upi"}
                                    onChange={(e) => setPaymentMethod(e.target.value)} />
                                UPI
                            </label>

                            <label className="flex items-center gap-2">
                                <input type="radio" value="card"
                                    checked={paymentMethod === "card"}
                                    onChange={(e) => setPaymentMethod(e.target.value)} />
                                Card
                            </label>

                            <label className="flex items-center gap-2">
                                <input type="radio" value="cod"
                                    checked={paymentMethod === "cod"}
                                    onChange={(e) => setPaymentMethod(e.target.value)} />
                                Cash on Delivery
                            </label>

                        </div>

                        {/* Dynamic UI with validation binding */}
                        {paymentMethod === "upi" && (
                            <input
                                placeholder="example@upi"
                                value={upiId}
                                onChange={(e) => setUpiId(e.target.value)}
                                className="border p-2 w-full mb-3"
                            />
                        )}

                        {paymentMethod === "card" && (
                            <>
                                <input placeholder="Card Number"
                                       value={cardDetails.number}
                                       onChange={(e) => setCardDetails({...cardDetails, number: e.target.value})}
                                       className="border p-2 w-full mb-2" />
                                <input placeholder="MM/YY"
                                       value={cardDetails.expiry}
                                       onChange={(e) => setCardDetails({...cardDetails, expiry: e.target.value})}
                                       className="border p-2 w-full mb-2" />
                                <input placeholder="CVV"
                                       value={cardDetails.cvv}
                                       onChange={(e) => setCardDetails({...cardDetails, cvv: e.target.value})}
                                       className="border p-2 w-full mb-3" />
                            </>
                        )}

                        {paymentMethod === "cod" && (
                            <p className="text-sm text-gray-500 mb-3">
                                Pay when product is delivered.
                            </p>
                        )}

                        {/* Buttons */}
                        <button
                            onClick={handleConfirmPayment}
                            className="w-full bg-green-500 text-white py-2 rounded mb-2"
                        >
                            Confirm Payment
                        </button>

                        <button
                            onClick={() => setShowPayment(false)}
                            className="w-full bg-gray-400 text-white py-2 rounded"
                        >
                            Cancel
                        </button>

                    </div>
                </div>
            )}
        </section>
    )
}

export default CheckoutPage;