import React from "react";
import Img1 from "../assets/shirt/shirt.png";
import Img2 from "../assets/shirt/shirt2.png";
import Img3 from "../assets/shirt/shirt3.png";
import { FaStar } from "react-icons/fa";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Casual Wear",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: Img2,
    title: "Printed Shirt",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: Img3,
    title: "Women Shirt",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const TopProducts = ({ handleOrderPopup }) => {
  return (
    <div
      className="py-20
        bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500
        dark:from-gray-800 dark:via-gray-900 dark:to-black
        transition-all duration-500"
    >
      <div className="container">
        {/* Header */}
        <div className="text-center mb-24 relative max-w-[700px] mx-auto">
          <div
            className="absolute inset-0 -z-10 
              bg-gradient-to-r from-gray-400/30 via-gray-500/30 to-gray-400/30
              dark:from-gray-700/40 dark:via-gray-800/40 dark:to-gray-700/40
              rounded-3xl blur-3xl opacity-60"
          ></div>

          <p
            data-aos="fade-up"
            className="sm:text-2xl font-semibold text-white dark:text-white uppercase tracking-wide"
          >
            ✨ Top Rated Picks ✨
          </p>

          <h1
            data-aos="fade-up"
            className="py-3 text-4xl sm:text-5xl font-extrabold 
              bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800
              dark:from-gray-200 dark:via-gray-400 dark:to-gray-500
              bg-clip-text text-transparent drop-shadow-lg"
          >
            Best Products
          </h1>

          <p
            data-aos="fade-up"
            className="mt-2 sm:text-base text-gray-100 dark:text-gray-300"
          >
            Discover our premium collection, blending style, comfort, and a
            touch of elegance – just for you.
          </p>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
          {ProductsData.map((data) => (
            <div
              key={data.id}
              data-aos="fade-up"
              className="group relative space-y-3 p-4 rounded-xl
                bg-gradient-to-br from-gray-300 via-gray-400 to-gray-500
                dark:from-gray-800 dark:via-gray-900 dark:to-black
                shadow-lg hover:scale-105 hover:bg-gradient-to-br 
                hover:from-gray-400 hover:via-gray-600 hover:to-gray-800
                transition-transform duration-300"
            >
              <img
                src={data.img}
                alt={data.title}
                className="h-[220px] w-[180px] sm:w-[220px] sm:h-[220px] object-contain mx-auto rounded-md transition-transform duration-300 group-hover:scale-110"
              />

              <div className="text-center">
                <h3 className="font-semibold text-white dark:text-white">
                  {data.title}
                </h3>
                <p className="text-sm text-gray-100 dark:text-gray-300 line-clamp-3">
                  {data.description}
                </p>
                <div className="flex items-center justify-center gap-1 my-2">
                  {[...Array(4)].map((_, i) => (
                    <FaStar
                      key={i}
                      className="text-yellow-400 dark:text-yellow-400"
                    />
                  ))}
                </div>
                <button
                  onClick={handleOrderPopup}
                  className="mt-2 px-6 py-2 rounded-full 
                    bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800
                    text-white font-semibold shadow-md 
                    hover:scale-110 hover:shadow-xl transition duration-300"
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
