import { Link } from "@tanstack/react-router";
import { Image } from "@/components/ui/image";
import { Facebook, Instagram, Mail } from "lucide-react";
import { brand } from "@/data/site";

const explore = [
  { to: "/about", label: "About us" },
  { to: "/work", label: "Our work" },
  { to: "/gallery", label: "Gallery" },
  { to: "/team", label: "Our team" },
];

const involved = [
  { to: "/donate", label: "Donate" },
  { to: "/volunteer", label: "Volunteer" },
  { to: "/contact", label: "Contact us" },
  { to: "/privacy", label: "Privacy notice" },
];

export default function Footer() {
  return (
    <footer className="relative z-10 bg-forest text-background/80">
      <div className="page-shell grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-background p-1.5">
              <Image
                src={brand.emblem}
                alt="Panchvaktra Human Welfare Foundation emblem"
                className="h-full w-full object-contain"
                fittingType="fit"
              />
            </span>
            <span className="font-heading text-lg font-semibold text-background">Panchvaktra</span>
          </div>
          <p className="mt-5 max-w-xs text-[13.5px] leading-relaxed text-background/70">
            A social welfare initiative supporting vulnerable children and families in need — through education,
            nutrition, healthcare, essential relief and livelihood empowerment.
          </p>
          <p className="mt-5 font-heading text-[15px] italic text-gold">“{brand.tagline}”</p>
        </div>

        <div>
          <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-background/50">Explore</h3>
          <ul className="mt-5 space-y-3">
            {explore.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-[13.5px] text-background/80 transition-colors hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-background/50">Get involved</h3>
          <ul className="mt-5 space-y-3">
            {involved.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-[13.5px] text-background/80 transition-colors hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-background/50">Reach us</h3>
          <ul className="mt-5 space-y-3 text-[13.5px]">
            <li>
              <a
                href={`mailto:${brand.email}`}
                className="inline-flex items-center gap-2 text-background/80 transition-colors hover:text-gold"
              >
                <Mail className="h-3.5 w-3.5" /> {brand.email}
              </a>
            </li>
            <li className="flex gap-3 pt-1">
              <a
                href={brand.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-background/25 text-background/80 transition-colors hover:border-gold hover:text-gold"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={brand.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-background/25 text-background/80 transition-colors hover:border-gold hover:text-gold"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </li>
            <li className="pt-2 text-[12px] leading-relaxed text-background/55">
              CIN: {brand.cin}
              <br />
              DARPAN ID: {brand.darpan}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-background/15">
        <div className="page-shell flex flex-col gap-2 py-5 text-[12px] text-background/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Panchvaktra Human Welfare Foundation. Registered in 2026. All rights reserved.</p>
          <p className="font-heading italic text-background/70">Paropkar · Priti · Pradan · Prayatna · Pragati</p>
        </div>
      </div>
    </footer>
  );
}