"use client";

import { motion } from "framer-motion";

export default function ProjectScene({ splineUrl }: { splineUrl?: string }) {
  if (!splineUrl) return null;

  return (
    <motion.div
      className="rounded-3xl overflow-hidden border border-white/10 bg-white/5 mt-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <iframe
        src={splineUrl}
        className="w-full h-[400px] md:h-[520px]"
        allow="autoplay"
      />
    </motion.div>
  );
}
