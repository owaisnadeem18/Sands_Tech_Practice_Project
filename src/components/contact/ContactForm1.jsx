"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ContactForm1 = ({ onNext, onBack, step, totalSteps }) => {
  return (
    <div className="w-[100%] flex justify-center m-auto absolute z-0 opacity-100 pointer-events-auto">
      <div className="frame-outer w-[100%] rounded-4xl p-1">
        <div className="rounded-4xl frame-inner flex w-[90vw] flex-col sm:w-[32rem] bg-neutral-50 backdrop-blur-3xl shadow-[0_0_15px_rgba(0,0,0,0.05)] border border-white/50 p-8 md:p-10">
          {/* Top Navigation */}
          <div className="flex w-full flex-col space-y-6">
            <div className="flex items-center justify-between">
              <button
                onClick={onBack}
                className="rounded-lg p-2 text-neutral-400 hover:text-neutral-500 transition-colors duration-300 focus:outline-none focus-visible:outline-none disabled:text-neutral-300"
                disabled={step === 1}
                aria-label="Previous"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <span className="text-sm text-neutral-400 md:text-base">
                {step} of {totalSteps}
              </span>
              <button
                onClick={onNext}
                className="rounded-lg p-2 text-neutral-400 hover:text-neutral-500 transition-colors duration-300 focus:outline-none focus-visible:outline-none"
                aria-label="Next"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            <h2 className="text-neutral-600 md:text-2xl">Let's talk!</h2>
          </div>

          {/* Content */}
          <div className="w-full mt-2">
            <div className="flex flex-col gap-4 md:gap-6">
              <span className="text-sm text-neutral-500 md:text-lg">
                We love playing with the possibilities of tech, and we're here to explore them with you.
              </span>

              {/* Email Section */}
              <div className="flex items-center justify-between rounded-2xl border border-neutral-500/10 p-4">
                <span className="text-xs text-neutral-500 md:text-base">Email us:</span>
                <button
                  className="flex items-center justify-center gap-2 rounded-xl focus-visible:outline-none hover:cursor-pointer"
                  type="button"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-neutral-500 md:text-base">
                      hello@daybreak.studio
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-4 w-4 text-neutral-500"
                    >
                      <path
                        fillRule="evenodd"
                        d="M17.663 3.118c.225.015.45.032.673.05C19.876 3.298 21 4.604 21 6.109v9.642a3 3 0 0 1-3 3V16.5c0-5.922-4.576-10.775-10.384-11.217.324-1.132 1.3-2.01 2.548-2.114.224-.019.448-.036.673-.051A3 3 0 0 1 13.5 1.5H15a3 3 0 0 1 2.663 1.618ZM12 4.5A1.5 1.5 0 0 1 13.5 3H15a1.5 1.5 0 0 1 1.5 1.5H12Z"
                        clipRule="evenodd"
                      />
                      <path d="M3 8.625c0-1.036.84-1.875 1.875-1.875h.375A3.75 3.75 0 0 1 9 10.5v1.875c0 1.036.84 1.875 1.875 1.875h1.875A3.75 3.75 0 0 1 16.5 18v2.625c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625v-12Z" />
                      <path d="M10.5 10.5a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963 5.23 5.23 0 0 0-3.434-1.279h-1.875a.375.375 0 0 1-.375-.375V10.5Z" />
                    </svg>
                  </div>
                </button>
              </div>

              {/* CTA Button */}
              <button
                onClick={onNext}
                className="inline-flex items-center justify-center whitespace-nowrap font-medium relative h-auto rounded-xl bg-neutral-800 px-8 py-4 text-xs md:text-sm text-neutral-100 hover:scale-[101%] hover:bg-neutral-900 shadow-md shadow-neutral-900/25 hover:shadow-lg transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-300 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-25"
                type="button"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm1;
