import Link from "next/link";

import Hero from "@/components/our-projects/Hero/Hero";
import ProjectCard from "@/components/common/ProjectCard";
import { projects } from "@/data/data";

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <Hero />
      <section className="max-w-[1190px] m-auto px-4 py-12 font-poppins  md:px-12">
      <div className="text-primaryDark">
        <h3 className="text-4xl text-center font-semibold md:text-6xl">
          Our Projects
        </h3>
        <div className="mt-8 grid grid-cols-1 gap-12 lg:mt-12">
          {projects.map((project, index) => (
            <Link key={index} href={`/projects/${project.id}`}>
              <ProjectCard 
                img={project.img}
                title={project.title}
                description={project.description}
                techstack={project.techstack}
                industry={project.about.industry}
                country={project.about.country}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
}
