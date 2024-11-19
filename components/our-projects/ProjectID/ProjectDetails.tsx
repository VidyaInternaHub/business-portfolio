interface Props {
    description: string,
    techStack: string[]
}

export default function ProjectDetails({description, techStack}: Props) {
  return (
    <div className="max-w-[860px] mx-auto px-4 py-12 space-y-12 md:px-12 md:py-20">
      <p className="text-xl text-secondary text-justify font-medium md:text-xl lg:text-2xl">
        {description}
      </p>
      <div className="flex flex-col gap-4 py-8 font-semibold border border-slate-500 border-b-4 border-b-primary rounded-md text-xl md:flex-row md:justify-between md:px-8">
        <div className="flex flex-col items-center md:items-start">
          <span>INDUSTRY</span>
          <span className="text-secondary">Healthcare</span>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <span>TEAM</span>
          <span className="text-secondary">7</span>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <span>STARTED IN</span>
          <span className="text-secondary">2021</span>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <span>COUNTRY</span>
          <span className="text-secondary">USA</span>
        </div>
      </div>
      <div className="space-y-4 ">
        <span className="text-2xl font-semibold">Technology Used</span>
        <div className="flex flex-wrap gap-4">
          {techStack.map((tech, i) => (
            <span
              key={i}
              className="bg-teal-100 px-2 py-1 rounded-md font-medium text-xl"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
