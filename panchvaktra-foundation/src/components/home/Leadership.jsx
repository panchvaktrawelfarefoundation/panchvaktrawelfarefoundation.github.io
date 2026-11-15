import { Link } from "@tanstack/react-router";
import { Image } from "@/components/ui/image";
import { ArrowRight } from "lucide-react";
import { headPortrait, coreTeam } from "@/data/site";

export default function Leadership() {
  return (
    <section className="bg-secondary/50 py-20 sm:py-24">
      <div className="page-shell grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div className="relative">
          <Image
            src={headPortrait}
            alt="Ambuj Bharadwaj, President of Panchvaktra Human Welfare Foundation"
            className="aspect-[4/5] w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest/40 to-transparent" />
        </div>

        <div>
          <p className="eyebrow">Leadership</p>
          <h2 className="mt-3 text-3xl leading-[1.16] text-forest sm:text-[40px]">
            Led by people who show up
          </h2>
          <div className="rule-gold mt-5" />
          <p className="mt-6 text-[15px] leading-[1.85] text-muted-foreground">
            Ambuj Bharadwaj serves as President of Panchvaktra Human Welfare Foundation, working alongside a
            core team of five office bearers and six members across our drive regions.
          </p>
          <p className="mt-4 text-[15px] leading-[1.85] text-muted-foreground">
            Every drive is planned, packed and delivered by this team and its volunteers — the same people who
            sit with children, serve meals and follow up with families.
          </p>

          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-[13px] text-forest">
            {coreTeam.slice(1).map((m) => (
              <span key={m.name}>
                <span className="font-semibold">{m.name}</span>
                <span className="text-muted-foreground"> · {m.role}</span>
              </span>
            ))}
          </div>

          <Link
            to="/team"
            className="group mt-8 inline-flex items-center gap-2 border-b border-forest/30 pb-1 text-[13px] font-semibold text-forest transition-colors hover:border-gold"
          >
            Meet the full team
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}