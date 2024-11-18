import Card from "@/components/common/Card";

import { techStackData } from "@/data/data";

export default function TechStackList() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-primaryDark mb-4">
            Our Technology Stack
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-blue-sky-primary rounded-full mb-6"></div>
          <p className="text-xl text-secondary max-w-2xl mx-auto">
            We carefully select our technologies to ensure robust, scalable, and
            future-proof solutions for every project.
          </p>
        </div>
        {/* Tech Cards */}
        <div className="py-5 px-4">
          <div className="max-w-7xl mx-auto">
            {Object.entries(techStackData).map(
              ([group, technologies], groupIndex) => (
                <div key={groupIndex} className="mb-12">
                  <h2 className="text-2xl font-bold mb-6 text-primaryDark capitalize">
                    {group}
                    <div className="h-1 w-24 mt-2 bg-gradient-blue-sky-primary rounded-full"></div>
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {technologies.map((tech, index) => (
                      <Card
                        key={index}
                        className="px-8 py-5 bg-accent shadow-lg bg-opacity-5"
                      >
                        <tech.icon className="w-16 h-16 md:w-20 md:h-20 text-primary" />
                        <h3 className="mt-4 text-xl font-semibold text-gray-800">
                          {tech.name}
                        </h3>
                      </Card>
                    ))}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
