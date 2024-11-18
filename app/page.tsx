import AboutUs from "@/components/home/AboutUs/AboutUs";
import Hero from "@/components/home/Hero/Hero";
import Projects from "@/components/home/Projects/Projects";
import CaseStudy from "@/components/CaseStudy/CaseStudy";
import Testimonials from "@/components/home/Testimonials/Testimonials";
import FAQs from "@/components/home/FAQs/FAQs";
import ContactUs from "@/components/home/Contact/ContactUs";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Projects />
      <AboutUs />
      <CaseStudy />
      <Testimonials />
      <FAQs />
      <ContactUs />
    </div>
  );
}
