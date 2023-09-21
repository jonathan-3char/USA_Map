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
            width={30}
            height={50}
            alt="dark mode switch"
            className="fill-slate-200"
          />
        </div>
        </div>
        <Link href="/about" className="p-3">
          <Image
            src="assets/question.svg"
            width={30}
            height={50}
            alt="link to how to play page"
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
