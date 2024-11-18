import React from "react";
import Image from "next/image";
import { FaLongArrowAltRight } from "react-icons/fa";
import teamImage1 from "@/public/assets/images/teamphoto1.jpg";
import teamImage2 from "@/public/assets/images/teamphoto2.jpg";
import teamImage3 from "@/public/assets/images/teamphoto3.jpg";
import Button from "../../common/Button";
const AboutUs = () => {
  // const clickhandler =()=>{};
  return (
    <section className="py-4 my-8 lg:my-12  mx-4 md:mx-8 lg:mx-12">
      <div className="flex flex-col gap-8 ">
        {/* Title and Button Section */}
        <h3 className="text-4xl text-center font-bold md:text-6xl">About Us</h3>
        {/* Description */}
        <p className="text-center text-secondary mx-4 md:mx-6 lg:mx-8 text-lg md:text-xl lg:text-2xl leading-relaxed">
          At VidyaInterna Hub, we are dedicated to revolutionizing the education
          and training landscape. As a leading player in the Education &
          Training Services sector, we provide innovative and impactful learning
          experiences designed to prepare the next generation of professionals
          for success.
        </p>

        {/* Images Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-4 md:mx-6 lg:mx-8 max-w-max">
          <div className="overflow-hidden rounded-lg shadow-lg object-fill">
            <Image
              src={teamImage1}
              alt="Team collaboration"
              width={500}
              height={500}
              className="object-fill w-full h-full"
            />
          </div>
          <div className="overflow-hidden  rounded-lg shadow-lg ">
            <Image
              src={teamImage2}
              alt="Team collaboration"
              width={500}
              height={500}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg ">
            <Image
              src={teamImage3}
              alt="Team collaboration"
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
