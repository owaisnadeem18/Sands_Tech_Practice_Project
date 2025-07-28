import React from 'react'

const ContactForm5 = ({onBack , step , totalSteps}) => {
  return (
     <div className="w-[100%] m-auto frame-outer rounded-4xl p-1">
      <div className="frame-inner flex w-[90vw] m-auto flex-col rounded-4xl bg-neutral-50 backdrop-blur-3xl shadow-[0_0_15px_rgba(0,0,0,0.05)] border border-white/50 p-8 sm:w-[32rem] md:p-10">
        
        {/* Header */}
        <div className="flex w-full flex-col space-y-6">
          <div className="flex items-center justify-between">
            <button
              className="rounded-lg p-2 text-neutral-400 transition-colors duration-300 hover:text-neutral-500 focus:outline-none focus-visible:outline-none disabled:text-neutral-300"
              aria-label="Previous"
              type="button"
              onClick={onBack}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="lucide lucide-chevron-left h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <span className="text-sm text-neutral-400 md:text-base">{step} of {totalSteps}</span>
            <button
              className="rounded-lg p-2 text-neutral-300 cursor-not-allowed"
              disabled
              aria-label="Next"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="lucide lucide-chevron-right h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
          <h2 className="text-neutral-600 md:text-2xl">Review your submission</h2>
        </div>

        {/* Body */}
        <div className="w-full mt-8">
          <div className="flex flex-col gap-6">
            <div className="scrollbar-thin scrollbar-track-transparent scrollbar-thumb-neutral-200 flex flex-col gap-6 overflow-y-auto pr-2">
              
              {/* Contact Details */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center">
                  <h3 className="text-sm font-medium text-neutral-600">Contact Details</h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="lucide lucide-dot h-6 w-6 pt-[1px] text-red-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12.1" cy="12.1" r="1" />
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-sm text-neutral-400">No name provided</p>
                  <p className="text-sm text-neutral-400">No email provided</p>
                </div>
              </div>

              {/* Project Types */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center">
                  <h3 className="text-sm font-medium text-neutral-600">Project Types</h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="lucide lucide-dot h-6 w-6 pt-[1px] text-red-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12.1" cy="12.1" r="1" />
                  </svg>
                </div>
                <p className="text-sm text-neutral-400">No project types selected.</p>
              </div>

              {/* Project Details */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center">
                  <h3 className="text-sm font-medium text-neutral-600">Project Details</h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="lucide lucide-dot h-6 w-6 pt-[1px] text-red-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12.1" cy="12.1" r="1" />
                  </svg>
                </div>
                <div className="scrollbar-thin scrollbar-track-transparent scrollbar-thumb-neutral-200 max-h-32 overflow-y-auto">
                  <p className="text-sm text-neutral-400">Tell us about your idea!</p>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="inline-flex items-center justify-center whitespace-nowrap font-medium disabled:pointer-events-none relative h-auto rounded-xl bg-neutral-800 px-8 py-4 text-xs text-neutral-100 hover:scale-[101%] hover:bg-neutral-900 md:text-sm shadow-md shadow-neutral-900/25 hover:shadow-lg transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-300 focus-visible:ring-offset-2 disabled:opacity-25"
              disabled
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default ContactForm5  
