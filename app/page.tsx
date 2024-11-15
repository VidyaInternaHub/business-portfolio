import Image from "next/image";
import ContactUs from "@/components/Contact/ContactUs";
import Testimonials from "@/components/Testimonials/Testimonials";
import AboutUs from "@/components/AboutUs/AboutUs"
export default function Home() {
  return (
    <>
      <AboutUs/>
      <Testimonials/>
      <ContactUs />
    </>
  );
}
