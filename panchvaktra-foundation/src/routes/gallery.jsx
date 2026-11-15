import { createFileRoute } from "@tanstack/react-router";
import { Image } from "@/components/ui/image";
import PageHeader from "@/components/site/PageHeader";
import ClosingCta from "@/components/home/ClosingCta";
import { gallery } from "@/data/site";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Panchvaktra Human Welfare Foundation" },
      {
        name: "description",
        content:
          "Photographs from Panchvaktra drives: learning sessions, shared meals, festival seva and relief distribution with families.",
      },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="Glimpses with the children and families we serve"
        intro="Learning sessions, community meals, Kanya Pujan seva and on-field relief drives — moments from our work in pictures."
      />

      <section className="page-shell py-16 sm:py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((shot) => (
            <figure key={shot.src} className="group">
              <div className="overflow-hidden">
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <figcaption className="mt-3">
                <p className="font-heading text-[17px] text-forest">{shot.title}</p>
                <p className="mt-1 text-[12.5px] leading-relaxed text-muted-foreground">{shot.alt}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <ClosingCta />
    </>
  );
}