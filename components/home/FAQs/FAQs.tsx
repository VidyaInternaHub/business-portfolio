"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { faqData } from "@/data/data";

export default function FAQs() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-secondary text-lg max-w-2xl mx-auto">
            Find answers to common questions about our services and solutions
          </p>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="backdrop-blur-sm bg-white/90 rounded-xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between p-6 group"
              >
                <h3 className="font-montserrat text-lg text-primaryDark group-hover:text-primary transition-colors duration-200">
                  {faq.question}
                </h3>
                <div className="relative">
                  <div
                    className={`w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center transition-all duration-300 ${
                      activeIndex === index ? "bg-accent/20" : ""
                    }`}
                  >
                    <FaChevronDown
                      className={`text-primary text-lg transition-all duration-300 ${
                        activeIndex === index ? "rotate-180 transform" : ""
                      }`}
                    />
                  </div>
                </div>
              </button>

              <div
                className={`transition-all duration-300 ease-out overflow-hidden ${
                  activeIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-6 pt-0">
                  <p className="text-secondary leading-relaxed border-t border-gray-100 pt-4">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
