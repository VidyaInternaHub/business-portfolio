import Image from "next/image";

import { projects } from "@/data/data";
import Hero from "@/components/our-projects/ProjectID/Hero";
import ProjectDetails from "@/components/our-projects/ProjectID/ProjectDetails";

interface Props {
  params: Promise<{ projectid: string }>;
}

export default async function Page({ params }: Props) {
  const projectid = Number((await params).projectid);
  const project = projects[projectid-1];

  return (
    <>
      <section className="font-poppins">
        {/* Hero Container */}
        <Hero title={project.title} imgUrl={project.img} />
        <ProjectDetails 
          description={project.description}
          techStack={project.techstack}
        />
      </section>
    </>
  );
}
