import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Intro() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <SectionHeading
            eyebrow="Who we are"
            code="JES / 002"
            title="A new standard for marine and heavy engineering."
          />
        </div>
        <div className="md:col-span-6 md:col-start-7 flex items-center">
          <Reveal delay={0.1}>
            <p className="text-steel-600 text-[17px] leading-relaxed">
              Jalayana Engineering &amp; Services Limited was founded to bring
              a more disciplined, project-managed approach to ship repair and
              heavy engineering. Our team combines technical depth with a
              relentless focus on schedule, quality, and safety — so clients
              get vessels and infrastructure back in service faster, and
              built to last.
            </p>
            <p className="mt-5 text-steel-600 text-[17px] leading-relaxed">
              From structural repairs to full turnkey projects, we operate as
              a single accountable team across every discipline a project
              needs.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
