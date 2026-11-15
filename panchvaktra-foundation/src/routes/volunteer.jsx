import { createFileRoute } from "@tanstack/react-router";
import { Image } from "@/components/ui/image";
import PageHeader from "@/components/site/PageHeader";
import VolunteerForm from "@/components/forms/VolunteerForm";
import { gallery } from "@/data/site";

export const Route = createFileRoute("/volunteer")({
  head: () => ({
    meta: [
      { title: "Volunteer — Panchvaktra Human Welfare Foundation" },
      {
        name: "description",
        content:
          "Join Panchvaktra drives: tutoring children, packing and serving meals, relief distribution, mentorship and community outreach.",
      },
    ],
  }),
  component: VolunteerPage,
});

const roles = [
  {
    title: "Child education and tutoring",
    body: "Support learning sessions and help children keep up with school.",
  },
  {
    title: "Food and nutrition drives",
    body: "Help pack, cook and serve meals at our weekly on-field drives.",
  },
  {
    title: "Relief distribution",
    body: "Assist families in need with essentials, educational guidance and follow-up.",
  },
  {
    title: "Mentorship and outreach",
    body: "Guide young people, or help with admin, media and community coordination.",
  },
];

function VolunteerPage() {
  return (
    <>
      <PageHeader
        eyebrow="Volunteer"
        title="Give your time, not just your money"
        intro="Volunteers make every drive possible — from packing meals to sitting with a child over homework. Tell us where you'd like to help."
      />

      <section className="page-shell grid gap-12 py-16 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <Image
            src={gallery[7].src}
            alt={gallery[7].alt}
            className="aspect-[4/3] w-full object-cover"
          />
          <h2 className="mt-8 text-[24px] text-forest sm:text-[28px]">Ways to help</h2>
          <ul className="mt-6 space-y-5">
            {roles.map((r) => (
              <li key={r.title} className="border-l border-gold/60 pl-4">
                <p className="font-heading text-[17px] text-forest">{r.title}</p>
                <p className="mt-1 text-[13.5px] leading-relaxed text-muted-foreground">{r.body}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="border border-border bg-background p-6 sm:p-8">
          <h2 className="font-heading text-[22px] text-forest">Apply as a volunteer</h2>
          <p className="mt-2 text-[13.5px] text-muted-foreground">
            Our team reviews every application and will contact you about upcoming drives.
          </p>
          <div className="mt-6">
            <VolunteerForm />
          </div>
        </div>
      </section>
    </>
  );
}