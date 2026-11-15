import { Quote } from "lucide-react";
import SectionHeading from "@/components/site/SectionHeading";
import { voices } from "@/data/site";

export default function Voices() {
  return (
    <section className="page-shell py-20 sm:py-24">
      <SectionHeading
        eyebrow="Volunteer voices"
        title="Why our volunteers keep coming back"
        align="center"
      />

      <div className="mt-12 grid gap-7 md:grid-cols-3">
        {voices.map((v) => (
          <figure key={v.name} className="flex h-full flex-col border border-border bg-card p-7">
            <Quote className="h-6 w-6 text-gold" />
            <blockquote className="mt-5 flex-1 text-[14px] leading-[1.8] text-forest/85">
              “{v.quote}”
            </blockquote>
            <figcaption className="mt-6 border-t border-border pt-4">
              <p className="font-heading text-[17px] text-forest">{v.name}</p>
              <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                {v.initiative}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}