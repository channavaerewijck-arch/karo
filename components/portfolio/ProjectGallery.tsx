"use client";

import { motion } from "framer-motion";

export default function ProjectGallery({ images }: { images: string[] }) {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-24 space-y-16 bg-black">
      {images.map((src, idx) => (
        <motion.div
          key={src}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-40px", once: true }}
          transition={{
            duration: 0.7,
            delay: idx * 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="overflow-hidden rounded-3xl border border-white/10 bg-white/5"
        >
          <motion.img
            src={src}
            className="w-full h-auto object-cover"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.8 }}
            alt=""
          />
        </motion.div>
      ))}
    </section>
  );
}
