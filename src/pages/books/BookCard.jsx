// import React from 'react'
// import { FiShoppingCart } from 'react-icons/fi'
// import { getImgUrl } from '../../utils/getImgUrl'

// import { Link } from'react-router-dom'

// import { useDispatch } from'react-redux'
// import { addToCart } from '../../redux/features/cart/cartSlice'

// const BookCard = ({book}) => {
//     const dispatch =  useDispatch();

//     const handleAddToCart = (product) => {
//         dispatch(addToCart(product))
//     }
//     return (
//         <div className=" rounded-lg transition-shadow duration-300">
//             <div
//                 className="flex flex-col sm:flex-row sm:items-center sm:h-72  sm:justify-center gap-4"
//             >
//                 <div className="sm:h-72 sm:flex-shrink-0 border rounded-md">
//                     <Link to={`/books/${book._id}`}>
//                         <img
//                             src={`${getImgUrl(book?.coverImage)}`}
//                             alt=""
//                             className="w-full bg-cover p-2 rounded-md cursor-pointer hover:scale-105 transition-all duration-200"
//                         />
//                     </Link>
//                 </div>

//                 <div>
//                     <Link to={`/books/${book._id}`}>
//                         <h3 className="text-xl font-semibold hover:text-blue-600 mb-3">
//                        {book?.title}
//                         </h3>
//                     </Link>
//                     <p className="text-gray-600 mb-5">{book?.description.length > 80 ? `${book.description.slice(0, 80)}...` : book?.description}</p>
//                     <p className="font-medium mb-5">
//                         ${book?.newPrice} <span className="line-through font-normal ml-2">$ {book?.oldPrice}</span>
//                     </p>
//                     <button 
//                     onClick={() => handleAddToCart(book)}
//                     className="btn-primary px-6 space-x-1 flex items-center gap-1 ">
//                         <FiShoppingCart className="" />
//                         <span>Add to Cart</span>
//                     </button>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default BookCard


// import React from 'react'
// import { FiShoppingCart } from 'react-icons/fi'
// import { getImgUrl } from '../../utils/getImgUrl'
// import { Link } from 'react-router-dom'
// import { useDispatch } from 'react-redux'
// import { addToCart } from '../../redux/features/cart/cartSlice'

// const BookCard = ({ book }) => {
//     const dispatch = useDispatch();

//     const handleAddToCart = (product) => {
//         dispatch(addToCart(product))
//     }

//     return (
//         <div className="flex flex-col h-full p-4 shadow-md hover:shadow-xl transition">

//             <div className="flex flex-col sm:flex-row gap-4 h-full shadow-md">

//                 {/* IMAGE */}
//                 <div className="sm:w-40 flex-shrink-0 border rounded-md">
//                     <Link to={`/books/${book._id}`}>
//                         <img
//                             src={`${getImgUrl(book?.coverImage)}`}
//                             alt=""
//                             className="w-full h-48 object-contain p-2 rounded-md hover:scale-105 transition-all duration-200"
//                         />
//                     </Link>
//                 </div>

//                 {/* CONTENT */}
//                 <div className="flex flex-col flex-grow">

//                     <Link to={`/books/${book._id}`}>
//                         <h3 className="text-lg font-semibold hover:text-blue-600 mb-2 line-clamp-2">
//                             {book?.title}
//                         </h3>
//                     </Link>

//                     <p className="text-gray-600 mb-3 text-sm line-clamp-3">
//                         {book?.description}
//                     </p>

//                     <p className="font-medium mb-3">
//                         ${book?.newPrice}
//                         <span className="line-through font-normal ml-2">
//                             $ {book?.oldPrice}
//                         </span>
//                     </p>

//                     {/* ✅ BUTTON ALWAYS SAME */}
//                     <button
//                         onClick={() => handleAddToCart(book)}
//                         className="btn-primary px-4 py-2 flex items-center justify-center gap-2 mt-auto"
//                     >
//                         <FiShoppingCart />
//                         <span>Add to Cart</span>
//                     </button>

//                 </div>
//             </div>
//         </div>
//     )
// }

// export default BookCard


import React from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import { getImgUrl } from '../../utils/getImgUrl'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/features/cart/cartSlice'

const BookCard = ({ book }) => {
    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
    }

    return (
        <div className=" bg-gray-900 rounded-xl border border-gray-800 flex flex-col h-full p-4 bg-gray-900 rounded-xl border border-gray-800 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">

            <div className="flex flex-col sm:flex-row gap-4 h-full ">

                {/* IMAGE */}
                <div className="sm:w-40 flex-shrink-0 bg-gray-800 rounded-lg border border-gray-700">
                    <Link to={`/books/${book._id}`}>
                        <img
                            src={`${getImgUrl(book?.coverImage)}`}
                            alt=""
                            className="w-full h-48 object-contain p-2 rounded-lg hover:scale-105 transition duration-300"
                        />
                    </Link>
                </div>

                {/* CONTENT */}
                <div className="flex flex-col flex-grow  ">

                    <Link to={`/books/${book._id}`}>
                        <h3 className="text-lg font-semibold text-gray-100 hover:text-blue-400 mb-2 line-clamp-2 transition">
                            {book?.title}
                        </h3>
                    </Link>

                    <p className="text-gray-400 mb-3 text-sm line-clamp-3">
                        {book?.description}
                    </p>

                    <p className="font-medium text-gray-200 mb-3">
                        <span className="text-blue-400 font-semibold">
                            ${book?.newPrice}
                        </span>
                        <span className="line-through text-gray-500 font-normal ml-2">
                            ${book?.oldPrice}
                        </span>
                    </p>

                    {/* BUTTON */}
                    <button
                        onClick={() => handleAddToCart(book)}
                        className="mt-auto flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-blue-900 hover:bg-blue-500 text-white font-medium shadow-md hover:shadow-lg transition-all duration-300"
                    >
                        <FiShoppingCart />
                        <span>Add to Cart</span>
                    </button>

                </div>
            </div>
        </div>
    )
}

export default BookCard