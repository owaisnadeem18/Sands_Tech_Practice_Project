"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// =============================================================================
// DATA DEFINITIONS
// Ensure the order of items in 'videos' and 'peopleData' arrays is identical
// as they are linked by their array index.
// =============================================================================

const videos = [
  "/team/taha-unscreen.gif",
  "/team/ross-chan-unscreen.gif",
  "/team/alvin-leung-unscreen.gif",
  "/team/rafi-rizky-unscreen.gif",
  "/team/Jenny-Rudziensky-unscreen.gif",
];

const peopleData = [
  {
    name: "Taha Hossain",
    title: "CEO / Intern", // This matches your new HTML structure
    motto: "Making things, and shaping people.",
    hobby: "Racing (NEEEUR) 🏁",
    fruit: "Persimmon",
  },
  {
    name: "Ross Chan",
    title: "Motion Designer", // Updated title to match your new HTML example
    motto: "Building delightful experiences.",
    hobby: "Cooking 🍳",
    fruit: "Apple",
  },
  {
    name: "Alvin Leung",
    title: "Lead Developer",
    motto: "Bringing ideas to life with code.",
    hobby: "Gaming 🎮",
    fruit: "Banana",
  },
  {
    name: "Rafi Rizky",
    title: "UI/UX Designer",
    motto: "Crafting intuitive and beautiful interfaces.",
    hobby: "Drawing 🎨",
    fruit: "Grapes",
  },
  {
    name: "Jenny Rudziensky",
    title: "Marketing Specialist",
    motto: "Connecting with our audience.",
    hobby: "Hiking ⛰️",
    fruit: "Strawberry",
  },
];

// =============================================================================
// ExpandIcon Component (Re-inserted for completeness of this single file)
// =============================================================================
const ExpandIcon = ({ className = '' }) => {
    return (
      // The outer div with opacity and will-change is kept from your provided HTML
      <div style={{ opacity: 1, willChange: 'auto' }} className={className}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          // Class names from your provided HTML
          className="lucide lucide-expand h-4 w-4 text-neutral-500"
        >
          <path d="m21 21-6-6m6 6v-4.8m0 4.8h-4.8"></path>
          <path d="M3 16.2V21m0 0h4.8M3 21l6-6"></path>
          <path d="M21 7.8V3m0 0h-4.8M21 3l-6 6"></path>
          <path d="M3 7.8V3m0 0h4.8M3 3l6 6"></path>
        </svg>
      </div>
    );
  };


// =============================================================================
// SlideContent Component
// Handles the individual slide rendering and animations.
// =============================================================================

const SlideContent = ({ src, index }) => {
  const { isActive } = useSwiperSlide();
  const swiper = useSwiper();

  return (
    <motion.div
      animate={{
        scale: isActive ? 1 : 0.8,
        opacity: isActive ? 1 : 0.6,
        filter: isActive ? "blur(0px)" : "blur(8px)",
      }}
      onClick={() => {
        if (!isActive) {
          swiper.slideTo(index);
        }
      }}
      whileHover={!isActive ? { scale: 1.05 } : {}}
      transition={{ duration: 0.4 }}
      className={`relative w-full sm:h-[800px] ${
        !isActive ? "cursor-pointer" : ""
      } flex items-center justify-center`}
    >
      <img
        src={src}
        alt={`slide-${index}`}
        className="h-full w-full object-contain rounded-4xl"
      />
    </motion.div>
  );
};

// =============================================================================
// VideoCarousel Component
// Main component for the slider and dynamic details card.
// =============================================================================

const VideoCarousel = () => {
  const [activePersonData, setActivePersonData] = useState(
    peopleData[0] // Initialize with data for the first person
  );

  // Define the inline style for the background gradient
  const backgroundGradientStyle = {
    background: 'linear-gradient(0deg, #fff5e6, #fff0eb 25%, #faebf5 50%, #f5f0ff 75%, #fafaff)',
  };

  return (
    // The main container. The fixed details card will be a sibling.
    <div
      className="min-h-screen flex flex-col items-center justify-center"
      style={backgroundGradientStyle}
    >
      {/* Swiper wrapper - still takes flexible height */}
      <div className="w-full flex-grow flex items-center justify-center">
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
            },
          }}
          onSlideChange={(swiper) => {
            setActivePersonData(peopleData[swiper.realIndex]);
          }}
        >
          {videos.map((src, index) => (
            <SwiperSlide key={index}>
              <SlideContent src={src} index={index} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* NEW Details Box - Fixed at the bottom */}
      <motion.div
        className="fixed bottom-0 left-0 right-0 z-50 px-3 pb-4 md:bottom-4 md:px-4"
        style={{ transformOrigin: '50% 50% 0px', opacity: 1, willChange: 'auto', transform: 'none' }}
        initial={{ y: 100, opacity: 0 }} // Animate from bottom
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div
          className="mx-auto h-min w-min overflow-hidden bg-white/50 p-1 drop-shadow-2xl backdrop-blur-md"
          style={{ willChange: 'auto', transform: 'none', transformOrigin: '50% 50% 0px', borderRadius: '24px', opacity: 1 }}
        >
          <div
            id="person-info"
            role="button"
            aria-expanded="false"
            aria-haspopup="dialog"
            aria-label={`${activePersonData.name}'s information. Press Enter to open`} // Dynamic aria-label
            tabIndex="0"
            className="relative flex w-screen max-w-[calc(100vw-2rem)] cursor-pointer flex-col items-center justify-between space-y-4 overflow-hidden bg-white/30 p-6 backdrop-blur-2xl md:max-w-[400px] focus:outline-none"
            style={{ transformOrigin: '50% 50% 0px', willChange: 'auto', transform: 'none', borderRadius: '20px', opacity: 1 }}
          >
            <div
              className="flex w-full items-center justify-between"
              style={{ transform: 'none', transformOrigin: '50% 50% 0px', opacity: 1 }}
            >
              <div
                className="flex w-full flex-col"
                style={{ transform: 'none', transformOrigin: '50% 50% 0px', opacity: 1 }}
              >
                <div
                  className="flex w-full flex-col items-start"
                  style={{ transform: 'none', transformOrigin: '50% 50% 0px' }}
                >
                  {/* Dynamic Name */}
                  <span
                    className="whitespace-nowrap font-medium text-neutral-500"
                    style={{ opacity: 1, filter: 'blur(0px)', willChange: 'auto' }}
                  >
                    {activePersonData.name}
                  </span>
                  {/* Dynamic Title */}
                  <span
                    className="whitespace-nowrap text-neutral-400"
                    style={{ opacity: 1, filter: 'blur(0px)', willChange: 'auto' }}
                  >
                    {activePersonData.title}
                  </span>
                </div>
              </div>
              {/* Expand Icon */}
              <ExpandIcon />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default VideoCarousel;