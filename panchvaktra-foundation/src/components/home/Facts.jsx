const facts = [
  { value: "04", label: "States reached", note: "Rajasthan, Bihar, Delhi and Gujarat" },
  { value: "Weekly", label: "On-field drives", note: "Humanitarian assistance and nutrition distribution" },
  { value: "300", label: "Children hosted", note: "At our Navratri Kanya Pujan drive" },
  { value: "05", label: "Guiding values", note: "Paropkar, Priti, Pradan, Prayatna, Pragati" },
];

export default function Facts() {
  return (
    <section className="bg-forest py-16 text-background sm:py-20">
      <div className="page-shell grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {facts.map((f) => (
          <div key={f.label} className="border-l border-background/20 pl-5">
            <p className="font-heading text-[42px] leading-none text-gold">{f.value}</p>
            <p className="mt-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-background">
              {f.label}
            </p>
            <p className="mt-2 text-[12.5px] leading-relaxed text-background/60">{f.note}</p>
          </div>
        ))}
      </div>
    </section>
  );
}