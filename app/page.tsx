import Image from "next/image";
import ContactUs from "@/components/Contact/ContactUs";
import Testimonials from "@/components/Testimonials/Testimonials";
export default function Home() {
  return (
    <>
      <Testimonials/>
      <ContactUs />
    </>
  );
}
