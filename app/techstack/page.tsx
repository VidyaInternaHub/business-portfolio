import { techStackData } from "@/data/data";

import Card from "@/components/common/Card";

export default function TechStack() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-blue-navy-secondary py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-blue-sky-primary bg-clip-text text-transparent">
              Powered by Modern Technology
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
              We leverage cutting-edge technologies to build scalable,
              efficient, and maintainable solutions that drive your business
              forward.
            </p>
            <div className="flex justify-center gap-4 mb-12">
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                <span className="text-accent">99.9%</span>
                <span className="ml-2 text-gray-200">Uptime</span>
              </div>
              <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                <span className="text-accent">50+</span>
                <span className="ml-2 text-gray-200">Projects Delivered</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Tech Stack Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-primaryDark mb-4">
              Our Technology Stack
            </h2>
            <div className="h-1 w-24 mx-auto bg-gradient-blue-sky-primary rounded-full mb-6"></div>
            <p className="text-xl text-secondary max-w-2xl mx-auto">
              We carefully select our technologies to ensure robust, scalable,
              and future-proof solutions for every project.
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
                        <Card key={index} className="px-8 py-5 bg-accent shadow-lg bg-opacity-5">
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
    </div>
  );
}
