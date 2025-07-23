import React from 'react'
import Image from 'next/image'

const WorkProjectCards = ({
  title,
  category,
  videoSrc,
  posterSrc,
  imageSrc,
  imageWidth,
  imageHeight,
  logoSrc,
  radialGradientStyle,
  className
}) => {

    const isVideo =!!videoSrc

  return (
      <div className={`${className} transition-transform duration-300 ease-in-out hover:scale-[0.99] p-1 rounded-4xl border-2 border-orange-300/10 hover:border-orange-300/20 hover:shadow-orange-300/5`} style={{ opacity: 1, willChange: 'auto', transform: 'none' }}>
      <h2 className="sr-only">{title} Project Details</h2>
      <p className="sr-only">View details about the {title} project.</p>
      <div className="relative aspect-square w-full origin-center cursor-pointer" type="button" aria-haspopup="dialog" aria-expanded="false" data-state="closed" style={{ opacity: 1 }}>
        <div className="rounded-4xl frame-outer group relative flex h-full w-full overflow-hidden shadow-lg shadow-orange-300/5 hover:shadow-sm hover:shadow-300/5">
          <div className="frame-inner relative h-full w-full overflow-hidden" style={{ opacity: 1 }}>
            <div className="relative h-full w-full focus:outline-none focus:ring-0">
              {isVideo ? (
                // If it's a video project, render the video tag
                <video
                  className="h-full w-full object-cover focus:outline-none focus:ring-0"
                  src={videoSrc}
                  poster={posterSrc}
                  autoPlay
                  playsInline
                  muted
                  loop
                  preload="metadata"
                  disablePictureInPicture
                  disableRemotePlayback
                  controlsList="nodownload"
                ></video>
              ) : (
                // If it's an image project, render the Image tag
                <Image
                  alt={`${title} Project Main`}
                  fetchPriority="high"
                  decoding="async"
                  sizes="(max-width: 640px) 640px, (max-width: 1024px) 1024px, (max-width: 1920px) 1920px, 2560px"
                  src={imageSrc}
                  width={imageWidth}
                  height={imageHeight}
                  className="h-full w-auto object-cover focus:outline-none focus:ring-0"
                />
              )}
            </div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent"></div>
          </div>
          <div className="absolute bottom-6 left-6 hidden items-center gap-3 lg:flex" style={{ opacity: 1, willChange: 'auto', transform: 'none' }}>
            <div className="relative aspect-square size-10 overflow-hidden rounded-lg bg-neutral-100/25">
              {/* Logo for the project */}
              <Image
                alt={`${title} Icon`}
                loading="lazy"
                decoding="async"
                sizes="100vw"
                src={logoSrc}
                width={1000} // Assuming a default for logos, adjust if needed
                height={1000} // Assuming a default for logos, adjust if needed
                className="h-[100%]"
              />
            </div>
            <div className="flex flex-col">
              {/* Title and Category */}
              <h2 className="text-shadow text-xs font-medium text-neutral-50/90 [text-shadow:_0_1px_0_rgb(0_0_0_/30%)]">{title}</h2>
              <h2 className="text-xs font-medium text-neutral-50/75 [text-shadow:_0_1px_0_rgb(0_0_0_/20%)]">{category}</h2>
            </div>
          </div>
          {/* Radial gradient overlay */}
          <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-15" style={{ filter: 'blur(30px)', transform: 'translate3d(0px, 0px, 0px)', background: radialGradientStyle }}></div>
        </div>
      </div>
    </div>
  )
}

export default WorkProjectCards
