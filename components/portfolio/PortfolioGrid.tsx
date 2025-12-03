"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Project } from "@/data/projects";

export default function PortfolioGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid gap-12 md:grid-cols-2">
      {projects.map((project, index) => (
        <motion.div
          key={project.slug}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            delay: index * 0.08,
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <Link href={`/portfolio/${project.slug}`}>
            <article className="group cursor-pointer">
              {/* IMAGE WRAPPER */}
              <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
                <motion.img
                  src={project.cover}
                  alt={project.title}
                  className="object-cover w-full h-[320px] md:h-[380px] group-hover:scale-[1.06] group-hover:brightness-110 transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)]"
                />
              </div>

              {/* TEXT */}
              <div className="mt-6 flex items-center justify-between">
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold">
                    {project.title}
                  </h3>
                  <p className="text-white/60 mt-1">{project.subtitle}</p>
                </div>

                <span className="text-xs text-white/40 uppercase tracking-wide">
                  {project.year}
                </span>
              </div>
            </article>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
