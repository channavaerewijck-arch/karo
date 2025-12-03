"use client";

import { Project } from "@/data/projects";
import { motion } from "framer-motion";
import ProjectScene from "./ProjectScene";

export default function ProjectHero({ project }: { project: Project }) {
  const bg = project.color || "#000000";

  return (
    <section
      className="px-6 md:px-12 lg:px-20 pt-28 pb-20"
      style={{
        background: `radial-gradient(circle at top, #1a1a1a 0%, ${bg} 65%)`,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl"
      >
        <p className="text-xs uppercase tracking-[0.25em] text-white/40">
          Case Study
        </p>

        <h1 className="text-4xl md:text-6xl font-semibold mt-4 leading-tight">
          {project.title}
        </h1>

        <p className="text-white/60 text-lg max-w-2xl mt-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-3 mt-8">
          {project.services.map((service) => (
            <span
              key={service}
              className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/80 text-sm"
            >
              {service}
            </span>
          ))}
        </div>
      </motion.div>

      <ProjectScene splineUrl={project.splineUrl} />
    </section>
  );
}
