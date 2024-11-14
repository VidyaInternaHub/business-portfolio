interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({
  children,
  className,
}: CardProps) {
  return (
    <div
      className={`border-2 shadow-md rounded-3xl transition-all duration-300 ease-in-out ${className}`}
    >
      {children}
    </div>
  );
}
