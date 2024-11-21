import Card from "@/components/common/Card";

interface Props {
  techStack: string[];
  about: Record<string, string | number>
}

export default function ProjectDetails({ techStack, about }: Props) {
  return (
    <div className="max-w-[860px] mx-auto px-4 py-12 md:px-12 md:py-20">
      <h2 className="mb-8 text-3xl text-primaryDark font-semibold md:text-6xl">About Project</h2>
      <p className="mb-8 text-lg text-secondary md:text-xl">
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
      <div className="mb-8 space-y-6">
        <span className="text-2xl text-primaryDark font-semibold md:text-4xl">Technology Used</span>
        <div className="flex flex-wrap gap-4">
          {techStack.map((tech, i) => (
            <span
              key={i}
              className="bg-teal-100 px-2 py-1 rounded-md font-medium text-lg md:text-xl"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
