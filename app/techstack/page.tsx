import { FaReact, FaNodeJs, FaDocker, FaAws, FaGitAlt } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";

import Card from "@/components/common/Card";

export default function TechStack() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
          Our Tech Stack
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {[
            { icon: FaReact, name: "React" },
            { icon: SiNextdotjs, name: "Next.js" },
            { icon: SiTypescript, name: "TypeScript" },
            { icon: SiTailwindcss, name: "Tailwind CSS" },
            { icon: FaNodeJs, name: "Node.js" },
            { icon: SiExpress, name: "Express" },
            { icon: SiMongodb, name: "MongoDB" },
            { icon: SiPostgresql, name: "PostgreSQL" },
            { icon: FaDocker, name: "Docker" },
            { icon: FaAws, name: "AWS" },
            { icon: FaGitAlt, name: "Git" },
          ].map((tech, index) => (
            <Card key={index} className="shadow-lg">
              {/* <div
               key={index}
               className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
            > */}
              <tech.icon className="w-16 h-16 md:w-20 md:h-20 text-primary" />
              <h3 className="mt-4 text-xl font-semibold text-gray-800">
                {tech.name}
              </h3>
              {/* </div> */}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
