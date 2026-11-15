import { MapPin } from "lucide-react";
import SectionHeading from "@/components/site/SectionHeading";
import { states } from "@/data/site";

export default function Footprint() {
  return (
    <section className="border-y border-border bg-secondary/40 py-20 sm:py-24">
      <div className="page-shell grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-20">
        <div>
          <SectionHeading
            eyebrow="Regional footprint"
            title="On the ground across four states"
            intro="Direct humanitarian assistance, child education camps and nutrition distribution reach families through active weekly drive regions."
          />
          <p className="mt-6 max-w-md text-[13.5px] leading-relaxed text-muted-foreground">
            Each region runs its own on-field schedule with local volunteers, so support keeps arriving long
            after a single drive ends.
          </p>
        </div>

        <ul className="divide-y divide-border border-y border-border">
          {states.map((state, i) => (
            <li key={state} className="group flex items-center justify-between gap-4 py-5">
              <div className="flex items-center gap-4">
                <span className="text-[10px] font-semibold tracking-[0.18em] text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-heading text-[22px] text-forest">{state}</span>
              </div>
              <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                <MapPin className="h-3.5 w-3.5 text-gold" />
                Weekly drives
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}