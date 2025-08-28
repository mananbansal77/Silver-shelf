import React from "react";
import { IoCloseOutline } from "react-icons/io5";

const Popup = ({ orderPopup, setOrderPopup }) => {
  return (
    <>
      {orderPopup && (
        <div className="popup">
          <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
            <div
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 shadow-lg 
              rounded-xl w-[320px] duration-200 
              bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 dark:from-gray-800 dark:via-gray-900 dark:to-black text-gray-900 dark:text-gray-100"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-xl font-bold">Order Now</h1>
                <IoCloseOutline
                  className="text-2xl cursor-pointer hover:text-gray-700 dark:hover:text-gray-300"
                  onClick={() => setOrderPopup(false)}
                />
              </div>

              {/* Form Section */}
              <div className="flex flex-col gap-3">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full rounded-full border border-gray-400 dark:border-gray-600 bg-white/80 dark:bg-gray-800/70 px-3 py-2 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-400"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-full border border-gray-400 dark:border-gray-600 bg-white/80 dark:bg-gray-800/70 px-3 py-2 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-400"
                />
                <input
                  type="text"
                  placeholder="Address"
                  className="w-full rounded-full border border-gray-400 dark:border-gray-600 bg-white/80 dark:bg-gray-800/70 px-3 py-2 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-400"
                />

                <button
                  className="mt-2 w-full py-2 rounded-full text-white 
                  bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 
                  hover:scale-105 transition duration-200 font-semibold"
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
