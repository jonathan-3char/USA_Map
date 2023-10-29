"use client"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navigation = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <nav className="flex w-full justify-between bg-[#484b6a] px-4 py-2 dark:bg-zinc-800">
      <div className=" flex font-bold text-[#E4E4D0]">Learn US States</div>
      <div className="flex  justify-center items-center">
        <div className="font-bold px-4 dark:text-white">
            <Link 
            href="https://github.com/jonathan-3char"
            >
            GitHub Profile
            </Link>   
        </div>
        <div>
        <div 
        className="hover:cursor-pointer"
        onClick={() => { 
          if (darkMode) {
            document.documentElement.classList.remove('dark');
            setDarkMode(false);
          } else {
            setDarkMode(true);
          document.documentElement.classList.add('dark');
          }
          }
          }>
          <Image
            src="assets/moon.svg"
            width="30"
            height="30"
            alt="dark mode switch"
            className="w-8 h-8"
          />
        </div>
        </div>
        <Link href="/about" className="p-3">
          <Image
            src="assets/question.svg"
            width="30"
            height="30"
            className="w-8 h-8"
            alt="link to how to play page"
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
