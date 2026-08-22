import type { ReactNode } from "react";

import { Container } from "./Container";

interface SectionProps {
  children: ReactNode;
  variant?: "base" | "surface";
  className?: string;
}

export function Section({
  children,
  variant = "base",
  className = "",
}: SectionProps) {
  const palette = variant === "surface" ? "bg-surface" : "bg-navy";

  return (
    <section className={`${palette} ${className}`}>
      <Container className="py-16 md:py-24">{children}</Container>
    </section>
  );
}
