import React from 'react';
import Image from 'next/image';

const Link = ({ href, children, className, target, rel, tabIndex, style, onClick }) => (
  <a href={href} className={className} target={target} rel={rel} tabIndex={tabIndex} style={style} onClick={onClick}>
    {children}
  </a>
);

const ImageSequence = () => {
  return (
    <main className="relative z-[100] h-full w-full">
      {/* Fixed Image Section */}
      <div className=" fixed inset-0 w-full" style={{ transform: 'none', transformOrigin: '50% 50% 0px' }}>
        <div className="fixed inset-0 z-[80] p-2" style={{ transform: 'none', transformOrigin: '50% 50% 0px' }}>
          <div className="h-full w-full" style={{ '--image-position': '50% -15vh', willChange: 'auto' }}>
            {/* Using standard <img> tag for Canvas compatibility */}
            <Image
              alt="Hero Image"
              width={1920}
              height={1080}
              decoding="async"
              // data-nimg="1" // Removed: Next.js Image specific prop
              className="rounded-4xl frame-inner relative z-[90] h-full w-full object-cover"
              src="/images/hero-writing-img-section.webp" // Path relative to your public directory
              style={{ objectPosition: 'var(--image-position, 50% 0vh)' }}
            />
            {/* Close Button */}
            <Link href="/writing" className="absolute right-4 top-4 z-[200] rounded-full px-4 py-4 text-white transition-colors hover:text-white" tabIndex={-1} style={{ opacity: 1, willChange: 'auto' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x h-5 w-5">
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Scrollable Content Section */}
      <div className="relative" style={{ marginTop: '63svh', willChange: 'auto' }}>
        <div className="relative rounded-t-[24px] bg-[#FCFAFB] overscroll-behavior-none z-[105]">
          <div className="absolute left-1/2 top-3 -translate-x-1/2">
            <div className="h-1 w-12 rounded-full bg-neutral-500/15"></div>
          </div>
          <div className="relative h-full w-full">
            <div className="relative z-[95] min-h-screen" style={{ opacity: 1, willChange: 'auto', transform: 'none' }}>
              <section className="flex w-full flex-col items-center justify-center px-4 pt-32 text-neutral-500">
                <h3 className="my-2">June 29, 2025</h3>
                <h1 className="my-2 max-w-4xl text-center text-4xl text-neutral-700 md:text-5xl lg:text-6xl" style={{ lineHeight: '125%' }}>A new standard for image sequences on the web</h1>
                <h2 className="text-neutral-60 my-2 max-w-lg text-center text-lg">Engineering high-fidelity scroll-driven animations without compromise</h2>
                <div className="my-6 flex justify-center"><span className="text-2xl text-neutral-400">~</span></div>
                <div className="max-w-lg text-center text-2xl text-neutral-600 lg:text-3xl" style={{ lineHeight: '135%' }}>
                  <p>Our approach came to reflect a core belief: that engineering can be as much a creative practice as it is a technical one.</p>
                </div>
                <div className="my-6 flex justify-center"><span className="text-2xl text-neutral-400">~</span></div>
              </section>
              <article className="mx-auto max-w-xl text-pretty px-4 py-4 text-neutral-500">
                <p className="mt-4 text-pretty text-lg leading-[165%]">Creating animations on the web often means choosing between visual fidelity and performance.</p>
                <p className="mt-4 text-pretty text-lg leading-[165%]">Superpower was our first experiment in scroll-driven animation. Using MP4s got us partway there but revealed key limitations: full loading upfront, compression artifacts, and browser-specific issues like Safari pausing playback on devices in low-power mode.</p>
                <p className="mt-4 text-pretty text-lg leading-[165%]">When we began work on Adaline's site, we saw an opportunity to push the interaction further. Studying image sequences, we found the detail and cross-browser consistency we'd been missing, but also new performance challenges to solve.</p>
                <p className="mt-4 text-pretty text-lg leading-[165%]">This time, we weren't interested in compromise. By rethinking each part of the interaction, we made a series of targeted design and engineering choices to shape an experience that delivers both quality and speed.</p>
                <hr className="my-16 h-px border-0 bg-gradient-to-r from-transparent via-zinc-300 to-transparent" />
                <h2 className="mt-12 text-pretty text-2xl font-[450] text-neutral-600">Image Compression</h2>
                <p className="mt-4 text-pretty text-lg leading-[165%]">We began by prototyping a CLI-based compression pipeline: extracting PNG frames from a 4K MP4 using <Link href="https://ffmpeg.org/ffmpeg.html" className="text-pretty text-neutral-400 hover:underline">FFmpeg</Link>, then converting them to WebP with Google's <Link href="https://developers.google.com/speed/webp/docs/cwebp" className="text-pretty text-neutral-400 hover:underline">cwebp</Link> utility.</p>
                <p className="mt-4 text-pretty text-lg leading-[165%]">Early tests turned a 700MB video into 500 PNG frames totalling 2,000MB. After downscaling these to 2K resolution webp images, we compressed the full set to just 30MB, resulting in a 99% reduction in file size with no perceptible loss in visual quality.</p>
                <p className="mt-4 text-pretty text-lg leading-[165%]">Later, our motion team streamlined the workflow by exporting JPEG sequences directly from Cinema4D. This let us skip frame extraction and use an image compression CLI tool called <Link href="http://www.graphicsmagick.org/" className="text-pretty text-neutral-400 hover:underline">GraphicsMagick</Link> compress the PNG images to JPEG. After our attempts to compress every individual frame and cut half of the frames, we realized there were still unresolved edge cases. For users on mobile, rendering a full-bleed 16:9 video layout (similar to ‘object-fit: cover') crops out two-thirds of the image. We were loading data that never reached the screen.</p>
                <p className="mt-4 text-pretty text-lg leading-[165%]">Inspired by image sequencing approaches in sites like <Link href="https://opalcamera.com/" className="text-pretty text-neutral-400 hover:underline">Opal Camera</Link>, we implemented conditional rendering to serve mobile-specific sequences. Four distinct variants would be exported: 3:5 and 16:9, each in standard and high resolution. The mobile versions were compressed more aggressively to better accommodate smaller screens and cellular bandwidth.</p>
                <figure className="flex flex-col items-center justify-center pt-8 relative -translate-x-1/2">
                  <div className="relative flex flex-col items-center justify-center undefined w-screen px-4">
                    <div className="relative h-full w-full max-w-6xl">
                      <video src="/videos/hero-writing-video-1.mp4" loop playsInline autoPlay muted webkit-playsinline="true" x5-playsinline="true" x5-video-player-type="h5" x5-video-player-fullscreen="false" disablePictureInPicture disableRemotePlayback controlsList="nodownload" className="h-full w-full rounded-2xl undefined "></video>
                    </div>
                  </div>
                  <figcaption className="mb-3 mt-3 max-w-prose px-4 text-center text-sm text-neutral-400">After compression, conditional rendering serves a specific sequence dependent on the user</figcaption>
                </figure>
                <h2 className="mt-12 text-pretty text-2xl font-[450] text-neutral-600">Progressive Loading</h2>
                <p className="mt-4 text-pretty text-lg leading-[165%]">To prevent blocking user interaction, we tried a sparse loading algorithm that aimed to completely eliminate all pre-loaders. It streamed in every eighth frame, every fourth, every second, until the entire sequence was complete. Users could interact immediately, and playback was still usable at a lower frame rate while new frames were being streamed in. The problem with sequential loading is that users who scrolled quickly through the sequence would skip ahead of the loaded frames and never see how the video ends.</p>
                <figure className="flex flex-col items-center justify-center pt-8 relative -translate-x-1/2">
                  <div className="relative flex flex-col items-center justify-center undefined w-screen px-4">
                    <div className="relative h-full w-fit max-w-6xl">
                      <video src="/videos/hero-writing-video-2.mp4" loop playsInline muted autoPlay webkit-playsinline="true" x5-playsinline="true" x5-video-player-type="h5" x5-video-player-fullscreen="false" disablePictureInPicture disableRemotePlayback controlsList="nodownload" className="h-full w-full rounded-2xl undefined "></video>
                    </div>
                  </div>
                  <figcaption className="mb-3 mt-3 max-w-prose px-4 text-center text-sm text-neutral-400">If scrolling outpaces loading, sequential playback can't keep up.</figcaption>
                </figure>
                <p className="mt-4 text-pretty text-lg leading-[165%]">We used a technique inspired by <Link href="https://en.wikipedia.org/wiki/Binary_space_partitioning" className="text-pretty text-neutral-400 hover:underline">binary space partitioning</Link>, which is commonly known for its use in Doom. This technique was famously used by John Carmack, where he applied academic research to speed up map rendering in the game engine using recursive subdivision. Similarly, the final version of the website loads the first and last frame of the sequence as keyframes, finds the midpoints, and loads the frames at the midpoints recursively until the entire sequence is filled in.</p>
                <figure className="flex flex-col items-center justify-center pt-8 ">
                  <div className="relative flex flex-col items-center justify-center undefined ">
                    <div className="relative h-full w-fit ">
                      <video src="/videos/hero-writing-video-3.mp4" loop playsInline autoPlay muted webkit-playsinline="true" x5-playsinline="true" x5-video-player-type="h5" x5-video-player-fullscreen="false" disablePictureInPicture disableRemotePlayback controlsList="nodownload" className="h-full w-full rounded-2xl undefined "></video>
                    </div>
                  </div>
                  <figcaption className="mb-3 mt-3 max-w-prose px-4 text-center text-sm text-neutral-400">Binary space partitioning loads the keyframes recursively</figcaption>
                </figure>
                <p className="mt-4 text-pretty text-lg leading-[165%]">After we found the correct loading algorithm, we realized a loader was important to block the user interaction to only load the first 20 frames so the experience would be usable. It was important to maintain a high quality visual experience and not only think about how to get the user into the site as quickly as possible.</p>
                <h2 className="mt-12 text-pretty text-2xl font-[450] text-neutral-600">Maintaining Visual Continuity</h2>
                <p className="mt-4 text-pretty text-lg leading-[165%]">Since it loads data non-sequentially, the wave based loading algorithm created a side effect. If the user was scrolling forwards, the canvas would immediately try to display the newly loaded frames even if they belonged to an earlier part of the sequence, breaking visual continuity. By tracking the scroll direction, we can set a condition for the canvas to only render the nearest loaded frame in the user's scroll direction regardless of the order frames are loaded.</p>
                <figure className="flex flex-col items-center justify-center pt-8 relative -translate-x-1/2">
                  <div className="relative flex flex-col items-center justify-center undefined w-screen px-4">
                    <div className="relative h-full w-fit  max-w-6xl">
                      <video src="/videos/hero-writing-video-4.mp4" muted loop playsInline autoPlay webkit-playsinline="true" x5-playsinline="true" x5-video-player-type="h5" x5-video-player-fullscreen="false" disablePictureInPicture disableRemotePlayback controlsList="nodownload" className="h-full w-full rounded-2xl undefined "></video>
                    </div>
                  </div>
                  <figcaption className="mb-3 mt-3 max-w-prose px-4 text-center text-sm text-neutral-400">While frames download in the background, seeking is limited to the nearest frame in the direction of user scroll.</figcaption>
                </figure>
                <h2 className="mt-12 text-pretty text-2xl font-[450] text-neutral-600">Frame Timing</h2>
                <p className="mt-4 text-pretty text-lg leading-[165%]">If the user scrolls really quickly, they might traverse hundreds of frames in a fraction of a second, far more than their display's refresh rate. Redrawing the canvas on every scroll event would cause dropped frames, so we solved this with <Link href="https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame" className="text-pretty text-neutral-400 hover:underline"><code className="text-pretty rounded bg-gray-100 px-1 text-sm">requestAnimationFrame()</code></Link> to synchronize frame rendering with the display's refresh rate resulting in smooth playback regardless of scroll speed.</p>
                <h2 className="mt-12 text-pretty text-2xl font-[450] text-neutral-600">Custom Easing &amp; Frame Distribution</h2>
                <p className="mt-4 text-pretty text-lg leading-[165%]">We had a discussion with the motion team to either bake the easing directly into the 3D render or control it dynamically in code. Since rendering a single video can take up to ten hours, we implemented a cubic bezier function in our component (similar to the implementations seen in CSS easing or animation libraries). This let us prototype different easing values without re-rendering the scene.</p>
                <p className="mt-4 text-pretty text-lg leading-[165%]">One subtle tradeoff of this approach is how easing affects perceived frame rate during scroll. In steeper parts of the curve where time is compressed, more frames are packed into the scroll distance, effectively accelerating visual progress. Scrolling during this section feels like smooth high-FPS playback.</p>
                <p className="mt-4 text-pretty text-lg leading-[165%]">In contrast, flatter parts of the curve stretch time. The same scroll distance advances the video more slowly, since there are fewer frames distributed along this part of the curve. This creates more sparse low-FPS playback, especially when scrolling slowly where users may notice larger visual gaps between frames.</p>
                <p className="mt-4 text-pretty text-lg leading-[165%]">The total number of frames is constant, but their visual distribution over scroll is non-uniform based on the slope of the easing curve.</p>
                <figure className="flex flex-col items-center justify-center pt-8 ">
                  <div className="relative flex flex-col items-center justify-center undefined ">
                    <div className="relative h-full w-fit ">
                      <video src="/videos/hero-writing-video-5.mp4" muted loop playsInline autoPlay webkit-playsinline="true" x5-playsinline="true" x5-video-player-type="h5" x5-video-player-fullscreen="false" disablePictureInPicture disableRemotePlayback controlsList="nodownload" className="h-full w-full rounded-2xl undefined "></video>
                    </div>
                  </div>
                </figure>
                <h2 className="mt-12 text-pretty text-2xl font-[450] text-neutral-600">Dynamic Quality Rendering</h2>
                <p className="mt-4 text-pretty text-lg leading-[165%]">As the product's launch approached, our design engineering team faced internal tensions on whether to optimize for performance or visual fidelity. Some pushed for aggressive optimization, even suggesting to remove the image sequence altogether for users on slower connections, while others wanted to prioritize delivering the highest quality experience under the assumption that most users would be on high-bandwidth internet.</p>
                <p className="mt-4 text-pretty text-lg leading-[165%]">Instead of serving high quality images throughout the entire experience, we dynamically change the render quality based on the user's movement. When the user scrolls, we serve a lower-quality sequence, leveraging the fact that motion naturally masks compression artifacts. When scrolling stops, a 350ms debounce triggers the loading of higher-resolution frames, restoring detail only when it's most likely to be seen and appreciated.</p>
                <figure className="flex flex-col items-center justify-center pt-8 relative -translate-x-1/2">
                  <div className="relative flex flex-col items-center justify-center undefined w-screen px-4">
                    <div className="relative h-full w-fit max-w-6xl">
                      <video src="/videos/hero-writing-video-6.mp4" muted loop playsInline autoPlay webkit-playsinline="true" x5-playsinline="true" x5-video-player-type="h5" x5-video-player-fullscreen="false" disablePictureInPicture disableRemotePlayback controlsList="nodownload" className="h-full w-full rounded-2xl undefined "></video>
                    </div>
                  </div>
                  <figcaption className="mb-3 mt-3 max-w-prose px-4 text-center text-sm text-neutral-400">Playback quality dynamically changes based on user behaviour, lowering during scrolling and improving when stationary.</figcaption>
                </figure>
                <h2 className="mt-12 text-pretty text-2xl font-[450] text-neutral-600">Conclusion</h2>
                <p className="mt-4 text-pretty text-lg leading-[165%]">Our approach came to reflect a core belief: that engineering can be as much a creative practice as it is a technical one.</p>
                <p className="mt-4 text-pretty text-lg leading-[165%]">The pursuit we first began with Superpower finally reaches a satisfying resolution here. Instead of becoming a limitation, refusing to compromise became our greatest strength. At the end, nothing was sacrificed, and everything is expressed.</p>
              </article>
              <footer className="mt-16 pb-24 pt-8">
                <div className="mb-8 text-center">
                  <p className="px-2 text-sm font-medium uppercase tracking-wide text-neutral-400">Division of product design and engineering, Daybreak Studio</p>
                  <p className="mt-2 text-sm font-medium uppercase tracking-wide text-neutral-400">72 Stafford St, Suite 400, Toronto ON M5V 2V9</p>
                </div>
                {/* The close button for the footer, linking back to /writing */}
                <Link href="/writing" className="cursor-pointer text-center text-sm text-neutral-500 transition-colors duration-300 hover:text-neutral-400">
                  <h3>Close</h3>
                </Link>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ImageSequence;
