import React from 'react'

const ContactForm4 = ({onNext , onBack , step , totalSteps}) => {
  return (
    <div className="absolute z-[3] opacity-100 pointer-events-auto" style={{ filter: "blur(0px)", willChange: "auto", transform: "none" }}>
      <div className="frame-outer p-1 bg-pink-50 rounded-4xl">
        <div className="frame-inner flex w-[90vw] rounded-4xl flex-col bg-neutral-50 backdrop-blur-3xl shadow-[0_0_15px_rgba(0,0,0,0.05)] border border-white/50 p-8 sm:w-[32rem] md:p-10">
          
          <div className="flex w-full flex-col space-y-6">
            <div className="flex items-center justify-between">
              <button
                type="button"
                aria-label="Previous"
                className="rounded-lg p-2 text-neutral-400 hover:text-neutral-500 transition-colors duration-300 focus:outline-none disabled:text-neutral-300"
                onClick={onBack}
              >
                <svg className="lucide lucide-chevron-left h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>

              <span className="text-sm text-neutral-400 md:text-base">{step} of {totalSteps}</span>

              <button
                type="button"
                aria-label="Next"
                className="rounded-lg p-2 text-neutral-400 hover:text-neutral-500 transition-colors duration-300 focus:outline-none disabled:text-neutral-300"
                onClick={onNext}
              >
                <svg className="lucide lucide-chevron-right h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </div>

            <h2 className="text-neutral-600 md:text-2xl">Tell us more about your idea!</h2>
          </div>

          <div className="w-full mt-8">
            <div className="flex flex-col gap-4 md:gap-6">
              {/* Project Details */}
              <div className="space-y-2">
                <label htmlFor="project-details" className="text-sm font-medium flex items-center gap-1 text-neutral-600">
                  Project Details<span className="text-red-500">*</span>
                </label>
                <textarea
                  id="project-details"
                  name="message"
                  placeholder="Share your vision, goals, and any specific requirements..."
                  className="h-32 w-full resize-none overflow-y-auto rounded-2xl bg-neutral-50 p-4 text-neutral-500 border border-input text-base placeholder:text-neutral-400 shadow-sm focus:outline-none scrollbar-thin scrollbar-track-transparent scrollbar-thumb-neutral-200"
                />
              </div>

              {/* Reference Link */}
              <div className="space-y-2">
                <label htmlFor="reference-link" className="text-sm font-medium text-neutral-600">
                  Reference Link (Optional)
                </label>
                <input
                  type="text"
                  id="reference-link"
                  name="link"
                  placeholder="daybreak.studio"
                  className="h-10 w-full rounded-xl border border-neutral-200 bg-transparent px-3 py-1 text-base text-neutral-500 placeholder:text-neutral-400 shadow-sm focus:outline-none"
                />
              </div>

              {/* Next Button */}
              <button
                type="button"
                className="w-full inline-flex items-center justify-center rounded-xl bg-neutral-800 px-8 py-4 text-xs md:text-sm text-neutral-100 font-medium hover:bg-neutral-900 hover:scale-[101%] shadow-md shadow-neutral-900/25 hover:shadow-lg transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-300 focus-visible:ring-offset-2 disabled:opacity-25"
                disabled
              >
                Next
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
 
  )
}

export default ContactForm4
