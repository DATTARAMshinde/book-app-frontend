// import React from 'react'
// import { FiShoppingCart } from "react-icons/fi"
// import { useParams } from "react-router-dom"

// import { getImgUrl } from '../../utils/getImgUrl';
// import { useDispatch } from 'react-redux';
// import { addToCart } from '../../redux/features/cart/cartSlice';
// import { useFetchBookByIdQuery } from '../../redux/features/books/booksApi';

// const SingleBook = () => {
//     const {id} = useParams();
//     const {data: book, isLoading, isError} = useFetchBookByIdQuery(id);

//     const dispatch =  useDispatch();

//     const handleAddToCart = (product) => {
//         dispatch(addToCart(product))
//     }

//     if(isLoading) return <div>Loading...</div>
//     if(isError) return <div>Error happending to load book info</div>
//   return (
//     <div className="max-w-lg shadow-md p-5">
//             <h1 className="text-2xl font-bold mb-6">{book.title}</h1>

//             <div className=''>
//                 <div>
//                     <img
//                         src={`${getImgUrl(book.coverImage)}`}
//                         alt={book.title}
//                         className="mb-8"
//                     />
//                 </div>

//                 <div className='mb-5'>
//                     <p className="text-gray-700 mb-2"><strong>Author:</strong> {book.author || 'admin'}</p>
//                     <p className="text-gray-700 mb-4">
//                         <strong>Published:</strong> {new Date(book?.createdAt).toLocaleDateString()}
//                     </p>
//                     <p className="text-gray-700 mb-4 capitalize">
//                         <strong>Category:</strong> {book?.category}
//                     </p>
//                     <p className="text-gray-700"><strong>Description:</strong> {book.description}</p>
//                 </div>

//                 <button onClick={() => handleAddToCart(book)} className="btn-primary px-6 space-x-1 flex items-center gap-1 ">
//                     <FiShoppingCart className="" />
//                     <span>Add to Cart</span>

//                 </button>
//             </div>
//         </div>
//   )
// }

// export default SingleBook





import React from 'react'
import { FiShoppingCart } from "react-icons/fi"
import { useParams } from "react-router-dom"

import { getImgUrl } from '../../utils/getImgUrl';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/features/cart/cartSlice';
import { useFetchBookByIdQuery } from '../../redux/features/books/booksApi';

const SingleBook = () => {

    const { id } = useParams();
    const { data: book, isLoading, isError } = useFetchBookByIdQuery(id);

    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
    }

    if (isLoading)
        return <div className="text-center mt-10 text-gray-400">Loading...</div>

    if (isError)
        return <div className="text-center mt-10 text-red-400">Error loading book info</div>

    return (
        <div className="min-h-screen bg-gray-950 text-gray-200 flex items-center justify-center px-4 py-12">

            <div className="max-w-5xl w-full bg-gray-900 border border-gray-800 rounded-xl shadow-xl p-8 grid md:grid-cols-2 gap-10">

                {/* IMAGE */}
                <div className="flex justify-center items-center">
                    <img
                        src={getImgUrl(book.coverImage)}
                        alt={book.title}
                        className="rounded-lg shadow-lg max-h-[400px] object-cover hover:scale-105 transition"
                    />
                </div>

                {/* DETAILS */}
                <div className="flex flex-col justify-between">

                    <div>

                        <h1 className="text-3xl font-semibold mb-4 text-gray-100">
                            {book.title}
                        </h1>

                        <p className="text-gray-400 mb-2">
                            <span className="font-medium text-gray-300">Author:</span> {book.author || 'Admin'}
                        </p>

                        <p className="text-gray-400 mb-2">
                            <span className="font-medium text-gray-300">Published:</span>{" "}
                            {new Date(book?.createdAt).toLocaleDateString()}
                        </p>

                        <p className="text-gray-400 mb-4 capitalize">
                            <span className="font-medium text-gray-300">Category:</span> {book.category}
                        </p>

                        <p className="text-gray-400 leading-relaxed">
                            <span className="font-medium text-gray-300">Description:</span> {book.description}
                        </p>

                    </div>

                    {/* BUTTON */}
                    <button
                        onClick={() => handleAddToCart(book)}
                        className="mt-6 flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-md shadow-md hover:shadow-lg transition"
                    >
                        <FiShoppingCart />
                        Add to Cart
                    </button>

                </div>

            </div>

        </div>
    )
}

export default SingleBook