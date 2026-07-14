"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Download } from "lucide-react";
import { siteConfig, navLinks } from "@/lib/site-config";

function LinkedinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4V8.5zM8.5 8.5h3.8v1.98h.05c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.78 2.66 4.78 6.11V23h-4v-6.6c0-1.57-.03-3.6-2.2-3.6-2.2 0-2.53 1.72-2.53 3.48V23h-4V8.5z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 5.9c-.7.3-1.5.6-2.3.7.8-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1a4.1 4.1 0 0 0-7 3.7A11.6 11.6 0 0 1 3.5 4.6a4.1 4.1 0 0 0 1.3 5.5c-.7 0-1.3-.2-1.9-.5v.1c0 2 1.4 3.6 3.3 4a4.2 4.2 0 0 1-1.9.1 4.1 4.1 0 0 0 3.8 2.9A8.2 8.2 0 0 1 2 18.4a11.6 11.6 0 0 0 6.3 1.9c7.5 0 11.7-6.3 11.7-11.7v-.5c.8-.6 1.5-1.3 2-2.2z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
  }

  return (
    <footer className="bg-navy-950 text-white bp-grid relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-16 md:py-20 relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-14 border-b border-white/10">
          <div className="md:col-span-4">
            <div className="flex items-center gap-2 mb-5">
              <span className="flex items-center justify-center w-9 h-9 border border-signal-500 text-signal-500 font-display font-bold text-sm">
                JE
              </span>
              <span className="font-display font-medium text-[15px]">
                Jalayana Engineering
                <span className="block text-[10px] font-mono tracking-widest text-steel-400 font-normal">
                  &amp; SERVICES LTD
                </span>
              </span>
            </div>
            <p className="text-steel-300 text-sm leading-relaxed max-w-xs">
              {siteConfig.description}
            </p>
            <div className="flex items-center gap-3 mt-6">
              {[
                { icon: LinkedinIcon, href: siteConfig.social.linkedin, label: "LinkedIn" },
                { icon: TwitterIcon, href: siteConfig.social.twitter, label: "Twitter" },
                { icon: InstagramIcon, href: siteConfig.social.instagram, label: "Instagram" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center border border-white/15 hover:border-signal-500 hover:text-signal-500 transition-colors"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <p className="font-mono text-[11px] uppercase tracking-widest text-steel-500 mb-4">
              Navigate
            </p>
            <ul className="space-y-2.5">
              {navLinks.slice(0, 5).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-steel-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="font-mono text-[11px] uppercase tracking-widest text-steel-500 mb-4">
              Company
            </p>
            <ul className="space-y-2.5">
              {navLinks.slice(5).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-steel-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <button className="flex items-center gap-1.5 text-sm text-steel-300 hover:text-white transition-colors">
                  <Download size={13} /> Company profile
                </button>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="font-mono text-[11px] uppercase tracking-widest text-steel-500 mb-4">
              Stay updated
            </p>
            <p className="text-sm text-steel-300 mb-4">
              Occasional updates on projects and capabilities. No spam.
            </p>
            {subscribed ? (
              <p className="text-sm text-signal-500 font-medium">
                You&rsquo;re subscribed.
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-0">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="flex-1 bg-white/5 border border-white/15 px-3.5 py-2.5 text-sm text-white placeholder:text-steel-500 outline-none focus:border-signal-500 transition-colors"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="bg-signal-500 hover:bg-signal-600 px-4 flex items-center justify-center transition-colors"
                >
                  <ArrowUpRight size={16} />
                </button>
              </form>
            )}
            <div className="mt-6 space-y-1.5 text-sm text-steel-300">
              <p>{siteConfig.address}</p>
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="block hover:text-white transition-colors"
              >
                {siteConfig.phone}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="block hover:text-white transition-colors"
              >
                {siteConfig.email}
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-steel-500 font-mono">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-xs text-steel-500 font-mono">JES / DRAWING NO. 2026-001</p>
        </div>
      </div>
    </footer>
  );
}
