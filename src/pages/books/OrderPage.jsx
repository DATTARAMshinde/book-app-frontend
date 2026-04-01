// import React from 'react'
// import { useGetOrderByEmailQuery } from '../../redux/features/orders/ordersApi'
// import { useAuth } from '../../context/AuthContext';

// const OrderPage = () => {
//     const { currentUser} = useAuth()


//     const { data: orders = [], isLoading, isError } = useGetOrderByEmailQuery(currentUser.email);
//     if (isLoading) return <div>Loading...</div>
//     if (isError) return <div>Error geting orders data</div>
//     return (
//         <div className='container mx-auto p-6'>
//             <h2 className='text-2xl font-semibold mb-4'>Your Orders</h2>
//             {
//                 orders.length === 0 ? (<div>No orders found!</div>) : (<div>
//                     {
//                         orders.map((order, index) => (
//                             <div key={order._id} className="border-b mb-4 pb-4">
//                                 <p className='p-1 bg-secondary text-white w-10 rounded mb-1'># {index + 1}</p>
//                                 <h2 className="font-bold">Order ID: {order._id}</h2>
//                                 <p className="text-gray-600">Name: {order.name}</p>
//                                 <p className="text-gray-600">Email: {order.email}</p>
//                                 <p className="text-gray-600">Phone: {order.phone}</p>
//                                 <p className="text-gray-600">Total Price: ${order.totalPrice}</p>
//                                 <h3 className="font-semibold mt-2">Address:</h3>
//                                 <p> {order.address.city}, {order.address.state}, {order.address.country}, {order.address.zipcode}</p>
//                                 <h3 className="font-semibold mt-2">Products Id:</h3>
//                                 <ul>
//                                     {order.productIds.map((productId) => (
//                                         <li key={productId}>{productId}</li>
//                                     ))}
//                                 </ul>
//                             </div>
//                         ))
//                     }
//                 </div>)
//             }
//         </div>
//     )
// }

// export default OrderPage





import React from 'react'
import { useGetOrderByEmailQuery } from '../../redux/features/orders/ordersApi'
import { useAuth } from '../../context/AuthContext';

const OrderPage = () => {

    const { currentUser } = useAuth()

    const { data: orders = [], isLoading, isError } =
        useGetOrderByEmailQuery(currentUser.email);

    if (isLoading)
        return <div className="text-center mt-10 text-gray-400">Loading...</div>

    if (isError)
        return <div className="text-center mt-10 text-red-400">Error getting orders data</div>

    return (
        <div className="min-h-screen bg-gray-950 text-gray-200 py-12 px-4">

            <div className="max-w-4xl mx-auto">

                {/* TITLE */}
                <h2 className="text-2xl font-semibold mb-6">Your Orders</h2>

                {
                    orders.length === 0 ? (
                        <p className="text-gray-400 text-center">No orders found!</p>
                    ) : (

                        <div className="space-y-6">

                            {
                                orders.map((order, index) => (

                                    <div
                                        key={order._id}
                                        className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition"
                                    >

                                        {/* ORDER HEADER */}
                                        <div className="flex justify-between items-center mb-3">

                                            <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded">
                                                #{index + 1}
                                            </span>

                                            <span className="text-sm text-gray-400">
                                                ₹{order.totalPrice}
                                            </span>

                                        </div>

                                        {/* INFO */}
                                        <h3 className="font-semibold text-gray-100 mb-1">
                                            Order ID: {order._id}
                                        </h3>

                                        <p className="text-sm text-gray-400">
                                            {order.name} • {order.email}
                                        </p>

                                        <p className="text-sm text-gray-400 mb-2">
                                            Phone: {order.phone}
                                        </p>

                                        {/* ADDRESS */}
                                        <div className="mt-3">
                                            <p className="text-sm font-medium text-gray-300 mb-1">
                                                Address
                                            </p>
                                            <p className="text-sm text-gray-400">
                                                {order.address.city}, {order.address.state},{" "}
                                                {order.address.country} - {order.address.zipcode}
                                            </p>
                                        </div>

                                        {/* PRODUCTS */}
                                        <div className="mt-4">
                                            <p className="text-sm font-medium text-gray-300 mb-1">
                                                Products
                                            </p>

                                            <div className="flex flex-wrap gap-2">
                                                {
                                                    order.productIds.map((id) => (
                                                        <span
                                                            key={id}
                                                            className="text-xs bg-gray-800 border border-gray-700 px-2 py-1 rounded"
                                                        >
                                                            {id}
                                                        </span>
                                                    ))
                                                }
                                            </div>
                                        </div>

                                    </div>
                                ))
                            }

                        </div>
                    )
                }

            </div>

        </div>
    )
}

export default OrderPage