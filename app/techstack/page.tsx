import Hero from "@/components/tech-stack/Hero/Hero";
import TechStackList from "@/components/tech-stack/TechStackList/TechStackList";

export default function TechStack() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <TechStackList />
    </div>
  );
}
