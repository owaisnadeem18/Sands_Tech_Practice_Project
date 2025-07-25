'use client'
import React from 'react'
import GalleryCard from './HomeGalleryCard'
import heroImg from '@/assets/images/dropBoxImg.webp'

const GridGallery = () => {
  return (
    <div className="w-full pt-20 overflow-x-auto md:overflow-x-auto pb-20 pl-4">
        <div className="max-w-[16ch] pb-5 m-auto text-center text-3xl font-[450] text-neutral-700/50 lg:text-3xl 2xl:text-4xl">
  <span
    className="inline-block"
    style={{ filter: "blur(0px)", transform: "translateY(0px)", opacity: 1, willChange: "auto" }}
  >
    A design and technology studio.
  </span>
</div>

      <div
        className="relative inline-grid"
        style={{
          gridTemplateColumns: 'repeat(7, clamp(150px, 20vw, 180px))',
          gridTemplateRows: 'repeat(3, clamp(150px, 20vw, 180px))',
          gap: 'clamp(6px, 1vw, 10px)',
          padding: 'clamp(0.5rem, 2vw, 1rem)',
        }}
      >
        {/* Main large video */}
        <div style={{ gridArea: '1 / 3 / span 3 / span 3' }}>
          <GalleryCard
            type="video"
            src="https://stream.mux.com/OnemXGNOXH7wLlm8ql2aJ8TxPbKyN8QN6NBNsoi1oCk/high.mp4"
            poster="https://image.mux.com/OnemXGNOXH7wLlm8ql2aJ8TxPbKyN8
            
            
            
            QN6NBNsoi1oCk/thumbnail.jpg"
            label="Adaline"
            date="Preview"
          />
        </div>

        {/* About Page */}
        <div style={{ gridArea: '1 / 2 / span 1 / span 1' }}>
          <GalleryCard
            type="video"
            src="https://stream.mux.com/OO1qAtvxBfcdTXc3xXNClTA6OSU01NOOffLEf8K02dFYc/high.mp4"
            href="/about"
            isLink
            label="Our Team"
          />
        </div>

        {/* Dropbox + Superpower + Adidas */}
        <div style={{ gridArea: '2 / 1 / span 2 / span 2' }} className="flex flex-col gap-2">
          <GalleryCard
            type="video"
            src="https://stream.mux.com/01cEjb4KT7loGeMCdScL8E9uR54BBbKTIWWXoOSrhNgk/high.mp4"
            poster="https://image.mux.com/01cEjb4KT7loGeMCdScL8E9uR54BBbKTIWWXoOSrhNgk/thumbnail.jpg"
            label="Dropbox"
            date="January 14, 2025"
          />
          <GalleryCard
            type="image"
            src={heroImg}
            label="Superpower"
            date="June 5, 2024"
          />
          <GalleryCard
            type="video"
            src="https://stream.mux.com/7702sO36Citl31Kb1eGzGf7iEAa6jOkU3oKTq5hHEezg/high.mp4"
            poster="https://image.mux.com/7702sO36Citl31Kb1eGzGf7iEAa6jOkU3oKTq5hHEezg/thumbnail.jpg"
            label="Adidas x Crypto the Game"
            date="May 14, 2024"
          />
        </div>

        {/* Instagram Link */}
        <div style={{ gridArea: '1 / 6 / span 2 / span 2' }}>
          <GalleryCard
            type="video"
            src="https://stream.mux.com/OfbRjcFC23gAutFoxj9vfEaQKGTF98SS7MJZSwjGL1Y/high.mp4"
            poster="https://image.mux.com/OfbRjcFC23gAutFoxj9vfEaQKGTF98SS7MJZSwjGL1Y/thumbnail.jpg"
            href="https://www.instagram.com/p/DJ4WZaVRzXR/"
            isLink
          />
        </div>

        {/* Rive Embed */}
        <div style={{ gridArea: '3 / 6 / span 1 / span 1' }}>
          <div className="frame-outer group relative h-full w-full overflow-hidden border border-orange-300/10 shadow-lg rounded-4xl">
            <iframe
              allow="autoplay"
              width="100%"
              height="100%"
              src="https://rive.app/s/-szp_kKcaUStCh5IADM0QA/embed"
              className="aspect-square h-full w-full"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default GridGallery
