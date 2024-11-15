import Hero from "@/components/home-section/Hero/Hero";
import Projects from "@/components/home-section/Projects/Projects";
import Testimonials from "@/components/home-section/Testimonials/Testimonials";
import FAQs from "@/components/home-section/FAQs/FAQs";
import ContactUs from "@/components/home-section/Contact/ContactUs";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Testimonials />
      <FAQs />
      <ContactUs />
    </>
  );
}
