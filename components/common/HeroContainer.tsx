"use client";

import { ReactTyped } from "react-typed";

interface HeroContainerProps {
  heading: string;
  description: string;
  pill1_1?: string;
  pill1_2?: string;
  pill2_1?: string;
  pill2_2?: string;
}

export default function HeroContainer({
  heading,
  description,
  pill1_1,
  pill1_2,
  pill2_1,
  pill2_2,
}: HeroContainerProps) {
  return (
    <div className="bg-gradient-blue-navy-secondary py-16 sm:py-24 px-4 md:px-20 lg:px-10 xl:px-20">
      <div className="lg:h-[calc(100vh-18rem)] flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid md:grid-cols-1 items-center">
            {/* Left Content */}
            <div className="text-left">
              <h1 className="py-4 text-4xl md:text-7xl font-bold mb-6 bg-gradient-sky-lightgray-tertary bg-clip-text text-transparent">
                <ReactTyped
                  strings={[heading]}
                  typeSpeed={60}
                  showCursor={true}
                  backSpeed={-1}
                  loop={false}
                />
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-xl mb-8">
                {description}
              </p>
              <div className="flex gap-4 mb-12">
                <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                  <span className="text-accent">{pill1_1}</span>
                  <span className="ml-2 text-gray-200">{pill1_2}</span>
                </div>
                <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                  <span className="text-accent">{pill2_1}</span>
                  <span className="ml-2 text-gray-200">{pill2_2}</span>
                </div>
              </div>
            </div>
            {/* Right Decorative Elements */}
            {/* <Decoration /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
