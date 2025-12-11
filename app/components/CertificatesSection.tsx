"use client";

import { useInViewSection } from "./useInViewSection";

export function CertificatesSection() {
  const { ref, inView } = useInViewSection<HTMLElement>();

  return (
    <section
      id="certificates"
      ref={ref}
      className={`section pt-20 pb-24 ${inView ? "in-view" : ""}`}
    >
      <h2 className="section-title">Certificates</h2>
      <p className="mt-3 max-w-2xl text-sm text-slate-300">
        A selection of my certifications. You can view or download the PDFs
        using the links below.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">

          {/* Certificate 1 */}

        <article className="rounded-lg border border-slate-800 bg-slate-900/40 p-5 shadow-sm">
          <h3 className="text-sm font-semibold text-white">
            AI/ML Engineer - Stage 1
          </h3>
          <p className="mt-1 text-xs text-slate-400">SLIIT UNIVERSITY(FOC) · 2025-11-25</p>
          <p className="mt-3 text-xs text-slate-300">
            AI/ML Engineer - Stage 1 certification from SLIIT University, awarded on November 25, 2025. This certificate validates foundational knowledge and skills in artificial intelligence and machine learning concepts and applications.
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-3 text-xs">
            <a
              href="/certificates/AIML-Stage1.pdf"
              target="_blank"
              rel="noreferrer"
              className="primary-btn px-3 py-1 text-[0.7rem]"
            >
              View PDF
            </a>
            <a
              href="/certificates/AIML-Stage1.pdf"
              download
              className="ghost-btn px-3 py-1 text-[0.7rem]"
            >
              Download
            </a>
            <a
              href="https://code.sliit.org/certificates/tbtgfcme4c"
              target="_blank"
              rel="noreferrer"
              className="ghost-btn px-3 py-1 text-[0.7rem]"
            >
              View on Web
            </a>
          </div>
        </article>

        {/* Certificate 2 */}

        <article className="rounded-lg border border-slate-800 bg-slate-900/40 p-5 shadow-sm">
          <h3 className="text-sm font-semibold text-white">
            AI/ML Engineer - Stage 2
          </h3>
          <p className="mt-1 text-xs text-slate-400">SLIIT UNIVERSITY(FOC) · 2025-11-27</p>
          <p className="mt-3 text-xs text-slate-300">
            AI/ML Engineer - Stage 2 certification from SLIIT University, awarded on November 27, 2025. This certificate validates foundational knowledge and skills in artificial intelligence and machine learning concepts and applications.
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-3 text-xs">
            <a
              href="/certificates/AIML-Stage2.pdf"
              target="_blank"
              rel="noreferrer"
              className="primary-btn px-3 py-1 text-[0.7rem]"
            >
              View PDF
            </a>
            <a
              href="/certificates/AIML-Stage2.pdf"
              download
              className="ghost-btn px-3 py-1 text-[0.7rem]"
            >
              Download
            </a>
            <a
              href="https://code.sliit.org/certificates/rdg3yxd2gy"
              target="_blank"
              rel="noreferrer"
              className="ghost-btn px-3 py-1 text-[0.7rem]"
            >
              View on Web
            </a>
          </div>
        </article>

        {/* Certificate 3 */}

        <article className="rounded-lg border border-slate-800 bg-slate-900/40 p-5 shadow-sm">
          <h3 className="text-sm font-semibold text-white">
            Front End Web Development
          </h3>
          <p className="mt-1 text-xs text-slate-400">UOM(CODL) · 2025-11-30</p>
          <p className="mt-3 text-xs text-slate-300">
            Front End Web Development certification from UOM(CODL), awarded on November 30, 2025. This certificate validates foundational knowledge and skills in front-end web development technologies and frameworks.
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-3 text-xs">
            <a
              href="/certificates/FrontEndCertificate.pdf"
              target="_blank"
              rel="noreferrer"
              className="primary-btn px-3 py-1 text-[0.7rem]"
            >
              View PDF
            </a>
            <a
              href="/certificates/FrontEndCertificate.pdf"
              download
              className="ghost-btn px-3 py-1 text-[0.7rem]"
            >
              Download
            </a>
          </div>
        </article>

        {/* Certificate 4 */}

        <article className="rounded-lg border border-slate-800 bg-slate-900/40 p-5 shadow-sm">
          <h3 className="text-sm font-semibold text-white">
            Server Side Web Programming
          </h3>
          <p className="mt-1 text-xs text-slate-400">UOM(CODL) · 2025-12-11</p>
          <p className="mt-3 text-xs text-slate-300">
            Server Side Web Programming certification from UOM(CODL), awarded on December 11, 2025. This certificate validates foundational knowledge and skills in server-side web programming technologies and frameworks.
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-3 text-xs">
            <a
              href="/certificates/ServerSideCertificate.pdf"
              target="_blank"
              rel="noreferrer"
              className="primary-btn px-3 py-1 text-[0.7rem]"
            >
              View PDF
            </a>
            <a
              href="/certificates/ServerSideCertificate.pdf"
              download
              className="ghost-btn px-3 py-1 text-[0.7rem]"
            >
              Download
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
