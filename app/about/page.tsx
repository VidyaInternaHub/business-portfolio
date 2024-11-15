import React from "react"; 
import Image from "next/image";

const AboutUs = () => {
  return (
    <section className="bg-white py-8 my-6 lg:my-8 mx-4 md:mx-8 lg:mx-12">
      {/* Title and Button Section */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-blue-600 mb-4">
          About Us
        </h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto">
          At VidyaInterna Hub, we are dedicated to revolutionizing the education and training landscape. As a leading player in the Education & Training Services sector, we provide innovative and impactful learning experiences designed to prepare the next generation of professionals for success. Join us in shaping the future of education and training, and be a part of a team that is passionate about nurturing talent and driving innovation.
        </p>
      </div>

      {/* Images Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-4 md:mx-6 lg:mx-8">
        <div className="overflow-hidden rounded-lg shadow-lg">
          <Image
            src="/assets/images/teamphoto1.jpg"
            alt="Team collaboration"
            width={500}
            height={500}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="overflow-hidden rounded-lg shadow-lg">
          <Image
            src="/assets/images/teamphoto2.jpg"
            alt="Team collaboration"
            width={500}
            height={500}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="overflow-hidden rounded-lg shadow-lg">
          <Image
            src="/assets/images/teamphoto3.jpg"
            alt="Team collaboration"
            width={500}
            height={500}
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Background Map and Statistics Section */}
      <div className="relative flex flex-col items-center justify-center py-12 px-6 mt-12">
        {/* Background Map Image */}
        <div className="absolute inset-0 flex items-center justify-center ">
          <Image
            src="/assets/images/worldmap.webp"
            alt="World Map Background"
            layout="fill"
            objectFit="cover"
            className="rounded-3xl opacity-30 "
          />
        </div>

        {/* Content */}
        <div className="relative text-center z-10 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
            VidyaInternaHub
          </h1>
          <p className="text-lg md:text-xl text-black mb-12 max-w-2xl mx-auto">
            We help global businesses and startups to transform ideas into excellent digital products that drive results.
          </p>

          {/* Statistics Section */}
          <div className="flex flex-wrap justify-around items-center gap-8 text-black">
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-500">10+</p>
              <p className="text-lg">Years in the market</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-500">25%</p>
              <p className="text-lg">Senior-level developers</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-500">170+</p>
              <p className="text-lg">Successful projects</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-500">280+</p>
              <p className="text-lg">In-house engineers</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
      <h2 className="text-6xl font-extrabold text-center mb-8 text-blue-600">Our Values</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex items-center">

          <div className="w-20 h-24 sm:w-36 sm:h-40 rounded-xl bg-gray-200 flex items-center justify-center">

            <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 sm:w-48 sm:h-20 lg:w-96 lg:h-36 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.5A5.5 5.5 0 0116.5 11 5.5 5.5 0 0111 16.5 5.5 5.5 0 015.5 11 5.5 5.5 0 0111 5.5zm0-1.41L9 10.41 7.59 8.9 12 4.5z" />
            </svg>

          </div>

          <div className="ml-4">
            <h3 className="text-2xl font-bold">Transparency</h3>
            <p className="text-black">At Cleveroad, we believe that honesty with clients, partners, and employees is a fundamental step to creating great products. Our aim is to keep all stakeholders involved, fostering trust and collaborative decision-making.</p>
          </div>
        </div>

        <div className="flex items-center">
          <div className="w-20 h-24 sm:w-36 sm:h-40 rounded-xl bg-gray-200 flex items-center justify-center">

            <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 sm:w-48 sm:h-20 lg:w-96 lg:h-36 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.5A5.5 5.5 0 0116.5 11 5.5 5.5 0 0111 16.5 5.5 5.5 0 015.5 11 5.5 5.5 0 0111 5.5zm0-1.41L9 10.41 7.59 8.9 12 4.5z" />
            </svg>

          </div>
          <div className="ml-4">
            <h3 className="text-2xl font-bold">Innovation</h3>
            <p className="text-black">We strive to stay ahead of the curve by embracing new technologies and methodologies. Our commitment to innovation drives us to continuously improve our products and services.</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="w-20 h-24 sm:w-36 sm:h-40 rounded-xl bg-gray-200 flex items-center justify-center">

            <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 sm:w-48 sm:h-20 lg:w-96 lg:h-36 text-gray-500 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>

          </div>
          <div className="ml-4">
            <h3 className="text-2xl font-bold">Collaboration</h3>
            <p className="text-black">We believe that teamwork is essential for success. By working together, we can achieve more and create better solutions for our clients.</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="w-20 h-24 sm:w-36 sm:h-40 rounded-xl bg-gray-200 flex items-center justify-center">

            <svg xmlns="http://www.w3.org/2000/svg" className=" w-20 h-20 sm:w-48 sm:h-20 lg:w-96 lg:h-36 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>

          </div>
          <div className="ml-4">
            <h3 className="text-2xl font-bold">Excellence</h3>
            <p className="text-black">We are committed to delivering high-quality products and services. Our focus on excellence ensures that we meet and exceed our clients' expectations.</p>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default AboutUs;
