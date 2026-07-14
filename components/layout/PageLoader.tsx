"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const alreadyLoaded = sessionStorage.getItem("jes-loaded");
    if (alreadyLoaded) {
      setLoading(false);
      return;
    }
    const timer = setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem("jes-loaded", "1");
    }, 1400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-navy-950 flex items-center justify-center"
        >
          <div className="flex flex-col items-center gap-4">
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center w-16 h-16 border-2 border-signal-500 text-signal-500 font-display font-bold text-xl"
            >
              JE
            </motion.span>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.1, ease: "easeInOut", delay: 0.2 }}
              className="h-[2px] w-32 bg-signal-500 origin-left"
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="font-mono text-[11px] tracking-widest text-steel-400 uppercase"
            >
              Jalayana Engineering
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
