import Link from "next/link";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { footerData } from "@/data/data";
import Logo from "../Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { company, quickLinks, legal, services, contact } = footerData;

  return (
    <footer className="bg-bgFooter text-white">
      <div className="px-4 py-8 md:px-20 lg:px-10 xl:px-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Logo />
              <span className="font-bold text-xl">{company.name}</span>
            </Link>
            <p className="text-gray-400 text-sm">{company.description}</p>
            <div className="flex space-x-4">
              {company.socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.name}
                    href={link.url}
                    className="hover:text-accent transition-colors"
                  >
                    <Icon size={24} />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    // href={link.url}
                    href={link.name === "About Us" ? link.url : "#"}
                    className="text-gray-400 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <div
                    // href={service.url}
                    className="text-gray-400 cursor-default"
                  >
                    {service.name}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <FaPhone className="text-accent rotate-90" />
                <a
                  href={`tel:${contact.phone}`}
                  className="text-gray-400 hover:text-accent transition-colors"
                >
                  {contact.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-accent" />
                <a
                  href={`mailto:${contact.email}`}
                  className="text-gray-400 hover:text-accent transition-colors"
                >
                  {contact.email}
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-accent mt-1" />
                <p className="text-gray-400">
                  {contact.address.street}
                  <br />
                  {contact.address.city}, {contact.address.state}
                  <br />
                  {contact.address.country} - {contact.address.pincode}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} {company.name}. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {legal.map((link) => (
                <Link
                  key={link.name}
                  // href={link.url}
                  href="#"
                  className="text-gray-400 hover:text-accent text-sm transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
