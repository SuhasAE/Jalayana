import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Intro() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <SectionHeading
            eyebrow="Who we are"
            code="JESPL / 002"
            title="A one-stop technical partner for ships and marine projects."
          />
        </div>
        <div className="md:col-span-6 md:col-start-7 flex items-center">
          <Reveal delay={0.1}>
            <p className="text-steel-600 text-[17px] leading-relaxed">
              Jalayana Engineering &amp; Services Private Limited (JESPL) is a
              marine engineering and technical services company established to
              provide integrated ship machinery maintenance, repair,
              refurbishment and project-execution services.
            </p>
            <p className="mt-5 text-steel-600 text-[17px] leading-relaxed">
              JESPL is positioned as a one-stop technical partner for
              shipyards, vessel owners, operators and marine projects, with a
              service portfolio covering mechanical, electrical,
              instrumentation, piping, accommodation, galley, insulation,
              painting and testing works.
            </p>
            <p className="mt-5 text-steel-600 text-[17px] leading-relaxed">
              Our operating philosophy is simple: understand the equipment and
              vessel requirement, plan the job correctly, execute safely and
              systematically, test the completed work, and provide clear
              technical documentation.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
