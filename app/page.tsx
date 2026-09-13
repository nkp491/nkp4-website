import ContactRouteCard from "@/components/ContactRouteCard";
import FormulaSequence from "@/components/FormulaSequence";
import FounderProgression from "@/components/FounderProgression";
import PageShell from "@/components/PageShell";
import PortfolioCard from "@/components/PortfolioCard";
import { contactRoutes } from "@/data/contact";
import { portfolioCompanies } from "@/data/portfolio";

const framework = [
  {
    title: "Build",
    text: "Create companies, products, software, and new ventures.",
  },
  {
    title: "Operate",
    text: "Help businesses build stronger systems and execute consistently.",
  },
  {
    title: "Equip",
    text: "Give founders and operators access to modern technology, operating knowledge, and resources.",
  },
  {
    title: "Invest",
    text: "Participate in opportunities where NKP4 can contribute more than capital.",
  },
];

export default function Home() {
  return (
    <PageShell>
      <section id="hero" className="hq-hero">
        <div className="hq-hero-copy">
          <p className="hq-eyebrow">Founded by Nielsen Aragon</p>
          <h1>The home for what Nielsen Aragon builds.</h1>
          <p>
            NKP4 is the business home for companies, technology, investments,
            and ideas built or backed by Nielsen Aragon.
          </p>
          <div className="hq-hero-actions">
            <a href="#portfolio" className="hq-primary-link">
              Explore the portfolio
            </a>
            <a href="#connect" className="hq-secondary-link">
              Let&apos;s connect →
            </a>
          </div>
          <p className="hq-framework-rule">Build · Operate · Equip · Invest</p>
        </div>
      </section>

      <section id="portfolio" className="hq-section hq-portfolio-section">
        <div className="hq-section-heading">
          <div>
            <p className="hq-eyebrow">Portfolio</p>
            <h2>What NKP4 builds, operates, and backs.</h2>
          </div>
          <p>Every entry states its relationship to NKP4.</p>
        </div>
        <div className="hq-portfolio-grid">
          {portfolioCompanies.map((company) => (
            <PortfolioCard company={company} key={company.slug} />
          ))}
        </div>
        <a href="/companies" className="hq-text-link">
          All companies →
        </a>
      </section>

      <section id="framework" className="hq-section hq-framework-section">
        <p className="hq-eyebrow">What NKP4 does</p>
        <h2>Build. Operate. Equip. Invest.</h2>
        <ol className="hq-framework-list">
          {framework.map((item, index) => (
            <li key={item.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section id="founder" className="hq-section hq-founder-band">
        <div className="hq-band-inner">
          <p className="hq-eyebrow">Founder</p>
          <h2>Nielsen Aragon — builder and operator.</h2>
          <FounderProgression variant="band" />
          <figure className="hq-founder-quote">
            <blockquote>
              I sit, observe, immerse myself, then build the thing that gives
              people their time back.
            </blockquote>
            <figcaption>— Nielsen Aragon</figcaption>
          </figure>
          <a href="/about" className="hq-text-link">
            Read the story →
          </a>
        </div>
      </section>

      <section id="philosophy" className="hq-section hq-philosophy-band">
        <div className="hq-band-inner">
          <p className="hq-eyebrow">Operating philosophy</p>
          <h2>Accountability → Predictability → Profitability → Scalability</h2>
          <FormulaSequence />
        </div>
      </section>

      <section id="connect" className="hq-section hq-connect-section">
        <div className="hq-section-heading">
          <div>
            <p className="hq-eyebrow">Connect</p>
            <h2>Let&apos;s connect.</h2>
          </div>
          <p>Choose the path that fits the conversation.</p>
        </div>
        <div className="hq-contact-grid">
          {contactRoutes.map((route) => (
            <ContactRouteCard route={route} key={route.label} />
          ))}
        </div>
      </section>
    </PageShell>
  );
}
