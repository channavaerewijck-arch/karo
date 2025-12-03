import { projects } from "@/data/projects";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";

export default function PortfolioPage() {
  return (
    <div className="px-6 md:px-12 lg:px-20 py-24 md:py-32">
      <header className="mb-16">
        <p className="text-xs tracking-[0.25em] uppercase text-white/40 mb-4">
          Selected Work
        </p>

        <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
          Digitale ervaringen
          <span className="block text-white/40">met precisie ontworpen.</span>
        </h1>

        <p className="max-w-xl text-white/60 mt-6">
          Een selectie projecten waarin strategie, motion en minimalistisch design
          samenkomen om merken naar een hoger niveau te tillen.
        </p>
      </header>

      <PortfolioGrid projects={projects} />
    </div>
  );
}
