import Link from "next/link";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

import { projects } from "@/data/project";
import ProjectCard from "@/components/common/ProjectCard";
import Button from "@/components/common/Button";

export default function Projects() {
  return (
    <section className="max-w-[1190px] m-auto mt-16 px-4 py-12 font-poppins  md:px-12">
      <div className="text-primaryDark">
        <h3 className="text-4xl text-center font-semibold md:text-6xl">
          Our Projects
        </h3>
        <div className="mt-8 grid grid-cols-1 gap-12 lg:mt-12">
          {projects.slice(0, 3).map((project, index) => (
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
        <div className="my-16 flex justify-center">
        <Button
          href="/projects"
          buttonType="primaryButton"
          className="flex items-center px-8 py-2 gap-2 text-lg"
          >
          More Projects
          <FaArrowUpRightFromSquare className=""/>
        </Button>
        </div>
      </div>
    </section>
  );
}
