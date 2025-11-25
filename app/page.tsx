import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { CertificatesSection } from "./components/CertificatesSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ContactSection } from "./components/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-20 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <span className="text-lg font-semibold tracking-tight">Adeepa Wedage</span>
          <nav className="hidden gap-6 text-sm font-medium text-slate-300 sm:flex">
            <a href="#home" className="nav-link">
              Home
            </a>
            <a href="#about" className="nav-link">
              About
            </a>
            <a href="#projects" className="nav-link">
              Projects
            </a>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6">
        <HeroSection />
        <AboutSection />
        <CertificatesSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <footer className="border-t border-slate-800 bg-slate-950/80 py-6 text-center text-xs text-slate-500">
        <p>
          © {new Date().getFullYear()} Adeepa Wedage.
        </p>
      </footer>
    </div>
  );
}
