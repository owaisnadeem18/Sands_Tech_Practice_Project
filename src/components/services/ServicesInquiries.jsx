import Link from 'next/link'
import React from 'react'

const ServicesInquiries = () => {
  return (
   
      <section className="flex flex-col items-center justify-center md:pt-32 space-y-6 pb-24 text-center md:pb-72" style={{ opacity: 1, filter: "blur(0px)", willChange: "auto", transform: "none" }}>
      <div className="flex w-8/12 flex-col items-center justify-center">
        <h2 className="mb-4 w-fit text-lg text-neutral-700/40 md:text-lg lg:text-2xl">
          Inquiries
        </h2>
        <h1 className="w-fit text-2xl font-[450] text-neutral-700/40 md:text-3xl 2xl:w-2/3 2xl:text-4xl" style={{ opacity: 1, filter: "blur(0px)", willChange: "auto", transform: "none" }}>
          We're looking for people excited by the possibilities of technology, constantly exploring new means of expression and highly detailed in their practice.
        </h1>
      </div>
<Link href="/contact" passHref>
  <button
    className="border-1 rounded-full border-neutral-500/50 bg-neutral-100/75 px-5 py-3 font-medium text-neutral-700/50 shadow-lg shadow-neutral-500/5 focus:outline-none"
    tabIndex={0}
    style={{ willChange: "transform", transform: "none" }}
  >
    Get in Touch
  </button>
</Link>    </section>
  )
}

export default ServicesInquiries
