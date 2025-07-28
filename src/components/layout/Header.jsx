"use client"

// In a standard Next.js environment, you would import Link and usePathname like this:
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import React, { useEffect, useState } from 'react'

// Assuming your new icon files are in a 'general' subfolder within 'components'
// Adjust the paths based on your actual file locations relative to Header.jsx

import HamburgerCloseIcon from '../general/HamburgerCloseIcon.jsx'
import HamburgerOpenIcon from '../general/HamburgerOpenIcon.jsx'

// Mock Link component for Canvas preview (REMOVE FOR ACTUAL NEXT.JS PROJECT)
// const Link = ({ href, children, className, target, rel, onClick }) => (
//   <a href={href} className={className} target={target} rel={rel} onClick={onClick}>
//     {children}
//   </a>
// );

// Mock usePathname hook for Canvas preview (REMOVE FOR ACTUAL NEXT.JS PROJECT)
// const usePathname = () => {
//   // You can change this value to '/services', '/work', etc., to see other active states in Canvas.
//   return "/"; // For the purpose of this preview, we'll assume the home path is active.
// };


const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showMobileHeader, setShowMobileHeader] = useState(false); // State to control mobile menu visibility

  let pathName = usePathname();

  // Ensure pathName[1] is lowercase for comparison, handle root path
  const currentPathSegment = pathName.split("/")[1] || "";

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 10) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Effect to prevent body scrolling when mobile menu is open
  useEffect(() => {
    if (showMobileHeader) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset'; // Clean up on unmount
    };
  }, [showMobileHeader]);

  // Define mobile menu items with their paths and labels
  const mobileMenuItems = [
    { label: 'Home', path: '/', icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-home w-6 h-6 mb-2"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
      ) },
    { label: 'About', path: '/about', icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user w-6 h-6 mb-2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
      ) },
    { label: 'Services', path: '/services', icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-briefcase w-6 h-6 mb-2"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
      ) },
    { label: 'Work', path: '/work', icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-folder w-6 h-6 mb-2"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L.37 5.12A2 2 0 0 0 2 2h3.93a2 2 0 0 1 1.66.9l.82 1.2A2 2 0 0 0 10 5h10a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2Z"></path></svg>
      ) },
    { label: 'Writing', path: '/writing', icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-open w-6 h-6 mb-2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
      ) },
    { label: 'Contact', path: '/contact', icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail w-6 h-6 mb-2"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
      ) },
    // Add Instagram and X (Twitter) links as needed, perhaps with their own custom icons
    { label: 'Instagram', path: 'https://instagram.com', external: true, icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram w-6 h-6 mb-2"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.5" y1="6.5" y2="6.5"></line></svg>
      ) },
    { label: 'X', path: 'https://x.com', external: true, icon: (
        // Use the imported HamburgerCloseIcon for the 'X' link in mobile menu
        <HamburgerCloseIcon className="w-6 h-6 mb-2 text-neutral-500" />
      ) },
  ];

  return (
    <>
      {/* Desktop Header Navigation */}
      <nav
        className={`pointer-events-auto fixed left-0 right-0 top-0 z-[50] flex w-screen items-center justify-center transition-transform duration-300 ${
          showHeader ? "translate-y-0" : "-translate-y-full"
        } ${showMobileHeader ? 'hidden md:flex' : ''} `} // Hide desktop nav when mobile menu is open
      >
        <div className="frame-outer mt-4 flex w-fit items-stretch justify-center overflow-hidden border-[1px] border-neutral-300/25 bg-neutral-50 mix-blend-multiply shadow-lg shadow-neutral-500/2xl rounded-4xl">
          {/* Logo */}
          <Link
            href="/"
            className={`
              frame-inner group py-1 relative flex items-stretch focus:outline-none
              ${currentPathSegment === "" ?
                "md:border-[1px] md:border-neutral-600/5 md:bg-white md:shadow-lg md:shadow-neutral-500/15 rounded-4xl m-1"
                : "pointer-events-none md:pointer-events-auto"
              }
              before:pointer-events-none before:absolute before:inset-0 before:rounded-[30px]
              before:bg-[radial-gradient(circle_at_50%_50%,rgba(255,245,230,0.5)_0%,rgba(255,240,235,0.4)_25%,rgba(250,235,245,0.3)_50%,rgba(245,240,255,0.2)_75%,rgba(250,250,255,0.1)_100%)]
              before:p-[1px] before:opacity-0 before:transition-opacity before:duration-500
              group-hover:before:opacity-100
              md:transform-origin-center
            `}
            onClick={() => setShowMobileHeader(false)} // Close mobile menu if open when clicking logo
          >
            <div className="logo_container frame-inner align-center relative m-2 flex w-20 rounded-none md:m-0 md:mx-4 md:p-0 md:pt-[2px]">
              {/* Glyph Icon */}
              <div className="glyph_container z-10 flex w-1/4 items-center overflow-hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 503.67 274.561"
                  className="h-full w-full fill-current pb-1 text-neutral-500"
                >
                  <path
                    d="M270.794 0c-.167 1.807-.479 3.613-.48 5.42-.026 57.494-.021 114.988-.021 172.483v5.122l1.313.262 90.763-158.711 31.098 18.639-89.781 159.078.735.933 155.848-92.244 18.434 32.667L322.71 236.04l.215.958h180.746v37.501h-5.473c-58.661 0-117.322-.025-175.982.062-3.44.005-5.824-1.024-8.253-3.51-20.03-20.497-40.216-40.843-60.363-61.226-.454-.459-1.009-.819-1.842-1.485-8.152 8.135-16.286 16.173-24.332 24.298-13.013 13.141-25.929 26.379-39.012 39.45-1.257 1.256-3.4 2.304-5.134 2.307-60.327.111-120.654.086-180.981.068-.648 0-1.296-.16-2.298-.292v-36.842h180.565l.421-1.234L24.919 143.65l18.417-32.684 155.706 92.177.975-.683-89.855-159.233 32.214-18.694 90.016 159.386 1.103-.234v-5.238c0-57.328-.003-114.655.013-171.983 0-2.155.188-4.31.289-6.465h37Z"
                    className="daybreak-icon_svg__cls-1"
                  ></path>
                </svg>
              </div>
              {/* Wordmark */}
              <div className="wordmark_container z-10 flex w-3/4 items-center overflow-hidden pl-[6%]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1807.236 405.09"
                  className="h-full w-full fill-current text-neutral-500"
                >
                  <path
                    d="M0 13.471c1.591-.309 3.182-.888 4.774-.889 37.327-.019 74.684-.917 111.973.275 57.125 1.826 100.845 26.887 127.203 78.766 13.359 26.293 16.319 54.703 13.736 83.694-2.963 33.266-15.712 62.316-38.941 86.605-23.369 24.436-51.92 38.466-85.359 42.489-8.572 1.031-17.278 1.262-25.925 1.298-33.494.142-66.989.064-100.484.045-2.326-.001-4.652-.185-6.978-.284zm42.18 251.047c26.902 0 53.207.294 79.5-.125 12.919-.206 25.298-3.813 36.931-9.52 42.703-20.949 64.904-65.063 56.884-114.976-8.465-52.685-50.24-87.396-103.609-87.491-21.485-.038-42.971-.006-64.456-.006h-5.251zM783.123 276.366v30.04h-38.768V1.134h38.614v117.912c1.474-1.059 2.45-1.515 3.096-2.258 35.847-41.188 109.296-45.886 152.484-2.884 26.927 26.811 36.18 59.492 32.935 96.282-3.152 35.742-19.697 64.187-49.274 84.64-21.126 14.609-45.054 18.229-70.098 16.223-26.738-2.141-49.428-12.608-66.965-33.338-.293-.346-.779-.53-2.024-1.346Zm73.246-3.395c43.14.281 74.088-30.394 74.329-73.673.246-44.146-30.449-75.94-72.63-77.097-39.124-1.073-74.946 30.705-74.961 74.914-.015 44.502 29.768 75.573 73.262 75.856M1161.523 213.471c3.631 17.705 11.112 32.446 24.774 43.821 33.975 28.289 88.365 20.592 110.699-16.273 3.763-6.211 7.411-8.192 14.273-7.782 10.413.622 20.89.163 31.796.163-7.088 22.088-19.398 39.769-37.474 53.438-52.437 39.654-130.221 28.418-167.024-24.024-35.888-51.137-26.86-144.791 53.754-173.29 68.845-24.339 131.775 15.787 149.27 71.469 5.067 16.125 6.487 32.601 4.11 49.334-.167 1.179-2.014 2.426-3.354 3.036-1.105.502-2.619.107-3.952.107h-176.87099999999998Zm143.473-35.172c-5.566-29.476-33.57-62.71-81.879-57.692-36.117 3.751-58.322 31.586-60.764 57.692zM419.561 164.471v-38.413H294.349V87.784h164.419v181.505h27.379v36.144h-62.923v-22.815c-3.291 3.083-5.898 5.747-8.731 8.145-20.111 17.022-43.595 22.275-69.122 18.632-25.741-3.673-46.113-16.664-56.898-40.511-22.461-49.666 10.169-98.406 56.616-103.129 22.607-2.299 45.584-.972 68.393-1.281 1.947-.026 3.895-.003 6.079-.003m-.013 36.164c-11.771 0-23.073-.107-34.371.031-10.311.126-20.699-.197-30.912.946-18.636 2.085-32.446 16.167-33.437 32.872-1.097 18.502 9.94 33.356 29.212 38.003 17.702 4.268 34.818 1.559 50.645-7.357 10.896-6.138 18.017-15.566 18.724-28.356.65-11.758.138-23.58.138-36.139ZM1513.712 164.471v-38.419h-125.113V87.749h164.379v181.758h27.543v35.794h-63.212v-23.644c-10.198 12.266-21.849 19.793-35.529 24.352-32.743 10.912-68.484 2.118-89.312-21.822-31.66-36.39-19.316-104.056 40.705-117.643 6.436-1.457 13.203-1.889 19.828-1.983 18.33-.26 36.665-.09 54.999-.09zm.082 36.424c-1.343-.115-2.149-.244-2.956-.245-18.319-.011-36.647-.312-54.954.167-6.02.158-12.312 1.528-17.913 3.764-13.549 5.41-22.161 15.333-22.939 30.408-.812 15.721 6.342 27.224 20.343 34.283 18.426 9.29 50.039 5.162 65.656-8.393 7.205-6.254 12.152-14.015 12.622-23.578.587-11.943.141-23.936.141-36.407ZM1615.505 0h38.924v177.378c11.475 0 22.268.119 33.052-.149 1.364-.034 2.94-1.893 3.976-3.245 23.503-30.653 46.944-61.353 70.401-92.042.59-.772 1.225-1.511 2.116-2.606l29.825 23.241-73.687 93.442 87.123 109.298c-2.022.192-3.376.43-4.731.432-12.999.028-26-.091-38.997.094-3.207.046-5.134-1.056-7.044-3.548-21.485-28.023-43.119-55.933-64.598-83.961-2.01-2.624-4.005-3.87-7.422-3.785-9.78.243-19.57.085-29.879.085v90.771h-39.06zM602.87 255.438c6.342-15.131 12.185-29.029 17.996-42.941 16.851-40.344 33.723-80.679 50.463-121.069 1.274-3.075 2.79-4.185 6.191-4.123 12.807.234 25.621.094 39.556.094L578.747 405.09l-35.746-16.342c3.935-8.881 7.742-17.497 11.569-26.103 8.175-18.382 16.278-36.798 24.625-55.101 1.384-3.035 1.263-5.382-.016-8.372-29.558-69.086-59.011-138.217-88.479-207.342-.513-1.204-.97-2.432-1.764-4.431h19.614c6.498 0 13.009.256 19.487-.099 3.703-.203 5.143 1.357 6.451 4.503 21.183 50.966 42.478 101.886 63.754 152.814 1.341 3.21 2.734 6.397 4.628 10.82ZM1111.672 87.697v39.337h-68.643v178.418h-39.044V87.697z"
                    className="daybreak-wordmark_svg__cls-1"
                  ></path>
                </svg>
              </div>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="items relative hidden space-x-1 md:flex md:items-center">
            {["Services", "Work", "Writing", "About", "Contact"].map((item) => {
              const isActive = currentPathSegment === item.toLowerCase();
              return (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className={`
                    frame-inner group relative focus:outline-none m-1
                    ${isActive ?
                      "md:border-[1px] md:border-neutral-600/5 flex items-center md:bg-white md:shadow-lg md:shadow-neutral-500/15 rounded-4xl"
                      : ""
                    }
                    before:pointer-events-none before:absolute before:inset-0 before:rounded-[30px]
                    before:bg-[radial-gradient(circle_at_50%_50%,rgba(255,245,230,0.5)_0%,rgba(255,240,235,0.4)_25%,rgba(250,235,245,0.3)_50%,rgba(245,240,255,0.2)_75%,rgba(250,250,255,0.1)_100%)]
                    before:p-[1px] before:opacity-0 before:transition-opacity before:duration-500
                    group-hover:before:opacity-100
                    md:transform-origin-center
                  `}
                >
                  <h1 className="relative px-3 py-3 text-xs font-normal text-neutral-500 group-hover:text-neutral-700 z-10">
                    {item}
                  </h1>
                </Link>
              );
            })}
          </div>

          {/* Hamburger Icon for Mobile */}
          <HamburgerOpenIcon
            onClick={() => setShowMobileHeader(true)}
            className='block md:hidden cursor-pointer' // Added cursor-pointer for better UX
          />
        </div>
      </nav>

      {/* Mobile Header Overlay */}
      {showMobileHeader && (
        <div className="fixed inset-0 z-[60] bg-white bg-opacity-95 backdrop-blur-xl flex flex-col items-center justify-center p-4 transition-opacity duration-300 ease-in-out">
          {/* Close Button */}
          <HamburgerCloseIcon
            onClick={() => setShowMobileHeader(false)}
            className="absolute top-4 right-4 cursor-pointer"
          />

          {/* Mobile Menu Grid */}
          <div className="grid grid-cols-2 gap-4 max-w-lg w-full">
            {mobileMenuItems.map((item) => {
              // For Canvas preview, we'll manually set 'Home' as active if path is '/'
              // In your Next.js app, currentPathSegment would be dynamic.
              const isActive = (item.path === '/' && currentPathSegment === "") ||
                               (item.path !== '/' && currentPathSegment === item.path.substring(1));
              return (
                <Link
                  key={item.label}
                  href={item.path}
                  target={item.external ? '_blank' : '_self'} // Open external links in new tab
                  rel={item.external ? 'noopener noreferrer' : ''}
                  className={`
                    flex flex-col items-center justify-center p-4 rounded-3xl text-center
                    bg-neutral-50 border-[1px] border-neutral-300/25 shadow-lg shadow-neutral-500/5
                    hover:bg-gray-100 transition-colors duration-200
                    ${isActive ? "bg-gray-100 border-neutral-600/5 shadow-lg shadow-neutral-500/15" : ""}
                  `}
                  onClick={() => setShowMobileHeader(false)} // Close menu on item click
                >
                  {item.icon}
                  <span className="text-sm font-medium text-neutral-700">{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Contact Us Button - Example, adjust as needed */}
          <Link
            href="/contact"
            className="mt-8 px-6 py-3 bg-neutral-50 border-[1px] border-neutral-300/25 rounded-full shadow-lg shadow-neutral-500/5 text-neutral-700 font-medium hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setShowMobileHeader(false)}
          >
            Contact Us
          </Link>
        </div>
      )}
    </>
  );
};

export default Header;
