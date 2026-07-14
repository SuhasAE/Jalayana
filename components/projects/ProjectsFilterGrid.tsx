"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/site-config";
import Reveal from "@/components/ui/Reveal";

export default function ProjectsFilterGrid() {
  const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-2 text-xs font-mono uppercase tracking-widest border transition-colors ${
              active === cat
                ? "bg-navy-900 border-navy-900 text-white"
                : "border-steel-300 text-steel-600 hover:border-navy-900 hover:text-navy-900"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((project, i) => (
          <Reveal key={project.slug} delay={i * 0.05}>
            <div className="bracket-corners group relative aspect-[4/5] bg-navy-800 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-navy-700 to-navy-950 bp-grid" />
              <div className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-widest text-white/70">
                {project.category}
              </div>
              <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-navy-950/90 to-transparent">
                <h3 className="font-display font-medium text-white text-lg flex items-center gap-2">
                  {project.title}
                  <ArrowUpRight
                    size={16}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </h3>
                <p className="mt-1 text-sm text-steel-300">{project.summary}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
