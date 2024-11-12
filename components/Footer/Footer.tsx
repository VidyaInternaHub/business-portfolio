import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="bg-bgFooter text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4 p-2">
          <div className="w-full md:w-1/4 px-4 pb-2">
            <h2 className="font-bold text-lg mb-4">Quick Links</h2>
            <ul>
              <li>
                <a href="#" className="hover:text-gray-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Investor Relations
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 px-4 pb-2">
            <h2 className="font-bold text-lg mb-4">Legal</h2>
            <ul>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Accessibility
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 pb-4 px-4">
            <h2 className="font-bold text-lg mb-4">Social Media</h2>
            <ul className="flex gap-4">
              <li>
                <a
                  href="#"
                  className="text-white hover:text-gray-300  rounded-full"
                >
                  <FaFacebook size={24} />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-gray-300  rounded-full"
                >
                  <FaTwitter size={24} />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-gray-300  rounded-full"
                >
                  <FaLinkedin size={24} />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-gray-300  rounded-full"
                >
                  <FaYoutube size={24} />
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 px-4">
            <h2 className="font-bold text-lg mb-4">Subscribe to Newsletter</h2>
            <p>Stay updated with the latest news and insights.</p>
            <form>
              <input
                type="email"
                className="border border-gray-700 rounded-md px-4 py-2 mb-2"
                placeholder="Enter your email"
              />
              <button className="bg-blue-500 hover:bg-blue-700 text-white  font-bold py-2 px-4 rounded">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="text-center mt-8">
          <p>&copy; 2024 Your Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
