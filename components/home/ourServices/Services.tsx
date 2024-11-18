import React from "react";
import Card from "./Card";
export default function Services() {
  return (
    <section className="bg-[#f8f8f8]">
      <div className="container mx-auto p-4 ">
        <div className="pt-8">
          <div className="text-center ">
            <h1 className="text-4xl text-center font-bold md:text-6xl">
              What we offer
            </h1>
            <p className="p-2 mt-4 text-center text-secondary mx-4 md:mx-6 lg:mx-8 text-lg md:text-xl lg:text-2xl leading-relaxed ">
              We harness the power of digital engineering, aligning our
              expertise with your business needs, to foster innovation,
              continuous improvement and growth. Our comprehensive suite of
              services ensures that your digital journey is seamless,
              innovative, and robust.
            </p>
          </div>
        </div>
        <div className="bg-[#f8f8f8]">
          <Card />
        </div>
      </div>
    </section>
  );
}
