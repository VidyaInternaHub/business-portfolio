import { projects } from "@/data/project";
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
          techStack={project.techstack}
          about={project.about}
          challenges={project.about.challenges}
          solutions={project.about.solutions}
          result={project.about.result}
        />
      </section>
    </>
  );
}
