// components/ProjectGallery.js
import Image from 'next/image'; // For Next.js optimized images

const WorkHeroSection = () => {
  return (
    <div className="relative mx-auto pt-32">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-8">
        <div className="flex flex-col gap-4" style={{ opacity: 1, willChange: 'auto' }}>
          {/* Row 1 */}
          <div className="flex w-full justify-center gap-[clamp(12px,2vw,16px)] items-end">
            {/* Dropbox x McLaren F1 Project (Video) */}
            <div className="w-[clamp(260px,22vw,360px)] rounded-4xl " style={{ opacity: 1, willChange: 'auto', transform: 'none' }}>
              <h2 id="radix-:rnv:" className="sr-only">Dropbox x McLaren F1 Project Details</h2>
              <p id="radix-:ro0:" className="sr-only">View details about the Dropbox x McLaren F1 project.</p>
              <div className="relative aspect-square w-full origin-center cursor-pointer" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:rnu:" data-state="closed" style={{ opacity: 1 }}>
                <div className="rounded-4xl frame-outer group relative flex h-full w-full overflow-hidden border border-orange-300/10 shadow-lg shadow-orange-300/5 transition-colors duration-500 ease-in-out hover:border-orange-300/20 hover:shadow-sm hover:shadow-orange-300/5 undefined" style={{ transform: 'none', backfaceVisibility: 'hidden', transformOrigin: 'center center', willChange: 'auto' }}>
                  <div className="frame-inner relative h-full w-full overflow-hidden" style={{ opacity: 1 }}>
                    <div className="rounded-4xl relative h-full w-full focus:outline-none focus:ring-0">
                      <video
                        className="h-full w-full object-cover focus:outline-none focus:ring-0"
                        src="https://stream.mux.com/dNm2qFVLwWOucrss01eGH2hllGY8tQ6OFouzmAg3Bv2o/high.mp4"
                        poster="https://image.mux.com/dNm2qFVLwWOucrss01eGH2hllGY8tQ6OFouzmAg3Bv2o/thumbnail.jpg"
                        autoPlay
                        playsInline
                        muted 
                        loop
                        preload="metadata"
                        disablePictureInPicture
                        disableRemotePlayback
                        controlsList="nodownload"
                      ></video>
                    </div>
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent"></div>
                  </div>
                  <div className="rounded-4xl absolute bottom-6 left-6 hidden items-center gap-3 lg:flex" style={{ opacity: 1, willChange: 'auto', transform: 'none' }}>
                    <div className="relative aspect-square size-10 overflow-hidden rounded-4xl bg-neutral-100/25">
                      <Image
                        alt="Dropbox x McLaren F1"
                        loading="lazy"
                        decoding="async"
                        sizes="100vw"
                        src="https://cdn.sanity.io/images/oxbtrss9/production/6732224a3b7a7f45a1df12b2a32c8113c796c26d-1000x1000.png?q=100&fit=max&auto=format"
                        width={518}
                        height={518} 
                        className="rounded-4xl h-[100%]"
                      />
                    </div>
                    <div className="flex flex-col">
                      <h2 className="text-shadow text-xs font-medium text-neutral-50/90 [text-shadow:_0_1px_0_rgb(0_0_0_/30%)]">Dropbox x McLaren F1</h2>
                      <h2 className="text-xs font-medium text-neutral-50/75 [text-shadow:_0_1px_0_rgb(0_0_0_/20%)]">Web</h2>
                    </div>
                  </div>
                  <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-15" style={{ filter: 'blur(30px)', transform: 'translate3d(0px, 0px, 0px)', background: 'radial-gradient(1000px at 204.002px 145.002px, rgba(255, 69, 0, 0.4), rgba(255, 166, 0, 0.3) 25%, rgba(255, 218, 185, 0.2) 25%, rgba(255, 255, 255, 0))' }}></div>
                </div>
              </div>
            </div>

            {/* Adaline Project (Image) */}
            <div className="w-[clamp(380px,35vw,520px)]" style={{ opacity: 1, willChange: 'auto', transform: 'none' }}>
              <h2 id="radix-:ro4:" className="sr-only">Adaline Project Details</h2>
              <p id="radix-:ro5:" className="sr-only">View details about the Adaline project.</p>
              <div className="relative aspect-square w-full origin-center cursor-pointer" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:ro3:" data-state="closed" style={{ opacity: 1 }}>
                <div className="rounded-4xl frame-outer group relative flex h-full w-full overflow-hidden border border-orange-300/10 shadow-lg shadow-orange-300/5 transition-colors duration-500 ease-in-out hover:border-orange-300/20 hover:shadow-sm hover:shadow-orange-300/5 undefined" style={{ transform: 'none', backfaceVisibility: 'hidden', transformOrigin: 'center center', willChange: 'auto' }}>
                  <div className="frame-inner relative h-full w-full overflow-hidden" style={{ opacity: 1 }}>
                    <div className="relative h-full w-full focus:outline-none focus:ring-0">
                      <Image
                        alt="Adaline Project Main" // Added descriptive alt
                        fetchPriority="high"
                        decoding="async"
                        sizes="(max-width: 640px) 640px, (max-width: 1024px) 1024px, (max-width: 1920px) 1920px, 2560px"
                        src="https://cdn.sanity.io/images/oxbtrss9/production/4a4e8f6024279d60f3b9aba529d187c2c181cd6a-7112x5092.png?q=100&fit=max&auto=format"
                        width={7112} // Deduced from URL: 7112x5092
                        height={5092} // Deduced from URL: 7112x5092
                        className="object-cover focus:outline-none focus:ring-0"
                      />
                    </div>
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent"></div>
                  </div>
                  <div className="absolute bottom-6 left-6 hidden items-center gap-3 lg:flex" style={{ opacity: 1, willChange: 'auto', transform: 'none' }}>
                    <div className="relative aspect-square size-10 overflow-hidden rounded-lg bg-neutral-100/25">
                      <Image
                        alt="Adaline Icon"
                        loading="lazy"
                        decoding="async"
                        sizes="100vw"
                        src="https://cdn.sanity.io/images/oxbtrss9/production/5523eeb3cc28b816d8fa3d386a7fa52bd5de1273-2000x2000.png?q=100&fit=max&auto=format"
                        width={2000} 
                        height={4000}
                        className="h-[100%]"
                      />
                    </div>
                    <div className="flex flex-col">
                      <h2 className="text-shadow text-xs font-medium text-neutral-50/90 [text-shadow:_0_1px_0_rgb(0_0_0_/30%)]">Adaline</h2>
                      <h2 className="text-xs font-medium text-neutral-50/75 [text-shadow:_0_1px_0_rgb(0_0_0_/20%)]">Brand, Web</h2>
                    </div>
                  </div>
                  <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-15" style={{ filter: 'blur(30px)', transform: 'translate3d(0px, 0px, 0px)', background: 'radial-gradient(1000px at 7.40002px 493.4px, rgba(255, 69, 0, 0.4), rgba(255, 166, 0, 0.3) 25%, rgba(255, 218, 185, 0.2) 25%, rgba(255, 255, 255, 0))' }}></div>
                </div>
              </div>
            </div>

            {/* Superpower Project (Image) */}
            <div className="w-[clamp(260px,22vw,360px)]" style={{ opacity: 1, willChange: 'auto', transform: 'none' }}>
              <h2 id="radix-:ro9:" className="sr-only">Superpower Project Details</h2>
              <p id="radix-:roa:" className="sr-only">View details about the Superpower project.</p>
              <div className="relative aspect-square w-full origin-center cursor-pointer" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:ro8:" data-state="closed" style={{ opacity: 1 }}>
                <div className="rounded-4xl frame-outer group relative flex h-full w-full overflow-hidden border border-orange-300/10 shadow-lg shadow-orange-300/5 transition-colors duration-500 ease-in-out hover:border-orange-300/20 hover:shadow-sm hover:shadow-orange-300/5 undefined" style={{ transform: 'none', backfaceVisibility: 'hidden', transformOrigin: 'center center', willChange: 'transform' }}>
                  <div className="frame-inner relative h-full w-full overflow-hidden" style={{ opacity: 1 }}>
                    <div className="relative h-full w-full focus:outline-none focus:ring-0">
                      <Image
                        alt="Superpower Project Main" // Added descriptive alt
                        fetchPriority="high"
                        decoding="async"
                        sizes="(max-width: 640px) 640px, (max-width: 1024px) 1024px, (max-width: 1920px) 1920px, 2560px"
                        src="https://cdn.sanity.io/images/oxbtrss9/production/ed34ed32820178628b4c72cc5b0ee0ec2e67c64d-3360x1891.webp?q=100&fit=max&auto=format"
                        width={3360} // Deduced from URL: 3360x1891
                        height={1891} // Deduced from URL: 3360x1891
                        className="object-cover focus:outline-none focus:ring-0"
                      />
                    </div>
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent"></div>
                  </div>
                  <div className="absolute bottom-6 left-6 hidden items-center gap-3 lg:flex" style={{ opacity: 1, willChange: 'auto', transform: 'none' }}>
                    <div className="relative aspect-square size-10 overflow-hidden rounded-lg bg-neutral-100/25">
                      <Image
                        alt="Superpower Icon" // Added descriptive alt
                        loading="lazy"
                        decoding="async"
                        sizes="100vw"
                        src="https://cdn.sanity.io/images/oxbtrss9/production/44ac2d160d2d3d4a2f029a230c081107b776bb8a-2000x2000.png?q=100&fit=max&auto=format"
                        width={2000} // Deduced from URL: 2000x2000
                        height={2000} // Deduced from URL: 2000x2000
                        className=""
                      />
                    </div>
                    <div className="flex flex-col">
                      <h2 className="text-shadow text-xs font-medium text-neutral-50/90 [text-shadow:_0_1px_0_rgb(0_0_0_/30%)]">Superpower</h2>
                      <h2 className="text-xs font-medium text-neutral-50/75 [text-shadow:_0_1px_0_rgb(0_0_0_/20%)]">Brand, Product, Web</h2>
                    </div>
                  </div>
                  <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-15" style={{ filter: 'blur(30px)', transform: 'translate3d(0px, 0px, 0px)', background: 'radial-gradient(1000px at 322px 36.9678px, rgba(255, 69, 0, 0.4), rgba(255, 166, 0, 0.3) 25%, rgba(255, 218, 185, 0.2) 25%, rgba(255, 255, 255, 0))' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex w-full justify-center gap-[clamp(12px,2vw,16px)] items-center">
            {/* Dropbox Project (Video) */}
            <div className="w-[clamp(280px,25vw,400px)]" style={{ opacity: 1, willChange: 'auto', transform: 'none' }}>
              <h2 id="radix-:roe:" className="sr-only">Dropbox Project Details</h2>
              <p id="radix-:rof:" className="sr-only">View details about the Dropbox project.</p>
              <div className="relative aspect-square w-full origin-center cursor-pointer" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:rod:" data-state="closed" style={{ opacity: 1 }}>
                <div className="rounded-4xl frame-outer group relative flex h-full w-full overflow-hidden border border-orange-300/10 shadow-lg shadow-orange-300/5 transition-colors duration-500 ease-in-out hover:border-orange-300/20 hover:shadow-sm hover:shadow-orange-300/5 undefined" style={{ transform: 'none', backfaceVisibility: 'hidden', transformOrigin: 'center center', willChange: 'auto' }}>
                  <div className="frame-inner relative h-full w-full overflow-hidden" style={{ opacity: 1 }}>
                    <div className="relative h-full w-full focus:outline-none focus:ring-0">
                      <video
                        className="h-full w-full object-cover focus:outline-none focus:ring-0"
                        src="https://stream.mux.com/01cEjb4KT7loGeMCdScL8E9uR54BBbKTIWWXoOSrhNgk/high.mp4"
                        poster="https://image.mux.com/01cEjb4KT7loGeMCdScL8E9uR54BBbKTIWWXoOSrhNgk/thumbnail.jpg"
                        autoPlay
                        playsInline
                        loop
                        muted
                        preload="metadata"
                        disablePictureInPicture
                        disableRemotePlayback
                        controlsList="nodownload"
                      ></video>
                    </div>
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent"></div>
                  </div>
                  <div className="absolute bottom-6 left-6 hidden items-center gap-3 lg:flex" style={{ opacity: 1, willChange: 'auto', transform: 'none' }}>
                    <div className="relative aspect-square size-10 overflow-hidden rounded-lg bg-neutral-100/25">
                      <Image
                        alt="Dropbox Icon" // Added descriptive alt
                        loading="lazy"
                        decoding="async"
                        sizes="100vw"
                        src="https://cdn.sanity.io/images/oxbtrss9/production/6732224a3b7a7f45a1df12b2a32c8113c796c26d-1000x1000.png?q=100&fit=max&auto=format"
                        width={1000} // Deduced from URL: 1000x1000
                        height={1000} // Deduced from URL: 1000x1000
                        className=""
                      />
                    </div>
                    <div className="flex flex-col">
                      <h2 className="text-shadow text-xs font-medium text-neutral-50/90 [text-shadow:_0_1px_0_rgb(0_0_0_/30%)]">Dropbox</h2>
                      <h2 className="text-xs font-medium text-neutral-50/75 [text-shadow:_0_1px_0_rgb(0_0_0_/20%)]">Brand</h2>
                    </div>
                  </div>
                  <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-15" style={{ filter: 'blur(30px)', transform: 'translate3d(0px, 0px, 0px)', background: 'radial-gradient(1000px at 33.4985px 103.499px, rgba(255, 69, 0, 0.4), rgba(255, 166, 0, 0.3) 25%, rgba(255, 218, 185, 0.2) 25%, rgba(255, 255, 255, 0))' }}></div>
                </div>
              </div>
            </div>

            {/* Adidas x Crypto the Game Project (Video) */}
            <div className="w-[clamp(280px,25vw,400px)]" style={{ opacity: 1, willChange: 'auto', transform: 'none' }}>
              <h2 id="radix-:roj:" className="sr-only">Adidas x Crypto the Game Project Details</h2>
              <p id="radix-:rok:" className="sr-only">View details about the Adidas x Crypto the Game project.</p>
              <div className="relative aspect-square w-full origin-center cursor-pointer" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:roi:" data-state="closed" style={{ opacity: 1 }}>
                <div className="rounded-4xl frame-outer group relative flex h-full w-full overflow-hidden border border-orange-300/10 shadow-lg shadow-orange-300/5 transition-colors duration-500 ease-in-out hover:border-orange-300/20 hover:shadow-sm hover:shadow-orange-300/5 undefined" style={{ transform: 'none', backfaceVisibility: 'hidden', transformOrigin: 'center center' }}>
                  <div className="frame-inner relative h-full w-full overflow-hidden" style={{ opacity: 1 }}>
                    <div className="relative h-full w-full focus:outline-none focus:ring-0">
                      <video
                        className="h-full w-full object-cover focus:outline-none focus:ring-0"
                        src="https://stream.mux.com/7702sO36Citl31Kb1eGzGf7iEAa6jOkU3oKTq5hHEezg/high.mp4"
                        poster="https://image.mux.com/7702sO36Citl31Kb1eGzGf7iEAa6jOkU3oKTq5hHEezg/thumbnail.jpg"
                        autoPlay
                        playsInline
                        loop
                        muted
                        preload="metadata"
                        disablePictureInPicture
                        disableRemotePlayback
                        controlsList="nodownload"
                      ></video>
                    </div>
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent"></div>
                  </div>
                  <div className="absolute bottom-6 left-6 hidden items-center gap-3 lg:flex" style={{ opacity: 1, willChange: 'auto', transform: 'none' }}>
                    <div className="relative aspect-square size-10 overflow-hidden rounded-lg bg-neutral-100/25">
                      <Image
                        alt="Adidas x Crypto the Game Icon" // Added descriptive alt
                        loading="lazy"
                        decoding="async"
                        sizes="100vw"
                        src="https://cdn.sanity.io/images/oxbtrss9/production/8abb07f863adad325b87d6f5ef4e88e0f6da3163-1000x1000.png?q=100&fit=max&auto=format"
                        width={1000} // Deduced from URL: 1000x1000
                        height={1000} // Deduced from URL: 1000x1000
                        className=""
                      />
                    </div>
                    <div className="flex flex-col">
                      <h2 className="text-shadow text-xs font-medium text-neutral-50/90 [text-shadow:_0_1px_0_rgb(0_0_0_/30%)]">Adidas x Crypto the Game</h2>
                      <h2 className="text-xs font-medium text-neutral-50/75 [text-shadow:_0_1px_0_rgb(0_0_0_/20%)]">Brand</h2>
                    </div>
                  </div>
                  <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-15" style={{ filter: 'blur(30px)', transform: 'translate3d(0px, 0px, 0px)', background: 'radial-gradient(1000px at 0px 0px, rgba(255, 69, 0, 0.4), rgba(255, 166, 0, 0.3) 25%, rgba(255, 218, 185, 0.2) 25%, rgba(255, 255, 255, 0))' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Row 3 */}
          <div className="flex w-full justify-center gap-[clamp(12px,2vw,16px)] items-center">
            {/* Uniswap Project (Video) */}
            <div className="w-[clamp(280px,25vw,400px)]" style={{ opacity: 1, willChange: 'auto', transform: 'none' }}>
              <h2 id="radix-:roo:" className="sr-only">Uniswap Project Details</h2>
              <p id="radix-:rop:" className="sr-only">View details about the Uniswap project.</p>
              <div className="relative aspect-square w-full origin-center cursor-pointer" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:ron:" data-state="closed" style={{ opacity: 1 }}>
                <div className="rounded-4xl frame-outer group relative flex h-full w-full overflow-hidden border border-orange-300/10 shadow-lg shadow-orange-300/5 transition-colors duration-500 ease-in-out hover:border-orange-300/20 hover:shadow-sm hover:shadow-orange-300/5 undefined" style={{ transform: 'none', backfaceVisibility: 'hidden', transformOrigin: 'center center' }}>
                  <div className="frame-inner relative h-full w-full overflow-hidden" style={{ opacity: 1 }}>
                    <div className="relative h-full w-full focus:outline-none focus:ring-0">
                      <video
                        className="h-full w-full object-cover focus:outline-none focus:ring-0"
                        src="https://stream.mux.com/J5P00PGPEPQ6Y5OHptJpxbymrIfQe9xeLoOJZIKntq01E/high.mp4"
                        poster="https://image.mux.com/J5P00PGPEPQ6Y5OHptJpxbymrIfQe9xeLoOJZIKntq01E/thumbnail.jpg"
                        autoPlay
                        playsInline
                        loop
                        muted
                        preload="metadata"
                        disablePictureInPicture
                        disableRemotePlayback
                        controlsList="nodownload"
                      ></video>
                    </div>
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent"></div>
                  </div>
                  <div className="absolute bottom-6 left-6 hidden items-center gap-3 lg:flex" style={{ opacity: 1, willChange: 'auto', transform: 'none' }}>
                    <div className="relative aspect-square size-10 overflow-hidden rounded-lg bg-neutral-100/25">
                      <Image
                        alt="Uniswap Icon" // Added descriptive alt
                        loading="lazy"
                        decoding="async"
                        sizes="100vw"
                        src="https://cdn.sanity.io/images/oxbtrss9/production/e40696d135dcdffa899be588608d79c808a49d6b-1000x1000.png?q=100&fit=max&auto=format"
                        width={1000} // Deduced from URL: 1000x1000
                        height={1000} // Deduced from URL: 1000x1000
                        className=""
                      />
                    </div>
                    <div className="flex flex-col">
                      <h2 className="text-shadow text-xs font-medium text-neutral-50/90 [text-shadow:_0_1px_0_rgb(0_0_0_/30%)]">Uniswap</h2>
                      <h2 className="text-xs font-medium text-neutral-50/75 [text-shadow:_0_1px_0_rgb(0_0_0_/20%)]">Brand</h2>
                    </div>
                  </div>
                  <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-15" style={{ filter: 'blur(30px)', transform: 'translate3d(0px, 0px, 0px)', background: 'radial-gradient(1000px at 0px 0px, rgba(255, 69, 0, 0.4), rgba(255, 166, 0, 0.3) 25%, rgba(255, 218, 185, 0.2) 25%, rgba(255, 255, 255, 0))' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkHeroSection;