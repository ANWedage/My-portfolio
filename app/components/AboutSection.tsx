"use client";

import { useInViewSection } from "./useInViewSection";

export function AboutSection() {
  const { ref, inView } = useInViewSection<HTMLElement>();

  return (
    <section
      id="about"
      ref={ref}
      className={`section ${inView ? "in-view" : ""}`}
    >
      <div className="section-header">
        <h2 className="section-title">About</h2>
        <p className="section-subtitle">
           Quick snapshot of who I am and how I work.
        </p>
      </div>
      <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
        <div className="space-y-4 text-slate-300">
          <p>
            I&apos;m a developer who focuses on creating intuitive, performant, and visually polished digital experiences. I love bringing ideas from sketch to fully deployed products.
          </p>
          <p>
            My work balances clean engineering with attention to detail in
            design, accessibility, and micro-interactions.
          </p>
        </div>
        <div className="space-y-2">
          <h3 className="text-sm font-semibold text-slate-200">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {["Next.js", "React", "Tailwind", "Node.js", "UI/UX","MongoDB","R","SQL"].map(
              (skill) => (
                <span key={skill} className="pill">
                  {skill}
                </span>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
