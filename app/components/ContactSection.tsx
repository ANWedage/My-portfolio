"use client";

import { useInViewSection } from "./useInViewSection";

export function ContactSection() {
  const { ref, inView } = useInViewSection<HTMLElement>();

  return (
    <section
      id="contact"
      ref={ref}
      className={`section pb-24 ${inView ? "in-view" : ""}`}
    >
      <div className="section-header">
        <h2 className="section-title">Contact</h2>
        <p className="section-subtitle">
          Reach out directly using the contact details below.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg shadow-sky-500/10">
          <h3 className="mb-2 text-sm font-semibold text-slate-200 uppercase tracking-[0.18em]">
            Contact Info
          </h3>
          <div className="space-y-3 text-sm text-slate-300">
            <p>
              <span className="font-semibold text-slate-100">Email:</span>{" "}
              <a
                href="mailto:adeepanethwedage10171@gmail.com"
                className="text-sky-400 hover:text-sky-300"
              >
                adeepanethwedage10171@gmail.com
              </a>
            </p>
            <p>
              <span className="font-semibold text-slate-100">Phone:</span>{" "}
              <a href="tel:0768833626" className="hover:text-sky-300">
                0768833626
              </a>
            </p>
            <p>
              <span className="font-semibold text-slate-100">Location:</span>{" "}
              Ratnapura, Sri Lanka
            </p>
          </div>
        </div>

        <div className="space-y-3 text-sm text-slate-300">
          <h3 className="text-sm font-semibold text-slate-200">Social</h3>
          <ul className="space-y-1">
            <li>
              <a
                href="https://www.linkedin.com/in/adeepa-wedage?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bcp1MXxhtQiiBOTL%2BrRHebQ%3D%3D"
                className="text-sky-400 hover:text-sky-300"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/ANWedage"
                className="text-sky-400 hover:text-sky-300"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=100008932357002"
                className="text-sky-400 hover:text-sky-300"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
