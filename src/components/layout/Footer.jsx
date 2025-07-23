"use client"

import React from "react";
import { usePathname } from "next/navigation";

const Footer = () => {

  const path = usePathname() 
  const isHome = path === "/"

  return (
    <footer className={`relative flex flex-col items-center justify-center gap-4 py-8 md:flex-row md:gap-8 ${ isHome ? "bg-white" : ""}`}>
      <a
        href="https://instagram.com/daybreakstudio"
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs text-neutral-900/20 transition-colors duration-200 hover:text-neutral-900/50 focus:outline-none"
      >
        Instagram
      </a>
      <a
        href="https://twitter.com/madebydaybreak"
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs text-neutral-900/20 transition-colors duration-200 hover:text-neutral-900/50 focus:outline-none"
      >
        Twitter
      </a>
      <a
        href="https://ca.linkedin.com/company/daybreakstudio"
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs text-neutral-900/20 transition-colors duration-200 hover:text-neutral-900/50 focus:outline-none"
      >
        LinkedIn
      </a>
      <p className="text-xs text-neutral-900/20">Daybreak Studio © 2025</p>
    </footer>
  );
};

export default Footer;
