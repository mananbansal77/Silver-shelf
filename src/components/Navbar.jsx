import React from "react";
import Logo from "../assets/Logo.png";
import Logodark from "../assets/Logodark.png";
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import Darkmode from "./Darkmode";

const Menu = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Men", link: "/men" },
  { id: 3, name: "Women", link: "/women" },
  { id: 4, name: "Kids", link: "/kids" },
];

const DropdownLinks = [
  { id: 1, name: "Trending Products", link: "/#" },
  { id: 2, name: "Best Selling", link: "/#" },
  { id: 3, name: "Top Rated", link: "/#" },
];

const Navbar = () => {
  return (
    <div className="bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 dark:from-gray-800 dark:via-gray-900 dark:to-black dark:text-white duration-200 relative z-40">
      {/* upper navbar */}
      <div className="hover:shadow-2xl bg-white/60 dark:bg-gray-900/80 backdrop-blur-md py-5">
        <div className="container flex justify-between items-center">
          {/* logo */}
          <div>
            <a
              href="#"
              className="font-bold text-2xl sm:text-3xl flex gap-2 items-center"
            >
              <img
                className="w-12 h-12 uppercase block dark:hidden hover:scale-110 transition"
                src={Logo}
                alt="Logo"
              />
              <img
                className="w-12 h-12 uppercase hidden dark:block hover:scale-110 transition"
                src={Logodark}
                alt="Logo Dark"
              />
              <p className="mt-1 font-spectral text-4xl font-extrabold bg-gradient-to-r from-gray-400 via-gray-600 to-gray-800 dark:from-gray-200 dark:via-gray-400 dark:to-gray-500 bg-clip-text text-transparent">
                Silver Shelf
              </p>
            </a>
          </div>

          {/* search bar */}
          <div className="relative group hidden sm:block">
            <input
              type="text"
              placeholder="Search"
              className="w-[200px] group-hover:w-[300px] 
              transition-all duration-300 
              border border-gray-400/50 
              px-3 py-1.5 rounded-full
              focus:outline-none 
              focus:border-2 focus:border-gray-500 dark:focus:border-gray-300
              bg-white/80 dark:bg-gray-800/70 text-gray-900 dark:text-gray-100"
            />
            <IoMdSearch className="text-gray-600 dark:text-gray-300 group-hover:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 transition-colors" />
          </div>

          {/* order button */}
          <button
            onClick={() => alert("ordering not available yet")}
            className="ml-4 px-4 py-2 rounded-full bg-gradient-to-r from-gray-400 to-gray-600 text-white hover:scale-110 transition shadow-lg"
          >
            <FaCartShopping />
          </button>

          {/* Darkmode Switch */}
          <Darkmode />
        </div>
      </div>

      {/* lower navbar */}
      <div className="flex justify-center bg-transparent py-2">
        <ul className="sm:flex hidden items-center gap-6">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block px-4 text-lg font-medium font-lobster text-white hover:text-gray-200"
              >
                {data.name}
              </a>
            </li>
          ))}

          {/* Dropdown */}
          <li className="group relative cursor-pointer">
            <a href="#" className="inline-flex items-center px-4 group">
              <p className="inline-block px-4 text-lg font-medium font-lobster text-white hover:text-gray-200">
                Trending
              </p>
              <FaCaretDown className="text-white transition-all duration-200 group-hover:rotate-180" />
            </a>

            {/* Dropdown Menu */}
            <div
              className="absolute top-full left-0 z-[9999] hidden group-hover:block 
              w-[180px] rounded-xl bg-white/95 dark:bg-gray-900/95 text-gray-900 dark:text-gray-100 shadow-lg border border-gray-400/50 
              animate-fadeIn"
            >
              <ul className="flex flex-col py-2">
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="block px-4 py-2 text-sm font-medium font-lobster 
                      hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 rounded-md transition"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
