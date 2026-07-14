"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, MessageCircle } from "lucide-react";

export default function FloatingButtons() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-6 right-5 md:right-8 z-40 flex flex-col items-end gap-3">
      <AnimatePresence>
        {visible && (
          <motion.button
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="w-11 h-11 flex items-center justify-center bg-navy-900 text-white border border-white/10 shadow-lg hover:bg-navy-800 transition-colors"
          >
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
      <a
        href="https://wa.me/910000000000"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="w-12 h-12 flex items-center justify-center bg-[#25D366] text-white shadow-lg hover:brightness-95 transition-all rounded-full"
      >
        <MessageCircle size={22} fill="white" strokeWidth={0} />
      </a>
    </div>
  );
}
