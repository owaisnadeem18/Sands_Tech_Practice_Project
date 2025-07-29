// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';

// const GridGallery = () => {
//   return (
//     <div className="grid-wrapper flex w-full items-center bg-red-600  border border-red-400 pl-[284px] pb-19">
//       <div
//         className="relative grid border"
//         style={{
//           gridTemplateColumns: 'repeat(7, clamp(150px, 20vw, 180px))',
//           gridTemplateRows: 'repeat(3, clamp(150px, 20vw, 180px))',
//           gap: 'clamp(6px, 1vw, 10px)',
//           padding: 'clamp(0.5rem, 2vw, 1rem)',
//         }}
//       >
//         {/* Adaline Main Video */}
//         <div className='border border-red-400' style={{ gridArea: '1 / 3 / span 3 / span 3' }}>
//           <div className="frame-outer group relative flex w-full overflow-hidden border rounded-4xl border-orange-300/10 shadow-lg shadow-orange-300/5 transition-colors duration-500 ease-in-out hover:border-orange-300/20 hover:shadow-sm hover:shadow-orange-300/5">
//             <div className="frame-inner relative w-full overflow-hidden">
//               <div className="group cursor-pointer">
//                 <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/30 to-black/0 transition-opacity duration-300 group-hover:opacity-0"></div>
//                 <video
//                   className="h-full w-full object-cover aspect-square"
//                   src="https://stream.mux.com/OnemXGNOXH7wLlm8ql2aJ8TxPbKyN8QN6NBNsoi1oCk/high.mp4"
//                   poster="https://image.mux.com/OnemXGNOXH7wLlm8ql2aJ8TxPbKyN8QN6NBNsoi1oCk/thumbnail.jpg"
//                   autoPlay
//                   playsInline
//                   muted
//                   loop
//                   preload="metadata"
//                   disablePictureInPicture
//                   controlsList="nodownload"
//                 ></video>
//                 <div className="absolute bottom-8 left-8 z-20 group-hover:opacity-0 transition-opacity duration-300">
//                   <h2 className="text-white text-base">Adaline</h2>
//                   <h2 className="text-white/70 text-base">Preview</h2>
//                 </div>
//               </div>
//             </div>
//             <div
//               className="pointer-events-none absolute inset-0 z-10 opacity-0 group-hover:opacity-15 transition-opacity duration-300 ease-out"
//               style={{
//                 filter: 'blur(30px)',
//                 background:
//                   'radial-gradient(1000px at 20px 543.5px, rgba(255,69,0,0.4), rgba(255,166,0,0.3) 25%, rgba(255,218,185,0.2) 25%, rgba(255,255,255,0))',
//               }}
//             ></div>
//           </div>
//         </div>

//         {/* About Section */}
//         <div style={{ gridArea: '1 / 2 / span 1 / span 1' }}>
//           <div className="frame-outer group relative flex h-full w-full overflow-hidden border border-orange-300/10 shadow-lg shadow-orange-300/5 transition-colors duration-500 ease-in-out hover:border-orange-300/20 hover:shadow-sm rounded-4xl hover:shadow-orange-300/5">
//             <div className="frame-inner relative h-full w-full overflow-hidden">
//               <Link href="/about" className="flex h-full w-full flex-col gap-1">
//                 <div className="relative h-full w-full bg-white/60">
//                   <div className="absolute inset-0 z-20 rounded-[30px] bg-[radial-gradient(circle_at_50%_50%,rgba(255,245,230,0)_0%,rgba(255,240,235,0)_25%,rgba(250,235,245,0)_50%,rgba(245,240,255,0)_50%,rgba(250,235,245,0.5)_75%,rgba(245,240,255,0.6)_90%,rgba(250,250,255,0.8)_100%)]"></div>
//                   <div className="absolute inset-0 z-20 rounded-[30px] bg-[radial-gradient(circle_at_50%_50%,rgba(255,245,230,0.9)_0%,rgba(255,240,235,0.8)_25%,rgba(250,235,245,0.7)_50%,rgba(245,240,255,0.6)_75%,rgba(250,250,255,0.5)_100%)] opacity-0 mix-blend-overlay transition-opacity duration-500 hover:opacity-100"></div>
//                   <div className="relative z-10 h-full w-full">
//                     <video
//                       className="h-full w-full scale-110 object-cover"
//                       src="https://stream.mux.com/OO1qAtvxBfcdTXc3xXNClTA6OSU01NOOffLEf8K02dFYc/high.mp4"
//                       autoPlay
//                       playsInline
//                       loop
//                       muted
//                       preload="metadata"
//                       disablePictureInPicture
//                       controlsList="nodownload"
//                     ></video>
//                   </div>
//                   <div className="absolute inset-0 z-30 rounded-[30px] bg-white/40 backdrop-blur-sm opacity-0">
//                     <h1 className="absolute bottom-6 left-6 max-w-[4ch] text-2xl text-neutral-400 mix-blend-multiply font-[450]">Our Team</h1>
//                   </div>
//                 </div>
//               </Link>
//             </div>
//           </div>

