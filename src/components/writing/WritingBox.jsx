"use client";

import React from 'react'
import Image from "next/image";


const WritingBox = () => {
  return (

    <div className="relative flex w-full pt-32 pb-20 md:pb-56">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-8">
        <div className="flex w-full flex-col items-center justify-center gap-6 md:flex-wrap md:justify-center">
          <div className="mx-auto flex w-full items-center justify-center">
            <div className="rounded-r-4xl bg-white rounded-l-4xl frame-outer group relative flex h-full w-full max-w-[400px] overflow-hidden border-2 p-1 hover:scale-[.99] border-orange-300/10 shadow-lg shadow-orange-300/5 transition-all duration-500 ease-in-out hover:border-orange-300/20 hover:shadow-sm hover:shadow-orange-300/5">
              
              {/* Image Section */}
              <div className="frame-inner relative h-[500px] w-full origin-center cursor-pointer overflow-hidden">
                <div className="relative h-full w-full overflow-hidden">
                  <Image
                    alt="A new standard for image sequences on the web"
                    fill
                    sizes="(max-width: 768px) 100vw, 800px"
                    src="https://www.daybreak.studio/_next/image?url=%2Fwriting%2Fimage-sequence%2Fhero.jpg&w=828&q=75"
                    className="frame-inner object-cover rounded-4xl"
                    style={{ objectPosition: "50% -10vh" }}
                  />
                </div>

                {/* Text Content */}
                <div className="rounded-4xl frame-inner absolute bottom-0 flex w-full items-center gap-3 overflow-hidden border-[1px] border-neutral-500/10 bg-white p-8 shadow-2xl">
                  <div className="flex flex-col gap-4">
                    <h2 className="text-sm text-neutral-500">June 29, 2025</h2>
                    <div className="flex flex-col gap-3 font-[450]">
                      <h2 className="text-2xl text-neutral-700">
                        A new standard for image sequences on the web
                      </h2>
                      <h3 className="text-neutral-500">
                        Engineering high-fidelity scroll-driven animations without compromise
                      </h3>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div
                className="pointer-events-none absolute inset-0 z-10 overflow-hidden opacity-0 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:opacity-20"
                style={{
                    filter: "blur(30px)",
                    transform: "translate3d(0px, 0px, 0px)",
                    background:
                    "radial-gradient(1000px at 342px 371px, rgba(255, 69, 0, 0.4), rgba(255, 166, 0, 0.3) 25%, rgba(255, 218, 185, 0.2) 25%, rgba(255, 255, 255, 0))",
                }}
              ></div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WritingBox
