import { createFileRoute } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, MapPin, Plus } from "lucide-react";
import PageHeader from "@/components/site/PageHeader";
import InquiryForm from "@/components/forms/InquiryForm";
import { brand, faqs } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact us — Panchvaktra Human Welfare Foundation" },
      {
        name: "description",
        content:
          "Reach the Panchvaktra team for assistance, volunteering, partnerships or donations, and read answers to common questions.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Talk to our team"
        intro="Whether you need help, want to volunteer, or are looking to support a drive — write to us and we will respond as soon as we can."
      />

      <section className="page-shell grid gap-12 py-16 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <h2 className="text-[24px] text-forest sm:text-[28px]">Reach us</h2>
          <ul className="mt-7 space-y-6 text-[14px]">
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <div>
                <p className="eyebrow">Email</p>
                <a
                  href={`mailto:${brand.email}`}
                  className="mt-1.5 block break-all text-forest underline decoration-border underline-offset-4 hover:decoration-gold"
                >
                  {brand.email}
                </a>
              </div>
            </li>
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <div>
                <p className="eyebrow">Registered office</p>
                <p className="mt-1.5 text-forest">Delhi, India</p>
                <p className="mt-1 text-[12.5px] text-muted-foreground">
                  Weekly drives also run in Rajasthan, Bihar and Gujarat.
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <Instagram className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <div>
                <p className="eyebrow">Social</p>
                <div className="mt-2 flex gap-3">
                  <a
                    href={brand.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-forest underline decoration-border underline-offset-4 hover:decoration-gold"
                  >
                    Instagram
                  </a>
                  <a
                    href={brand.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-forest underline decoration-border underline-offset-4 hover:decoration-gold"
                  >
                    <Facebook className="h-3.5 w-3.5" /> Facebook
                  </a>
                </div>
              </div>
            </li>
            <li>
              <p className="eyebrow">Registration</p>
              <p className="mt-1.5 text-[12.5px] leading-relaxed text-muted-foreground">
                CIN {brand.cin}
                <br />
                DARPAN ID {brand.darpan}
              </p>
            </li>
          </ul>
        </div>

        <div className="border border-border bg-background p-6 sm:p-8">
          <h2 className="font-heading text-[22px] text-forest">Send us an inquiry</h2>
          <p className="mt-2 text-[13.5px] text-muted-foreground">
            Fill in your details and our team will get in touch.
          </p>
          <div className="mt-6">
            <InquiryForm />
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-secondary/40 py-16 sm:py-20">
        <div className="page-shell">
          <h2 className="text-[28px] leading-tight text-forest sm:text-[34px]">Frequently asked questions</h2>
          <div className="mt-8 border-t border-border">
            {faqs.map((f) => (
              <details key={f.q} className="group border-b border-border py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-medium text-forest">
                  {f.q}
                  <Plus className="h-4 w-4 shrink-0 text-gold transition-transform group-open:rotate-45" />
                </summary>
                <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}