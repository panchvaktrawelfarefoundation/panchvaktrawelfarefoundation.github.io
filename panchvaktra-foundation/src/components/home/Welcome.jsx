import { Link } from "@tanstack/react-router";
import { Image } from "@/components/ui/image";
import { ArrowRight } from "lucide-react";
import { scrollImages } from "@/data/site";

export default function Welcome() {
  return (
    <section className="page-shell py-20 sm:py-24">
      <div className="grid gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-16">
        <div>
          <p className="eyebrow">Welcome</p>
          <h2 className="mt-3 text-3xl leading-[1.16] text-forest sm:text-[40px]">
            Every person deserves to live with dignity, security and hope
          </h2>
          <div className="rule-gold mt-5" />
          <div className="mt-6 space-y-4 text-[15px] leading-[1.85] text-muted-foreground">
            <p>
              Panchvaktra Human Welfare Foundation was established with a simple belief: every person deserves
              the opportunity to live with dignity, security and hope.
            </p>
            <p>
              Families from vulnerable and underprivileged backgrounds often face significant hardships
              while trying to establish safe and stable lives. Access to education, financial resources,
              employment, emotional support and social acceptance are important parts of that journey.
            </p>
            <p>
              We recognised the need for a compassionate, community-oriented initiative that focuses not only
              on immediate needs but also on the opportunities that help individuals and families move toward
              long-term independence.
            </p>
          </div>
          <Link
            to="/about"
            className="group mt-8 inline-flex items-center gap-2 text-[13px] font-semibold text-forest"
          >
            Read our story
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <figure className="col-span-2">
            <Image
              src={scrollImages[0].src}
              alt={scrollImages[0].alt}
              className="aspect-[16/10] w-full object-cover"
            />
            <figcaption className="mt-2.5 text-[11.5px] uppercase tracking-[0.14em] text-muted-foreground">
              {scrollImages[0].caption}
            </figcaption>
          </figure>
          {scrollImages.slice(1).map((img) => (
            <figure key={img.src}>
              <Image src={img.src} alt={img.alt} className="aspect-[4/5] w-full object-cover" />
              <figcaption className="mt-2.5 text-[11.5px] uppercase tracking-[0.14em] text-muted-foreground">
                {img.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}