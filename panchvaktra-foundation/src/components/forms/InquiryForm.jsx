import { useState } from "react";
import { submitInquiry } from "@/lib/server-fns";
import { Field, FormNotice, SubmitButton, inputClass } from "./FormField";

const types = [
  "General inquiry",
  "Volunteer opportunities",
  "Donation and sponsorship",
  "Request for assistance",
  "Partnership and collaboration",
  "Programs and events",
  "Other",
];

export default function InquiryForm() {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);
  const [reference, setReference] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    setPending(true);
    setError(null);
    try {
      const res = await submitInquiry({ data: Object.fromEntries(new FormData(form).entries()) });
      setReference(res.reference);
      form.reset();
    } catch {
      setError("We couldn't send your message just now. Please try again, or write to us by email.");
    } finally {
      setPending(false);
    }
  }

  if (reference) {
    return (
      <div className="border border-gold/50 bg-gold/10 p-8">
        <h3 className="font-heading text-[26px] text-forest">Thank you for reaching out</h3>
        <p className="mt-3 text-[14px] leading-relaxed text-forest/75">
          Your inquiry has been received. Our team will review your message and get back to you as soon as
          possible.
        </p>
        <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-forest/60">
          Reference: {reference}
        </p>
        <button
          type="button"
          onClick={() => setReference(null)}
          className="mt-6 border-b border-forest/40 pb-0.5 text-[12px] font-semibold text-forest"
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
      <Field id="full_name" label="Full name" required>
        <input id="full_name" name="full_name" required className={inputClass} autoComplete="name" />
      </Field>
      <Field id="email" label="Email address" required>
        <input id="email" name="email" type="email" required className={inputClass} autoComplete="email" />
      </Field>
      <Field id="phone" label="Phone number">
        <input id="phone" name="phone" className={inputClass} autoComplete="tel" placeholder="+91" />
      </Field>
      <Field id="inquiry_type" label="Inquiry type" required>
        <select id="inquiry_type" name="inquiry_type" required className={inputClass} defaultValue={types[0]}>
          {types.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </Field>
      <Field id="organization" label="Organization">
        <input id="organization" name="organization" className={inputClass} />
      </Field>
      <Field id="subject" label="Subject" required>
        <input id="subject" name="subject" required className={inputClass} />
      </Field>
      <Field id="message" label="Your message" required className="sm:col-span-2">
        <textarea id="message" name="message" required rows={5} className={inputClass} />
      </Field>
      {error && (
        <div className="sm:col-span-2">
          <FormNotice>{error}</FormNotice>
        </div>
      )}
      <div className="sm:col-span-2">
        <SubmitButton pending={pending}>Send your inquiry</SubmitButton>
        <p className="mt-3 text-[12px] text-muted-foreground">
          Your information is handled responsibly and kept confidential.
        </p>
      </div>
    </form>
  );
}