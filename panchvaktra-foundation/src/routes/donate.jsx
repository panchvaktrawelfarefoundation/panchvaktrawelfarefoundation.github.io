import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import PageHeader from "@/components/site/PageHeader";
import PledgeForm from "@/components/forms/PledgeForm";
import { brand } from "@/data/site";

export const Route = createFileRoute("/donate")({
  head: () => ({
    meta: [
      { title: "Donate — Panchvaktra Human Welfare Foundation" },
      {
        name: "description",
        content:
          "Pledge support for school supplies, daily nutrition, family relief or emergency medical aid with Panchvaktra Human Welfare Foundation.",
      },
    ],
  }),
  component: DonatePage,
});

const uses = [
  "School books, stationery and uniforms for children",
  "Fresh meals and nutrition at weekly drives",
  "Relief supplies and essentials for families in need",
  "Emergency medical and healthcare support",
];

function DonatePage() {
  return (
    <>
      <PageHeader
        eyebrow="Donate"
        title="One meal, one school book, one family at a time"
        intro="Your contribution keeps our weekly drives running. Pledge an amount below and our team will contact you with verified payment details."
      />

      <section className="page-shell grid gap-12 py-16 sm:py-20 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <h2 className="text-[24px] text-forest sm:text-[28px]">Where your support goes</h2>
          <ul className="mt-7 space-y-4">
            {uses.map((u) => (
              <li key={u} className="flex gap-3 text-[14px] leading-relaxed text-forest/85">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                {u}
              </li>
            ))}
          </ul>

          <div className="mt-8 border border-border bg-secondary/40 p-5">
            <p className="eyebrow">A note on transparency</p>
            <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">
              This page records a pledge, not a payment. Our team will share verified bank transfer and UPI
              details with you directly, and confirm every contribution received.
            </p>
            <p className="mt-3 text-[12px] text-muted-foreground">
              Prefer to discuss first? Write to{" "}
              <a href={`mailto:${brand.email}`} className="text-forest underline decoration-border underline-offset-4">
                {brand.email}
              </a>
              .
            </p>
          </div>

          <div className="mt-6 text-[12px] leading-relaxed text-muted-foreground">
            Registered non-profit · CIN {brand.cin} · DARPAN ID {brand.darpan}
          </div>
        </div>

        <div className="border border-border bg-background p-6 sm:p-8">
          <h2 className="font-heading text-[22px] text-forest">Make a pledge</h2>
          <p className="mt-2 text-[13.5px] text-muted-foreground">
            Choose an amount and the cause you would like to support.
          </p>
          <div className="mt-6">
            <PledgeForm />
          </div>
        </div>
      </section>
    </>
  );
}