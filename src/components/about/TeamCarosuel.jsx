"use client";

import React from "react";
import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";

// Video data
const videos = [
  "/team/taha-unscreen.gif",
  "/team/ross-chan-unscreen.gif",
  "/team/alvin-leung-unscreen.gif",
  "/team/rafi-rizky-unscreen.gif",
  "/team/Jenny-Rudziensky-unscreen.gif"
];

const SlideContent = ({ src, index }) => {
  const { isActive } = useSwiperSlide();

  return (
    <motion.div
      animate={{
        scale: isActive ? 1 : 0.8,
        opacity: isActive ? 1 : 0.6,
        filter: isActive ? "blur(0px)" : "blur(8px)",
      }}
      whileHover={!isActive ? { scale: 1 } : {}}
      transition={{ duration: 0.4 }}
      className={`relative w-full sm:h-[800px] ${!isActive ? "cursor-pointer" : ""} flex items-center`}
    >
      <img
        src={src}
        alt={`slide-${index}`}
        className="h-full w-full object-contain rounded-4xl"
      />
    </motion.div>
  );
};

const VideoCarousel = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{ clickable: true }}
        centeredSlides={true}
        grabCursor={true}
        modules={[Pagination]}
        className="w-full bg-transparent"
        breakpoints={{
          0: {
            slidesPerView: 1,
            centeredSlides: false,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 1,
            centeredSlides: false,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            centeredSlides: true,
            spaceBetween: 25,
          },
          1024: {
            slidesPerView: 3,
            centeredSlides: true,
            spaceBetween: 30,
          }
        }}
      >
        {videos.map((src, index) => (
          <SwiperSlide key={index}>
            <SlideContent src={src} index={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default VideoCarousel;
