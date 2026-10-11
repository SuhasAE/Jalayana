"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, Search } from "lucide-react";
import { navLinks, services } from "@/lib/site-config";

interface SearchOverlayProps {
  open: boolean;
  onClose: () => void;
}

export default function SearchOverlay({ open, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState("");

  const index = useMemo(
    () => [
      ...navLinks.map((n) => ({ title: n.label, href: n.href, type: "Page" })),
      ...services.map((s) => ({
        title: s.title,
        href: `/services#${s.slug}`,
        type: "Service",
      })),
    ],
    []
  );

  const results = query.trim()
    ? index.filter((item) =>
        item.title.toLowerCase().includes(query.trim().toLowerCase())
      )
    : index.slice(0, 6);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] bg-navy-950/95 backdrop-blur-sm flex items-start justify-center pt-24 px-5"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-xl"
          >
            <div className="flex items-center gap-3 border-b border-white/20 pb-4">
              <Search size={20} className="text-steel-400 shrink-0" />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search pages and services"
                className="bg-transparent text-white text-lg placeholder:text-steel-500 outline-none flex-1 font-sans"
              />
              <button
                onClick={onClose}
                aria-label="Close search"
                className="text-steel-400 hover:text-white"
              >
                <X size={20} />
              </button>
            </div>
            <div className="mt-4 flex flex-col">
              {results.length === 0 && (
                <p className="text-steel-400 text-sm py-6 text-center">
                  No results for &ldquo;{query}&rdquo;
                </p>
              )}
              {results.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className="flex items-center justify-between py-3.5 px-2 border-b border-white/5 hover:bg-white/5 transition-colors"
                >
                  <span className="text-white font-medium">{item.title}</span>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-steel-500">
                    {item.type}
                  </span>
                </Link>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
