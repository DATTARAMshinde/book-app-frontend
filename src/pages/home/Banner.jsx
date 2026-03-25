
import React, { useState, useEffect } from 'react';
import book1 from "../../assets/books/book-1.png";
import book2 from "../../assets/books/book-2.png";
import book3 from "../../assets/books/book-3.png";
import book4 from "../../assets/books/book-4.png";
import book5 from "../../assets/books/book-5.png";
import book6 from "../../assets/books/book-6.png";

const Banner = () => {
  const banners = [book1, book2, book3,book4,book5,book6];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col md:flex-row-reverse items-center gap-12 py-16">
      
      {/* Carousel Section */}
      <div className="md:w-1/2 w-full flex justify-center items-center relative h-[380px]">
        {banners.map((img, index) => {
          let position = "scale-75 opacity-50 z-0"; // default: side image
          if(index === currentIndex) position = "scale-100 opacity-100 z-10"; // center image
          else if(index === (currentIndex - 1 + banners.length) % banners.length || index === (currentIndex + 1) % banners.length) position = "scale-85 opacity-70 z-5";

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

      {/* Text Section */}
      <div className="md:w-1/2 w-full">
        <h1 className="md:text-5xl text-2xl font-medium mb-7">New Releases This Week</h1>
        <p className="mb-10">
         It's time to update your reading list with some of the latest and greatest releases in the literary world. From heart-pumping thrillers to captivating memoirs, this week's new releases offer something for everyone
        </p>
        <button className="btn-primary">Subscribe</button>
      </div>

    </div>
  );
}

export default Banner;