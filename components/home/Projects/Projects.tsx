import Image from "next/image";
import Link from "next/link";

import { projectsData } from "@/data/data";
import Card from "../../common/Card";
import { FaExternalLinkAlt, FaLongArrowAltRight } from "react-icons/fa";
import Button from "@/components/common/Button";

export default function Projects() {
  return (
    <section className="px-4 py-4 md:px-20 md:py-10 lg:px-10 xl:px-20">
      <div className="text-primaryDark">
        <div className="flex sm:flex-row justify-between items-start sm:items-center mx-4 md:mx-6 lg:mx-8">
          <h2 className="lg-px-6 text-3xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-0 text-black  ">
            Our Projects
          </h2>
          <Button
            href="/projects"
            className="rounded-full self-center flex items-center justify-center bg-opacity-70 text-xs sm:text-base"
          >
            View More
            <FaLongArrowAltRight className="ml-2" />
          </Button>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-12 lg:mt-12">
          {projectsData.map((project, index) => (
            // <Link href={`/projects/${project.title.split(" ").join("-").toLowerCase()}`}>
            <Card
              key={index}
              className="group flex flex-col justify-between bg-background border-slate-400 cursor-pointer overflow-hidden lg:flex-row"
            >
              {/* Image */}
              <div>
                <Image
                  src={`/images/${project.img}`}
                  width={720}
                  height={480}
                  className="w-full h-full lg:w-[680px]"
                  alt={project.img}
                />
              </div>
              {/* About Project */}
              <div className="basis-1/2 flex flex-col px-4 py-8 gap-4">
                <span className="text-2xl font-semibold md:text-3xl">
                  {project.title}
                </span>
                <span className="text-lg text-justify md:text-xl">
                  {project.description}
                </span>
                <div className="flex flex-wrap gap-4">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-teal-100 px-2 py-1 rounded-md font-medium text-sm md:text-base"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
            // </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
