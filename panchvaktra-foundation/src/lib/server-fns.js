import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const getServerInfo = createServerFn({ method: "GET" }).handler(async () => ({
  renderedAt: new Date().toISOString(),
}));

const emailField = z
  .string()
  .trim()
  .min(5)
  .max(160)
  .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Enter a valid email address");

const optionalText = (max) => z.string().trim().max(max).optional();

const inquiryInput = z.object({
  full_name: z.string().trim().min(2).max(120),
  email: emailField,
  phone: optionalText(30),
  inquiry_type: z
    .enum([
      "General inquiry",
      "Volunteer opportunities",
      "Donation and sponsorship",
      "Request for assistance",
      "Partnership and collaboration",
      "Programs and events",
      "Other",
    ])
    .optional(),
  organization: optionalText(160),
  subject: optionalText(180),
  message: z.string().trim().min(10).max(3000),
});

export const submitInquiry = createServerFn({ method: "POST" })
  .validator(inquiryInput)
  .handler(async ({ data }) => {
    const reference = "INQ-" + Math.random().toString(36).substring(2, 8).toUpperCase();
    console.info("[Panchvaktra Inquiry]", { reference, ...data, timestamp: new Date().toISOString() });
    return { ok: true, reference };
  });

const volunteerInput = z.object({
  full_name: z.string().trim().min(2).max(120),
  email: emailField,
  phone: optionalText(30),
  area_of_interest: z.enum([
    "Child education and tutoring",
    "Healthcare and first aid",
    "Food and nutrition drives",
    "Shelter and family relief",
    "Mentorship and sports",
    "Community outreach and admin",
  ]),
  availability: z.enum([
    "Weekends (part-time)",
    "Weekday evenings",
    "Full-time",
    "Flexible / remote",
  ]),
  background: optionalText(1500),
});

export const submitVolunteerApplication = createServerFn({ method: "POST" })
  .validator(volunteerInput)
  .handler(async ({ data }) => {
    const reference = "VOL-" + Math.random().toString(36).substring(2, 8).toUpperCase();
    console.info("[Panchvaktra Volunteer Application]", { reference, ...data, timestamp: new Date().toISOString() });
    return { ok: true, reference };
  });

const pledgeInput = z.object({
  full_name: z.string().trim().min(2).max(120),
  email: emailField,
  phone: optionalText(30),
  amount: z.coerce.number().min(100).max(10000000),
  cause: z.enum([
    "Child education and school supplies",
    "Daily nutrition and healthy food",
    "Family relief & humanitarian aid",
    "Healthcare and emergency medical aid",
    "General humanitarian fund",
  ]),
  note: optionalText(1000),
});

export const submitPledge = createServerFn({ method: "POST" })
  .validator(pledgeInput)
  .handler(async ({ data }) => {
    const reference = "PLG-" + Math.random().toString(36).substring(2, 8).toUpperCase();
    console.info("[Panchvaktra Pledge]", { reference, ...data, timestamp: new Date().toISOString() });
    return { ok: true, reference };
  });