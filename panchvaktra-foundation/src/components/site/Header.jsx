import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Image } from "@/components/ui/image";
import { Mail, Menu, X } from "lucide-react";
import { brand } from "@/data/site";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/work", label: "Our Work" },
  { to: "/gallery", label: "Gallery" },
  { to: "/team", label: "Team" },
  { to: "/contact", label: "Contact" },
];

function matches(pathname, to) {
  if (to === "/") return pathname === "/";
  return pathname === to || pathname.startsWith(`${to}/`);
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setMounted(true), []);

  // Any navigation closes the mobile drawer.
  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const desktop = window.matchMedia("(min-width: 1024px)");
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    const onViewportChange = () => {
      if (desktop.matches) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onViewportChange);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onViewportChange);
    };
  }, [open]);

  const isCurrent = (to) => mounted && matches(pathname, to);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="page-shell flex h-[76px] items-center justify-between gap-4">
          <Link
            to="/"
            aria-label="Panchvaktra Human Welfare Foundation — home"
            className="flex min-w-0 items-center gap-3"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-forest p-1.5">
              <Image
                src={brand.emblem}
                alt=""
                className="h-full w-full object-contain"
                fittingType="fit"
              />
            </span>
            <span className="min-w-0 leading-none">
              <span className="block truncate font-heading text-[18px] font-semibold tracking-tight text-forest sm:text-[20px]">
                Panchvaktra
              </span>
              <span className="mt-1.5 hidden text-[9px] font-semibold uppercase tracking-[0.2em] text-muted-foreground sm:block">
                Human Welfare Foundation
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-5 lg:flex xl:gap-8">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                aria-current={isCurrent(item.to) ? "page" : undefined}
                className={`text-[13.5px] transition-colors hover:text-forest ${
                  isCurrent(item.to)
                    ? "border-b border-gold pb-0.5 font-semibold text-forest"
                    : "font-medium text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden shrink-0 items-center gap-4 lg:flex">
            <Link
              to="/volunteer"
              aria-current={isCurrent("/volunteer") ? "page" : undefined}
              className={`text-[13px] font-semibold underline decoration-2 underline-offset-4 transition-colors ${
                isCurrent("/volunteer")
                  ? "text-forest decoration-gold"
                  : "text-forest/65 decoration-gold/60 hover:text-forest"
              }`}
            >
              Volunteer
            </Link>
            <Link
              to="/donate"
              aria-current={isCurrent("/donate") ? "page" : undefined}
              className={`rounded-sm px-5 py-3 text-[11px] font-bold uppercase tracking-[0.16em] transition-colors ${
                isCurrent("/donate")
                  ? "bg-forest text-background"
                  : "bg-gold text-forest hover:bg-forest hover:text-background"
              }`}
            >
              Donate
            </Link>
          </div>

          <div className="flex shrink-0 items-center gap-2 lg:hidden">
            <Link
              to="/donate"
              aria-current={isCurrent("/donate") ? "page" : undefined}
              className={`rounded-sm px-3.5 py-2.5 text-[10px] font-bold uppercase tracking-[0.14em] transition-colors ${
                isCurrent("/donate") ? "bg-forest text-background" : "bg-gold text-forest"
              }`}
            >
              Donate
            </Link>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-navigation"
              className="flex h-10 w-10 items-center justify-center rounded-sm border border-border text-forest transition-colors hover:border-forest"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div
          className="fixed inset-0 z-[60] lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
        >
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="absolute inset-0 h-full w-full cursor-default bg-forest/45"
          />
          <div
            id="mobile-navigation"
            className="relative ml-auto flex h-full w-full max-w-sm flex-col overflow-y-auto bg-background shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-border px-5 py-3.5">
              <span className="eyebrow">Menu</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="flex h-10 w-10 items-center justify-center rounded-sm border border-border text-forest transition-colors hover:border-forest"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="flex flex-1 flex-col px-5 py-2">
              {nav.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  aria-current={isCurrent(item.to) ? "page" : undefined}
                  className={`flex items-center justify-between border-b border-border/60 py-3.5 text-[15px] transition-colors ${
                    isCurrent(item.to)
                      ? "font-semibold text-forest"
                      : "text-muted-foreground hover:text-forest"
                  }`}
                >
                  {item.label}
                  {isCurrent(item.to) && <span className="h-1.5 w-1.5 rounded-full bg-gold" />}
                </Link>
              ))}
            </nav>

            <div className="grid gap-2.5 px-5 pb-6 pt-2">
              <Link
                to="/volunteer"
                onClick={() => setOpen(false)}
                aria-current={isCurrent("/volunteer") ? "page" : undefined}
                className={`rounded-sm border px-4 py-3.5 text-center text-[11px] font-bold uppercase tracking-[0.14em] transition-colors ${
                  isCurrent("/volunteer")
                    ? "border-forest bg-forest text-background"
                    : "border-forest text-forest"
                }`}
              >
                Volunteer with us
              </Link>
              <Link
                to="/donate"
                onClick={() => setOpen(false)}
                aria-current={isCurrent("/donate") ? "page" : undefined}
                className={`rounded-sm px-4 py-3.5 text-center text-[11px] font-bold uppercase tracking-[0.14em] transition-colors ${
                  isCurrent("/donate") ? "bg-forest text-background" : "bg-gold text-forest"
                }`}
              >
                Donate
              </Link>
              <a
                href={`mailto:${brand.email}`}
                className="mt-2 inline-flex items-center justify-center gap-2 text-[12px] text-muted-foreground transition-colors hover:text-forest"
              >
                <Mail className="h-3.5 w-3.5" /> {brand.email}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}