// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { Link } from 'react-router-dom'
// import { getImgUrl } from '../../utils/getImgUrl';
// import { clearCart, removeFromCart } from '../../redux/features/cart/cartSlice';

// const CartPage = () => {
//     const cartItems = useSelector(state => state.cart.cartItems);
//     const dispatch =  useDispatch()

//     const totalPrice =  cartItems.reduce((acc, item) => acc + item.newPrice, 0).toFixed(2);

//     const handleRemoveFromCart = (product) => {
//         dispatch(removeFromCart(product))
//     }

//     const handleClearCart  = () => {
//         dispatch(clearCart())
//     }
//     return (
//         <>
//             <div className="flex mt-12 h-full flex-col overflow-hidden bg-white shadow-xl">
//                 <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
//                     <div className="flex items-start justify-between">
//                         <div className="text-lg font-medium text-gray-900">Shopping cart</div>
//                         <div className="ml-3 flex h-7 items-center ">
//                             <button
//                                 type="button"
//                                 onClick={handleClearCart }
//                                 className="relative -m-2 py-1 px-2 bg-red-500 text-white rounded-md hover:bg-secondary transition-all duration-200  "
//                             >
//                                 <span className="">Clear Cart</span>
//                             </button>
//                         </div>
//                     </div>

//                     <div className="mt-8">
//                         <div className="flow-root">

//                             {
//                                 cartItems.length > 0 ? (
//                                     <ul role="list" className="-my-6 divide-y divide-gray-200">
//                                         {
//                                             cartItems.map((product) => (
//                                                 <li key={product?._id} className="flex py-6">
//                                                     <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
//                                                         <img
//                                                             alt=""
//                                                             src={`${getImgUrl(product?.coverImage)}`}
//                                                             className="h-full w-full object-cover object-center"
//                                                         />
//                                                     </div>

//                                                     <div className="ml-4 flex flex-1 flex-col">
//                                                         <div>
//                                                             <div className="flex flex-wrap justify-between text-base font-medium text-gray-900">
//                                                                 <h3>
//                                                                     <Link to='/'>{product?.title}</Link>
//                                                                 </h3>
//                                                                 <p className="sm:ml-4">${product?.newPrice}</p>
//                                                             </div>
//                                                             <p className="mt-1 text-sm text-gray-500 capitalize"><strong>Category: </strong>{product?.category}</p>
//                                                         </div>
//                                                         <div className="flex flex-1 flex-wrap items-end justify-between space-y-2 text-sm">
//                                                             <p className="text-gray-500"><strong>Qty:</strong> 1</p>

//                                                             <div className="flex">
//                                                                 <button
//                                                                 onClick={() => handleRemoveFromCart(product)}
//                                                                 type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
//                                                                     Remove
//                                                                 </button>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </li>
//                                             ))
//                                         }



//                                     </ul>
//                                 ) : (<p>No product found!</p>)
//                             }


//                         </div>
//                     </div>
//                 </div>

//                 <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
//                     <div className="flex justify-between text-base font-medium text-gray-900">
//                         <p>Subtotal</p>
//                         <p>${totalPrice ? totalPrice : 0}</p>
//                     </div>
//                     <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
//                     <div className="mt-6">
//                         <Link
//                             to="/checkout"
//                             className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
//                         >
//                             Checkout
//                         </Link>
//                     </div>
//                     <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
//                         <Link to="/">
//                             or
//                             <button
//                                 type="button"

//                                 className="font-medium text-indigo-600 hover:text-indigo-500 ml-1"
//                             >
//                                 Continue Shopping
//                                 <span aria-hidden="true"> &rarr;</span>
//                             </button>
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default CartPage




import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getImgUrl } from '../../utils/getImgUrl';
import { clearCart, removeFromCart } from '../../redux/features/cart/cartSlice';

const CartPage = () => {

    const cartItems = useSelector(state => state.cart.cartItems);
    const dispatch = useDispatch()

    const totalPrice = cartItems
        .reduce((acc, item) => acc + item.newPrice, 0)
        .toFixed(2);

    const handleRemoveFromCart = (product) => {
        dispatch(removeFromCart(product))
    }

    const handleClearCart = () => {
        dispatch(clearCart())
    }

    return (
        <div className="min-h-screen bg-gray-950 text-gray-200 py-12 px-4">

            <div className="max-w-4xl mx-auto bg-gray-900 border border-gray-800 rounded-xl shadow-xl overflow-hidden">

                {/* HEADER */}
                <div className="flex justify-between items-center px-6 py-5 border-b border-gray-800">
                    <h2 className="text-xl font-semibold">Shopping Cart</h2>

                    <button
                        onClick={handleClearCart}
                        className="px-3 py-1.5 text-sm bg-red-500 hover:bg-red-600 text-white rounded-md transition"
                    >
                        Clear Cart
                    </button>
                </div>

                {/* ITEMS */}
                <div className="px-6 py-6">

                    {
                        cartItems.length > 0 ? (
                            <ul className="space-y-6">

                                {
                                    cartItems.map((product) => (
                                        <li key={product?._id} className="flex gap-5 border-b border-gray-800 pb-5">

                                            {/* IMAGE */}
                                            <div className="h-24 w-24 rounded-md overflow-hidden border border-gray-700">
                                                <img
                                                    src={getImgUrl(product?.coverImage)}
                                                    alt=""
                                                    className="h-full w-full object-cover"
                                                />
                                            </div>

                                            {/* INFO */}
                                            <div className="flex flex-1 flex-col justify-between">

                                                <div className="flex justify-between">

                                                    <h3 className="font-medium text-gray-100 hover:text-blue-400 transition">
                                                        <Link to="/">{product?.title}</Link>
                                                    </h3>

                                                    <p className="font-semibold text-blue-400">
                                                        ${product?.newPrice}
                                                    </p>

                                                </div>

                                                <p className="text-sm text-gray-400 capitalize mt-1">
                                                    Category: {product?.category}
                                                </p>

                                                <div className="flex justify-between items-center mt-3">

                                                    <p className="text-sm text-gray-400">
                                                        Qty: 1
                                                    </p>

                                                    <button
                                                        onClick={() => handleRemoveFromCart(product)}
                                                        className="text-sm text-red-400 hover:text-red-500 transition"
                                                    >
                                                        Remove
                                                    </button>

                                                </div>

                                            </div>
                                        </li>
                                    ))
                                }

                            </ul>
                        ) : (
                            <p className="text-center text-gray-400">No product found!</p>
                        )
                    }

                </div>

                {/* FOOTER */}
                <div className="border-t border-gray-800 px-6 py-6">

                    <div className="flex justify-between text-lg font-semibold">
                        <span>Subtotal</span>
                        <span className="text-blue-400">${totalPrice || 0}</span>
                    </div>

                    <p className="text-sm text-gray-400 mt-1">
                        Shipping and taxes calculated at checkout.
                    </p>

                    {/* CHECKOUT */}
                    <Link
                        to="/checkout"
                        className="mt-6 block w-full text-center bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-md shadow-md hover:shadow-lg transition"
                    >
                        Checkout
                    </Link>

                    {/* CONTINUE */}
                    <div className="mt-6 text-center text-sm text-gray-400">
                        <Link to="/" className="hover:text-blue-400 transition">
                            Continue Shopping →
                        </Link>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default CartPage 