const companyRoster = [
  {
    role: "Holding company",
    name: "NKP4 Holdings",
    summary: "Umbrella entity for the operating companies and investments you want tied together.",
    status: "Primary entity",
  },
  {
    role: "Operating company",
    name: "Add your company name",
    summary: "The main business people should recognize first when they land here.",
    status: "Active",
  },
  {
    role: "Additional venture",
    name: "Add your company name",
    summary: "Another company, venture, or board seat you want publicly visible.",
    status: "Optional",
  },
];

const contactMethods = [
  {
    label: "Email",
    value: "your.email@example.com",
    href: "mailto:your.email@example.com",
    note: "Best for introductions, opportunities, and anything that needs a written reply.",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/yourprofile",
    href: "https://linkedin.com/in/yourprofile",
    note: "Best for professional context and company-related conversations.",
  },
  {
    label: "Phone",
    value: "(555) 555-5555",
    href: "tel:+15555555555",
    note: "Best for urgent or time-sensitive follow-up.",
  },
];

const navigation = [
  { label: "About", href: "#about" },
  { label: "Companies", href: "#companies" },
  { label: "Contact", href: "#contact" },
  { label: "Quick links", href: "/links" },
];

const focusPoints = [
  "Clear ownership structure",
  "Short background summary",
  "Fastest way to reach me",
];

export default function Home() {
  return (
    <main className="editorial-shell">
      <header className="editorial-header">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-6 py-4 sm:px-8">
          <a href="#top" className="wordmark">
            NKP4
          </a>
          <nav aria-label="Primary" className="hidden items-center gap-2 md:flex">
            {navigation.map((item) => (
              <a key={item.label} href={item.href} className="nav-chip">
                {item.label}
              </a>
            ))}
          </nav>
          <a href="mailto:your.email@example.com" className="nav-cta">
            Email me
          </a>
        </div>
      </header>

      <section id="top" className="hero-block">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-12 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:py-16">
          <div className="hero-copy-wrap">
            <p className="eyebrow">Personal website and contact hub</p>
            <h1 className="hero-title">
              One sharp page that tells people who you are, what companies you are part of, and how to reach you.
            </h1>
            <p className="hero-copy">
              Use this when you want a modern, easy-to-scan introduction that works like a digital business card and a company map in one place.
            </p>

            <div className="hero-actions">
              <a href="#contact" className="primary-button">
                Reach out
              </a>
              <a href="#companies" className="secondary-button">
                See companies
              </a>
            </div>

            <div className="focus-strip">
              {focusPoints.map((point) => (
                <span key={point} className="focus-pill">
                  {point}
                </span>
              ))}
            </div>
          </div>

          <aside className="hero-aside">
            <div className="hero-aside-panel">
              <p className="panel-kicker">Snapshot</p>
              <div className="snapshot-stack">
                <div>
                  <p className="snapshot-label">Primary identity</p>
                  <p className="snapshot-value">NKP4</p>
                </div>
                <div>
                  <p className="snapshot-label">What this page does</p>
                  <p className="snapshot-copy">
                    Gives visitors a fast understanding of your structure, background, and the right way to contact you.
                  </p>
                </div>
                <div className="snapshot-grid">
                  <div className="snapshot-metric">
                    <span>Companies</span>
                    <strong>3</strong>
                  </div>
                  <div className="snapshot-metric">
                    <span>Primary CTA</span>
                    <strong>Email</strong>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section id="about" className="section-block">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:px-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="eyebrow">About</p>
            <h2 className="section-title">Simple enough to scan, polished enough to trust.</h2>
          </div>

          <div className="prose-grid">
            <article className="content-panel">
              <p className="panel-title">Who I am</p>
              <p className="panel-copy">
                Write a direct summary of your background, the kind of work you do, and the context you want people to remember after they leave the page.
              </p>
            </article>
            <article className="content-panel">
              <p className="panel-title">What I do</p>
              <p className="panel-copy">
                Use one or two sentences to explain your role across companies, investments, operations, or advisory work.
              </p>
            </article>
            <article className="content-panel wide-panel">
              <p className="panel-title">Best use of this page</p>
              <ul className="bullet-list">
                <li>Quick introductions</li>
                <li>Company overview</li>
                <li>Follow-up after a meeting</li>
                <li>Forwardable contact reference</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section id="companies" className="section-block">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="section-heading-row">
            <div>
              <p className="eyebrow">Companies</p>
              <h2 className="section-title">Put the ownership structure in plain sight.</h2>
            </div>
            <p className="section-summary">
              Lead with the holding company, then list the operating companies or ventures you want people to connect with you.
            </p>
          </div>

          <div className="mt-10 space-y-4">
            {companyRoster.map((company, index) => (
              <article key={company.role} className="company-row">
                <div className="company-index">
                  <span>0{index + 1}</span>
                </div>
                <div className="company-body">
                  <div className="company-head">
                    <p className="company-role">{company.role}</p>
                    <span className="company-status">{company.status}</span>
                  </div>
                  <h3 className="company-name">{company.name}</h3>
                  <p className="company-summary">{company.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section-block pb-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow">Contact</p>
            <h2 className="section-title">Make the next step obvious.</h2>
            <p className="section-summary mt-4">
              Keep the channels visible and reduce friction. Visitors should not have to guess how to get in touch.
            </p>
          </div>

          <div className="contact-grid">
            {contactMethods.map((method) => (
              <a key={method.label} href={method.href} className="contact-tile">
                <div>
                  <p className="contact-label">{method.label}</p>
                  <p className="contact-value">{method.value}</p>
                </div>
                <p className="contact-note">{method.note}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="editorial-footer">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 sm:px-8 md:flex-row md:items-center md:justify-between">
          <p className="footer-copy">NKP4 personal website</p>
          <div className="flex flex-wrap gap-4">
            <a href="#top" className="footer-link">
              Back to top
            </a>
            <a href="/links" className="footer-link">
              Quick links
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
