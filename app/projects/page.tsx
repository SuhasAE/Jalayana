import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import ProjectsFilterGrid from "@/components/projects/ProjectsFilterGrid";
import ContactSection from "@/components/shared/ContactSection";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Browse Jalayana Engineering & Services Limited's project portfolio across ship repair, turnkey, and heavy engineering work.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        code="JES / P01"
        eyebrow="Projects"
        title="A growing portfolio of engineering work."
        description="Project details shown here are placeholders and will be replaced with real case studies as work is completed."
      />
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <ProjectsFilterGrid />
        </div>
      </section>
      <ContactSection />
    </>
  );
}
