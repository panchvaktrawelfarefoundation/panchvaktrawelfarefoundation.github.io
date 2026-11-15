import { useState } from "react";
import { submitPledge } from "@/lib/server-fns";
import { Field, FormNotice, SubmitButton, inputClass } from "./FormField";

const causes = [
  "Child education and school supplies",
  "Daily nutrition and healthy food",
  "Family relief & humanitarian aid",
  "Healthcare and emergency medical aid",
  "General humanitarian fund",
];

const amounts = [500, 1000, 2500, 5000];

export default function PledgeForm() {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);
  const [reference, setReference] = useState(null);
  const [amount, setAmount] = useState("1000");

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    setPending(true);
    setError(null);
    try {
      const values = Object.fromEntries(new FormData(form).entries());
      const res = await submitPledge({ data: { ...values, amount: Number(values.amount) } });
      setReference(res.reference);
      form.reset();
      setAmount("1000");
    } catch {
      setError("We couldn't record your pledge just now. Please try again, or write to us by email.");
    } finally {
      setPending(false);
    }
  }

  if (reference) {
    return (
      <div className="border border-gold/50 bg-gold/10 p-8">
        <h3 className="font-heading text-[26px] text-forest">Thank you for your pledge</h3>
        <p className="mt-3 text-[14px] leading-relaxed text-forest/75">
          Our team has your pledge and will contact you with the bank transfer and UPI details. No money has
          been collected through this website.
        </p>
        <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-forest/60">
          Reference: {reference}
        </p>
        <button
          type="button"
          onClick={() => setReference(null)}
          className="mt-6 border-b border-forest/40 pb-0.5 text-[12px] font-semibold text-forest"
        >
          Submit another pledge
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
      <Field id="p_name" label="Full name" required>
        <input id="p_name" name="full_name" required className={inputClass} autoComplete="name" />
      </Field>
      <Field id="p_email" label="Email address" required>
        <input id="p_email" name="email" type="email" required className={inputClass} autoComplete="email" />
      </Field>
      <Field id="p_phone" label="Phone number">
        <input id="p_phone" name="phone" className={inputClass} autoComplete="tel" placeholder="+91" />
      </Field>
      <Field id="p_amount" label="Pledge amount (₹)" required>
        <input
          id="p_amount"
          name="amount"
          type="number"
          min="100"
          step="50"
          required
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className={inputClass}
        />
      </Field>
      <Field id="p_cause" label="Designated cause" required className="sm:col-span-2">
        <select id="p_cause" name="cause" required className={inputClass} defaultValue={causes[0]}>
          {causes.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </Field>
      <div className="flex flex-wrap gap-2 sm:col-span-2">
        {amounts.map((a) => (
          <button
            key={a}
            type="button"
            onClick={() => setAmount(String(a))}
            className={`rounded-sm border px-4 py-2 text-[12px] font-semibold transition-colors ${
              amount === String(a)
                ? "border-gold bg-gold/15 text-forest"
                : "border-border text-muted-foreground hover:border-forest/40"
            }`}
          >
            ₹{a.toLocaleString("en-IN")}
          </button>
        ))}
      </div>
      <Field id="p_note" label="Note or dedication" className="sm:col-span-2">
        <textarea id="p_note" name="note" rows={3} className={inputClass} />
      </Field>
      {error && (
        <div className="sm:col-span-2">
          <FormNotice>{error}</FormNotice>
        </div>
      )}
      <div className="sm:col-span-2">
        <SubmitButton pending={pending}>Pledge this amount</SubmitButton>
        <p className="mt-3 text-[12px] leading-relaxed text-muted-foreground">
          This records your pledge only. Our team will share verified bank transfer and UPI details with you
          before any payment.
        </p>
      </div>
    </form>
  );
}