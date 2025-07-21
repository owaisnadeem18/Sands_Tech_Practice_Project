"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../../styles/custom.css";
import Image from "next/image";

import { slide1, slide2, slide3, slide4, slide5 } from "@/assets";

const HeroSlider = () => {
  const slides = [slide1, slide2, slide3, slide4, slide5];

  return (
<div className="relative w-full max-w-full">
<Swiper
  slidesPerView={3}
  spaceBetween={30}
  grabCursor={true}
  className="mySwiper"
  breakpoints={{
    0: {
      slidesPerView: 1.2,
      spaceBetween: 16,
    },
    640: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    1024: {
      slidesPerView: 2.97,
      spaceBetween: 30,
    },
  }}
>
    {slides.map((slideImage, index) => (
      <SwiperSlide key={index}>
        <div className="w-[580px] rounded-4xl border border-orange-300/10 shadow-lg shadow-orange-300/5 p-1 ">
          <Image
            src={slideImage}
            alt={`Slide ${index + 1}`}
            className="w-[590px] h-[590px] rounded-4xl"
          />
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>

  );
};

export default HeroSlider;
