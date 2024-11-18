export default function Decoration() {
  return (
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
  );
}
