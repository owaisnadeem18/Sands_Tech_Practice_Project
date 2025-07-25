'use client'
import React from 'react'
import Image from 'next/image'

const GalleryCard = ({ type, src, poster, label, date, href, isLink = false }) => {
  const Wrapper = isLink ? 'a' : 'div'

  return (
    <div className="frame-outer group relative m-auto flex h-full w-full overflow-hidden border border-orange-300/10 shadow-lg shadow-orange-300/5 transition-all hover:border-orange-300/20 hover:shadow-orange-300/10 rounded-4xl">
      <div className="frame-inner relative h-full w-full overflow-hidden">
        <Wrapper
          {...(isLink && { href, target: '_blank', rel: 'noopener noreferrer' })}
          className="h-full w-full block"
        >
          <div className="relative h-full w-full">
            {type === 'video' ? (
              <video
                src={src}
                poster={poster}
                autoPlay
                playsInline
                loop
                muted
                preload="metadata"
                className="h-full w-full object-cover"
                controlsList="nodownload"
                disablePictureInPicture
              />
            ) : (
              <Image
                src={src}
                alt={label}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            )}
          </div>
        </Wrapper>
      </div>
      {label && (
        <div className="absolute bottom-4 left-4 z-10 text-white">
          <h3 className="text-sm font-medium">{label}</h3>
          {date && <p className="text-xs opacity-70">{date}</p>}
        </div>
      )}
    </div>
  )
}

export default GalleryCard
