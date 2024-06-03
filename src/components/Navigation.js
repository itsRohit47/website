"use client";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { useEffect } from "react";

export default function Nav() {
  const toggleTheme = () => {
    document.body.classList.toggle("dark");
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Shift") {
        toggleTheme();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <header className="flex items-center justify-between px-10 py-4 fixed w-full z-20">
      <div className="flex gap-5 items-center justify-center text-sm text-gray-900 dark:text-white">
        {" "}
        <h1 className="text-2xl font-bold max-w-xl">{"<Rohit/>"}</h1>
        <div className="px-2 py-1 border rounded-lg text-gray-500 dark:text-white border-b-4">
          /
        </div>
      </div>
      <div className="flex gap-5 items-center justify-center text-sm">
        <div className="px-2 py-1 border rounded-lg text-gray-500 dark:text-white border-b-4">
          shift
        </div>
        <div className="relative rotate-45 rounded-full shadow-xl border-b-4 border-yellow-200 dark:border-gray-50 shadow-yellow-200 dark:shadow-gray-200 p-1 transition duration-300">
          <SunIcon className="dark:hidden w-8 h-8 text-yellow-400 bg"></SunIcon>
          <MoonIcon className="hidden dark:block w-8 h-8 text-gray-200 bg"></MoonIcon>
        </div>
      </div>
    </header>
  );
}
