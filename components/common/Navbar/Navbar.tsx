"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useMobileNavDrawer } from "@/hooks/useMobileNavDrawer";
import { navbarLinks } from "@/data/data";
import Logo from "../Logo";
import PrimaryButton from "../Button";

export default function Navbar() {
  const mobileNavDrawer = useMobileNavDrawer();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;

      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`relative px-4 py-4 md:px-20 md:py-10 lg:px-10 xl:px-20 font-poppins`}
    >
      <div className="absolute inset-0 bg-gradient-blue-navy-secondary" />

      {/* White background layer with opacity transition */}
      <div
        className={`absolute inset-0 bg-white transition-opacity duration-300 ease-in-out ${
          scrolled ? "opacity-100 shadow-md" : "opacity-0"
        }`}
      />

      <div className="relative container mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div
          className={`${
            scrolled ? "text-gray-800" : "text-white"
          } font-bold text-lg sm:text-xl md:text-2xl`}
        >
          <Link
            href="/"
            className="flex items-center space-x-2"
            aria-label="Home"
          >
            <Logo />
            <span>VidyaInterna Hub</span>
          </Link>
        </div>
        {/* Navigation Links */}
        <ul
          className={`hidden xl:flex space-x-8 ${
            scrolled ? "text-gray-800" : "text-white"
          } font-roboto`}
        >
          {navbarLinks.map((link) => (
            <li key={link.url}>
              <Link
                href={link.url}
                className="font-semibold tracking-wider hover:text-accent transition-colors duration-300"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        {/* CTA Button */}
        <div className="flex space-x-6">
          <PrimaryButton
            buttonType="highlightButton"
            href="#"
            className="hidden md:block"
            ariaLabel="Book a Consultation"
          >
            Book a Consultation
          </PrimaryButton>
          {/* Mobile Menu Button */}
          <button
            onClick={
              mobileNavDrawer.isOpen
                ? mobileNavDrawer.close
                : mobileNavDrawer.open
            }
            className={`block xl:hidden ${
              scrolled ? "text-gray-800" : "text-white"
            } text-2xl focus:outline-none`}
            aria-label="Menu"
          >
            {mobileNavDrawer.isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </nav>
  );
}
