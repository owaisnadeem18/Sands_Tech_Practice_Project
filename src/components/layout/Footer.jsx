"use client"

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Footer = () => {

  const path = usePathname() 

  const hideOnRoutes = ["/about" , "/contact" , "/writing/image-sequence" ] 

  if (hideOnRoutes.includes(path)) return null

  const isHome = path === "/"

  return (
    <footer className={`relative flex flex-col items-center justify-center gap-4 py-8 md:flex-row md:gap-8 ${ isHome ? "bg-white" : ""}`}>
      <Link
        href="https://instagram.com/daybreakstudio"
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs text-neutral-900/20 transition-colors duration-200 hover:text-neutral-900/50 focus:outline-none"
      >
        Instagram
      </Link>
      <Link
        href="https://twitter.com/madebydaybreak"
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs text-neutral-900/20 transition-colors duration-200 hover:text-neutral-900/50 focus:outline-none"
      >
        Twitter
      </Link>
      <Link
        href="https://ca.linkedin.com/company/daybreakstudio"
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs text-neutral-900/20 transition-colors duration-200 hover:text-neutral-900/50 focus:outline-none"
      >
        LinkedIn
      </Link>
      <p className="text-xs text-neutral-900/20">Daybreak Studio © 2025</p>
    </footer>
  );
};

export default Footer;
