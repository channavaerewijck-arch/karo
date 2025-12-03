"use client";

import { useState, MouseEvent } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { projects, type Project } from "@/data/projects";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;

    setTilt({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
    setHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.05,
      }}
    >
      <Link href={`/portfolio/${project.slug}`}>
        <motion.div
          className="group relative h-full cursor-pointer rounded-3xl border border-slate-800/70 bg-gradient-to-br from-[#080910] via-[#050507] to-[#050507] p-[1px] shadow-[0_0_40px_rgba(0,0,0,0.6)]"
          style={{ transformStyle: "preserve-3d" }}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={handleMouseLeave}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          {/* Inner card */}
          <motion.div
            className="relative h-full rounded-3xl bg-gradient-to-b from-white/5 via-white/[0.02] to-black/60 p-5 md:p-6 overflow-hidden"
            style={{
              rotateX: tilt.rotateX,
              rotateY: tilt.rotateY,
              perspective: 900,
            }}
          >
            {/* Glow background */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -top-32 right-0 h-64 w-64 rounded-full bg-emerald-400/10 blur-3xl" />
              <div className="absolute -bottom-32 left-0 h-64 w-64 rounded-full bg-cyan-500/5 blur-3xl" />
            </div>

            {/* Image */}
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/60">
              <motion.img
                src={project.cover}
                alt={project.title}
                className="h-[220px] w-full object-cover md:h-[260px]"
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.6 }}
              />

              {/* Top-left label */}
              <div className="pointer-events-none absolute left-4 top-4 rounded-full border border-white/15 bg-black/60 px-3 py-1 text-[0.6rem] uppercase tracking-[0.18em] text-white/70">
                {project.year} · Case Study
              </div>

              {/* Hover overlay */}
              <motion.div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: hovered ? 1 : 0 }}
                transition={{ duration: 0.25 }}
              >
                <div className="absolute bottom-4 left-4 flex items-center gap-2 text-xs text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  View case
                </div>
              </motion.div>
            </div>

            {/* Content */}
            <div className="relative mt-5 flex flex-col gap-3">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-base md:text-lg font-semibold text-slate-50">
                  {project.title}
                </h3>
                <span className="text-[0.6rem] uppercase tracking-[0.24em] text-cyan-300/70">
                  {project.services[0] ?? "Digital"}
                </span>
              </div>

              <p className="text-xs md:text-sm text-slate-400">
                {project.subtitle}
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                {project.services.slice(0, 3).map((service) => (
                  <span
                    key={service}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.65rem] text-slate-200"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>

            {/* Corner accent */}
            <div className="pointer-events-none absolute -right-10 -bottom-10 h-32 w-32 rounded-full border border-cyan-500/30 opacity-40 blur-sm" />
          </motion.div>
        </motion.div>
      </Link>
    </motion.div>
  );
}

export default function PortfolioPage() {
  return (
    <motion.main
      className="min-h-screen bg-[#030308] text-slate-50"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Background orbs */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute -top-40 left-10 h-72 w-72 rounded-full bg-cyan-500/15 blur-3xl" />
        <div className="absolute -bottom-40 right-0 h-80 w-80 rounded-full bg-emerald-400/10 blur-[100px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.04),_transparent_55%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 pb-24 pt-24 sm:px-6 lg:px-8">
        {/* Top bar */}
        <div className="mb-10 flex items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <Link href="/" className="hover:text-cyan-300 transition-colors">
              Home
            </Link>
            <span className="text-slate-600">/</span>
            <span className="uppercase tracking-[0.2em] text-cyan-300">
              Portfolio
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="tracking-[0.18em] uppercase text-[0.6rem] text-slate-500">
              {projects.length} Projects
            </span>
          </div>
        </div>

        {/* Hero */}
        <section className="grid gap-10 md:grid-cols-[1.4fr_minmax(0,1fr)] md:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[0.65rem] uppercase tracking-[0.35em] text-cyan-300/80">
              FUTURISTIC DIGITAL EXPERIENCES
            </p>

            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
              Werk dat voelt als
              <span className="block bg-gradient-to-r from-cyan-300 via-emerald-300 to-sky-400 bg-clip-text text-transparent">
                een digitale beleving.
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-sm md:text-base text-slate-400">
              Een selectie van projecten waarin motion, strategy en minimal
              design samenkomen. Dark, cinematic en gebouwd om vertrouwen en
              conversie te verhogen.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-[0.7rem] text-slate-400">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                <span>Next.js · Framer Motion · Smooth scroll</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>Focus op premium feel & performance</span>
              </div>
            </div>
          </motion.div>

          {/* Side panel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div className="pointer-events-none absolute -inset-6 rounded-[2.5rem] bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.16),_transparent_55%)] blur-2xl" />
            <div className="relative rounded-3xl border border-slate-800/80 bg-gradient-to-b from-slate-900/70 via-black/80 to-black/90 px-6 py-6 shadow-2xl">
              <p className="text-[0.65rem] uppercase tracking-[0.25em] text-slate-500">
                PROJECT SNAPSHOT
              </p>
              <p className="mt-3 text-sm text-slate-300">
                Elke case is op maat ontworpen: geen templates, maar een
                combinatie van strak design, doordachte structuur en
                motion-driven storytelling.
              </p>

              <div className="mt-5 grid grid-cols-2 gap-4 text-[0.7rem] text-slate-300">
                <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-3">
                  <p className="text-[0.6rem] uppercase tracking-[0.18em] text-slate-500">
                    Gemiddelde looptijd
                  </p>
                  <p className="mt-1 text-sm text-cyan-300">7 dagen</p>
                </div>
                <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-3">
                  <p className="text-[0.6rem] uppercase tracking-[0.18em] text-slate-500">
                    Type projecten
                  </p>
                  <p className="mt-1 text-sm text-emerald-300">
                    SaaS, Studio&apos;s, Brands
                  </p>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between text-[0.7rem] text-slate-400">
                <span>Scroll om werk te ontdekken</span>
                <span className="flex items-center gap-1 text-cyan-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 animate-pulse" />
                  Live previews
                </span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Divider */}
        <div className="mt-16 h-px w-full bg-gradient-to-r from-transparent via-slate-700/70 to-transparent" />

        {/* Projects grid */}
        <section className="mt-16">
          <div className="mb-6 flex items-center justify-between gap-4">
            <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
              Selected Projects
            </p>
            <p className="text-[0.7rem] text-slate-500">
              Klik op een case om de volledige ervaring te zien.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-2">
            {projects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </section>
      </div>
    </motion.main>
  );
}
