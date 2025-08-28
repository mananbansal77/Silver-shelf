import React from "react";

const Subscribe = () => {
  return (
    <div
      data-aos="zoom-in"
      className="py-16
        bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500
        dark:from-gray-800 dark:via-gray-900 dark:to-black
        transition-all duration-500 text-gray-900 dark:text-gray-100"
    >
      <div className="container backdrop-blur-sm py-10">
        <div className="space-y-6 max-w-xl mx-auto text-center sm:text-left">
          <h1
            className=" ml-10 py-2 text-2xl sm:text-4xl font-semibold font-lobster bg-clip-text text-transparent 
            bg-gradient-to-r from-gray-700 via-gray-600 to-gray-800
            dark:from-gray-200 dark:via-gray-400 dark:to-gray-500
            "
          >
            Get Notified About New Products
          </h1>
          <input
            data-aos="fade-up"
            type="text"
            placeholder="Enter your email"
            className="w-full p-3 rounded-full border border-gray-400/50 
              focus:outline-none focus:border-2 focus:border-gray-500
              dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600"
          />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
