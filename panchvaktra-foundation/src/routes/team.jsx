import { createFileRoute } from "@tanstack/react-router";
import { Image } from "@/components/ui/image";
import PageHeader from "@/components/site/PageHeader";
import ClosingCta from "@/components/home/ClosingCta";
import { brand, coreTeam, members } from "@/data/site";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Our team — Panchvaktra Human Welfare Foundation" },
      {
        name: "description",
        content:
          "Meet the office bearers and members of Panchvaktra Human Welfare Foundation, led by President Ambuj Bharadwaj.",
      },
    ],
  }),
  component: TeamPage,
});

function TeamPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our team"
        title="The people who plan, pack and deliver every drive"
        intro="Panchvaktra is run by a core team of office bearers and members, supported by volunteers across our drive regions."
      />

      <section className="page-shell py-16 sm:py-20">
        <div className="flex items-center gap-4">
          <h2 className="text-[24px] text-forest sm:text-[28px]">Core team</h2>
          <span className="h-px flex-1 bg-border" />
        </div>
        <div className="mt-8 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {coreTeam.map((m) => (
            <figure key={m.name}>
              <Image src={m.photo} alt={`${m.name}, ${m.role}`} className="aspect-[4/5] w-full object-cover" />
              <figcaption className="mt-3">
                <p className="font-heading text-[19px] text-forest">{m.name}</p>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-gold">{m.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-16 flex items-center gap-4">
          <h2 className="text-[24px] text-forest sm:text-[28px]">Members</h2>
          <span className="h-px flex-1 bg-border" />
        </div>
        <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {members.map((m) => (
            <figure key={m.name}>
              <Image
                src={m.photo}
                alt={`${m.name}, ${m.role}`}
                className="aspect-[4/5] w-full object-cover"
              />
              <figcaption className="mt-2.5">
                <p className="font-heading text-[15px] leading-tight text-forest">{m.name}</p>
                <p className="mt-1 text-[10px] font-semibold uppercase leading-relaxed tracking-[0.1em] text-muted-foreground">
                  {m.role}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-14 grid gap-6 border border-border bg-secondary/40 p-7 sm:grid-cols-3">
          <div>
            <p className="eyebrow">Registered name</p>
            <p className="mt-2 text-[14px] font-medium text-forest">{brand.name}</p>
          </div>
          <div>
            <p className="eyebrow">CIN</p>
            <p className="mt-2 text-[14px] font-medium text-forest">{brand.cin}</p>
          </div>
          <div>
            <p className="eyebrow">DARPAN ID</p>
            <p className="mt-2 text-[14px] font-medium text-forest">{brand.darpan}</p>
          </div>
        </div>
      </section>

      <ClosingCta />
    </>
  );
}