import React from "react";
import Img1 from "../assets/women/women.png";
import Img2 from "../assets/women/women2.jpg";
import Img3 from "../assets/women/women3.jpg";
import Img4 from "../assets/women/women4.jpg";
import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Women Ethnic",
    rating: 5.0,
    color: "White",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Women Western",
    rating: 4.5,
    color: "Red",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Goggles",
    rating: 4.7,
    color: "Brown",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Printed T-Shirt",
    rating: 4.4,
    color: "Yellow",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img2,
    title: "Fashion T-Shirt",
    rating: 4.5,
    color: "Pink",
    aosDelay: "800",
  },
];

const Products = () => {
  return (
    <div
      className=" 
        bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500
        dark:from-gray-800 dark:via-gray-900 dark:to-black
        py-16 transition-all duration-500"
    >
      <div className="container">
        {/* Header section */}
        <div className="relative text-center mb-16 max-w-[700px] mx-auto">
          <div
            className="absolute inset-0 -z-10 
            bg-gradient-to-r from-gray-400/30 via-gray-500/30 to-gray-400/30
            dark:from-gray-700/40 dark:via-gray-800/40 dark:to-gray-700/40
            rounded-3xl blur-3xl opacity-60"
          ></div>

          <p
            data-aos="fade-up"
            className="sm:text-2xl  font-semibold 
            text-white dark:text-white 
            uppercase tracking-wide"
          >
            Top Selling Products For You
          </p>

          <h1
            data-aos="fade-up"
            className="py-3 text-4xl sm:text-5xl font-extrabold 
            bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800
            dark:from-gray-200 dark:via-gray-400 dark:to-gray-500
            bg-clip-text text-transparent drop-shadow-lg"
          >
            Our Trending Collection
          </h1>

          <p
            data-aos="fade-up"
            className="mt-2 sm:text-2xl  sm:text-base 
            text-gray-100 dark:text-gray-300"
          >
            Explore the latest arrivals that blend comfort, style, and elegance
            – curated just for you.
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-6">
          {ProductsData.map((data) => (
            <div
              data-aos="fade-up"
              data-aos-delay={data.aosDelay}
              key={data.id}
              className="space-y-3 p-4 rounded-xl shadow-lg
                bg-gradient-to-br from-gray-300 via-gray-400 to-gray-500
                dark:from-gray-800 dark:via-gray-900 dark:to-black
                hover:scale-105 transition-transform duration-300"
            >
              <img
                src={data.img}
                alt={data.title}
                className="h-[220px] w-[150px] object-cover rounded-md mx-auto"
              />
              <div className="text-center">
                <h3 className="font-semibold text-white dark:text-white">
                  {data.title}
                </h3>
                <p className="text-sm text-gray-100 dark:text-gray-300">
                  {data.color}
                </p>
                <div className="flex items-center justify-center gap-1">
                  <FaStar className="text-yellow-400" />
                  <span className="text-white dark:text-white">
                    {data.rating}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
