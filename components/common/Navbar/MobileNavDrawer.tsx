"use client";

import Link from "next/link";
import { useMobileNavDrawer } from "@/hooks/useMobileNavDrawer";
import { navbarLinks } from "@/data/data";
import Button from "../Button";
import { FaPhone } from "react-icons/fa";

export default function MobileNavDrawer() {
  const mobileNavDrawer = useMobileNavDrawer();

  return (
    <div
      className={`fixed right-0 h-screen w-full flex flex-row transform transition-transform duration-300 ease-in-out ${
        mobileNavDrawer.isOpen ? "translate-x-0" : "translate-x-full"
      } z-10`}
    >
      <div
        onClick={mobileNavDrawer.close}
        className="bg-black opacity-30 w-0 sm:w-1/4 md:w-1/3 lg:w-3/5"
      ></div>
      <div
        className={`h-full w-full sm:w-3/4 md:w-2/3 lg:w-2/5 bg-white flex flex-col items-center`}
      >
        <ul className="w-full flex flex-col divide-y divide-gray-200 font-roboto">
          {navbarLinks.map((link) => (
            <li key={link.url}>
              <Link
                onClick={mobileNavDrawer.close}
                href={link.url}
                className="w-full px-6 py-4 block text-lg font-medium hover:bg-gray-50 transition-colors duration-300 border-y border-gray-200"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="w-full sm:w-2/3 p-6 block md:hidden">
          <Button
            buttonType="highlightButton"
            className="w-full px-8 py-3 rounded-full block md:hidden"
          >
            <a
              href="tel:+919516871900"
              className="flex justify-center items-center space-x-2"
            >
              <FaPhone className="rotate-90" />
              <p>Call Us</p>
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
