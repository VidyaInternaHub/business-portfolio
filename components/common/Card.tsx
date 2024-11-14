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
<<<<<<< HEAD
      className={`border-2 shadow-md rounded-3xl transition-all duration-300 ease-in-out ${className}`}
=======
      className={`px-4 py-8 ${bgColor} bg-opacity-30 rounded-3xl md:px-8 lg:px-12 transition-all duration-300 ease-in-out ${className}`}
>>>>>>> 21a0f2ff2b6fad3651db3222c70b47eb9875f967
    >
      {children}
    </div>
  );
}
