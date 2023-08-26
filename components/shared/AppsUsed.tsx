import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AppsUsed = () => {
  return (
    <div className="flex flex-col mt-20 gap-14 items-center z-10">
      <div className="flex items-center">
        <Link href="https://www.adobe.com/products/photoshop.html">
          <Image
            src="/PsV3.png"
            alt="Photoshop"
            width={98}
            height={98}
            className="cursor-pointer opacity-75 hover:opacity-100"
          />
        </Link>
        <Link href="https://www.adobe.com/products/illustrator.html">
          <Image
            src="/Ai.png"
            alt="Photoshop"
            width={140}
            height={140}
            className="cursor-pointer opacity-75 hover:opacity-100"
          />
        </Link>
        <Link href="https://www.adobe.com/products/aftereffects.html">
          <Image
            src="/Ae.png"
            alt="Photoshop"
            width={80}
            height={80}
            className="cursor-pointer opacity-75 hover:opacity-100"
          />
        </Link>
      </div>
      <Separator className="bg-blue-600 p-0.5 rounded-full" />
    </div>
  );
};

export default AppsUsed;
