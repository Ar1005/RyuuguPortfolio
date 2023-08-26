import React from "react";
import Request from "./Request";
import CardTouch from "../Cards/CardTouch";

const Contact = () => {
  return (
    <div className="relative flex flex-col min-h-screen w-full flex items-center justify-center">
      <div className="absolute inset-0 bg-[url('/background.jpg')] bg-cover bg-center flex justify-center">
        <div className="flex items-center ">
          <Request />
            <CardTouch />
        </div>
      </div>
    </div>
  );
};

export default Contact;
