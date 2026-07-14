import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import ContactSection from "@/components/shared/ContactSection";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A visual look at Jalayana Engineering & Services Limited's facilities and project work.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        code="JES / G01"
        eyebrow="Gallery"
        title="A visual record of the work."
        description="Photos shown here are placeholders. Real project and facility photography will replace these over time."
      />
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <GalleryGrid />
        </div>
      </section>
      <ContactSection />
    </>
  );
}
