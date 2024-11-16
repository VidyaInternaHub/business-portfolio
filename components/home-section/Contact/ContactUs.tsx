import Card from "../../common/Card";
import Form from "./Form";

export default function ContactUs() {
  return (
    <section className="px-4 py-4 md:px-20 md:py-10 lg:px-10 xl:px-20">
      <div className="m-auto py-12 font-poppins">
        <div className="flex flex-col py-5 gap-12 lg:flex-row lg:justify-between">
          <div className="lg:basis-1/2">
            <span className="py-4 block font-semibold text-5xl sm:text-6xl xl:text-7xl">
              Contact Us
            </span>
            <p className="mt-6 mb-8 text-lg text-gray-600 hidden md:block">
              Visit our headquarters in the heart of Bhopal City. Our team is
              ready to assist you Monday through Friday, from 9:00 AM to 6:00 PM
              IST. You can also reach us by filling up the form.
            </p>
            <div className="mt-6 space-y-4">
              <div className="w-full h-96 rounded-3xl overflow-hidden shadow-2xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d234700.34596126707!2d77.24107873999021!3d23.19963946618557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c428f8fd68fbd%3A0x2155716d572d4f8!2sBhopal%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1731679622489!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className="lg:basis-5/12">
            <Card className="px-5 py-6 shadow-2xl bg-primary/10">
              <span className="pl-5 block text-xl text-center font-semibold uppercase">
                Your Success Story Starts Here
              </span>
              <Form />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
