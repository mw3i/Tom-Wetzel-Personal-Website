"use client";

import { useState, type FormEvent } from "react";

import { isContactFormConfigured, submitContact } from "@/lib/contact";

type Status = "idle" | "submitting" | "done" | "error";

const fieldClass =
  "mt-2 w-full rounded-sm border border-line bg-surface px-4 py-3 text-base text-ink outline-none transition-colors placeholder:text-steel/60 focus:border-badge-light";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState(false);
  const configured = isContactFormConfigured();

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const trimmedEmail = email.trim();
    if (!EMAIL_PATTERN.test(trimmedEmail)) {
      setEmailError(true);
      return;
    }
    setEmailError(false);
    setStatus("submitting");

    try {
      await submitContact({
        name: name.trim(),
        email: trimmedEmail,
        message: message.trim(),
      });
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <p className="prose-heading text-2xl text-ink" aria-live="polite">
        Thanks, {name || "friend"} — your message is on its way.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      {!configured && (
        <p className="rounded-sm border border-red/40 bg-red/10 px-4 py-3 text-sm text-ink-soft">
          Form isn&apos;t wired up yet — see the TODO in{" "}
          <code className="text-ink">src/lib/contact.ts</code>.
        </p>
      )}

      <label className="block text-xs font-medium uppercase tracking-[0.18em] text-steel">
        Name
        <input
          name="name"
          required
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={fieldClass}
        />
      </label>

      <label className="block text-xs font-medium uppercase tracking-[0.18em] text-steel">
        Email
        <input
          name="email"
          type="email"
          required
          autoComplete="email"
          aria-invalid={emailError}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (emailError) setEmailError(false);
          }}
          className={`${fieldClass} ${emailError ? "border-red" : ""}`}
        />
        {emailError && (
          <span className="mt-2 block text-xs normal-case tracking-normal text-red">
            Enter a valid email address.
          </span>
        )}
      </label>

      <label className="block text-xs font-medium uppercase tracking-[0.18em] text-steel">
        Message
        <textarea
          name="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`${fieldClass} resize-none`}
        />
      </label>

      {status === "error" && (
        <p className="text-sm text-red">
          Something went wrong sending that — please try again.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-sm bg-badge px-6 py-4 text-sm font-medium uppercase tracking-[0.2em] text-white transition-colors hover:bg-badge-light disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
