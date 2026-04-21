export default function WaslMark({ className = "h-9 w-9" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect
        x="2"
        y="2"
        width="36"
        height="36"
        rx="10"
        className="stroke-white/90"
        strokeWidth="2"
      />
      <path
        d="M20 28V12m0 0l-6 6m6-6l6 6"
        className="stroke-white"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}