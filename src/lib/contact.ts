/**
 * Contact form submission, following the same no-backend pattern as other
 * sites in this family: POST straight to a Google Form's response endpoint,
 * no server, no database. See the baby-shower project's src/lib/rsvp.ts for
 * the sibling implementation.
 */
const GOOGLE_FORM = {
  formId: "1FAIpQLScYbinUjGoXIo-pVkWmHiy8txy9-6zltxFqVEZjY07YXkCeGw",
  entries: {
    name: "entry.2011277742",
    email: "entry.361896929",
    message: "entry.930092625",
  },
};

export type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

function resolveFormId(formIdOrUrl: string): string {
  const match = formIdOrUrl.match(/\/forms\/d\/e\/([^/]+)/);
  return match?.[1] ?? formIdOrUrl.trim();
}

export function isContactFormConfigured(): boolean {
  return !GOOGLE_FORM.formId.startsWith("TODO");
}

/** POST contact fields into the Google Form response endpoint (no backend). */
export async function submitContact(payload: ContactPayload): Promise<void> {
  const id = resolveFormId(GOOGLE_FORM.formId);
  const body = new FormData();

  body.append(GOOGLE_FORM.entries.name, payload.name);
  body.append(GOOGLE_FORM.entries.email, payload.email);
  body.append(GOOGLE_FORM.entries.message, payload.message);

  // no-cors: Google Forms does not send CORS headers; the request still lands.
  await fetch(`https://docs.google.com/forms/d/e/${id}/formResponse`, {
    method: "POST",
    mode: "no-cors",
    body,
  });
}
