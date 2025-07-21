import React from 'react'
import GridGallery from './HomePageGrid'

const GridHome = () => {
    return (
        <div className="h-[92vh] bg-[linear-gradient(0deg,_#fff5e6,_#fff0eb_25%,_#faebf5_50%,_#f5f0ff_75%,_#fafaff)]  w-full  text-white">

            <div className="h-[92vh] flex flex-col justify-center items-center">
                <div className="max-w-[16ch] text-center text-3xl font-[450] text-neutral-700/50  lg:text-3xl 2xl:text-4xl mt-34 mb-4">
                    <span className="inline-block" style={{ filter: "blur(0px)", transform: "translateY(0px)", opacity: 1, willChange: "auto" }}>
                        A
                    </span>{" "}
                    <span className="inline-block" style={{ filter: "blur(0px)", transform: "translateY(0px)", opacity: 1, willChange: "auto" }}>
                        design
                    </span>{" "}
                    <span className="inline-block" style={{ filter: "blur(0px)", transform: "translateY(0px)", opacity: 1, willChange: "auto" }}>
                        and
                    </span>{" "}
                    <span className="inline-block" style={{ filter: "blur(0px)", transform: "translateY(0px)", opacity: 1, willChange: "auto" }}>
                        technology
                    </span>{" "}
                    <span className="inline-block" style={{ filter: "blur(0px)", transform: "translateY(0px)", opacity: 1, willChange: "auto" }}>
                        studio.
                    </span>
                </div>
                <GridGallery />
            </div>

        </div>


    )
}

export default GridHome
