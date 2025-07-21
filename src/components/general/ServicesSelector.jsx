import { services } from '@/data/servicesSelectorData'
import React from 'react'

const ServicesSelector = ({selected , setSelected}) => {

    return (
        <div>
            <div className="frame-outer mt-4 flex w-fit items-stretch justify-center p-1 2xl:absolute 2xl:left-8 2xl:border-[1px] 2xl:border-stone-300/25 2xl:shadow-2xl 2xl:shadow-stone-500/15 2xl:backdrop-blur-3xl rounded-4xl">
                <nav className="frame-inner rounded-4xl relative grid grid-cols-4  bg-white backdrop-blur-2xl 2xl:grid-cols-2 2xl:grid-rows-2 2xl:gap-2 2xl:p-2">
                    {services.map((label, index) => (
                        <button
                            onClick={() => setSelected(label) }
                            key={index}
                            className={`relative rounded-2xl text-sm font-[450] transition-colors duration-300 focus:outline-none text-neutral-400 hover:text-neutral-500 ${selected == label ? "text-black font-bold" : 'text-neutral-400 hover:text-neutral-500' } `}
                        >
                            <span className="relative z-10 flex flex-col">
                                {/* 2XL View: Vertical layout */}
                                <span className="hidden aspect-[4/5] items-start justify-end border-dotted border-neutral-200/80 p-4 text-neutral-400 2xl:flex 2xl:flex-col">
                                    <span className="text-neutral-400">{label.label}</span>
                                </span>

                                {/* Default View: Horizontal layout */}
                                <span className="mt-1 block px-4 py-3 text-center 2xl:hidden text-neutral-400">
                                    {label}
                                </span>
                            </span>

                            {/* Background Frame */}
                            <span className="frame-inner absolute inset-0 z-0 border-[1px] border-stone-600/5 bg-white/30 shadow-lg shadow-stone-500/15 backdrop-blur-2xl 2xl:rounded-2xl" />
                        </button>
                    ))}
                </nav>
            </div>
        </div>
    )
}

export default ServicesSelector
