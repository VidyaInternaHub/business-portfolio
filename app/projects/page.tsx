import Projects from "@/components/home/Projects/Projects";
import Hero from "@/components/our-projects/Hero/Hero";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Projects />
    </div>
  );
}