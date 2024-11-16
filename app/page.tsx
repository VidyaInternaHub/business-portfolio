import Hero from "@/components/home-section/Hero/Hero";
import Projects from "@/components/home-section/Projects/Projects";
import CaseStudy from "@/components/CaseStudy/CaseStudy";
import Testimonials from "@/components/home-section/Testimonials/Testimonials";
import FAQs from "@/components/home-section/FAQs/FAQs";
import ContactUs from "@/components/home-section/Contact/ContactUs";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <CaseStudy />
      <Testimonials />
      <FAQs />
      <ContactUs />
    </>
  );
}