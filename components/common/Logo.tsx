export default function Logo() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="viGradient" x1="0" y1="0" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFD361" />
          <stop offset="100%" stopColor="#FF6F3C" />
        </linearGradient>
      </defs>
      <path
        d="M30 75 L45 25 L60 75 Z" // V shape
        fill="url(#viGradient)"
      />
      <circle
        cx="75"
        cy="40"
        r="10"
        fill="#FF6F3C" // Dot of i
      />
      <rect
        x="70"
        y="50"
        width="10"
        height="25"
        fill="#FFD361" // Base of i
      />
    </svg>
  );
}
