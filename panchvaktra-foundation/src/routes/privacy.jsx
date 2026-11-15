import { createFileRoute } from "@tanstack/react-router";
import PageHeader from "@/components/site/PageHeader";
import { brand } from "@/data/site";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy notice — Panchvaktra Human Welfare Foundation" },
      {
        name: "description",
        content:
          "How Panchvaktra Human Welfare Foundation collects, uses and protects the information shared through this website.",
      },
    ],
  }),
  component: PrivacyPage,
});

const sections = [
  {
    title: "What we collect",
    body: "When you send an inquiry, apply to volunteer or pledge support, we collect the details you enter: your name, email address, phone number and message. We do not ask for payment details on this website.",
  },
  {
    title: "How we use it",
    body: "Your details are used only to respond to your message, review your volunteer application, or share verified payment details for a pledge. We do not sell or rent your information.",
  },
  {
    title: "Who can see it",
    body: "Submissions are visible only to the foundation's authorised team members. They are not published on the website.",
  },
  {
    title: "How long we keep it",
    body: "We keep submissions for as long as needed to respond and maintain our records, and remove them when they are no longer required.",
  },
  {
    title: "Your choices",
    body: "You can ask us to update or delete the information you shared by writing to us. We will act on your request as quickly as we can.",
  },
];

function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal and policy"
        title="Privacy notice"
        intro="Your information is handled responsibly and kept strictly confidential. This notice explains what we collect and why."
      />

      <section className="page-shell max-w-3xl py-16 sm:py-20">
        <div className="space-y-9">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="text-[21px] text-forest">{s.title}</h2>
              <p className="mt-2 text-[14.5px] leading-[1.85] text-muted-foreground">{s.body}</p>
            </div>
          ))}
          <div className="border-t border-border pt-7">
            <p className="text-[14px] leading-relaxed text-muted-foreground">
              Questions about this notice? Write to{" "}
              <a
                href={`mailto:${brand.email}`}
                className="text-forest underline decoration-border underline-offset-4 hover:decoration-gold"
              >
                {brand.email}
              </a>
              .
            </p>
            <p className="mt-4 text-[12px] text-muted-foreground">
              {brand.name} · CIN {brand.cin} · DARPAN ID {brand.darpan}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}