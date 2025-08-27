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
  {
    id: 1,
    name: "Trending Products",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#",
  },
];

const Navbar = () => {
  return (
    <div className="bg-emerald-200 dark:bg-emerald-600 dark:text-white duration-200 relative z-40">
      {/* upper navbar */}
      <div className="hover:shadow-2xl dark:hover:shadow-2xl bg-gray-400 dark:bg-gray-800 drop-shadow-[0_0_6px_#9ca3af] py-2">
        <div className="container flex justify-between items-center">
          {/* logo */}
          <div>
            <a
              href="#"
              className="font-bold text-2xl sm:text-3xl flex gap-2 items-center"
            >
              {/* Light mode logo */}
              <img
                className="w-12 h-12 uppercase block dark:hidden hover:shadow-xl"
                src={Logo}
                alt="Logo"
              />
              {/* Dark mode logo */}
              <img
                className="w-12 h-12 uppercase hidden dark:block hover:shadow-xl"
                src={Logodark}
                alt="Logo Dark"
              />
              <p className="mt-1 font-spectral text-gray-900 dark:text-white text-4xl dark:hover:text-primary/80 hover:text-primary/80">
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
              border border-gray-300 
              px-2 py-1 
              focus:outline-none 
              focus:border-2 focus:border-black dark:focus:border-white
              hover:border-4 hover:border-gray-500 dark:hover:border-gray-300
              bg-white dark:bg-gray-100 dark:text-white"
            />
            <IoMdSearch className="text-gray-700 dark:text-black group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3 transition-colors" />
          </div>

          {/* order button */}
          <button
            onClick={() => alert("ordering not available yet")}
            className="ml-4 px-4 py-2 rounded-full bg-gray-200 text-black hover:text-primary/80 transition"
          >
            <FaCartShopping />
          </button>

          {/* Darkmode Switch */}
          <div>
            <Darkmode />
          </div>
        </div>
      </div>

      {/* lower navbar */}
      <div className="flex justify-center bg-transparent py-2">
        <ul className="sm:flex hidden items-center gap-6">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block px-4 text-lg font-medium font-lobster hover:text-primary/80"
              >
                {data.name}
              </a>
            </li>
          ))}

          {/* Dropdown */}
          <li className="group relative cursor-pointer">
            <a href="#" className="inline-flex items-center px-4 group">
              <p className="inline-block px-4 text-lg font-medium font-lobster hover:text-primary/80">
                Trending
              </p>
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>

            {/* Dropdown Menu */}
            <div
              className="absolute top-full left-0 z-[9999] hidden group-hover:block 
              w-[180px] rounded-xl bg-white text-black shadow-lg border border-gray-200 
              animate-fadeIn"
            >
              <ul className="flex flex-col py-2">
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="block px-4 py-2 text-sm font-medium font-lobster 
                      hover:bg-emerald-100 hover:text-emerald-700 rounded-md transition"
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
