"use client";

import Link from "next/link";
import { Project } from "@/data/projects";
import { motion } from "framer-motion";

export default function ProjectMetaBar({ project }: { project: Project }) {
  return (
    <motion.div
      className="sticky top-0 z-40 backdrop-blur-xl bg-black/40 border-b border-white/10"
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="px-6 md:px-12 lg:px-20 h-16 flex items-center justify-between">
        <Link
          href="/portfolio"
          className="text-sm text-white/60 hover:text-white transition-colors"
        >
          ← Terug naar portfolio
        </Link>

        <div className="text-white/60 text-sm flex items-center gap-2">
          <span className="hidden md:block">{project.title}</span>
          <span className="w-1 h-1 rounded-full bg-white/30" />
          <span>{project.year}</span>
        </div>
      </div>
    </motion.div>
  );
}
