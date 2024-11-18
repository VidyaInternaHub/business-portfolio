import Button from "@/components/common/Button";

export default function NotFound() {
  return (
    <main className="h-screen flex items-center justify-center bg-gradient-to-b from-background to-accent/10 font-poppins p-4 overflow-hidden">
      <div className="grid md:grid-cols-2 gap-8 items-center max-w-7xl mx-auto">
        {/* Left column - 404 */}
        <div className="relative">
          <h1 className="text-[10rem] md:text-[15rem] font-bold opacity-10 select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-5xl md:text-7xl font-bold bg-gradient-blue-sky-primary bg-clip-text text-transparent animate-pulse">
              Oops!
            </h2>
          </div>
        </div>

        {/* Right column - Content */}
        <div className="space-y-6 text-center md:text-left">
          <h3 className="text-2xl md:text-3xl font-semibold text-primaryDark animate-fade-in">
            Page Not Found
          </h3>
          
          <p className="text-base md:text-lg text-secondary max-w-xl leading-relaxed">
            Looks like you've ventured into the digital wilderness! 
            The page you're searching for might be on a coffee break. ☕️
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 items-center md:items-start">
            <Button
              href="/"
              buttonType="primaryButton"
              className="px-8 py-3 text-base transform hover:scale-105 transition-transform"
            >
              Take Me Home
            </Button>
            
            <Button
              href="/contact"
              buttonType="highlightButton"
              className="px-8 py-3 text-base transform hover:scale-105 transition-transform"
            >
              Contact Support
            </Button>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="fixed top-20 left-20 w-32 h-32 bg-gradient-blue-sky-primary rounded-full filter blur-3xl opacity-20 animate-pulse" />
        <div className="fixed bottom-20 right-20 w-32 h-32 bg-gradient-orange-yellow-highlight rounded-full filter blur-3xl opacity-20 animate-pulse" />
      </div>
    </main>
  );
}