import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-navy">
      <div className="mx-auto flex max-w-5xl flex-col items-start px-6 pb-24 pt-32">
        <p className="section-label">404</p>
        <h1 className="prose-heading mt-4 text-4xl text-ink sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-6 text-lg text-ink-soft">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="mt-8 rounded-sm bg-badge px-6 py-3 text-sm font-medium uppercase tracking-[0.2em] text-paper transition-colors hover:bg-badge-light"
        >
          Back home
        </Link>
      </div>
    </section>
  );
}
