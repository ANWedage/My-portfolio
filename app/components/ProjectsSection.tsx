"use client";

import { useInViewSection } from "./useInViewSection";

const projects = [
  {
    title: "Spendly Android App",
    description: "Spendly is an Android application designed to help users track and manage their expenses efficiently.",
    tech: ["Kotlin"],
    github: "https://github.com/ANWedage/Spendly-android-app",
  },
  {
    title: "Spices web app",
    description: "Spices is a modern web application that offers a clean user interface and fast performance for browsing and purchasing spices online.",
    tech: ["JavaScript"],
    github: "https://github.com/ANWedage/spices-web-app",
  },
  {
    title: "Wood Art Gallery",
    description: "wood art gallery is a web site that showcases a collection of exquisite wooden artworks, emphasizing craftsmanship and design.",
    tech: ["JavaScript", "CSS"],
    github: "https://github.com/ANWedage/wood-art-gallery",
  },
  {
    title: "EVENTAZIA-frontend",
    description: "Eventazia is a frontend web application that create for my own school get together event management.",
    tech: ["HTML", "CSS","JavaScript"],
    github: "https://github.com/ANWedage/eventazia-frontend",
  },
  {
    title: "EVENTAZIA-backend",
    description: "Eventazia is a backend web application that create for my own school get together event management.",
    tech: ["JavaScript"],
    github: "https://github.com/ANWedage/eventazia-backend",
  }
];

export function ProjectsSection() {
  const { ref, inView } = useInViewSection<HTMLElement>();

  return (
    <section
      id="projects"
      ref={ref}
      className={`section ${inView ? "in-view" : ""}`}
    >
      <div className="section-header">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">
          Selected work that highlights my approach to building products.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <article key={project.title} className="card flex flex-col justify-between">
            <h3 className="mb-2 text-base font-semibold text-white">
              {project.title}
            </h3>
            <p className="mb-4 text-sm text-slate-300">
              {project.description}
            </p>
            <div className="mb-4 flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <span key={t} className="pill pill-muted">
                  {t}
                </span>
              ))}
            </div>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="mt-auto inline-flex items-center text-xs font-medium text-sky-400 hover:text-sky-300"
              >
                View Code
                <span className="ml-1 text-sky-300">↗</span>
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
