"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { testimonialsData } from "@/data/data";
import Card from "../common/Card";

const Testimonials = () => {
  return (
    <section className="">
      <div className="flex flex-col px-4 py-8">
        <h1 className="font-bold mx-auto px-8 sm:px-16 my-5 md:mt-6 text-3xl md:text-4xl text-center">
          What Our Clients Say
        </h1>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true, el: ".swiper-pagination" }}
          spaceBetween={0}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 5,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 5,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 5,
            },
          }}
          className="h-full w-full mx-auto rounded-sm hover:rounded-2xl transition-all duration-300 ease-in-out pb-10"
        >
          {testimonialsData.map((item) => {
            return (
              <SwiperSlide
                key={item.id}
                className="flex justify-center w-full my-4 md:my-8 px-6"
              >
                <Card className="px-8 py-5 bg-accent bg-opacity-15 shadow-lg h-[34rem] lg:h-[38rem] xl:h-[34rem]">
                  <div className="flex items-center space-x-3 mb-4">
                    <Image
                      src={item.logo}
                      alt={`${item.title} Logo`}
                      className="w-10 h-10 sm:w-14 sm:h-14 rounded-full object-cover"
                      width={80}
                      height={80}
                    />
                    <div className="font-semibold text-lg md:text-xl text-gray-900">
                      {item?.title}
                    </div>
                  </div>
                  <p className="h-72 overflow-y-scroll scrollbar-hide text-base text-justify sm:text-lg md:text-xl leading-relaxed mb-4 text-gray-700">
                    {`"` + item?.content + `"`}
                  </p>
                  <div className="flex items-center mt-4">
                    <Image
                      src={item?.userImage}
                      alt={item?.name}
                      className="w-16 h-16 rounded-full mr-4 md:w-20 md:h-20 object-cover"
                      width={80}
                      height={80}
                      priority={true}
                    />
                    <div className="flex flex-col ml-4">
                      <p className="font-bold text-blue-900 text-lg md:text-xl">
                        {item?.name}
                      </p>
                      <p className="text-sm md:text-base text-gray-600">
                        {item?.role}
                      </p>
                    </div>
                  </div>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
