// import React, { useEffect, useState } from 'react'
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // import required modules
// import { Pagination, Navigation } from 'swiper/modules';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import BookCard from '../books/BookCard';
// import { useFetchAllBooksQuery } from '../../redux/features/books/booksApi';


// const Recommened = () => {
   

//     const {data: books = []} = useFetchAllBooksQuery();
//   return (
//     <div className='py-16'>
//          <h2 className='text-3xl font-semibold mb-6'>Recommended for you </h2>


//          <Swiper
//                 slidesPerView={1}
//                 spaceBetween={30}
//                 navigation={true}
//                 breakpoints={{
//                     640: {
//                         slidesPerView: 1,
//                         spaceBetween: 20,
//                     },
//                     768: {
//                         slidesPerView: 2,
//                         spaceBetween: 40,
//                     },
//                     1024: {
//                         slidesPerView: 2,
//                         spaceBetween: 50,
//                     },
//                     1180: {
//                         slidesPerView: 3,
//                         spaceBetween: 50,
//                     }
//                 }}
//                 modules={[Pagination, Navigation]}
//                 className="mySwiper"
//             >

//                 {
//                    books.length > 0 && books.slice(8, 18).map((book, index) => (
//                         <SwiperSlide key={index}>
//                             <BookCard  book={book} />
//                         </SwiperSlide>
//                     ))
//                 }



//             </Swiper>
//     </div>
//   )
// }

// export default Recommened



// import React from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react'
// import { Pagination, Navigation } from 'swiper/modules'

// import 'swiper/css'
// import 'swiper/css/pagination'
// import 'swiper/css/navigation'

// import BookCard from '../books/BookCard'
// import { useFetchAllBooksQuery } from '../../redux/features/books/booksApi'

// const Recommended = () => {

//   const { data: books = [] } = useFetchAllBooksQuery()

//   return (
//     <div className='py-16'>

//       <h2 className='text-3xl font-semibold mb-6 text-gray-800'>
//         Recommended for you
//       </h2>

//       <Swiper
//         slidesPerView={1}
//         spaceBetween={20}
//         navigation={true}
//         breakpoints={{
//           640: { slidesPerView: 1 },
//           768: { slidesPerView: 2 },
//           1024: { slidesPerView: 2 },
//           1180: { slidesPerView: 3 }
//         }}
//         modules={[Pagination, Navigation]}
//       >

//         {books.slice(8, 18).map((book, index) => (
//           <SwiperSlide key={index} className="flex h-auto">

//             <div className="w-full h-full flex">
//               <BookCard book={book} />
//             </div>

//           </SwiperSlide>
//         ))}

//       </Swiper>
//     </div>
//   )
// }

// export default Recommended




import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import BookCard from '../books/BookCard'
import { useFetchAllBooksQuery } from '../../redux/features/books/booksApi'

const Recommended = () => {

  const { data: books = [] } = useFetchAllBooksQuery()

  return (
    <div className='py-16 bg-gray-950'>

      {/* TITLE */}
      <h2 className='text-3xl font-semibold mb-6 text-gray-100'>
        Recommended for you
      </h2>

      {/* SWIPER */}
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        navigation={true}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 2 },
          1180: { slidesPerView: 3 }
        }}
        modules={[Pagination, Navigation]}
        className="!pb-4"
      >

        {books.slice(8, 18).map((book, index) => (
          <SwiperSlide key={index} className="flex h-auto bg-transparent">

            {/* CARD WRAPPER */}
            <div className="w-full h-full flex">
              <BookCard book={book} />
            </div>

          </SwiperSlide>
        ))}

      </Swiper>

    </div>
  )
}

export default Recommended