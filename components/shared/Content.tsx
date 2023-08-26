import Image from "next/image";
import React from "react";
import { Separator } from "@/components/ui/separator";
import AppsUsed from "./AppsUsed";
import Link from "next/link";

const Content = () => {
  return (
    <div className="relative flex flex-col min-h-screen w-full flex items-center justify-center">
      <div className='absolute inset-0 bg-[url("/background.jpg")] bg-cover bg-center'></div>
      <div className="flex items-center z-10">
        <div className="flex flex-col font-semibold text-5xl text-blue-600 justify-center">
          Kenneth Arman Castillo
          <span className="text-xl font-normal text-blue-600">
            CREATIVE SPECIALIST
          </span>
          <Separator className="my-6" />
          <div className="text-lg font-normal flex flex-col items-center">
            <span className="">
              I'm Kenneth Arman Castillo, a Manila-based creative specialist
              with expertise in
            </span>
            <span>
              Adobe Photoshop, Adobe After Effects, and Adobe Animate. I excel
              in delivering
            </span>
            <span>
              {" "}
              high-quality designs and animations that exceed client
              expectations. Committed
            </span>
            <span>
              to continuous improvement, I actively seek opportunities to
              enhance my skillset
            </span>
            <span>through collaboration and learning.</span>
          </div>
        </div>
        <Image
          src="/sample_1.png"
          alt="Profile"
          width={1000}
          height={1000}
          className="ml-20 mt-20 h-80 w-80 rounded-full"
        />
      </div>
      <Link href="/Contact" className="rounded-tl-0 rounded-tr-[20px] rounded-br-0 rounded-bl-[20px] bg-blue-600 text-white px-4 py-4 z-10 hover:bg-blue-700 transition duration-200 drop-shadow-sm" >
        <span className="text-xl font-bold">GET TO KNOW ME MORE</span>
      </Link>
      <AppsUsed />
    </div>
  );
};

export default Content;
