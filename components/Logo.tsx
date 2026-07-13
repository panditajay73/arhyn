export default function Logo({
  className = "h-8 w-8",
  strokeWidth = 3.4,
}: {
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* Growth-arrow apex tick */}
      <path
        d="M32 5 V13 M28 8 L32 4 L36 8"
        stroke="currentColor"
        strokeWidth={strokeWidth - 0.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Left leg of A / H */}
      <path
        d="M16 53 L32 13"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      {/* Right leg of A / H */}
      <path
        d="M48 53 L32 13"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      {/* H crossbar / circuit line */}
      <path
        d="M20 35 H44"
        stroke="currentColor"
        strokeWidth={strokeWidth - 0.8}
        strokeLinecap="round"
      />
      {/* Signal node — automation / engineering */}
      <circle cx="32" cy="35" r="3.4" fill="currentColor" />
    </svg>
  );
}
