"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ContactForm2 = ({ onNext, onBack, step, totalSteps }) => {
  return (
    <div className=" flex justify-center opacity-100 pointer-events-auto">
      <div className="frame-outer p-1 bg-pink-50 rounded-4xl ">
        <div className="frame-inner rounded-4xl flex w-[90vw] m-auto flex-col sm:w-[32rem] bg-neutral-50 backdrop-blur-3xl shadow-[0_0_15px_rgba(0,0,0,0.05)] border border-white/50 p-8 md:p-10">
          {/* Header */}
          <div className="flex w-full flex-col space-y-6">
            <div className="flex items-center justify-between">
              <button
                className="rounded-lg p-2 text-neutral-400 hover:text-neutral-500 transition-colors duration-300 focus:outline-none focus-visible:outline-none disabled:text-neutral-300"
                aria-label="Previous"
                onClick={onBack}
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <span className="text-sm text-neutral-400 md:text-base">{step} of {totalSteps}</span>
              <button
                className="rounded-lg p-2 text-neutral-400 hover:text-neutral-500 transition-colors duration-300 focus:outline-none focus-visible:outline-none disabled:text-neutral-300"
                aria-label="Next"
                onClick={onNext}
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
            <h2 className="text-neutral-600 md:text-2xl">We'll need a few details first...</h2>
          </div>

          {/* Form Inputs */}
          <div className="w-full mt-8">
            <div className="flex flex-col gap-4 md:gap-6">
              {/* Full Name Field */}
              <div className="space-y-2">
                <label
                  htmlFor="fullName"
                  className="text-sm font-medium leading-none flex items-center gap-1 text-neutral-600"
                >
                  Full Name<span className="text-red-500">*</span>
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  placeholder="Your name"
                  className="flex h-10 w-full bg-transparent px-3 py-1 text-base md:text-sm shadow-sm rounded-xl border border-neutral-200 text-neutral-500 placeholder:text-neutral-400 focus:outline-none transition-colors"
                />
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium leading-none flex items-center gap-1 text-neutral-600"
                >
                  Email<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your@email.com"
                  className="flex h-10 w-full bg-transparent px-3 py-1 text-base md:text-sm shadow-sm rounded-xl border border-neutral-200 text-neutral-500 placeholder:text-neutral-400 focus:outline-none transition-colors"
                />
              </div>

              {/* Next Button */}
              <button
                type="button"
                disabled
                className="inline-flex items-center justify-center whitespace-nowrap font-medium text-xs md:text-sm text-neutral-100 bg-neutral-800 px-8 py-4 rounded-xl shadow-md shadow-neutral-900/25 hover:scale-[101%] hover:bg-neutral-900 hover:shadow-lg transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-300 focus-visible:ring-offset-2 disabled:opacity-25 disabled:pointer-events-none"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm2;