//         </div>

//         <div
//           className='rounded-4xl'
//           style={{ gridArea: "2 / 1 / span 2 / span 2", willChange: "transform", opacity: 1, filter: "blur(0px)", transform: "none" }}
//         >
//           <div
//             className="frame-outer group relative flex h-full w-full overflow-hidden border border-orange-300/10 shadow-lg shadow-orange-300/5 transition-colors duration-500 ease-in-out hover:border-orange-300/20 hover:shadow-sm hover:shadow-orange-300/5 rounded-4xl"
//             style={{ transform: "scale(0.99)", backfaceVisibility: "hidden", transformOrigin: "center center", willChange: "transform" }}
//           >
//             <div className="frame-inner relative h-full w-full overflow-hidden flex flex-col gap-1 rounded-4xl">
//               {/* Video 1 */}
//               <div className="frame-inner flex h-full w-full cursor-pointer items-center gap-4 bg-white/30 p-5 rounded-4xl shadow-sm transition-all duration-300 ease-in-out hover:bg-white/90 md:p-2">
//                 <div className="aspect-square h-fit w-5/12 overflow-hidden rounded-full shadow-md md:rounded-3xl">
//                   <div className="relative h-full w-full focus:outline-none focus:ring-0">
//                     <video
//                       className="h-full w-full object-cover focus:outline-none focus:ring-0"
//                       src="https://stream.mux.com/01cEjb4KT7loGeMCdScL8E9uR54BBbKTIWWXoOSrhNgk/high.mp4"
//                       poster="https://image.mux.com/01cEjb4KT7loGeMCdScL8E9uR54BBbKTIWWXoOSrhNgk/thumbnail.jpg"
//                       playsInline
//                       loop
//                       autoPlay
//                       muted
//                       preload="metadata"
//                       disablePictureInPicture
//                       disableRemotePlayback
//                       controlsList="nodownload"
//                     />
//                   </div>
//                 </div>
//                 <div className="flex-grow-2 flex w-full flex-col">
//                   <h3 className="text-xs font-medium text-neutral-600 md:text-xs 2xl:text-base">Dropbox</h3>
//                   <p className="text-xs text-neutral-500/80 md:text-xs 2xl:text-base">January 14, 2025</p>
//                 </div>
//               </div>

//               {/* Image 1 */}
//               <div className="frame-inner flex h-full w-full cursor-pointer items-center gap-4 rounded-4xl bg-white/30 p-2 shadow-sm transition-all duration-300 ease-in-out hover:bg-white/90 md:p-2">
//                 <div className="aspect-square h-fit w-5/12 overflow-hidden rounded-full shadow-md md:rounded-3xl">
//                   <div className="relative h-full w-full focus:outline-none focus:ring-0">
//                     <Image
//                   alt="Superpower"
//                   src= "/images/brand.webp"
//                   fill
//                   className="object-cover focus:outline-none focus:ring-0"
//                   sizes="(max-width: 640px) 640px, (max-width: 1024px) 1024px, (max-width: 1920px) 1920px, 2560px"
//                   priority
//                 />
//                   </div>
//                 </div>
//                 <div className="flex-grow-2 flex w-full flex-col">
//                   <h3 className="text-xs font-medium text-neutral-600 md:text-xs 2xl:text-base">Superpower</h3>
//                   <p className="text-xs text-neutral-500/80 md:text-xs 2xl:text-base">June 5, 2024</p>
//                 </div>
//               </div>

//               {/* Video 2 */}
//               <div className="frame-inner flex h-full w-full cursor-pointer items-center gap-4 bg-white/30 p-2 shadow-sm transition-all duration-300 ease-in-out hover:bg-white/90 md:p-2 rounded-4xl">
//                 <div className="aspect-square h-fit w-5/12 overflow-hidden rounded-full shadow-md md:rounded-3xl ">
//                   <div className="relative h-full w-full focus:outline-none focus:ring-0">
//                     <video
//                       className="h-full w-full object-cover focus:outline-none focus:ring-0"
//                       src="https://stream.mux.com/7702sO36Citl31Kb1eGzGf7iEAa6jOkU3oKTq5hHEezg/high.mp4"
//                       poster="https://image.mux.com/7702sO36Citl31Kb1eGzGf7iEAa6jOkU3oKTq5hHEezg/thumbnail.jpg"
//                       playsInline
//                       loop
//                       muted
//                       autoPlay
//                       preload="metadata"
//                       disablePictureInPicture
//                       disableRemotePlayback
//                       controlsList="nodownload"
//                     />
//                   </div>
//                 </div>
//                 <div className="flex-grow-2 flex w-full flex-col rounded-4xl">
//                   <h3 className="text-xs font-medium text-neutral-600 md:text-xs 2xl:text-base">Adidas x Crypto the Game</h3>
//                   <p className="text-xs text-neutral-500/80 md:text-xs 2xl:text-base">May 14, 2024</p>
//                 </div>
//               </div>
//             </div>

