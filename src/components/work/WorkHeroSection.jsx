// components/ProjectGallery.js
import Image from 'next/image'; // For Next.js optimized images

const WorkHeroSection = () => {
    return (
        <div className="relative mx-auto pt-32 md: pb-58">
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
                                                className="h-full w-auto object-cover focus:outline-none focus:ring-0"
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
                                                className="h-full object-cover w-auto focus:outline-none focus:ring-0"
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

                        <div className="w-[clamp(280px,25vw,400px)]" style={{ opacity: 1, willChange: 'auto', transform: 'none' }}>
                            <h2 id="radix-:r4g:" className="sr-only">Dippy Project Details</h2>
                            <p id="radix-:r4h:" className="sr-only">View details about the Dippy project.</p>
                            <div className="relative aspect-square w-full origin-center cursor-pointer" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:r4f:" data-state="closed" style={{ opacity: 1 }}>
                                <div className="rounded-4xl frame-outer group relative flex h-full w-full overflow-hidden border border-orange-300/10 shadow-lg shadow-orange-300/5 transition-colors duration-500 ease-in-out hover:border-orange-300/20 hover:shadow-sm hover:shadow-orange-300/5 undefined" style={{ transform: 'none', backfaceVisibility: 'hidden', transformOrigin: 'center center', willChange: 'auto' }}>
                                    <div className="frame-inner relative h-full w-full overflow-hidden" style={{ opacity: 1 }}>
                                        <div className="relative h-full w-full focus:outline-none focus:ring-0">
                                            <video
                                                className="h-full w-full object-cover focus:outline-none focus:ring-0"
                                                src="https://stream.mux.com/14npOKIbnDomMSgdNtzdxAiZbo8ZMkWXG1yLCALva2c/high.mp4"
                                                poster="https://image.mux.com/14npOKIbnDomMSgdNtzdxAiZbo8ZMkWXG1yLCALva2c/thumbnail.jpg"
                                                autoPlay
                                                playsInline
                                                muted // Crucial for reliable autoplay across browsers
                                                loop
                                                preload="metadata"
                                                disablePictureInPicture
                                                disableRemotePlayback
                                                controlsList="nodownload"
                                            // For webkit-playsinline and x5-playsinline, React camelCase them to playsInline.
                                            // If they are strictly needed for specific older Android/iOS,
                                            // you might need to reconsider or use a video library that handles them.
                                            // However, playsInline generally suffices for modern browsers.
                                            // x5-video-player-type="h5" // These are non-standard. React might not directly support.
                                            // x5-video-player-fullscreen="false" // These are non-standard. React might not directly support.
                                            ></video>
                                        </div>
                                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent"></div>
                                    </div>
                                    <div className="absolute bottom-6 left-6 hidden items-center gap-3 lg:flex" style={{ opacity: 1, willChange: 'auto', transform: 'none' }}>
                                        <div className="relative aspect-square size-10 overflow-hidden rounded-lg bg-neutral-100/25">
                                            <Image
                                                alt="Dippy Project Icon" // Added descriptive alt text
                                                loading="lazy"
                                                decoding="async"
                                                sizes="100vw"
                                                src="https://cdn.sanity.io/images/oxbtrss9/production/eab8d1d9674a1371b8a4308b01056033c9f492c6-2000x2000.png?q=100&fit=max&auto=format"
                                                width={2000} // Deduced from the image URL (2000x2000.png)
                                                height={2000} // Deduced from the image URL (2000x2000.png)
                                                className="" // Retained original class
                                            />
                                        </div>
                                        <div className="flex flex-col">
                                            <h2 className="text-shadow text-xs font-medium text-neutral-50/90 [text-shadow:_0_1px_0_rgb(0_0_0_/30%)]">Dippy</h2>
                                            <h2 className="text-xs font-medium text-neutral-50/75 [text-shadow:_0_1px_0_rgb(0_0_0_/20%)]">Product</h2>
                                        </div>
                                    </div>
                                    <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-15" style={{ filter: 'blur(30px)', transform: 'translate3d(0px, 0px, 0px)', background: 'radial-gradient(1000px at 17.6487px 210.649px, rgba(255, 69, 0, 0.4), rgba(255, 166, 0, 0.3) 25%, rgba(255, 218, 185, 0.2) 25%, rgba(255, 255, 255, 0))' }}></div>
                                </div>
                            </div>
                        </div>

                        <div className="w-[clamp(280px,25vw,400px)]" style={{ opacity: 1, willChange: 'auto', transform: 'none' }}>
                            <h2 id="radix-:r4l:" className="sr-only">Country Club Project Details</h2>
                            <p id="radix-:r4m:" className="sr-only">View details about the Country Club project.</p>
                            <div className="relative aspect-square w-full origin-center cursor-pointer" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:r4k:" data-state="closed" style={{ opacity: 1 }}>
                                <div className="rounded-4xl frame-outer group relative flex h-full w-full overflow-hidden border border-orange-300/10 shadow-lg shadow-orange-300/5 transition-colors duration-500 ease-in-out hover:border-orange-300/20 hover:shadow-sm hover:shadow-orange-300/5 undefined" style={{ transform: 'none', backfaceVisibility: 'hidden', transformOrigin: 'center center', willChange: 'auto' }}>
                                    <div className="rounded-4xl frame-inner relative h-full w-full overflow-hidden" style={{ opacity: 1 }}>
                                        <div className="relative h-full w-full focus:outline-none focus:ring-0">
                                            {/* Main project image */}
                                            <Image
                                                alt="Country Club Project Main Image" // Added descriptive alt text
                                                fetchPriority="high"
                                                decoding="async"
                                                sizes="(max-width: 640px) 640px, (max-width: 1024px) 1024px, (max-width: 1920px) 1920px, 2560px"
                                                src="https://cdn.sanity.io/images/oxbtrss9/production/3198281814be348b60647f09bf75d40cb5ce64fc-2160x2160.png?q=100&fit=max&auto=format"
                                                width={2160} // Deduced from URL: 2160x2160
                                                height={2160} // Deduced from URL: 2160x2160
                                                className="object-cover focus:outline-none focus:ring-0"
                                            />
                                        </div>
                                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent"></div>
                                    </div>
                                    <div className="absolute bottom-6 left-6 hidden items-center gap-3 lg:flex" style={{ opacity: 1, willChange: 'auto', transform: 'none' }}>
                                        <div className="relative aspect-square size-10 overflow-hidden rounded-lg bg-neutral-100/25">
                                            {/* Project icon/logo image */}
                                            <Image
                                                alt="Country Club Logo" // Added descriptive alt text
                                                loading="lazy"
                                                decoding="async"
                                                sizes="100vw"
                                                src="https://cdn.sanity.io/images/oxbtrss9/production/aa60b56756bda1cd027ff65f6f4db4bfa4076fc0-1000x1000.png?q=100&fit=max&auto=format"
                                                width={1000} // Deduced from URL: 1000x1000
                                                height={1000} // Deduced from URL: 1000x1000
                                                className=""
                                            />
                                        </div>
                                        <div className="flex flex-col">
                                            <h2 className="text-shadow text-xs font-medium text-neutral-50/90 [text-shadow:_0_1px_0_rgb(0_0_0_/30%)]">Country Club</h2>
                                            <h2 className="text-xs font-medium text-neutral-50/75 [text-shadow:_0_1px_0_rgb(0_0_0_/20%)]">Brand</h2>
                                        </div>
                                    </div>
                                    <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-15" style={{ filter: 'blur(30px)', transform: 'translate3d(0px, 0px, 0px)', background: 'radial-gradient(1000px at 30px 181px, rgba(255, 69, 0, 0.4), rgba(255, 166, 0, 0.3) 25%, rgba(255, 218, 185, 0.2) 25%, rgba(255, 255, 255, 0))' }}></div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Row 04 */}

                    <div className='flex w-full justify-center gap-[clamp(12px,2vw,16px)] items-center' >

                        <div className="w-[clamp(280px,25vw,400px)]" style={{ opacity: 1, willChange: 'auto', transform: 'none' }}>
                            <h2 id="radix-:r4q:" className="sr-only">Workmade DTF Project Details</h2>
                            <p id="radix-:r4r:" className="sr-only">View details about the Workmade DTF project.</p>
                            <div className="relative aspect-square w-full origin-center cursor-pointer" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:r4p:" data-state="closed" style={{ opacity: 1 }}>
                                <div className="rounded-4xl frame-outer group relative flex h-full w-full overflow-hidden border border-orange-300/10 shadow-lg shadow-orange-300/5 transition-colors duration-500 ease-in-out hover:border-orange-300/20 hover:shadow-sm hover:shadow-orange-300/5 undefined" style={{ transform: 'none', backfaceVisibility: 'hidden', transformOrigin: 'center center', willChange: 'transform' }}>
                                    <div className="rounded-4xl frame-inner relative h-full w-full overflow-hidden" style={{ opacity: 1 }}>
                                        <div className="relative h-full w-full focus:outline-none focus:ring-0">
                                            <video
                                                className="h-full w-full object-cover focus:outline-none focus:ring-0"
                                                src="https://stream.mux.com/00je8402GKsuW8cefF4EXYUq5x8vTVejas02Kpypz7h02Sk/high.mp4"
                                                poster="https://image.mux.com/00je8402GKsuW8cefF4EXYUq5x8vTVejas02Kpypz7h02Sk/thumbnail.jpg"
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
                                    <div className="absolute bottom-6 left-6 hidden items-center gap-3 lg:flex" style={{ opacity: 1, willChange: 'auto', transform: 'none' }}>
                                        <div className="relative aspect-square size-10 overflow-hidden rounded-lg bg-neutral-100/25">
                                            <Image
                                                alt="Workmade DTF Logo" // Descriptive alt text
                                                loading="lazy"
                                                decoding="async"
                                                sizes="100vw"
                                                src="https://cdn.sanity.io/images/oxbtrss9/production/7d73c7880754931d8bc0cdc092b2b8191e304af9-1000x1000.png?q=100&fit=max&auto=format"
                                                width={1000} // Deduced from URL: 1000x1000
                                                height={1000} // Deduced from URL: 1000x1000
                                                className=""
                                            />
                                        </div>
                                        <div className="flex flex-col">
                                            <h2 className="text-shadow text-xs font-medium text-neutral-50/90 [text-shadow:_0_1px_0_rgb(0_0_0_/30%)]">Workmade DTF</h2>
                                            <h2 className="text-xs font-medium text-neutral-50/75 [text-shadow:_0_1px_0_rgb(0_0_0_/20%)]">Web</h2>
                                        </div>
                                    </div>
                                    <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-15" style={{ filter: 'blur(30px)', transform: 'translate3d(0px, 0px, 0px)', background: 'radial-gradient(1000px at 2px 30px, rgba(255, 69, 0, 0.4), rgba(255, 166, 0, 0.3) 25%, rgba(255, 218, 185, 0.2) 25%, rgba(255, 255, 255, 0))' }}></div>
                                </div>
                            </div>
                        </div>

                        <div className="w-[clamp(280px,25vw,400px)]" style={{ opacity: 1, willChange: 'auto', transform: 'none' }}>
                            <h2 id="radix-:r4v:" className="sr-only">Pursuit Project Details</h2>
                            <p id="radix-:r50:" className="sr-only">View details about the Pursuit project.</p>
                            <div className="relative aspect-square w-full origin-center cursor-pointer" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:r4u:" data-state="closed" style={{ opacity: 1 }}>
                                <div className="rounded-4xl frame-outer group relative flex h-full w-full overflow-hidden border border-orange-300/10 shadow-lg shadow-orange-300/5 transition-colors duration-500 ease-in-out hover:border-orange-300/20 hover:shadow-sm hover:shadow-orange-300/5 undefined" style={{ transform: 'none', backfaceVisibility: 'hidden', transformOrigin: 'center center', willChange: 'auto' }}>
                                    <div className="rounded-4xl frame-inner relative h-full w-full overflow-hidden" style={{ opacity: 1 }}>
                                        <div className="relative h-full w-full focus:outline-none focus:ring-0">
                                            <video
                                                className="h-full w-full object-cover focus:outline-none focus:ring-0"
                                                src="https://stream.mux.com/Nn1IVm1Ukz1R2PvGYkdRW01ZIC1ErilUMB2KrKo3jb02c/high.mp4"
                                                poster="https://image.mux.com/Nn1IVm1Ukz1R2PvGYkdRW01ZIC1ErilUMB2KrKo3jb02c/thumbnail.jpg"
                                                autoPlay
                                                playsInline
                                                muted // Added for reliable autoplay across browsers
                                                loop
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
                                                alt="Pursuit Logo" // Added descriptive alt text for accessibility
                                                loading="lazy"
                                                decoding="async"
                                                sizes="100vw"
                                                src="https://cdn.sanity.io/images/oxbtrss9/production/1e62743920cbd7562312eaab4a55c82928e2d689-1000x1000.png?q=100&fit=max&auto=format"
                                                width={1000} // Deduced from the image URL (1000x1000.png)
                                                height={1000} // Deduced from the image URL (1000x1000.png)
                                                className=""
                                            />
                                        </div>
                                        <div className="flex flex-col">
                                            <h2 className="text-shadow text-xs font-medium text-neutral-50/90 [text-shadow:_0_1px_0_rgb(0_0_0_/30%)]">Pursuit</h2>
                                            <h2 className="text-xs font-medium text-neutral-50/75 [text-shadow:_0_1px_0_rgb(0_0_0_/20%)]">Brand</h2>
                                        </div>
                                    </div>
                                    <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-15" style={{ filter: 'blur(30px)', transform: 'translate3d(0px, 0px, 0px)', background: 'radial-gradient(1000px at 299.803px 360.803px, rgba(255, 69, 0, 0.4), rgba(255, 166, 0, 0.3) 25%, rgba(255, 218, 185, 0.2) 25%, rgba(255, 255, 255, 0))' }}></div>
                                </div>
                            </div>
                        </div>

                    </div>


                    {/* Last Row */}

                    <div className='flex w-full justify-center gap-[clamp(12px,2vw,16px)] items-start' >
                        <div className="w-[clamp(280px,25vw,400px)]" style={{ opacity: 1, willChange: 'auto', transform: 'none' }}>
                            <h2 id="radix-:r54:" className="sr-only">Impel Project Details</h2>
                            <p id="radix-:r55:" className="sr-only">View details about the Impel project.</p>
                            <div className="relative aspect-square w-full origin-center cursor-pointer" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:r53:" data-state="closed" style={{ opacity: 1 }}>
                                <div className="rounded-4xl frame-outer group relative flex h-full w-full overflow-hidden border border-orange-300/10 shadow-lg shadow-orange-300/5 transition-colors duration-500 ease-in-out hover:border-orange-300/20 hover:shadow-sm hover:shadow-orange-300/5 undefined" style={{ transform: 'none', backfaceVisibility: 'hidden', transformOrigin: 'center center', willChange: 'auto' }}>
                                    <div className="rounded-4xl frame-inner relative h-full w-full overflow-hidden" style={{ opacity: 1 }}>
                                        <div className="relative h-full w-full focus:outline-none focus:ring-0">
                                            <video
                                                className="h-full w-full object-cover focus:outline-none focus:ring-0"
                                                src="https://stream.mux.com/5HwvU01a6eA01D3C57MXLzr0002uwYIQhqn2evE9FlwgZNw/high.mp4"
                                                poster="https://image.mux.com/5HwvU01a6eA01D3C57MXLzr0002uwYIQhqn2evE9FlwgZNw/thumbnail.jpg"
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
                                    <div className="absolute bottom-6 left-6 hidden items-center gap-3 lg:flex" style={{ opacity: 1, willChange: 'auto', transform: 'none' }}>
                                        <div className="relative aspect-square size-10 overflow-hidden rounded-lg bg-neutral-100/25">
                                            <Image
                                                alt="Impel Logo"
                                                loading="lazy"
                                                decoding="async"
                                                sizes="100vw"
                                                src="https://cdn.sanity.io/images/oxbtrss9/production/a69c3a86db49eb808777a7d27c38c954939141bb-1000x1000.png?q=100&fit=max&auto=format"
                                                width={1000}
                                                height={1000}
                                                className=""
                                            />
                                        </div>
                                        <div className="flex flex-col">
                                            <h2 className="text-shadow text-xs font-medium text-neutral-50/90 [text-shadow:_0_1px_0_rgb(0_0_0_/30%)]">Impel</h2>
                                            <h2 className="text-xs font-medium text-neutral-50/75 [text-shadow:_0_1px_0_rgb(0_0_0_/20%)]">Product</h2>
                                        </div>
                                    </div>
                                    <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-15" style={{ filter: 'blur(30px)', transform: 'translate3d(0px, 0px, 0px)', background: 'radial-gradient(1000px at 17px 314px, rgba(255, 69, 0, 0.4), rgba(255, 166, 0, 0.3) 25%, rgba(255, 218, 185, 0.2) 25%, rgba(255, 255, 255, 0))' }}></div>
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