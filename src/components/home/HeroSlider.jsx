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
    <div className="relative w-full">
      <Swiper
        slidesPerView={1}
        spaceBetween={16}
        grabCursor={true}
        pagination={{ clickable: true }}
        className="mySwiper"
        breakpoints={{
          640: {
            slidesPerView: 1.2,
            spaceBetween: 16,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 2.8,
            spaceBetween: 24,
          },
        }}
      >
        {slides.map((slideImage, index) => (
          <SwiperSlide key={index}>
            <div className="w-full max-w-[590px] mx-auto rounded-4xl border border-orange-300/10 shadow-lg shadow-orange-300/5 p-1">
              <Image
                src={slideImage}
                alt={`Slide ${index + 1}`}
                className="w-full h-[590px] max-h-[590px] object-cover rounded-4xl"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
