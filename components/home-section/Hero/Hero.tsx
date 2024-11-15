import Button from "@/components/common/Button";
import HeroContainer from "@/components/common/HeroContainer";

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
            <div className="relative hidden md:block -mt-40">
              <div className="absolute inset-0">
                {/* Large Circle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full border-2 border-accent/30 animate-[spin_20s_linear_infinite] ease-linear" />

                {/* Medium Circle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border-2 border-accent/20 animate-[spin_15s_linear_infinite_reverse] ease-linear" />

                {/* Small Circle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full border-2 border-accent/10 animate-[spin_10s_linear_infinite] ease-linear" />

                {/* Dots with continuous fade animation */}
                <div className="absolute top-0 right-0 w-2 h-2 bg-accent rounded-full animate-pulse" />
                <div className="absolute bottom-0 left-0 w-2 h-2 bg-accent rounded-full animate-pulse delay-300" />
                <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-accent rounded-full animate-pulse delay-700" />

                {/* Gradient Orb with smooth pulse */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-blue-sky-primary rounded-full blur-xl opacity-50 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </HeroContainer>
  );
}
