interface HeroContainerProps {
  children: React.ReactNode;
}

export default function HeroContainer({ children }: HeroContainerProps) {
  return (
    // <div className="bg-gradient-blue-navy-secondary py-16 sm:py-24">
    <div className="bg-gradient-blue-navy-secondary py-16 sm:py-24 px-4 md:px-20 lg:px-10 xl:px-20">
      {children}
    </div>
  );
}
