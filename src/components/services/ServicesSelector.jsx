import { services } from '@/data/servicesSelectorData'
import React from 'react'
import { motion } from 'framer-motion'

const ServicesSelector = ({ selected, setSelected }) => {

    console.log(selected)

  return (
    <div>
      <div className="frame-outer mt-4 flex w-fit items-stretch justify-center p-1 2xl:absolute 2xl:left-8 2xl:border-[1px] 2xl:border-stone-300/25 2xl:shadow-2xl 2xl:shadow-stone-500/15 2xl:backdrop-blur-3xl rounded-4xl">
        <nav className="frame-inner rounded-4xl bg-white relative grid grid-cols-4 backdrop-blur-2xl 2xl:grid-cols-2 2xl:grid-rows-2 2xl:gap-2 2xl:p-2">
          {services.map((item, index) => (
            <motion.button
              onClick={() => setSelected(item.key)}
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: "easeOut", delay: index * 0.05 }}
              className={`relative cursor-pointer rounded-2xl text-sm font-[450] transition-colors duration-300 focus:outline-none text-neutral-400 hover:text-neutral-500`}
            >
              <span className="relative z-10 flex flex-col">
                {/* 2XL View */}
                <span className="hidden aspect-[4/5] items-start justify-end p-4 text-neutral-400 2xl:flex 2xl:flex-col">
                  <span className="text-neutral-400">{item.label}</span>
                </span>

                {/* Default View */}
                <span className="mt-1 block px-4 py-3 text-center 2xl:hidden text-neutral-400">
                  {item.label}
                </span>
              </span>

              {/* Background Frame */}
              <span className={`frame-inner absolute inset-0 z-0 ${selected == item.key ? "bg-gray-50 shadow-xl shadow-stone-400/20 backdrop-blur-lg " : "bg-white/30"}  shadow-lg shadow-stone-500/15 backdrop-blur-2xl 2xl:rounded-2xl`} />
            </motion.button>
          ))}
        </nav>
      </div>
    </div>
  )
}

export default ServicesSelector
