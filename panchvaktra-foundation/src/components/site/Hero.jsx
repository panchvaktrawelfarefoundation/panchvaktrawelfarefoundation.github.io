import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import HeroPanel from "./HeroPanel";
import { brand } from "@/data/site";

const five = ["Paropkar", "Priti", "Pradan", "Prayatna", "Pragati"];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-background">
      <div className="absolute inset-y-0 right-0 hidden w-1/2 lg:block">
        <HeroPanel className="h-full" portraitClass="bottom-12 right-10 w-[210px]" />
      </div>

      <div className="page-shell relative">
        <div className="w-full py-14 sm:py-20 lg:min-h-[672px] lg:max-w-[600px] lg:py-24 lg:pr-12">
          <div className="rise flex items-center gap-3">
            <span className="h-px w-10 bg-gold" />
            <p className="eyebrow">Registered non-profit · Est. 2026</p>
          </div>

          <h1
            className="rise mt-6 font-heading text-[40px] leading-[1.03] text-forest sm:text-[52px] lg:text-[56px]"
            style={{ animationDelay: "0.08s" }}
          >
            Panchvaktra Human Welfare <span className="italic">Foundation</span>
          </h1>

          <p
            className="rise mt-5 font-heading text-[19px] italic text-forest/70 sm:text-[21px]"
            style={{ animationDelay: "0.14s" }}
          >
            “{brand.tagline}”
          </p>

          <div
            className="rise mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-[10.5px] font-semibold uppercase tracking-[0.16em] text-muted-foreground"
            style={{ animationDelay: "0.18s" }}
          >
            {five.map((v, i) => (
              <span key={v} className="inline-flex items-center gap-3">
                {i > 0 && <span className="h-1 w-1 rounded-full bg-gold" />}
                {v}
              </span>
            ))}
          </div>

          <p
            className="rise mt-7 max-w-[540px] text-[15.5px] leading-[1.8] text-muted-foreground"
            style={{ animationDelay: "0.22s" }}
          >
            <strong className="font-semibold text-forest">Panchvaktra Human Welfare Foundation:</strong> a
            social welfare initiative dedicated to supporting underprivileged families and children in need.
            We help vulnerable communities access educational, emotional, financial, social and livelihood
            support, so they can work toward a safer, more stable and dignified future.
          </p>

          <div
            className="rise mt-9 flex flex-wrap items-center gap-x-7 gap-y-4"
            style={{ animationDelay: "0.28s" }}
          >
            <Link
              to="/donate"
              className="group inline-flex items-center gap-2 rounded-sm bg-gold px-7 py-4 text-[11px] font-bold uppercase tracking-[0.18em] text-forest transition-colors hover:bg-forest hover:text-background"
            >
              Make a donation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/work"
              className="border-b border-forest/30 pb-1 text-[13px] font-semibold text-forest transition-colors hover:border-gold"
            >
              Explore our work
            </Link>
          </div>

          <p className="rise mt-9 text-[11px] tracking-wide text-muted-foreground" style={{ animationDelay: "0.34s" }}>
            {brand.pillars}
          </p>
        </div>
      </div>

      <div className="lg:hidden">
        <HeroPanel className="h-[380px]" portraitClass="bottom-6 right-6 w-[148px]" />
      </div>
    </section>
  );
}