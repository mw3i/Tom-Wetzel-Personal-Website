import type { Metadata } from "next";

import { ContactForm } from "@/components/ContactForm";
import { PhotoBand } from "@/components/PhotoBand";
import { Section } from "@/components/Section";
import { createPageMetadata } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Contact",
  description: "Get in touch with Tom Wetzel.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PhotoBand imageKey="hero-contact" alt="" minHeight="small" align="start">
        <p className="section-label-onDark">Contact</p>
        <h1 className="prose-heading mt-4 text-4xl leading-tight text-paper sm:text-5xl">
          Get in touch
        </h1>
      </PhotoBand>

      <Section>
        <div className="max-w-xl">
          <p className="text-lg leading-relaxed text-ink-soft">
            Have a question, or interested in a speaking engagement or
            leadership consulting? Send a message using the form below.
          </p>

          <div className="mt-10">
            <ContactForm />
          </div>
        </div>
      </Section>
    </>
  );
}
