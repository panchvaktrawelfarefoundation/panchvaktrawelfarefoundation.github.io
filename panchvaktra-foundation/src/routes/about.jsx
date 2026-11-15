import { createFileRoute, Link } from "@tanstack/react-router";
import { Image } from "@/components/ui/image";
import { ArrowRight, HeartHandshake, Home, Sprout } from "lucide-react";
import PageHeader from "@/components/site/PageHeader";
import Values from "@/components/home/Values";
import ClosingCta from "@/components/home/ClosingCta";
import { brand, headPortrait, scrollImages } from "@/data/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About us — Panchvaktra Human Welfare Foundation" },
      {
        name: "description",
        content:
          "Who we are, why we began, and the five values that guide Panchvaktra Human Welfare Foundation's work with children and families in need.",
      },
    ],
  }),
  component: AboutPage,
});

const approach = [
  {
    icon: Home,
    title: "Practical support first",
    body: "School materials, nutrition and relief supplies reach families quickly, through drives run by people who know the community.",
  },
  {
    icon: HeartHandshake,
    title: "Emotional and social care",
    body: "Support goes beyond material help. We work to build connection, respect and a sense of belonging for every family.",
  },
  {
    icon: Sprout,
    title: "Long-term independence",
    body: "Education, skills and livelihoods are the path out of uncertainty — so families can build stable, self-reliant futures.",
  },
];

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="A foundation built on the belief that dignity belongs to everyone"
        intro="Panchvaktra Human Welfare Foundation is a social welfare initiative supporting families, children and the communities around them."
      />

      <section className="page-shell grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
        <div>
          <h2 className="text-[30px] leading-[1.18] text-forest sm:text-[38px]">Why we began</h2>
          <div className="rule-gold mt-5" />
          <div className="mt-6 space-y-4 text-[15px] leading-[1.85] text-muted-foreground">
            <p>
              We empower vulnerable families to overcome barriers and rebuild stable, dignified lives.
              Underserved families need holistic support to build a secure and hopeful future.
              Rebuilding a stable life requires access to education, livelihoods, and community support.
            </p>
            <p>
              We recognised the need for a compassionate, community-oriented initiative that focuses not only on
              immediate needs but also on the opportunities that help individuals and families move toward
              long-term independence.
            </p>
            <p>
              Every week, our teams and volunteers deliver meals, learning support and relief on the ground in
              Rajasthan, Bihar, Delhi and Gujarat.
            </p>
          </div>
          <p className="mt-7 font-heading text-[19px] italic text-forest/70">“{brand.tagline}”</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <figure className="col-span-2">
            <Image
              src={headPortrait}
              alt="Ambuj Bharadwaj, President of Panchvaktra Human Welfare Foundation"
              className="aspect-[16/11] w-full object-cover"
            />
            <figcaption className="mt-2.5 text-[11.5px] uppercase tracking-[0.14em] text-muted-foreground">
              Ambuj Bharadwaj · President
            </figcaption>
          </figure>
          <Image src={scrollImages[1].src} alt={scrollImages[1].alt} className="aspect-square w-full object-cover" />
          <Image src={scrollImages[2].src} alt={scrollImages[2].alt} className="aspect-square w-full object-cover" />
        </div>
      </section>

      <section className="border-y border-border bg-secondary/40 py-16 sm:py-20">
        <div className="page-shell">
          <h2 className="text-[30px] leading-[1.18] text-forest sm:text-[38px]">How we work</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {approach.map((item) => (
              <div key={item.title} className="border-t border-gold/60 pt-6">
                <item.icon className="h-6 w-6 text-forest" />
                <h3 className="mt-4 font-heading text-[20px] text-forest">{item.title}</h3>
                <p className="mt-2.5 text-[14px] leading-relaxed text-muted-foreground">{item.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-6 border border-border bg-card p-7 sm:grid-cols-3">
            <div>
              <p className="eyebrow">CIN</p>
              <p className="mt-2 text-[14px] font-medium text-forest">{brand.cin}</p>
            </div>
            <div>
              <p className="eyebrow">DARPAN ID</p>
              <p className="mt-2 text-[14px] font-medium text-forest">{brand.darpan}</p>
            </div>
            <div>
              <p className="eyebrow">Registered</p>
              <p className="mt-2 text-[14px] font-medium text-forest">2026 · Delhi, India</p>
            </div>
          </div>

          <Link
            to="/team"
            className="group mt-8 inline-flex items-center gap-2 border-b border-forest/30 pb-1 text-[13px] font-semibold text-forest transition-colors hover:border-gold"
          >
            Meet the team behind the work
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      <Values />
      <ClosingCta />
    </>
  );
}