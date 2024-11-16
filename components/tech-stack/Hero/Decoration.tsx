export default function Decoration() {
  return (
    <div className="relative hidden md:block -mt-40">
      <div className="absolute inset-0">
        {/* Binary Circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full border-2 border-accent/30 animate-[spin_25s_linear_infinite] ease-linear">
          <div className="absolute inset-0 overflow-hidden opacity-20">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute text-accent"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              >
                {Math.random() > 0.5 ? "1" : "0"}
              </div>
            ))}
          </div>
        </div>

        {/* Tech Circuit Lines */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border-2 border-accent/20">
          <div className="absolute w-full h-0.5 bg-accent/10 top-1/2 animate-pulse" />
          <div className="absolute h-full w-0.5 bg-accent/10 left-1/2 animate-pulse delay-150" />
        </div>

        {/* Core Element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-16 h-16 bg-gradient-blue-sky-primary rounded-lg blur-xl opacity-50 animate-pulse" />
          <div className="absolute inset-0 w-16 h-16 border-2 border-accent/30 rounded-lg animate-[spin_3s_linear_infinite]" />
        </div>

        {/* Data Points */}
        <div className="absolute top-0 right-0 w-2 h-2 bg-accent rounded-full animate-ping" />
        <div className="absolute bottom-0 left-0 w-2 h-2 bg-accent rounded-full animate-ping delay-300" />
        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-accent rounded-full animate-ping delay-700" />
      </div>
    </div>
  );
}
