import Button from "@/components/common/Button";
import HeroContainer from "@/components/common/HeroContainer";
import Decoration from "./Decoration";

export default function Hero() {
  return (
    <HeroContainer>
      <div className="lg:h-[calc(100vh-18rem)] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-sky-lightgray-tertary bg-clip-text text-transparent">
                Building Digital Excellence
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-xl mb-8">
                We create innovative solutions that transform ideas into
                powerful digital experiences, tailored to your unique business
                needs.
              </p>
              <div className="flex gap-4 mb-12">
                <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                  <span className="text-accent">100+</span>
                  <span className="ml-2 text-gray-200">Happy Clients</span>
                </div>
                <div className="flex items-center bg-white/10 rounded-full px-4 py-2">
                  <span className="text-accent">24/7</span>
                  <span className="ml-2 text-gray-200">Support</span>
                </div>
              </div>
              <div className="flex gap-4">
                <Button
                  buttonType="primaryDarkButton"
                  className="px-8 py-3 rounded-full"
                >
                  Get Started
                </Button>
                <button className="px-8 py-3 border-2 border-gray-200 text-gray-200 rounded-full hover:bg-white/10 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
            {/* Right Decorative Elements */}
            <Decoration />
          </div>
        </div>
      </div>
    </HeroContainer>
  );
}
