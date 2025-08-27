import React, { useState } from "react";
import { MdLightMode, MdOutlineLightMode } from "react-icons/md";

const Darkmode = () => {
  const [darkMode, setDarkMode] = useState(false);

  //   // Load saved theme from localStorage (if any)
  //   useEffect(() => {
  //     if (localStorage.theme === "dark") {
  //       setDarkMode(true);
  //       document.documentElement.classList.add("dark");
  //     } else {
  //       setDarkMode(false);
  //       document.documentElement.classList.remove("dark");
  //     }
  //   }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      setDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
    >
      {darkMode ? (
        <MdLightMode className="text-yellow-500 text-2xl" />
      ) : (
        <MdOutlineLightMode className="text-gray-700 dark:text-gray-300 text-2xl" />
      )}
    </button>
  );
};

export default Darkmode;
