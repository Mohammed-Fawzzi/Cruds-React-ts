import React from "react";
import { useDarkMode } from "@/contexts/Theme.tsx";
import { FaMoon } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";

export default function DarkModeToggler() {
  const { darkMode, setDarkMode } = useDarkMode();

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="text-xl p-2 rounded-full transition-colors duration-300
      bg-gray-200 dark:bg-white text-[#121212]
      hover:bg-gray-200 dark:hover:bg-gray-100 cursor-pointer"
    >
      {darkMode ? <FaMoon /> : <IoSunny />}
    </button>
  );
}
