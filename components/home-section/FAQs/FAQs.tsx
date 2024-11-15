"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { faqData } from "@/data/data";

export default function FAQs() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-16 bg-background font-poppins">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div 
              key={index}
              className="border-2 rounded-xl overflow-hidden transition-all duration-300
                       hover:border-accent/50 bg-white/80 backdrop-blur-sm"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="flex justify-between items-center w-full p-4 text-left"
                aria-expanded={activeIndex === index}
              >
                <span className="font-semibold text-primaryDark">{faq.question}</span>
                <FaChevronDown 
                  className={`text-accent transition-transform duration-300 ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? 'max-h-48' : 'max-h-0'
                }`}
              >
                <p className="p-4 text-secondary">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}