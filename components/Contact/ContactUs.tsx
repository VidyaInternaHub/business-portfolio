import Card from "../common/Card";
import SocialMedia from "../common/SocialMedia";
import Form from "./Form";

export default function ContactUs() {
  return (
    <section className="my-10">
      <div className="max-w-[1290px] m-auto px-4 py-12 font-poppins md:px-12">
        <div className="flex flex-col py-5 gap-12 lg:flex-row lg:justify-between">
          <div className="lg:basis-1/2">
            <span className="py-4 block font-semibold text-5xl sm:text-6xl xl:text-7xl">
              Contact Us
            </span>
            <div className="mt-12 space-y-4">
              <div className="flex flex-col gap-2">
                <span className="text-2xl">Have a great idea?</span>
                <span className="text-2xl text-primary">vidyainternahub@gmail.com</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-2xl">Got questions to ask?</span>
                <span className="text-2xl text-primary">info@vidyainternahub.com</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-2xl">Get hired</span>
                <span className="text-2xl text-primary">hr@vidyainternahub.com</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-2xl">Connect with us any platform</span>
                <SocialMedia />
              </div>
            </div>
          </div>
          <div className="lg:basis-5/12">
            <Card className="px-4 py-8 shadow-2xl bg-primary/10">
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
