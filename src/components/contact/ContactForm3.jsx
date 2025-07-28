import Image from 'next/image';
import React from 'react'

const options = [
  {
    title: 'Brand & Identity',
    image: '/images/brand.webp',
  },
  {
    title: 'Web Experience',
    image: '/images/web.webp',
  },
  {
    title: 'Motion & Animation',
    image: '/images/motion.webp',
  },
  {
    title: 'Product Design',
    image: '/images/product.webp',
  },
];

const ContactForm3 = ({onNext , onBack , totalSteps , step}) => {

  return (
    <div className=" flex justify-center z-20 rounded-4xl bg-pink-50 p-1" style={{ pointerEvents: 'auto' }}>
      <div className="frame-inner rounded-4xl flex w-[90vw] m-auto flex-col bg-neutral-50 border border-white/50 backdrop-blur-3xl shadow-[0_0_15px_rgba(0,0,0,0.05)] p-8 sm:w-[32rem] md:p-10">
        <div className="flex flex-col space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <button
              type="button"
              aria-label="Previous"
              className="rounded-lg p-2 text-neutral-400 hover:text-neutral-500 transition-colors duration-300"
              onClick={onBack}
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M15 18L9 12L15 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <span className="text-sm text-neutral-400 md:text-base">
              {step} of {totalSteps}
            </span>
            <button
              type="button"
              aria-label="Next"
              className="rounded-lg p-2 text-neutral-400 hover:text-neutral-500 transition-colors duration-300"
              onClick={onNext}
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M9 18L15 12L9 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          {/* Question */}
          <h2 className="text-neutral-600 md:text-2xl">What can we help you with?</h2>
        </div>

        {/* Options */}
        <div className="w-full mt-8">
          <div className="grid grid-cols-2 gap-4">
            {options.map((option) => (
              <label
                key={option.title}
              
              >
                <div className="relative h-32 w-full overflow-hidden rounded-xl">
                  <Image
                    src={option.image}
                    alt={option.title}
                    fill
                    className="object-cover"
                    sizes="100vw"
                    priority={false}
                  />
                </div>
                <div className="mt-3 flex w-full items-center justify-between">
                  <span className="text-xs sm:text-sm text-neutral-600">{option.title}</span>
                  <span
                    role="checkbox"
                    className={`flex h-4 w-4 items-center justify-center rounded-md border transition-colors duration-250`}
                     
                  />
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Next Button */}
        <button
          className="mt-8 inline-flex items-center justify-center w-full rounded-xl bg-neutral-800 px-8 py-4 text-xs md:text-sm text-neutral-100 font-medium shadow-md shadow-neutral-900/25 hover:bg-neutral-900 hover:shadow-lg transition-all duration-500 disabled:opacity-25"
          type="button"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default ContactForm3
