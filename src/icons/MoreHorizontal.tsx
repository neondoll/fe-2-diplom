import type { SVGProps } from "react";

export default function MoreHorizontal(props: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 42 9" xmlns="http://www.w3.org/2000/svg" {...props}>
      <ellipse cx="4.45455" cy="4.5" rx="4.45455" ry="4.5" fill="currentColor" />
      <ellipse cx="20.5" cy="4.5" rx="4.45455" ry="4.5" fill="currentColor" />
      <ellipse cx="37.5455" cy="4.5" rx="4.45455" ry="4.5" fill="currentColor" />
    </svg>
  );
}
