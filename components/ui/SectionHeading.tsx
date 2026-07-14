import { cn } from "@/lib/utils";
import Reveal from "./Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  code?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  code,
  title,
  description,
  align = "left",
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <Reveal>
        <div
          className={cn(
            "flex items-center gap-3 mb-4",
            align === "center" && "justify-center"
          )}
        >
          <span className="h-px w-8 bg-signal-500" />
          <span
            className={cn(
              "font-mono text-[11px] uppercase tracking-[0.2em]",
              light ? "text-steel-300" : "text-steel-500"
            )}
          >
            {eyebrow}
          </span>
          {code && (
            <span className="font-mono text-[11px] text-steel-400">
              {code}
            </span>
          )}
        </div>
      </Reveal>
      <Reveal delay={0.08}>
        <h2
          className={cn(
            "font-display font-semibold text-3xl sm:text-4xl leading-[1.1] text-balance",
            light ? "text-white" : "text-navy-900"
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.14}>
          <p
            className={cn(
              "mt-4 text-[15px] leading-relaxed",
              light ? "text-steel-300" : "text-steel-600"
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
