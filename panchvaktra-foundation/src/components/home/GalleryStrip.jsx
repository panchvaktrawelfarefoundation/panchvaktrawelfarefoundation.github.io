import { Link } from "@tanstack/react-router";
import { Image } from "@/components/ui/image";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/site/SectionHeading";
import { gallery } from "@/data/site";

export default function GalleryStrip() {
  const shots = gallery.slice(0, 5);

  return (
    <section className="page-shell py-20 sm:py-24">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow="Glimpses"
          title="Moments from our drives"
          intro="Learning sessions, shared meals and festival seva — the everyday work of dignity, in pictures."
        />
        <Link
          to="/gallery"
          className="group inline-flex shrink-0 items-center gap-2 border-b border-forest/30 pb-1 text-[13px] font-semibold text-forest transition-colors hover:border-gold"
        >
          View full gallery
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-5">
        {shots.map((shot, i) => (
          <figure
            key={shot.src}
            className={i === 0 ? "col-span-2 row-span-2 lg:col-span-2 lg:row-span-2" : ""}
          >
            <div className="group relative overflow-hidden">
              <Image
                src={shot.src}
                alt={shot.alt}
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] ${
                  i === 0 ? "aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[420px]" : "aspect-square"
                }`}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-forest/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <figcaption className="pointer-events-none absolute bottom-3 left-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-background opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                {shot.title}
              </figcaption>
            </div>
          </figure>
        ))}
      </div>
    </section>
  );
}