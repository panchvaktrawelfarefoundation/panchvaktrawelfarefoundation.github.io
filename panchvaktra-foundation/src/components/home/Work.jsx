import { Link } from "@tanstack/react-router";
import { Image } from "@/components/ui/image";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/site/SectionHeading";
import { programs } from "@/data/site";

export default function Work() {
  return (
    <section className="page-shell py-20 sm:py-24">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow="Our work"
          title="Humanitarian care, week after week"
          intro="Direct assistance, child education camps and nutrition distribution — delivered on the ground, in the communities that need it most."
        />
        <Link
          to="/work"
          className="group inline-flex shrink-0 items-center gap-2 border-b border-forest/30 pb-1 text-[13px] font-semibold text-forest transition-colors hover:border-gold"
        >
          All programmes
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-6">
        {programs.map((p) => (
          <Link
            key={p.slug}
            to="/work"
            hash={p.slug}
            className="group lg:col-span-2"
          >
            <div className="overflow-hidden">
              <Image
                src={p.image}
                alt={p.alt}
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
            <h3 className="mt-4 font-heading text-[19px] leading-snug text-forest">{p.title}</h3>
            <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">{p.body}</p>
            <span className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-gold">
              Learn more <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </Link>
        ))}

        <Link
          to="/volunteer"
          className="flex flex-col justify-between bg-forest p-6 text-background transition-colors hover:bg-forest-soft lg:col-span-2"
        >
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">Join in</span>
          <div>
            <h3 className="font-heading text-[22px] leading-snug">Give your time, not just your money</h3>
            <p className="mt-2 text-[13px] leading-relaxed text-background/70">
              Volunteers power every drive. Choose an area that fits you and we will reach out.
            </p>
            <span className="mt-4 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-gold">
              Volunteer with us <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
}