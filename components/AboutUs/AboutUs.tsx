import React from "react";
import Image from "next/image";
import { FaLongArrowAltRight } from "react-icons/fa";
import Link from "next/link";
const AboutUs = () => {
    // const clickhandler =()=>{};
  return (
    <section className="bg-white py-4 my-8 lg:my-12  mx-4 md:mx-8 lg:mx-12">
      <div className="flex flex-col gap-8 ">
        {/* Title and Button Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mx-4 md:mx-6 lg:mx-8">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-0 text-blue-600 cursor-pointer">
            About Us
          </h2>
          <Link
            className="text-white font-bold hover:text-blue-700 transition bg-sky-400 rounded-full px-4 py-2 lg:px-6 lg:py-3 flex items-center gap-2" 
             href="/about"
            >
            <span className="hidden sm:block"
             >More about company</span>
            <FaLongArrowAltRight className="lg:size-6 size-8"/>
          </Link>
        </div>
        
        {/* Description */}
        <p className="text-black max-w-6xl mx-4 md:mx-6 lg:mx-8 text-lg md:text-xl lg:text-2xl leading-relaxed">
        At VidyaInterna Hub, we are dedicated to revolutionizing the education and training landscape. As a leading player in the Education & Training Services sector, we provide innovative and impactful learning experiences designed to prepare the next generation of professionals for success.
        </p>

        {/* Images Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-4 md:mx-6 lg:mx-8 max-w-max">
          <div className="overflow-hidden rounded-lg shadow-lg object-fill">
            <Image
              src="/assets/images/teamphoto1.jpg"
              alt="Team collaboration"
              layout="responsive"
              width={500}
              height={500}
              className="object-fill w-full h-full"
            />
          </div>
          <div className="overflow-hidden  rounded-lg shadow-lg ">
            <Image
              src="/assets/images/teamphoto2.jpg"
              alt="Team collaboration"
              layout="responsive"
              width={500}
              height={500}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg ">
            <Image
              src="/assets/images/teamphoto3.jpg"
              alt="Team collaboration"
              layout="responsive"
              width={500}
              height={500}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
