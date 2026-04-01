// import React, { useEffect, useState } from 'react'
// import BookCard from '../books/BookCard';

// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // import required modules
// import { Pagination, Navigation } from 'swiper/modules';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import { useFetchAllBooksQuery } from '../../redux/features/books/booksApi';

// const categories = ["Choose a genre", "Business", "Fiction", "Horror", "Adventure"]

// const TopSellers = () => {
    
//     const [selectedCategory, setSelectedCategory] = useState("Choose a genre");

//    const {data: books = []} = useFetchAllBooksQuery();
  
//     const filteredBooks = selectedCategory === "Choose a genre" ? books : books.filter(book => book.category === selectedCategory.toLowerCase())

//     return (
//         <div className='py-10'>
//             <h2 className='text-3xl font-semibold mb-6'>Top Sellers</h2>
//             {/* category filtering */}
//             <div className='mb-8 flex items-center'>
//                 <select
//                     onChange={(e) => setSelectedCategory(e.target.value)}
//      name="category" id="category" className='border bg-[#E0E0EA] border-gray-700 rounded-md px-4 py-2 focus:outline-none'>
//                     {
//                         categories.map((category, index) => (
//                             <option key={index} value={category}>{category}</option>
//                         ))
//                     }
//                 </select>
//             </div>

//             <Swiper
//                 slidesPerView={1}
//                 spaceBetween={30}
//                 navigation={true}
//                 breakpoints={{
//                     640: {
//                         slidesPerView: 1,  spaceBetween: 20,
//                     },
//                     768: {
//                         slidesPerView: 2, spaceBetween: 40,
//                     },
//                     1024: {
//                         slidesPerView: 2, spaceBetween: 50,
//                     },
//                     1180: {
//                         slidesPerView: 3, spaceBetween: 50,
//                     }
//                 }}
//                 modules={[Pagination, Navigation]}
//                 className="mySwiper"   > {
//                    filteredBooks.length > 0 && filteredBooks.map((book, index) => (
//                         <SwiperSlide key={index}  className='p-2'>
//                             <div className='w-full h-full border border-black rounded-lg p-2'>
//                             <BookCard  book={book} />
//                             </div>
//                         </SwiperSlide>
//                     )) }
//             </Swiper>


//         </div>
//     )
// }

// export default TopSellers

// import React, { useState } from 'react'
// import BookCard from '../books/BookCard';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination, Navigation } from 'swiper/modules';

// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// import { useFetchAllBooksQuery } from '../../redux/features/books/booksApi';

// const categories = ["Choose a genre", "Business", "Fiction", "Horror", "Adventure"]

// const TopSellers = () => {

//   const [selectedCategory, setSelectedCategory] = useState("Choose a genre");

//   const { data: books = [] } = useFetchAllBooksQuery();

//   const filteredBooks =
//     selectedCategory === "Choose a genre"
//       ? books
//       : books.filter(book => book.category === selectedCategory.toLowerCase())

//   return (
//     <div className='py-10'>

//       <h2 className='text-3xl font-semibold mb-6'>Top Sellers</h2>

//       <div className='mb-8 flex items-center'>
//         <select
//           onChange={(e) => setSelectedCategory(e.target.value)}
//           className='border bg-[#E0E0EA] border-gray-700 rounded-md px-4 py-2 focus:outline-none'
//         >
//           {
//             categories.map((category, index) => (
//               <option key={index} value={category}>{category}</option>
//             ))
//           }
//         </select>
//       </div>

//       <Swiper
//         slidesPerView={1}
//         spaceBetween={30}
//         navigation={true}
//         breakpoints={{
//           640: { slidesPerView: 1, spaceBetween: 20 },
//           768: { slidesPerView: 2, spaceBetween: 40 },
//           1024: { slidesPerView: 2, spaceBetween: 50 },
//           1180: { slidesPerView: 3, spaceBetween: 50 }
//         }}
//         modules={[Pagination, Navigation]}
//         className="mySwiper"
//       >

//         {
//           filteredBooks.length > 0 &&
//           filteredBooks.map((book, index) => (

//             <SwiperSlide key={index} className="flex h-auto">

//               {/* ✅ FULL HEIGHT CARD */}
//               <div className="border border-gray-700  bg-gray-100 rounded-lg overflow-hidden flex flex-col w-full h-full ">

//                 <BookCard book={book} />

//               </div>

//             </SwiperSlide>
//           ))
//         }

//       </Swiper>

//     </div>
//   )
// }

// export default TopSellers


import React, { useState } from 'react'
import BookCard from '../books/BookCard';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { useFetchAllBooksQuery } from '../../redux/features/books/booksApi';

const categories = ["Choose a genre", "Business", "Fiction", "Horror", "Adventure"]

const TopSellers = () => {

  const [selectedCategory, setSelectedCategory] = useState("Choose a genre");

  const { data: books = [] } = useFetchAllBooksQuery();

  const filteredBooks =
    selectedCategory === "Choose a genre"
      ? books
      : books.filter(book => book.category === selectedCategory.toLowerCase())

  return (
    <div className='py-10 bg-gray-950'>

      {/* TITLE */}
      <h2 className='text-3xl font-semibold mb-6 text-gray-100'>
        Top Sellers
      </h2>

      {/* SELECT */}
      <div className='mb-8 flex items-center'>
        <select
          onChange={(e) => setSelectedCategory(e.target.value)}
          className='border border-gray-700 bg-gray-900 text-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition'
        >
          {
            categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))
          }
        </select>
      </div>

      {/* SWIPER */}
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 40 },
          1024: { slidesPerView: 2, spaceBetween: 50 },
          1180: { slidesPerView: 3, spaceBetween: 50 }
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >

        {
          filteredBooks.length > 0 &&
          filteredBooks.map((book, index) => (

            <SwiperSlide key={index} className="flex h-auto bg-transparent">

              {/* DARK CARD WRAPPER */}
              <div className="w-full h-full flex bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:shadow-2xl transition">

                <BookCard book={book} />

              </div>

            </SwiperSlide>
          ))
        }

      </Swiper>

    </div>
  )
}

export default TopSellers