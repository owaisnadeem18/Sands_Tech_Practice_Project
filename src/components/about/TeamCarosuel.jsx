"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { AnimatePresence, motion } from "framer-motion";
import { peopleData } from "@/data/teamData"; // Assuming this path is correct

import "swiper/css";
import "swiper/css/pagination";

const videos = [
  "/team/taha-unscreen.gif",
  "/team/ross-chan-unscreen.gif",
  "/team/alvin-leung-unscreen.gif",
  "/team/rafi-rizky-unscreen.gif",
  "/team/Jenny-Rudziensky-unscreen.gif",
];

// =============================================================================
// Icon Components (Consider moving these to a separate /components/icons folder)
// =============================================================================

// Expand Icon - for when the card is collapsed and can be expanded
const ExpandIcon = ({ className = '' }) => {
  return (
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

// Collapse Icon - for when the card is expanded and can be collapsed
// Using a "Home" icon as seen in your screenshots for the expanded state bottom right
const CollapseIcon = ({ className = '' }) => {
  return (
    <div style={{ opacity: 1, willChange: 'auto' }} className={className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-neutral-500" // Adjusted size and color based on screenshot
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    </div>
  );
};

// =============================================================================
// SlideContent Component - No changes needed here
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
// VideoCarousel Component - Main Logic
// =============================================================================
const VideoCarousel = () => {
  const [activePersonData, setActivePersonData] = useState(peopleData[0]);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleCardExpansion = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center"
    >
      {/* Swiper wrapper */}
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
            0: { slidesPerView: 1, centeredSlides: false, spaceBetween: 20, },
            640: { slidesPerView: 1, centeredSlides: false, spaceBetween: 20, },
            768: { slidesPerView: 2, centeredSlides: true, spaceBetween: 25, },
            1024: { slidesPerView: 3, centeredSlides: true, spaceBetween: 30, },
          }}
          onSlideChange={(swiper) => {
            setActivePersonData(peopleData[swiper.realIndex]);

            setIsExpanded(false);
          }}
        >
          {videos.map((src, index) => (
            <SwiperSlide key={index}>
              <SlideContent src={src} index={index} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Details Box - Fixed at the bottom */}
      <motion.div
        className="fixed bottom-0 left-0 right-0 z-50 px-3 pb-4 md:bottom-4 md:px-4"
        style={{ transformOrigin: '50% 50% 0px', opacity: 1, willChange: 'auto', transform: 'none' }}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div
          className="mx-auto h-min w-min overflow-hidden bg-white/50 p-1 drop-shadow-2xl backdrop-blur-md"
          style={{ willChange: 'auto', transform: 'none', transformOrigin: '50% 50% 0px', borderRadius: '24px', opacity: 1 }}
          onClick={toggleCardExpansion} // Click handler here
        >
          <div
            id="person-info"
            role="button"
            aria-expanded={isExpanded}
            aria-haspopup="dialog"
            aria-label={`${activePersonData.name}'s information. Press Enter to ${isExpanded ? 'close' : 'open'}`}
            tabIndex="0"
            className={`relative flex w-screen max-w-[calc(100vw-2rem)] cursor-pointer flex-col items-center justify-between space-y-4 bg-white/30 p-6 backdrop-blur-2xl md:max-w-[400px] focus:outline-none transition-all duration-300 ease-in-out
              ${isExpanded ? 'max-h-[300px] md:max-h-[750px]' : 'max-h-[100px] overflow-hidden'}`
            }
            style={{ transformOrigin: '50% 50% 0px', willChange: 'auto', transform: 'none', borderRadius: '20px', opacity: 1 }}
          >
            {/* Top row: Name, Title, and Toggle Icon */}
            <div
              className="flex w-full items-start justify-between"
              style={{ transform: 'none', transformOrigin: '50% 50% 0px', opacity: 1 }}
            >
              <div
                className="flex flex-col"
                style={{ transform: 'none', transformOrigin: '50% 50% 0px', opacity: 1 }}
              >
                <span
                  className="whitespace-nowrap font-medium text-neutral-500"
                  style={{ opacity: 1, filter: 'blur(0px)', willChange: 'auto' }}
                >
                  {activePersonData.name}
                </span>
                <span
                  className="whitespace-nowrap text-neutral-400"
                  style={{ opacity: 1, filter: 'blur(0px)', willChange: 'auto' }}
                >
                  {activePersonData.title}
                </span>
              </div>
              {/* Conditionally render Expand or Collapse icon */}
              {isExpanded ? <CollapseIcon /> : <ExpandIcon />}
            </div>

            {/* Additional content that appears on expansion */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  className="w-full flex flex-col items-center space-y-4 pt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Description/Motto */}
                  <p className="text-lg italic text-gray-700 text-center px-4">
                    "{activePersonData.description}"
                  </p>

                  {/* Hobby/Fruit Boxes - This is where the correction is */}
                  <div className="details-row flex justify-center gap-6 w-full">
                    {/* Box 1 Data */}
                    <div className="detail-box bg-gray-50 rounded-2xl p-4 flex-1 flex flex-col items-center justify-center text-center">
                      <h3 className="text-md font-medium text-gray-700 mb-1">
                        {activePersonData.box1Data[0]} {/* Access title at index 0 */}
                      </h3>
                      <p className="text-lg text-gray-900">
                        {activePersonData.box1Data[1]} {/* Access value at index 1 */}
                      </p>
                    </div>

                    {/* Box 2 Data - Ensure this is rendered */}
                    {/* Only render if box2Data exists, to prevent errors if some peopleData don't have it */}
                    {activePersonData.box2Data && (
                      <div className="detail-box bg-gray-50 rounded-2xl p-4 flex-1 flex flex-col items-center justify-center text-center">
                        <h3 className="text-md font-medium text-gray-700 mb-1">
                          {activePersonData.box2Data[0]} {/* Access title at index 0 */}
                        </h3>
                        <p className="text-lg text-gray-900">
                          {activePersonData.box2Data[1]} {/* Access value at index 1 */}
                        </p>
                      </div>
                    )}
                  </div>

                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default VideoCarousel;