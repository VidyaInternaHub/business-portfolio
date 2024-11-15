interface CardProps {
    children: React.ReactNode;
    bgColor?: string;
    className?: string;
  }
  
  export default function Card({
    children,
    bgColor = "bg-accent",
    className,
  }: CardProps) {
    return (
      <div
        className={`px-4 py-8 ${bgColor} bg-opacity-30 rounded-3xl md:px-8 lg:px-12 transition-all duration-300 ease-in-out ${className}`}
      >
        {children}
      </div>
    );
  }