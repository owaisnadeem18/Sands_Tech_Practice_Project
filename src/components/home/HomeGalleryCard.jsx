'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const GalleryCard = ({ type, src, poster, label, date, href, isLink = false }) => {
  const Wrapper = isLink ? Link : 'div'

  return (
    <div className="frame-outer group relative m-auto flex h-full w-full overflow-hidden border-orange-300/10 shadow-lg shadow-orange-300/5 transition-all hover:border-orange-300/20 hover:shadow-orange-300/10 rounded-4xl">
      <div className="frame-inner relative h-full w-full overflow-hidden hover:bg-pink-50 inset-1">
        <Wrapper
          {...(isLink && { href, rel: 'noopener noreferrer' })}
          className="h-full block"
        >
          <div className="relative h-full rounded-4xl bg-pink-50">
            {type === 'video' ? (
              <video
                src={src}
                poster={poster}
                autoPlay
                playsInline
                loop
                muted
                preload="metadata"
                className="h-full object-cover w-[100%] max-w-[750px] rounded-4xl"
                controlsList="nodownload"
                disablePictureInPicture
              />
            ) : (
              <Image
                src={src}
                alt={label}
                // Removed max-w-[159px] and h-auto to ensure image fills the card
                // The size of the card itself should dictate the image size
                className="object-cover rounded-4xl h-full"
                fill // Use `fill` for Next/Image to ensure it covers the parent
              />
            )}
          </div>
        </Wrapper>
      </div>
      {label && (
        // Position the label absolutely within the frame-outer
        // and use flexbox to align content.
        // Adjust padding and positioning as needed for different card sizes.
        <div className="absolute bottom-4 left-4 z-10 text-black"> {/* Adjusted bottom and left */}
          <h3 className="text-sm font-medium">{label}</h3>
          {date && <p className="text-xs opacity-70">{date}</p>}
        </div>
      )}
    </div>
  )
}

export default GalleryCard