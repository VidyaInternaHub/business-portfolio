import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { navbarLinks } from "@/data/data";
import Logo from "../common/Logo";
import PrimaryButton from "../common/PrimaryButton";

export default function Navbar() {
  return (
    <nav className="bg-gradient-blue-navy-secondary px-4 py-4 md:px-20 md:py-10 lg:px-10 xl:px-20 font-poppins">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="text-white font-bold text-lg sm:text-xl md:text-2xl">
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
        <ul className="hidden xl:flex space-x-8 text-white font-roboto">
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
        <div className="flex space-x-4">
          <PrimaryButton
            href="#"
            className="hidden md:block"
            ariaLabel="Book a Consultation"
          >
            Book a Consultation
          </PrimaryButton>
          {/* Mobile Menu Button */}
          <button
            className="block xl:hidden text-white text-2xl focus:outline-none"
            aria-label="Menu"
          >
            <FaBars />
          </button>
        </div>
      </div>
    </nav>
  );
}
