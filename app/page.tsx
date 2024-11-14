import Image from "next/image";
import ContactUs from "@/components/Contact/ContactUs";
import Projects from "@/components/Projects/Projects";

export default function Home() {
  return (
    <>
      <Projects />
      <ContactUs />
    </>
  );
}
