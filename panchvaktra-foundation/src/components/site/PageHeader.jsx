export default function PageHeader({ eyebrow, title, intro }) {
  return (
    <section className="border-b border-border bg-secondary/40">
      <div className="page-shell py-14 sm:py-20">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1 className="mt-3 max-w-3xl text-[34px] leading-[1.1] text-forest sm:text-[50px]">{title}</h1>
        {intro && (
          <p className="mt-5 max-w-2xl text-[15.5px] leading-[1.8] text-muted-foreground">{intro}</p>
        )}
      </div>
    </section>
  );
}