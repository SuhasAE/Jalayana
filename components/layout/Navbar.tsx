"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun, Search } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import SearchOverlay from "./SearchOverlay";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-navy-900/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(255,255,255,0.08)] py-3"
            : "bg-transparent py-5"
        )}
      >
        <div className="mx-auto max-w-7xl px-5 md:px-8 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="flex items-center justify-center w-9 h-9 border border-signal-500 text-signal-500 font-display font-bold text-sm">
              JE
            </span>
            <span className="font-display font-medium text-white text-[15px] leading-tight hidden sm:block">
              Jalayana Engineering
              <span className="block text-[10px] font-mono tracking-widest text-steel-300 font-normal">
                &amp; SERVICES LTD
              </span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative px-3.5 py-2 text-[13px] font-medium tracking-wide uppercase transition-colors",
                    active ? "text-white" : "text-steel-300 hover:text-white"
                  )}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute left-3.5 right-3.5 -bottom-0.5 h-[2px] bg-signal-500"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setSearchOpen(true)}
              aria-label="Search the site"
              className="hidden sm:flex items-center justify-center w-9 h-9 text-steel-300 hover:text-white transition-colors"
            >
              <Search size={18} />
            </button>
            <button
              onClick={() => setDark((d) => !d)}
              aria-label="Toggle dark mode"
              className="hidden sm:flex items-center justify-center w-9 h-9 text-steel-300 hover:text-white transition-colors"
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center gap-2 bg-signal-500 hover:bg-signal-600 text-white text-[13px] font-medium uppercase tracking-wide px-5 py-2.5 transition-colors"
            >
              Get in touch
            </Link>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="lg:hidden flex items-center justify-center w-9 h-9 text-white"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-navy-950 lg:hidden"
          >
            <div className="flex items-center justify-between px-5 py-5 border-b border-white/10">
              <span className="font-display font-medium text-white">Menu</span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="w-9 h-9 flex items-center justify-center text-white"
              >
                <X size={22} />
              </button>
            </div>
            <nav className="flex flex-col px-5 py-6 gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <Link
                    href={link.href}
                    className="flex items-center justify-between py-4 border-b border-white/10 text-white font-display text-lg"
                  >
                    <span>{link.label}</span>
                    <span className="font-mono text-xs text-steel-400">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="px-5 mt-4">
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="block w-full text-center bg-signal-500 text-white font-medium uppercase tracking-wide py-3.5"
              >
                Call {siteConfig.phone}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
