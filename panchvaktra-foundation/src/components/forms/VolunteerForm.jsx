import { useState } from "react";
import { submitVolunteerApplication } from "@/lib/server-fns";
import { Field, FormNotice, SubmitButton, inputClass } from "./FormField";

const areas = [
  "Child education and tutoring",
  "Healthcare and first aid",
  "Food and nutrition drives",
  "Shelter and family relief",
  "Mentorship and sports",
  "Community outreach and admin",
];

const availability = ["Weekends (part-time)", "Weekday evenings", "Full-time", "Flexible / remote"];

export default function VolunteerForm() {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);
  const [reference, setReference] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    setPending(true);
    setError(null);
    try {
      const res = await submitVolunteerApplication({
        data: Object.fromEntries(new FormData(form).entries()),
      });
      setReference(res.reference);
      form.reset();
    } catch {
      setError("We couldn't submit your application just now. Please try again in a moment.");
    } finally {
      setPending(false);
    }
  }

  if (reference) {
    return (
      <div className="border border-gold/50 bg-gold/10 p-8">
        <h3 className="font-heading text-[26px] text-forest">Application received</h3>
        <p className="mt-3 text-[14px] leading-relaxed text-forest/75">
          Thank you for offering your time. Our team reviews every application and will contact you about the
          next drive.
        </p>
        <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-forest/60">
          Reference: {reference}
        </p>
        <button
          type="button"
          onClick={() => setReference(null)}
          className="mt-6 border-b border-forest/40 pb-0.5 text-[12px] font-semibold text-forest"
        >
          Submit another application
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
      <Field id="v_name" label="Full name" required>
        <input id="v_name" name="full_name" required className={inputClass} autoComplete="name" />
      </Field>
      <Field id="v_email" label="Email address" required>
        <input id="v_email" name="email" type="email" required className={inputClass} autoComplete="email" />
      </Field>
      <Field id="v_phone" label="Phone number">
        <input id="v_phone" name="phone" className={inputClass} autoComplete="tel" placeholder="+91" />
      </Field>
      <Field id="area" label="Area of interest" required>
        <select id="area" name="area_of_interest" required className={inputClass} defaultValue={areas[0]}>
          {areas.map((a) => (
            <option key={a} value={a}>
              {a}
            </option>
          ))}
        </select>
      </Field>
      <Field id="availability" label="Availability" required className="sm:col-span-2">
        <select id="availability" name="availability" required className={inputClass} defaultValue={availability[0]}>
          {availability.map((a) => (
            <option key={a} value={a}>
              {a}
            </option>
          ))}
        </select>
      </Field>
      <Field id="background" label="Brief background or experience" className="sm:col-span-2">
        <textarea id="background" name="background" rows={4} className={inputClass} />
      </Field>
      {error && (
        <div className="sm:col-span-2">
          <FormNotice>{error}</FormNotice>
        </div>
      )}
      <div className="sm:col-span-2">
        <SubmitButton pending={pending}>Submit application</SubmitButton>
      </div>
    </form>
  );
}