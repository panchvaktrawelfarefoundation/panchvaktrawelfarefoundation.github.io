export const inputClass =
  "mt-2 w-full rounded-sm border border-input bg-card px-3.5 py-3 text-[14px] text-forest placeholder:text-muted-foreground/55 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold";

export const labelClass = "text-[11px] font-semibold uppercase tracking-[0.14em] text-forest/70";

export function Field({ id, label, required, children, className = "" }) {
  return (
    <div className={className}>
      <label htmlFor={id} className={labelClass}>
        {label}
        {required && <span className="text-gold"> *</span>}
      </label>
      {children}
    </div>
  );
}

export function SubmitButton({ pending, children }) {
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex items-center justify-center gap-2 rounded-sm bg-forest px-7 py-4 text-[11px] font-bold uppercase tracking-[0.18em] text-background transition-colors hover:bg-gold hover:text-forest disabled:cursor-not-allowed disabled:opacity-60"
    >
      {pending ? "Sending…" : children}
    </button>
  );
}

export function FormNotice({ tone = "error", children }) {
  const cls =
    tone === "error"
      ? "border-destructive/40 bg-destructive/5 text-destructive"
      : "border-gold/50 bg-gold/10 text-forest";
  return <p className={`mt-4 border px-4 py-3 text-[13px] ${cls}`}>{children}</p>;
}