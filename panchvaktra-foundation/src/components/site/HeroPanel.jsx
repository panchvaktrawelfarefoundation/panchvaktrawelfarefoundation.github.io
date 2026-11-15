import { Image } from "@/components/ui/image";
import { brand, headPortrait } from "@/data/site";

export default function HeroPanel({ className = "", portraitClass = "" }) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden border-l border-gold/25 bg-gradient-to-br from-[#FCFBF7] via-[#F6F1E6] to-[#EAE0D0] ${className}`}
    >
      {/* Institutional subtle gold accent geometry */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden" aria-hidden="true">
        <div className="h-[540px] w-[540px] rounded-full border border-gold/15" />
        <div className="absolute h-[400px] w-[400px] rounded-full border border-gold/20" />
        <div className="absolute h-[280px] w-[280px] rounded-full border border-dashed border-gold/30" />
        <div className="absolute h-[320px] w-[320px] rounded-full bg-gold/10 blur-3xl" />
      </div>

      {/* Prominent Foundation Logo & Seal */}
      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <div className="group relative flex items-center justify-center">
          <div className="absolute -inset-4 rounded-full bg-gold/15 blur-xl transition-all duration-500 group-hover:bg-gold/25" />
          <Image
            src={brand.logo || brand.emblem}
            alt="Panchvaktra Human Welfare Foundation Logo"
            className="relative h-48 w-48 object-contain drop-shadow-[0_16px_32px_rgba(180,140,60,0.25)] sm:h-60 sm:w-60 lg:h-72 lg:w-72 transition-transform duration-500 hover:scale-[1.02]"
            fittingType="fit"
          />
        </div>

        <div className="mt-5 max-w-[320px]">
          <p className="font-heading text-[17px] font-bold tracking-tight text-forest sm:text-[20px]">
            {brand.name}
          </p>
          <p className="mt-1 font-heading text-[13px] italic text-forest/75 sm:text-[14px]">
            “{brand.tagline}”
          </p>
          <div className="mx-auto mt-2 h-px w-16 bg-gold/50" />
          <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            CIN: {brand.cin}
          </p>
        </div>
      </div>

      {/* President Portrait in Corner */}
      <div className={`absolute z-20 ${portraitClass}`}>
        <div className="border border-gold/40 bg-background p-2 shadow-[0_18px_40px_rgba(40,25,10,0.14)]">
          <Image
            src={headPortrait}
            alt="Ambuj Bharadwaj, President of Panchvaktra Human Welfare Foundation"
            className="aspect-[281/331] w-full object-cover"
          />
        </div>
        <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.16em] text-forest">
          Ambuj Bharadwaj · President
        </p>
      </div>
    </div>
  );
}