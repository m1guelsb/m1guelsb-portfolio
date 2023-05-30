"use client";
import { useRef } from "react";
import { Nav } from "@/components/layout";
import { FloatingIcons } from "@/components/display";

export default function GradientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={containerRef}
      className="relative flex p-16 min-h-screen flex-col items-center justify-between gap-4 bg-gradient-to-tl from-bg-gradient-1 via-bg-gradient-2 to-bg-gradient-3 overflow-hidden"
    >
      <Nav />

      <main
        className={
          "w-full flex-1 p-4 flex items-center justify-center overflow-hidden"
        }
      >
        {children}

        <FloatingIcons containerRef={containerRef} />
      </main>
    </section>
  );
}
