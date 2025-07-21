"use client";

import { servicesData } from "@/data/servicesDynamicData";
import Image from "next/image";
import React from "react";

const Services = ({selected}) => {

    const currentService = servicesData[selected]

  return (
    <div className="frame-outer relative h-full w-full max-w-[calc(100vw-2rem)] shadow-xl shadow-stone-500/5 md:max-w-[450px] 2xl:max-w-[1100px] rounded-4xl">
      <div className="frame-inner h-full bg-white backdrop-blur-2xl rounded-4xl">
        <section className="relative flex h-full w-full flex-col 2xl:flex-row rounded-4xl">
          {/* Image Section */}
          <div className="relative h-full w-full 2xl:order-2 2xl:w-7/12 rounded-4xl">
            <div className="aspect-square min-h-[400px] w-full 2xl:h-[640px] 2xl:p-4">
              <div className="relative h-full w-full">
                <Image
                  src= {currentService.image}
                  alt={currentService.title}
                  fill
                  className="object-cover frame-inner rounded-4xl"
                />
              </div>
            </div>
          </div>

          {/* Text and Navigation Section */}
          <div className="flex flex-1 flex-col justify-between gap-2 p-4 pb-6 2xl:order-1 2xl:w-5/12 2xl:p-2 2xl:text-left">
            {/* Navigation Buttons */}
            <nav className="flex justify-center gap-2 text-sm md:text-base 2xl:justify-start 2xl:gap-0 2xl:space-x-2">
              {identities.map((item, idx) => (
                <div className="relative" key={idx}>
                  {/* Mobile Button */}
                  <button
                    className={`relative flex items-center justify-center overflow-hidden font-[450] focus:outline-none ${
                      item.active
                        ? "text-neutral-500"
                        : "text-neutral-400/70 hover:text-neutral-500"
                    } 2xl:hidden`}
                  >
                  </button>

                  {/* 2XL Box Button */}
                  <button
                    className={`frame-inner rounded-4xl hidden h-32 w-32 items-center justify-center overflow-hidden p-4 font-[450] focus:outline-none border border-neutral-200/80 2xl:flex ${
                      item.active
                        ? "bg-neutral-50 text-neutral-500"
                        : "text-neutral-400/70 hover:text-neutral-500"
                    }`}
                  >
                    <div className="relative z-10 flex h-full w-full flex-col justify-between text-left">
                      <div className="flex items-center">
                        {item.shortcut.split("+").map((key, keyIdx) => (
                          <span
                            key={keyIdx}
                            className="w-fit rounded-lg border-[1px] border-neutral-200 bg-neutral-200/25 px-2 py-1 text-xs font-normal text-neutral-400"
                          >
                            {key.trim()}
                          </span>
                        ))}
                      </div>
                      <span className="p-2">{item.title}</span>
                    </div>
                  </button>
                </div>
              ))}
            </nav>

            {/* Description */}
            <div className="flex flex-col items-center justify-center text-center 2xl:items-start 2xl:space-y-4 2xl:p-4 2xl:text-left">
              <h1 className="hidden text-3xl text-neutral-500 2xl:block">
                {currentService.title}
              </h1>
              <h2 className="text-pretty text-neutral-400 md:w-10/12 md:text-lg 2xl:text-xl">
                {currentService.description}
              </h2>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
