"use client"

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Topbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scroll = `fixed z-10 w-full py-[14px] flex items-center justify-around transition duration-900 ${
    scrolled ? "bg-neutral-100 transform transition translate-y-0" : " drop-shadow transform transition -translate-y-0"
  }`;

  return (
    <div className={scroll}>
      <div>
        <Image
          src="/Logo.png"
          alt="My Logo"
          height={20}
          width={60}
          className="bg-white -py-0.5 h-[50px] w-[50px] rounded-full border border-blue-600 border-2"
        />
      </div>
      <div className="text-neutral-950 flex items-center justify-center gap-8 text-md font-semibold">
        <div>
          <Link href="/Portfolio" className="hover:text-blue-600 transition duration-200">Portfolio</Link>
        </div>
        <div>
          <Link href="/" className="hover:text-blue-600 transition duration-200">Profile</Link>
        </div>
        <div>
          <Link href="/Contact" className="rounded-full border border-blue-600 py-3 px-4 hover:bg-blue-600 hover:text-neutral-100">Contact Me</Link>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
