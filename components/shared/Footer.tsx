import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <div className="w-full h-20 bg-[#2d2e32] flex items-center justify-center gap-40">
      <span className="font-bold text-neutral-100">
        COPYRIGHT © ARMAND 2023. ALL RIGHTS RESERVED
      </span>
      <div className="flex gap-4">
        <Link href="https://www.linkedin.com/in/armand-abdullah-370891215/">
          <Linkedin className="h-8 w-8 bg-white rounded-lg text-black drop-shadow-lg"/>
          </Link>
        <Link href="https://github.com/Ar1005">
        <Github className="h-8 w-8 bg-white rounded-lg text-black drop-shadow-lg"/>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
