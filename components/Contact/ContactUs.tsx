import Form from "./Form";

export default function ContactUs() {
  return (
    <section className="px-4 md:px-12 lg:px-20 py-10">
      <div className="flex flex-col py-5 gap-12 lg:flex-row lg:justify-between">
        <div className="lg:basis-1/2">
          <span className="py-8 block font-semibold text-5xl sm:text-6xl xl:text-7xl">
            Contact Us
          </span>
           <span className="text-lg font-light md:text-xl lg:text-2xl">
            We{`'`}re ready to turn your vision into reality with these key
            services
          </span>
          {/* <div className="flex flex-col pt-8 space-y-3">
            <div className="space-x-1 md:text-lg">
              <span className="font-medium">Web Development: </span>
              <span>
                Custom, responsive websites tailored to enhance user experience
                and business growth.
              </span>
            </div>
            <div className="space-x-1 md:text-lg">
              <span className="font-medium">
                Mobile Application Development:{" "}
              </span>
              <span>
                Innovative, high-performance mobile apps for iOS and Android
                platforms.
              </span>
            </div>
            <div className="space-x-1 md:text-lg">
              <span className="font-medium">UI/UX Design: </span>
              <span>
                Intuitive and visually engaging designs focused on user
                satisfaction and functionality.
              </span>
            </div>
          </div> */}
        </div>
        <div className="lg:basis-5/12">
          <div className="px-4 py-8 bg-accent bg-opacity-30 shadow-2xl rounded-xl md:px-8 lg:px-12">
            <span className="pl-5 block text-xl font-semibold uppercase">
              Your Success Story Starts Here
            </span>
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
}
