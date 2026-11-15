import SectionHeading from "@/components/site/SectionHeading";
import { values } from "@/data/site";

export default function Values() {
  return (
    <section className="border-y border-border bg-secondary/50 py-20 sm:py-24">
      <div className="page-shell">
        <SectionHeading
          eyebrow="Our five pillars"
          title="Five expressions of one belief"
          intro="Panchvaktra means five faces. Our name carries five guiding values — each one a way of standing beside the families we serve."
        />

        <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
          {values.map((v, i) => (
            <article key={v.name} className="bg-background p-6 transition-colors hover:bg-card">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">
                {String(i + 1).padStart(2, "0")}
              </p>
              <p className="hindi mt-4 text-[26px] leading-none text-forest">{v.hindi}</p>
              <h3 className="mt-3 font-heading text-[19px] font-semibold text-forest">{v.name}</h3>
              <p className="mt-1.5 text-[10.5px] font-semibold uppercase leading-relaxed tracking-[0.12em] text-muted-foreground">
                {v.subtitle}
              </p>
              <p className="hindi mt-4 border-l border-gold/60 pl-3 text-[13px] leading-[1.7] text-forest/75">
                {v.quote}
              </p>
              <p className="mt-3 text-[12.5px] leading-[1.75] text-muted-foreground">{v.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}