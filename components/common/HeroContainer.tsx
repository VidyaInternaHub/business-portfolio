interface HeroContainerProps {
  children: React.ReactNode;
}

export default function HeroContainer({ children }: HeroContainerProps) {
  return (
    <div className="bg-gradient-blue-navy-secondary py-16 sm:py-24">
      {children}
    </div>
  );
}
