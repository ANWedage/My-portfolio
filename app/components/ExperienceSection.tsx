"use client";

import { useInViewSection } from "./useInViewSection";

export function ExperienceSection() {
  const { ref, inView } = useInViewSection<HTMLElement>();

  return (
    <section
      id="experience"
      ref={ref}
      className={`section ${inView ? "in-view" : ""}`}
    >
      <div className="section-header">
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">
          My professional work experience and contributions.
        </p>
      </div>

      <div className="space-y-6">
        {/* Experience Item 1 */}
        <article className="rounded-lg border border-slate-800 bg-slate-900/40 p-6">
          <div className="flex gap-6">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="h-26 w-26 overflow-hidden rounded-full bg-white p-2">
                <img 
                  src="/experience/boc-logo.png" 
                  alt="Bank of Ceylon Logo" 
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
            
            {/* Content */}
            <div className="flex flex-1 flex-col gap-3">
              <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    Internship Trainee in Bank of Ceylon
                  </h3>
                  <p className="mt-1 text-sm text-slate-400">
                    Bank of Ceylon · Ratnapura
                  </p>
                </div>
                <span className="text-sm text-slate-400">
                  Mar 2023 - Sep 2023
                </span>
              </div>
              <p className="text-sm text-slate-300">
                Gained hands-on experience in IT and software systems within a banking environment. Assisted with system maintenance, application support, and troubleshooting while working with databases and web technologies. Contributed to improving internal processes and developed practical skills in teamwork, problem-solving, and secure system handling.
              </p>
              <div className="mt-2 flex flex-wrap items-center gap-3 text-xs">
                <a
                  href="/experience/BOC and PEOPLES.pdf"
                  download
                  className="primary-btn px-3 py-1 text-[0.7rem]"
                >
                  Download Certificate
                </a>
              </div>
            </div>
          </div>
        </article>

        {/* Experience Item 2 */}
        <article className="rounded-lg border border-slate-800 bg-slate-900/40 p-6">
          <div className="flex gap-6">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="h-26 w-26 overflow-hidden rounded-full bg-white p-2">
                <img 
                  src="/experience/peoples-bank-logo.png" 
                  alt="Peoples Bank Logo" 
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
            
            {/* Content */}
            <div className="flex flex-1 flex-col gap-3">
              <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
              <div>
                <h3 className="text-lg font-semibold text-white">
                  Internship Trainee in Peoples Bank
                </h3>
                <p className="mt-1 text-sm text-slate-400">
                  Peoples Bank · Ratnapura
                </p>
              </div>
              <span className="text-sm text-slate-400">
                Oct 2022 - Feb 2023
              </span>
            </div>
              <p className="text-sm text-slate-300">
                Gained practical experience in day-to-day banking operations at People's Bank, working closely with branch staff and customers. Handled counter operations including customer service support, cash handling, and transaction processing while ensuring accuracy and compliance with banking procedures. Participated in field visits to understand customer verification, account activation, and banking outreach activities. Acquired strong knowledge of core banking systems, account creation processes, cash balancing, and internal banking procedures. Developed attention to detail, communication skills, and a solid understanding of secure and efficient banking operations.
              </p>
              <div className="mt-2 flex flex-wrap items-center gap-3 text-xs">
                <a
                  href="/experience/BOC and PEOPLES.pdf"
                  download
                  className="primary-btn px-3 py-1 text-[0.7rem]"
                >
                  Download Certificate
                </a>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
