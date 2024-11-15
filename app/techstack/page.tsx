import { techStackData } from "@/data/data";

import Card from "@/components/common/Card";
import HeroContainer from "@/components/common/HeroContainer";

export default function TechStack() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroContainer>
        <div className="lg:h-[calc(100vh-18rem)] flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left Content */}
              <div className="text-left">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-sky-lightgray-tertary bg-clip-text text-transparent">
                  Powered by Modern Technology
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 max-w-xl mb-8">
                  We leverage cutting-edge technologies to build scalable,
                  efficient, and maintainable solutions that drive your business
                  forward.
                </p>
                <div className="flex gap-4 mb-12">
                  <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                    <span className="text-accent">99.9%</span>
                    <span className="ml-2 text-gray-200">Uptime</span>
                  </div>
                  <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                    <span className="text-accent">50+</span>
                    <span className="ml-2 text-gray-200">
                      Projects Delivered
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Decorative Tech Elements */}
              <div className="relative hidden md:block -mt-40">
                <div className="absolute inset-0">
                  {/* Binary Circle */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full border-2 border-accent/30 animate-[spin_25s_linear_infinite] ease-linear">
                    <div className="absolute inset-0 overflow-hidden opacity-20">
                      {[...Array(8)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute text-accent"
                          style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                          }}
                        >
                          {Math.random() > 0.5 ? "1" : "0"}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Circuit Lines */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border-2 border-accent/20">
                    <div className="absolute w-full h-0.5 bg-accent/10 top-1/2 animate-pulse" />
                    <div className="absolute h-full w-0.5 bg-accent/10 left-1/2 animate-pulse delay-150" />
                  </div>

                  {/* Core Element */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-16 h-16 bg-gradient-blue-sky-primary rounded-lg blur-xl opacity-50 animate-pulse" />
                    <div className="absolute inset-0 w-16 h-16 border-2 border-accent/30 rounded-lg animate-[spin_3s_linear_infinite]" />
                  </div>

                  {/* Data Points */}
                  <div className="absolute top-0 right-0 w-2 h-2 bg-accent rounded-full animate-ping" />
                  <div className="absolute bottom-0 left-0 w-2 h-2 bg-accent rounded-full animate-ping delay-300" />
                  <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-accent rounded-full animate-ping delay-700" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </HeroContainer>
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
    </div>
  );
}
