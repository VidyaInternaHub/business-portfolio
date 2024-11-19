import Image from "next/image";
import Link from "next/link";

import { projects } from "@/data/data";
import Card from "../../common/Card";

export default function Projects() {
  return (
    <section className="max-w-[1190px] m-auto px-4 py-12 font-poppins  md:px-12">
      <div className="text-primaryDark">
        <h3 className="text-4xl text-center font-semibold md:text-6xl">
          Our Projects
        </h3>
        <div className="mt-8 grid grid-cols-1 gap-12 lg:mt-12">
          {projects.map((project, index) => (
            <Link key={index} href={`/projects/${project.id}`}>
              <Card                
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
                    {project.techstack.map((tech, i) => (
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
