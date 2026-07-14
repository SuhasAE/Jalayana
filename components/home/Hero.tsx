"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-navy-950"
    >
      <motion.div style={{ y }} className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(6,15,26,0.55) 0%, rgba(6,15,26,0.75) 55%, rgba(6,15,26,0.96) 100%), url('https://images.unsplash.com/photo-1605281317010-fe5ffe798166?q=80&w=2400&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bp-grid opacity-40" />
      </motion.div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: "100%" }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 right-0 h-40 bg-gradient-to-b from-transparent via-signal-500/10 to-transparent"
        />
      </div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 h-full flex flex-col justify-end px-5 md:px-8 pb-20 md:pb-28"
      >
        <div className="mx-auto max-w-7xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="h-px w-8 bg-signal-500" />
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-steel-300">
              JES / 001 — Marine &amp; heavy engineering
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-semibold text-white text-[13vw] sm:text-6xl md:text-7xl leading-[0.98] max-w-4xl text-balance"
          >
            Engineering trust into every vessel we touch.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="mt-6 max-w-xl text-steel-300 text-base md:text-lg leading-relaxed"
          >
            Jalayana Engineering &amp; Services Limited delivers turnkey ship
            repair, structural, electrical, and heavy engineering solutions —
            built on precision, reliability, and a commitment to getting it
            right the first time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 0.6 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 bg-signal-500 hover:bg-signal-600 text-white font-medium px-6 py-3.5 transition-colors"
            >
              Explore our services
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-white/25 hover:border-white text-white font-medium px-6 py-3.5 transition-colors"
            >
              Request a consultation
            </Link>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-steel-400"
      >
        <span className="font-mono text-[10px] uppercase tracking-widest">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
        >
          <ChevronDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
