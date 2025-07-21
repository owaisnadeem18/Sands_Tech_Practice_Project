import { newsFeedData } from '@/data/newsFeedData'
import React from 'react'
import Image from 'next/image'

const Newsfeed = () => {
  return (
    <div className='px-8 py-12 md:px-20 lg:px-36'>
      <h2 className="mb-4 text-lg text-neutral-400 md:text-lg lg:text-2xl">Newsfeed</h2>

      {/* Tailwind columns */}
      <div className="columns-1 sm:columns-2 lg:columns-4 gap-4 space-y-4">
        {newsFeedData.map((item, index) => (
          <div
            key={index}
            className="break-inside-avoid bg-white rounded-3xl border border-orange-300/10 shadow-lg shadow-orange-300/5 hover:border-orange-300/20 hover:shadow-sm hover:shadow-orange-300/5 transition-all duration-300"
          >
            <div className="relative w-full rounded-t-2xl overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                className="object-cover w-full h-auto"
              />
            </div>
            <div className='px-4 pb-4 pt-2'>
              <h2 className="text-lg font-semibold text-[#737373] mb-2">{item.title}</h2>
              <p className="text-sm text-neutral-500 mb-4">{item.description}</p>
              <div className="flex text-sm gap-2 items-center text-neutral-400 flex-wrap">
                <span className='bg-gray-100 text-xs px-3 py-1 rounded-2xl'>{item.date}</span>
                <span className="truncate px-3 flex items-center gap-2 text-xs bg-gray-100 py-1 rounded-2xl">
                  {item.tag}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-external-link shrink-0"
                  >
                    <path d="M15 3h6v6"></path>
                    <path d="M10 14 21 3"></path>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Newsfeed
