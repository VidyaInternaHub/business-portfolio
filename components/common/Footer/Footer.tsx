import React from "react";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
import { footerquickLinks } from "@/data/data";
import { footerLegal } from "@/data/data";
import { footerServices } from "@/data/data";
export default function Footer() {
  return (
    <footer className="bg-bgFooter text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4 p-2">
          <div className="w-full md:w-1/4 px-4 pb-4">
            <h2 className="font-bold text-lg mb-2">Quick Links</h2>
            <ul>
              {footerquickLinks.map((link) => (
                <li key={link.url}>
                  <Link href={link.url} className="hover:text-gray-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/4 px-4 pb-4">
            <h2 className="font-bold text-lg mb-2">Legal</h2>
            <ul>
              {footerLegal.map((link) => (
                <li key={link.url}>
                  <Link href={link.url} className="hover:text-gray-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/4 pb-4 px-4">
            <h2 className="font-bold text-lg mb-2">Services</h2>
            <ul>
              {footerServices.map((link) => (
                <li key={link.url}>
                  <Link href={link.url} className="hover:text-gray-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/4 px-4">
            <h2 className="font-bold text-lg mb-3">Social Media</h2>
            <ul className="flex gap-4">
              <li>
                <Link
                  href="#"
                  className="text-white hover:text-gray-300  rounded-full"
                >
                  <FaFacebook size={28} />
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white hover:text-gray-300  rounded-full"
                >
                  <FaTwitter size={28} />
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white hover:text-gray-300  rounded-full"
                >
                  <FaLinkedin size={28} />
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white hover:text-gray-300  rounded-full"
                >
                  <FaYoutube size={28} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-8 pb-2">
          <p>&copy; 2024 VidyaInterna Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