//             <div
//               className="pointer-events-none absolute inset-0 z-10 overflow-hidden opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-15"
//               style={{
//                 filter: "blur(30px)",
//                 transform: "translate3d(0px, 0px, 0px)",
//                 background: "radial-gradient(1000px at 171.15px 125.65px, rgba(255, 69, 0, 0.4), rgba(255, 166, 0, 0.3) 25%, rgba(255, 218, 185, 0.2) 25%, rgba(255, 255, 255, 0))"
//               }}
//             ></div>
//           </div>
//         </div>

//         <div
//           style={{
//             gridArea: "1 / 6 / span 2 / span 2",
//             willChange: "transform",
//             opacity: 1,
//             filter: "blur(0px)",
//             transform: "none",
//           }}
//           className='rounded-4xl'
//         >
//           <div
//             className="frame-outer rounded-4xl group relative flex h-full w-full overflow-hidden border border-orange-300/10 shadow-lg shadow-orange-300/5 transition-colors duration-500 ease-in-out hover:border-orange-300/20 hover:shadow-sm hover:shadow-orange-300/5"
//             style={{
//               transform: "none",
//               backfaceVisibility: "hidden",
//               transformOrigin: "center center",
//               willChange: "transform",
//             }}
//           >
//             <div className="frame-inner relative h-full w-full overflow-hidden">
//               <a
//                 className="cursor-pointer"
//                 target="_blank"
//                 href="https://www.instagram.com/p/DJ4WZaVRzXR/"
//                 rel="noopener noreferrer"
//               >
//                 <div className="relative h-full w-full focus:outline-none focus:ring-0">
//                   <video
//                     className="h-full w-full object-cover focus:outline-none focus:ring-0"
//                     src="https://stream.mux.com/OfbRjcFC23gAutFoxj9vfEaQKGTF98SS7MJZSwjGL1Y/high.mp4"
//                     poster="https://image.mux.com/OfbRjcFC23gAutFoxj9vfEaQKGTF98SS7MJZSwjGL1Y/thumbnail.jpg"
//                     autoPlay
//                     playsInline
//                     webkit-playsinline="true"
//                     x5-playsinline="true"
//                     x5-video-player-type="h5"
//                     x5-video-player-fullscreen="false"
//                     loop
//                     preload="metadata"
//                     disablePictureInPicture
//                     disableRemotePlayback
//                     controlsList="nodownload"
//                     muted
//                   />
//                 </div>
//               </a>
//             </div>

//             <div
//               className="pointer-events-none absolute inset-0 z-10 overflow-hidden opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-15"
//               style={{
//                 filter: "blur(30px)",
//                 transform: "translate3d(0px, 0px, 0px)",
//                 background:
//                   "radial-gradient(1000px at 107.15px 57.65px, rgba(255, 69, 0, 0.4), rgba(255, 166, 0, 0.3) 25%, rgba(255, 218, 185, 0.2) 25%, rgba(255, 255, 255, 0))",
//               }}
//             ></div>
//           </div>
//         </div>

//         <div
//           style={{
//             gridArea: '3 / 6 / span 1 / span 1',
//             willChange: 'transform',
//             opacity: 1,
//             filter: 'blur(0px)',
//             transform: 'none',
//           }}
//           className='rounded-4xl'
//         >
//           <div
//             className="frame-outer group relative flex h-full w-full overflow-hidden border border-orange-300/10 shadow-lg shadow-orange-300/5 transition-colors duration-500 ease-in-out hover:border-orange-300/20 hover:shadow-sm hover:shadow-orange-300/5 rounded-4xl"
//             style={{
//               transform: 'none',
//               backfaceVisibility: 'hidden',
//               transformOrigin: 'center center',
//               willChange: 'auto',
//             }}
//           >
//             <div className="frame-inner relative h-full w-full overflow-hidden">
//               <iframe
//                 allow="autoplay"
//                 width="100%"
//                 height="100%"
//                 src="https://rive.app/s/-szp_kKcaUStCh5IADM0QA/embed"
//                 className="overflow aspect-square h-full w-full"
//               ></iframe>
//             </div>
//             <div
//               className="pointer-events-none absolute inset-0 z-10 overflow-hidden opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-15"
//               style={{
//                 filter: 'blur(30px)',
//                 transform: 'translate3d(0px, 0px, 0px)',
//                 background:
//                   'radial-gradient(1000px at 94px 6.5px, rgba(255, 69, 0, 0.4), rgba(255, 166, 0, 0.3) 25%, rgba(255, 218, 185, 0.2) 25%, rgba(255, 255, 255, 0))',
//               }}
//             ></div>
//           </div>
//         </div>


//       </div>
//     </div>
//   );
// };

// export default GridGallery;
