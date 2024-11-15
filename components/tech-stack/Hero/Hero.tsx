import HeroContainer from "@/components/common/HeroContainer";
import Decoration from "./Decoration";

export default function Hero() {
  return (
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
                  <span className="ml-2 text-gray-200">Projects Delivered</span>
                </div>
              </div>
            </div>

            {/* Right Decorative Tech Elements */}
            <Decoration />
          </div>
        </div>
      </div>
    </HeroContainer>
  );
}
