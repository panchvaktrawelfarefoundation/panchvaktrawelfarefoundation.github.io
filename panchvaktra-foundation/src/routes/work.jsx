import { createFileRoute } from "@tanstack/react-router";
import { Image } from "@/components/ui/image";
import { MapPin } from "lucide-react";
import PageHeader from "@/components/site/PageHeader";
import ClosingCta from "@/components/home/ClosingCta";
import { programs, states } from "@/data/site";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Our work — Panchvaktra Human Welfare Foundation" },
      {
        name: "description",
        content:
          "Child education, nutrition drives, festival seva, family relief and livelihood support across Rajasthan, Bihar, Delhi and Gujarat.",
      },
    ],
  }),
  component: WorkPage,
});

function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our work"
        title="Care that arrives on the ground, every week"
        intro="Direct humanitarian assistance, child education camps and nutrition distribution — delivered through active weekly drive regions, with local volunteers."
      />

      <section className="page-shell py-16 sm:py-20">
        <div className="space-y-16 sm:space-y-20">
          {programs.map((p, i) => (
            <article
              key={p.slug}
              id={p.slug}
              className="grid scroll-mt-28 items-center gap-8 lg:grid-cols-2 lg:gap-14"
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <Image src={p.image} alt={p.alt} className="aspect-[4/3] w-full object-cover" />
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">
                  Programme {String(i + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-3 text-[28px] leading-[1.2] text-forest sm:text-[34px]">{p.title}</h2>
                <div className="rule-gold mt-4" />
                <p className="mt-5 max-w-lg text-[15px] leading-[1.85] text-muted-foreground">{p.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-secondary/40 py-16 sm:py-20">
        <div className="page-shell grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">
          <div>
            <p className="eyebrow">Regional footprint</p>
            <h2 className="mt-3 text-[30px] leading-[1.18] text-forest sm:text-[38px]">
              Where our drives run
            </h2>
            <p className="mt-5 max-w-md text-[15px] leading-[1.8] text-muted-foreground">
              Humanitarian assistance, child education camps and nutrition distribution reach families through
              active weekly drive regions.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {states.map((state) => (
              <li key={state} className="flex items-center gap-3 border border-border bg-card px-4 py-4">
                <MapPin className="h-4 w-4 text-gold" />
                <span className="font-heading text-[18px] text-forest">{state}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ClosingCta />
    </>
  );
}