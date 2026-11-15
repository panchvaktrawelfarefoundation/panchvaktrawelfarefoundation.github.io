import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { brand } from "@/data/site";

export default function ClosingCta() {
  return (
    <section className="bg-forest py-20 text-background sm:py-24">
      <div className="page-shell grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
        <div>
          <p className="eyebrow text-gold">Together, we can make a difference</p>
          <h2 className="mt-4 max-w-xl text-3xl leading-[1.16] text-background sm:text-[42px]">
            One meal, one school book, one family at a time.
          </h2>
          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-background/70">
            Your support keeps our weekly drives running — nutrition, school materials and relief for families
            rebuilding their lives.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
          <Link
            to="/donate"
            className="group inline-flex items-center justify-center gap-2 rounded-sm bg-gold px-7 py-4 text-[11px] font-bold uppercase tracking-[0.18em] text-forest transition-colors hover:bg-background"
          >
            Support a drive
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            to="/volunteer"
            className="inline-flex items-center justify-center rounded-sm border border-background/35 px-7 py-4 text-[11px] font-bold uppercase tracking-[0.18em] text-background transition-colors hover:border-gold hover:text-gold"
          >
            Volunteer
          </Link>
          <a
            href={`mailto:${brand.email}`}
            className="inline-flex items-center justify-center px-2 py-4 text-[13px] text-background/70 underline decoration-background/30 underline-offset-4 transition-colors hover:text-gold"
          >
            Write to us
          </a>
        </div>
      </div>
    </section>
  );
}