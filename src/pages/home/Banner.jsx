
// import React, { useState, useEffect } from 'react';
// import book1 from "../../assets/books/book-1.png";
// import book2 from "../../assets/books/book-2.png";
// import book3 from "../../assets/books/book-3.png";
// import book4 from "../../assets/books/book-4.png";
// import book5 from "../../assets/books/book-5.png";
// import book6 from "../../assets/books/book-6.png";

// const Banner = () => {
//   const banners = [book1, book2, book3,book4,book5,book6];
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % banners.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="flex flex-col md:flex-row-reverse items-center gap-12 py-16 bg-gray-300">
      
//       {/* Carousel Section */}
//       <div className="md:w-1/2 w-full flex justify-center items-center relative h-[380px]">
//         {banners.map((img, index) => {
//           let position = "scale-75 opacity-50 z-0"; // default: side image
//           if(index === currentIndex) position = "scale-100 opacity-100 z-10"; // center image
//           else if(index === (currentIndex - 1 + banners.length) % banners.length || index === (currentIndex + 1) % banners.length) position = "scale-85 opacity-70 z-5";

//           return (
//             <img
//               key={index}
//               src={img}
//               alt=""
//               className={`absolute w-3/4 md:w-4/5 max-h-[350px] object-contain transition-all duration-500 ${position}`}
//             />
//           )
//         })}
//       </div>

//       {/* Text Section */}
//       <div className="md:w-1/2 w-full">
//         <h1 className="md:text-5xl text-2xl font-medium mb-7">New Releases This Week</h1>
//         <p className="mb-10">
//          It's time to update your reading list with some of the latest and greatest releases in the literary world. From heart-pumping thrillers to captivating memoirs, this week's new releases offer something for everyone
//         </p>
//         <button className="btn-primary">Subscribe</button>
//       </div>

//     </div>
//   );
// }

// export default Banner;



import React, { useState, useEffect } from 'react';
import book1 from "../../assets/books/book-1.png";
import book2 from "../../assets/books/book-2.png";
import book3 from "../../assets/books/book-3.png";
import book4 from "../../assets/books/book-4.png";
import book5 from "../../assets/books/book-5.png";
import book6 from "../../assets/books/book-6.png";

const Banner = () => {
  const banners = [book1, book2, book3, book4, book5, book6];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col md:flex-row-reverse items-center gap-12 py-16 bg-gradient-to-br from-gray-950 via-gray-900 to-black">

      {/* Carousel */}
      <div className="md:w-1/2 w-full flex justify-center items-center relative h-[380px]">

        {banners.map((img, index) => {
          let position = "scale-75 opacity-40 z-0 blur-[1px]";
          
          if (index === currentIndex) {
            position = "scale-105 opacity-100 z-20";
          } 
          else if (
            index === (currentIndex - 1 + banners.length) % banners.length ||
            index === (currentIndex + 1) % banners.length
          ) {
            position = "scale-90 opacity-70 z-10";
          }

          return (
            <img
              key={index}
              src={img}
              alt=""
              className={`absolute w-3/4 md:w-4/5 max-h-[350px] object-contain transition-all duration-500 ${position}`}
            />
          )
        })}

      </div>

      {/* Text */}
      <div className="md:w-1/2 w-full">

        <h1 className="mx-3 md:text-5xl text-3xl font-semibold mb-6 text-white leading-tight">
          New Releases This Week
        </h1>

        <p className="mb-10 text-gray-400 mx-3">
          It's time to update your reading list with some of the latest and greatest releases in the literary world. From heart-pumping thrillers to captivating memoirs, this week's new releases offer something for everyone
        </p>

       <button className="bg-blue-500 text-white px-10 mx-3 py-3 rounded-lg shadow-lg transition-all duration-300
                   hover:bg-blue-600 hover:shadow-[0_0_20px_3px_rgba(59,130,246,0.6)] hover:scale-105">
  Subscribe
</button>

      </div>

    </div>
  );
}

export default Banner;