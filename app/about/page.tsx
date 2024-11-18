"use client";

import React from "react";
import Image from "next/image";
import { BiAward } from "react-icons/bi";
import { TextGenerateEffect } from "@/components/ui/Text-Generat-Effect";
import Hero from "@/components/about/Hero";
import { div } from "framer-motion/client";
const AboutUs = () => {
  // return (
  //   <section className="py-8 my-6 lg:my-8 mx-4 md:mx-8 lg:mx-12 lg:px-8 bg-[#fafafa]">
  //      {/* Title Section */}
  //     <div className="flex flex-row">
  //      <div className="flex flex-col text-center ">
  //       <div className=" mb-8 mx-4 lg:mx-8 text-center">
  //       <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-8 lg:mb-12">
  //         About Us
  //       </h2>
  //       <div className="text-xl md:text-2xl text-black  text-center mb-6 lg:mb-8">
  //       <TextGenerateEffect
  //       words={words} />
  //       </div>
  //       </div>
  //       {/* Images Section */}
  //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-4 md:mx-6 lg:mx-8 mb-8 lg:mb-12">
  //       <div className="overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-110 ">
  //         <Image
  //           src="/assets/images/teamphoto1.jpg"
  //           alt="Team collaboration"
  //           width={500}
  //           height={500}
  //           className="object-cover w-full h-full"
  //         />
  //       </div>
  //       <div className="overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-110">
  //         <Image
  //           src="/assets/images/teamphoto2.jpg"
  //           alt="Team collaboration"
  //           width={500}
  //           height={500}
  //           className="object-cover w-full h-full"
  //         />
  //       </div>
  //       <div className="overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-110">
  //         <Image
  //           src="/assets/images/teamphoto3.jpg"
  //           alt="Team collaboration"
  //           width={500}
  //           height={500}
  //           className="object-cover w-full h-full"
  //         />
  //       </div>
  //       </div>
  //      </div>
  //     </div>

  //     {/* Background Map and Statistics Section */}
  //     <div className="relative flex flex-col items-center justify-center py-12 px-6 mt-12">
  //       {/* Background Map Image */}
  //       <div className="absolute inset-0 flex items-center justify-center">
  //         <Image
  //           src="/assets/images/worldmap.png"
  //           alt="World Map Background"
  //           layout="fill"
  //           objectFit="cover"
  //           className="rounded-3xl opacity-30"
  //         />
  //       </div>

  //       {/* Content */}
  //       <div className="relative text-center z-10 max-w-3xl mx-auto">
  //         <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-6">
  //           VidyaInterna Hub
  //         </h1>
  //         <p className="text-lg md:text-xl text-black mb-12 max-w-2xl mx-auto">
  //           We help global businesses and startups to transform ideas into excellent
  //           digital products that drive results.
  //         </p>

  //         {/* Statistics Section */}
  //         <div className="flex flex-wrap justify-around items-center gap-8 text-black">
  //           <div className="text-center">
  //             <p className="text-4xl font-bold text-blue-500">10+</p>
  //             <p className="text-lg">Years in the market</p>
  //           </div>
  //           <div className="text-center">
  //             <p className="text-4xl font-bold text-blue-500">25%</p>
  //             <p className="text-lg">Senior-level developers</p>
  //           </div>
  //           <div className="text-center">
  //             <p className="text-4xl font-bold text-blue-500">170+</p>
  //             <p className="text-lg">Successful projects</p>
  //           </div>
  //           <div className="text-center">
  //             <p className="text-4xl font-bold text-blue-500">280+</p>
  //             <p className="text-lg">In-house engineers</p>
  //           </div>
  //         </div>
  //       </div>
  //     </div>

  //     {/* Values Section */}
  //     <div className="mx-auto px-4 py-16 ">
  //       <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 text-black">
  //         Our Values
  //       </h2>
  //       <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-10 lg:gap-8 p-4">
  // {/* Card: Common Structure */}
  // {Data.map((item, index) => (
  //   <div key={index} className="flex items-center justify-center">
  //     <div className="relative w-full max-w-md bg-[#cffafe] rounded-xl shadow-md p-6 overflow-hidden group  h-[12rem] lg:h-[20rem] xl:h-[20rem]">
  //       {/* Background Image with Hover Effect */}
  //       <BiAward className="absolute inset-0 w-full h-full opacity-40 text-gray-500 transition-all duration-500 ease-in-out transform group-hover:opacity-20 group-hover:scale-110" fill="#0ea5e9"/>
  //       {/* Content */}
  //       <div className="relative z-10">
  //         <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-blue-600 ">{item.title}</h3>
  //         <p className="text-sm sm:text-lg lg:text-xl text-black">{item.description}</p>
  //       </div>
  //     </div>
  //   </div>
  //  ))
  // };
  //       </div>
  //     </div>
  //   </section>
  // );
  return (
    <div className="min-h-screen bg-background">
      <Hero />
    </div>
  );
};

export default AboutUs;
