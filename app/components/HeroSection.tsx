"use client";

import Image from "next/image";
import { useInViewSection } from "./useInViewSection";

export function HeroSection() {
  const { ref, inView } = useInViewSection<HTMLElement>();

  return (
    <section
      id="home"
      ref={ref}
      className={`section flex min-h-[80vh] flex-col items-center gap-10 pt-16 pb-24 sm:flex-row sm:items-center ${inView ? "in-view" : ""}`}
    >
      <div className="flex-1 space-y-6 text-center sm:text-left">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
          Portfolio
        </p>
        <h1 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
          Hi, I&apos;m <span className="text-sky-400">Adeepa Wedage</span>
        </h1>
        <p className="max-w-xl text-balance text-slate-300">
          A passionate developer who loves building clean, modern web
          experiences with great performance and delightful details.
        </p>
        <div className="flex flex-col items-center gap-4 sm:items-start">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:justify-start">
            <a href="#projects" className="primary-btn">
              View Projects
            </a>
            <a href="#contact" className="ghost-btn">
              Contact Me
            </a>
          </div>
          <div className="mt-6 flex items-center gap-5">
            <a
              href="https://www.linkedin.com/in/adeepa-wedage?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bcp1MXxhtQiiBOTL%2BrRHebQ%3D%3D"
              target="_blank"
              rel="noreferrer"
              className="social-circle"
              aria-label="LinkedIn"
            >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-3.5 w-3.5"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M5.16 4.5A1.66 1.66 0 0 1 3.5 6.16 1.66 1.66 0 0 1 1.84 4.5 1.66 1.66 0 0 1 3.5 2.84 1.66 1.66 0 0 1 5.16 4.5ZM2 8h3v13H2Zm7.3 0H12v1.8h.04c.38-.7 1.32-1.44 2.72-1.44 2.9 0 3.44 1.9 3.44 4.36V21H15v-6.3c0-1.5-.03-3.44-2.1-3.44-2.1 0-2.42 1.63-2.42 3.33V21H7.3Z"
                  />
                </svg>
            </a>
            <a
              href="https://github.com/ANWedage"
              target="_blank"
              rel="noreferrer"
              className="social-circle"
              aria-label="GitHub"
            >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-3.5 w-3.5"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.48 0-.24-.01-.88-.01-1.73-2.48.55-3-1.22-3-1.22-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.55 2.34 1.1 2.91.84.09-.66.35-1.1.63-1.35-1.98-.23-4.06-1.02-4.06-4.54 0-1 .35-1.82.93-2.46-.09-.23-.41-1.17.09-2.44 0 0 .75-.25 2.46.94a8.2 8.2 0 0 1 4.48 0c1.7-1.19 2.45-.94 2.45-.94.5 1.27.18 2.21.09 2.44.58.64.93 1.46.93 2.46 0 3.53-2.08 4.3-4.06 4.53.36.32.68.95.68 1.92 0 1.38-.01 2.49-.01 2.83 0 .27.18.59.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"
                  />
                </svg>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100008932357002"
              target="_blank"
              rel="noreferrer"
              className="social-circle"
              aria-label="Facebook"
            >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-3.5 w-3.5"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M13 3h3.2V6H13v3h2.7v3H13v9h-3v-9H8v-3h2V5.75C10 4.12 11.07 3 13 3Z"
                  />
                </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="flex-1">
        <div className="relative mx-auto h-48 w-48 sm:h-64 sm:w-64">
          <div className="profile-border"></div>
          <div className="profile-border profile-border--secondary"></div>
          <div className="profile-avatar">
            <Image
              src="/profile.jpg"
              alt="Profile photo"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
