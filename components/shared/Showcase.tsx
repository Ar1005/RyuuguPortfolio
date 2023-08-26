"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Dot } from "lucide-react";

const Slides = [{
    url: "https://imgtr.ee/images/2023/08/25/eb94c575097fcabdb0ee5975da8e9447.png",
  },
  {
    url: "https://imgtr.ee/images/2023/08/25/198cab5558d7680aed29a2a409f935a7.png",
  },
  {
    url: "https://imgtr.ee/images/2023/08/25/ac98eafe71dd40f67673af6546473942.png",
  },
  {
    url: "https://imgtr.ee/images/2023/08/25/47b19a934ed7731ff9b9696a9743ce78.png",
  },
  {
    url: "https://imgtr.ee/images/2023/08/25/3fa141e3b1269b29a08ca59610d51a30.png",
  },
  {
    url: "https://imgtr.ee/images/2023/08/25/da84f333a6988f553f52e18820da01f7.png",
  },
];

const Showcase = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? Slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === Slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };
  

  const imageUrl = `/images/${Slides[currentIndex]}`;
  console.log("Current Image URL:", imageUrl);

  return (
    <div className="relative flex flex-col min-h-screen w-full flex items-center justify-center">
      <div className="absolute inset-0 bg-[url('/background.jpg')] bg-cover bg-center"></div>
      <>

      <div className="group relative flex flex-col items-center m-auto h-[1000px] w-full max-w-[1400px] px-4 py-16 mt-20">
      <div className="z-10 text-2xl font-bold text-blue-600">PORTFOLIO</div>
        <div
          style={{ backgroundImage: `url(${Slides[currentIndex].url})` }}
          className="h-full w-full rounded-2xl bg-cover bg-center duration-500 border border-black"
        ></div>
        {/*This is a left arrow Armand*/}
        <div className="absolute left-5 top-[50%] hidden -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-black p-2 text-2xl text-white group-hover:block">
          <ChevronLeft onClick={prevSlide} size={30} />
        </div>
        <div className="absolute right-5 top-[50%] hidden -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-black p-2 text-2xl text-white group-hover:block">
          {/*This is a right arrow Armand*/}
          <ChevronRight onClick={nextSlide} size={30} />
        </div>
        <div className="top-4 flex justify-center py-2">
          {Slides.map((Slides, slideIndex) => (
            <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className="text-2xl cursor-pointer">
              <Dot />
            </div>
          ))}
        </div>
      </div>
      </>
    </div>
  );
};

export default Showcase;
