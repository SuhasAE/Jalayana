"use client";

import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "@/components/ui/Reveal";

const galleryItems = Array.from({ length: 9 }, (_, i) => ({
  id: i,
  label: `Gallery placeholder ${i + 1}`,
}));

export default function GalleryGrid() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  function close() {
    setActiveIndex(null);
  }
  function next() {
    setActiveIndex((i) => (i === null ? null : (i + 1) % galleryItems.length));
  }
  function prev() {
    setActiveIndex((i) =>
      i === null ? null : (i - 1 + galleryItems.length) % galleryItems.length
    );
  }

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {galleryItems.map((item, i) => (
          <Reveal key={item.id} delay={i * 0.03}>
            <button
              onClick={() => setActiveIndex(i)}
              className="bracket-corners group relative aspect-square w-full bg-navy-800 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-navy-700 to-navy-950 bp-grid group-hover:scale-105 transition-transform duration-500" />
              <span className="absolute bottom-3 left-3 font-mono text-[10px] uppercase tracking-widest text-white/60">
                {String(i + 1).padStart(2, "0")}
              </span>
            </button>
          </Reveal>
        ))}
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] bg-navy-950/97 flex items-center justify-center px-5"
            onClick={close}
          >
            <button
              onClick={close}
              aria-label="Close gallery"
              className="absolute top-6 right-6 text-white/70 hover:text-white"
            >
              <X size={26} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Previous image"
              className="absolute left-4 md:left-8 text-white/70 hover:text-white"
            >
              <ChevronLeft size={32} />
            </button>
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl aspect-video bg-gradient-to-br from-navy-700 to-navy-950 bp-grid flex items-center justify-center"
            >
              <span className="font-mono text-sm text-white/50">
                {galleryItems[activeIndex].label}
              </span>
            </motion.div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Next image"
              className="absolute right-4 md:right-8 text-white/70 hover:text-white"
            >
              <ChevronRight size={32} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
