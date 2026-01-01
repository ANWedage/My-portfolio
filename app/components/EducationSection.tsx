"use client";

import { useInViewSection } from "./useInViewSection";

export function EducationSection() {
  const { ref, inView } = useInViewSection<HTMLElement>();

  return (
    <section
      id="education"
      ref={ref}
      className={`section ${inView ? "in-view" : ""}`}
    >
      <div className="section-header">
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">
          My academic background and learning journey.
        </p>
      </div>

      <div className="space-y-6">
        {/* Education Item 1 */}
        <article className="rounded-lg border border-slate-800 bg-slate-900/40 p-6">
          <div className="flex gap-6">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="h-26 w-26 overflow-hidden rounded-full bg-white p-2">
                <img 
                  src="/education/sliit-logo.jpg" 
                  alt="SLIIT Logo" 
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
            
            {/* Content */}
            <div className="flex flex-1 flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white">
                  Undergraduate Degree in Software Engineering
                </h3>
              <p className="mt-1 text-sm text-slate-400">
                SLIIT · 2023 - 2027
              </p>
              <p className="mt-3 text-sm text-slate-300">
                Currently pursuing a Bachelor’s degree in Software Engineering at SLIIT, with a strong foundation in programming, software development, and problem-solving. Completed coursework in object-oriented programming, data structures, databases, web development, and software engineering principles. Gained hands-on experience through academic projects, team-based assignments, and practical labs, developing skills in designing, implementing, and testing software solutions.
              </p>
            </div>
            <div className="rounded-lg border border-cyan-400/30 bg-cyan-400/10 px-3 py-2 text-sm font-medium text-cyan-400">
              <span className="font-bold">CGPA: 3.19</span>
            </div>
          </div>
          </div>
        </article>

        {/* Education Item 2 */}
        <article className="rounded-lg border border-slate-800 bg-slate-900/40 p-6">
          <div className="flex gap-6">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="h-26 w-26 overflow-hidden rounded-full bg-white p-2">
                <img 
                  src="/education/sivali-logo.png" 
                  alt="R/Sivali Central College Logo" 
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
            
            {/* Content */}
            <div className="flex flex-1 flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white">
                  Previous Education
                </h3>
                <p className="mt-1 text-sm text-slate-400">
                  R/Sivali Central College · 2008 - 2021
                </p>
                <p className="mt-3 text-sm text-slate-300">
                  Completed my secondary education at R/Sivali Central College, where I developed a strong academic foundation and participated in various extracurricular activities. Achieved excellent results in my O-Level and A-Level examinations, demonstrating proficiency in subjects such as Mathematics, Science, and English. Actively engaged in school clubs and events, fostering teamwork, leadership, and communication skills.
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
