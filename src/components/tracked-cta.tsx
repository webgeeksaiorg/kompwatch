"use client";

import Link from "next/link";

declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: Record<string, string> }) => void;
  }
}

interface TrackedCTAProps {
  href: string;
  event: string;
  eventProps?: Record<string, string>;
  className?: string;
  children: React.ReactNode;
}

export function TrackedCTA({ href, event, eventProps, className, children }: TrackedCTAProps) {
  const handleClick = () => {
    window.plausible?.(event, eventProps ? { props: eventProps } : undefined);
  };

  return (
    <Link href={href} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
}
