import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quick Links | NKP4",
  description: "Fast access to the best ways to contact NKP4.",
};

const quickLinks = [
  {
    label: "Email",
    value: "your.email@example.com",
    href: "mailto:your.email@example.com",
    note: "Best for introductions, follow-up, and anything that needs a reply.",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/yourprofile",
    href: "https://linkedin.com/in/yourprofile",
    note: "Best for professional networking and company-related conversations.",
  },
  {
    label: "Personal site",
    value: "nkp4 website",
    href: "/",
    note: "Best for the full context: companies, background, and contact paths.",
  },
  {
    label: "Phone",
    value: "(555) 555-5555",
    href: "tel:+15555555555",
    note: "Best for urgent or time-sensitive conversations.",
  },
];

export default function LinksPage() {
  return (
    <main className="editorial-shell min-h-screen px-6 py-10 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <section className="hero-aside-panel border border-black/10 bg-[var(--surface-strong)] text-[color:var(--foreground)]">
          <p className="panel-kicker">Quick links</p>
          <h1 className="section-title">One page with the essentials.</h1>
          <p className="section-summary mt-4 max-w-2xl">
            Use this page when someone wants the fastest path to your contact
            details and public profiles.
          </p>

          <div className="mt-8 grid gap-4">
            {quickLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="contact-tile bg-white/70"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="contact-label">{link.label}</p>
                    <p className="mt-1 text-lg font-semibold text-[color:var(--foreground)]">
                      {link.value}
                    </p>
                  </div>
                  <span className="company-status">Open</span>
                </div>
                <p className="contact-note mt-0">{link.note}</p>
              </a>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="/" className="primary-button">
              Back to home
            </a>
            <a href="mailto:your.email@example.com" className="secondary-button">
              Send an email
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
