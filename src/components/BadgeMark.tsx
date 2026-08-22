/**
 * Abstract shield mark used as the site's logo/accent motif. Deliberately
 * soft and line-based rather than a literal police badge/star — community
 * service, not tactical iconography.
 */
export function BadgeMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M20 3.5 33 8v9.5c0 9.3-5.6 15.9-13 19-7.4-3.1-13-9.7-13-19V8l13-4.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M13.5 20.5 18 25l8.5-9.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
