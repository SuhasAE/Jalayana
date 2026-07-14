"use client";

import Link from "next/link";
import { useRef } from "react";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";
import { projects } from "@/lib/site-config";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function FeaturedProjects() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  function scroll(dir: 1 | -1) {
    scrollerRef.current?.scrollBy({ left: dir * 360, behavior: "smooth" });
  }

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="Featured projects"
            code="JES / 006"
            title="A glimpse of the work ahead."
            description="Placeholder project entries — real project case studies will replace these as they're completed."
            className="mb-0"
          />
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => scroll(-1)}
              aria-label="Scroll left"
              className="w-10 h-10 flex items-center justify-center border border-steel-300 hover:border-navy-900 transition-colors"
            >
              <ArrowLeft size={16} />
            </button>
            <button
              onClick={() => scroll(1)}
              aria-label="Scroll right"
              className="w-10 h-10 flex items-center justify-center border border-steel-300 hover:border-navy-900 transition-colors"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="flex gap-5 overflow-x-auto px-5 md:px-8 pb-4 snap-x snap-mandatory scrollbar-hide"
      >
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={i * 0.05} className="snap-start shrink-0">
            <Link
              href="/projects"
              className="bracket-corners group block w-[300px] md:w-[340px]"
            >
              <div className="relative aspect-[4/5] bg-navy-800 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-navy-700 to-navy-950 bp-grid" />
                <div className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-widest text-white/70">
                  {String(i + 1).padStart(2, "0")} / {project.category}
                </div>
                <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-navy-950/90 to-transparent">
                  <h3 className="font-display font-medium text-white text-lg flex items-center gap-2">
                    {project.title}
                    <ArrowUpRight
                      size={16}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </h3>
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
