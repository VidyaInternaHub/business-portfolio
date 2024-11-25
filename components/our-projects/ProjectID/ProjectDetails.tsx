import Card from "@/components/common/Card";
import { IconType } from "react-icons";
import { FaAngleRight } from "react-icons/fa";

type techType = {
  icon: IconType;
  name: string;
};

interface Props {
  techStack: techType[];
  about: Record<string, string | number | string[]>;
  challenges: string[];
  solutions: string[];
  result: string[];
}

export default function ProjectDetails({
  techStack,
  about,
  challenges,
  solutions,
  result,
}: Props) {
  return (
    <div className="max-w-[860px] mx-auto px-4 py-12 md:px-12 md:py-20">
      <h2 className="mb-8 text-3xl text-primaryDark font-semibold md:text-6xl">
        About Project
      </h2>
      <p className="mb-8 text-lg font-light text-secondary md:text-xl md:leading-10">
        {about.description}
      </p>
      <Card className="mb-16 border-slate-500 border-b-4 border-b-primary ">
        <div className="flex flex-col gap-4 py-8 font-semibold text-lg sm:flex-row sm:justify-between sm:px-8 sm:text-xl">
          <div className="flex flex-col items-center">
            <span className="text-primaryDark">INDUSTRY</span>
            <span className="text-secondary">{about.industry}</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-primaryDark">TEAM</span>
            <span className="text-secondary">{about.teamMembers}</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-primaryDark">STARTED IN</span>
            <span className="text-secondary">{about.launch}</span>
          </div>
          <div className="flex flex-col items-center">
            <span>COUNTRY</span>
            <span className="text-secondary">{about.country}</span>
          </div>
        </div>
      </Card>
      <div className="mb-12 space-y-6">
        <span className="text-2xl text-primaryDark font-semibold md:text-4xl">
          Technology Used
        </span>
        <div className="flex flex-wrap gap-8">
          {techStack.map((tech, i) => (
            <div key={i} className="flex flex-col items-center gap-4 p-2">
              <tech.icon className="text-6xl text-primary" />
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-12 space-y-6">
        <span className="text-2xl text-primaryDark font-semibold md:text-4xl">
          Challenges
        </span>
        <ul>
          {challenges.map((elem, index) => (
            <li key={index} className="flex gap-2">
              <span className="translate-y-1">
                <FaAngleRight className="text-3xl text-primary" />
              </span>
              <span className="text-lg text-secondary md:text-xl md:leading-10">
                {elem}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-12 space-y-6">
        <span className="text-2xl text-primaryDark font-semibold md:text-4xl">
          Solutions
        </span>
        <ul>
          {solutions.map((elem, index) => (
            <li key={index} className="flex gap-2">
              <span className="translate-y-1">
                <FaAngleRight className="text-3xl text-primary" />
              </span>
              <span className="text-lg text-secondary md:text-xl md:leading-10">
                {elem}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-12 space-y-6">
        <span className="text-2xl text-primaryDark font-semibold md:text-4xl">
          Results
        </span>
        <ul>
          {result.map((elem, index) => (
            <li key={index} className="flex gap-2">
              <span className="translate-y-1">
                <FaAngleRight className="text-3xl text-primary" />
              </span>
              <span className="text-lg text-secondary md:text-xl md:leading-10">
                {elem}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
