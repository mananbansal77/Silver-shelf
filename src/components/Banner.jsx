import React from "react";
import BannerImg from "../assets/women/women2.jpg";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const Banner = () => {
  return (
    <div
      className="py-20
        bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500
        dark:from-gray-800 dark:via-gray-900 dark:to-black
        transition-all duration-500"
    >
      {/* Decorative background glow */}
      {/* <div className="absolute w-[700px] h-[700px] bg-gradient-to-tr from-gray-400 via-gray-500 to-gray-600 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 rounded-full blur-3xl opacity-40 -z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div> */}

      <div className="container relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-center">
          {/* Image Section */}
          <div data-aos="zoom-in" className="flex justify-center">
            <div className="relative group">
              <img
                src={BannerImg}
                alt="Winter Sale"
                className="max-w-[420px] h-[360px] w-full mx-auto object-cover rounded-2xl 
                  shadow-xl group-hover:scale-105 transition-transform duration-500"
              />
              {/* Glass overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-white/10 rounded-2xl pointer-events-none"></div>
            </div>
          </div>

          {/* Text Details Section */}
          <div className="flex flex-col justify-center gap-6 sm:pt-0 text-center sm:text-left">
            <h1
              data-aos="fade-up"
              className="text-4xl sm:text-5xl font-extrabold 
                bg-gradient-to-r from-gray-700 via-gray-600 to-gray-800
                py-2 hover:shadow-xl
                dark:from-gray-200 dark:via-gray-400 dark:to-gray-500
                text-transparent bg-clip-text"
            >
              Winter Sale upto 50% Off
            </h1>
            <p
              data-aos="fade-up"
              className="text-base sm:text-lg text-gray-800 dark:text-gray-500 leading-relaxed max-w-md mx-auto sm:mx-0"
            >
              Discover premium quality fashion at unbeatable prices. Shop now
              and experience comfort, style, and elegance like never before.
            </p>

            <div className="flex flex-col gap-5 sm:gap-4">
              {/* Feature Items */}
              {[
                {
                  icon: GrSecure,
                  text: "Quality Products",
                },
                {
                  icon: IoFastFood,
                  text: "Fast Delivery",
                },
                {
                  icon: GiFoodTruck,
                  text: "Easy Payment",
                },
                {
                  icon: GiFoodTruck,
                  text: "Exclusive Offers",
                },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    data-aos="fade-up"
                    key={idx}
                    className="flex items-center gap-4"
                  >
                    <Icon
                      className="text-4xl h-12 w-12 p-3 rounded-xl shadow-md 
                      bg-gradient-to-br from-g-300 via-gray-400 to-gray-500
                      hover:text-primary
                      dark:from-gray-800 dark:via-gray-900 dark:to-black text-white"
                    />
                    <p className="font-medium dark:text-gray-400 text-gray-800  hover:text-primary sm:text-2xl dark:hover:text-primary sm:text-2xl">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
