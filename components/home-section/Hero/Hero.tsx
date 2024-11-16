import HeroContainer from "@/components/common/HeroContainer";
// import Decoration from "./Decoration";

export default function Hero() {
  return (
    <HeroContainer>
      <div className="lg:h-[calc(100vh-18rem)] flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid md:grid-cols-1 items-center">
            {/* Left Content */}
            <div className="text-left">
              <h1 className="py-4 text-4xl md:text-7xl font-bold mb-6 bg-gradient-sky-lightgray-tertary bg-clip-text text-transparent">
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
            </div>
            {/* Right Decorative Elements */}
            {/* <Decoration /> */}
          </div>
        </div>
      </div>
    </HeroContainer>
  );
}
