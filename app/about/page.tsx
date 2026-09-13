import type { Metadata } from "next";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "About | NKP4",
  description: "The founder-led story behind NKP4.",
};

export default function AboutPage() {
  return (
    <PageShell>
      <section className="hq-page-hero">
        <p className="hq-eyebrow">About Nielsen</p>
        <h1>From the Bay Area to technology, operations and NKP4.</h1>
        <p>
          Nielsen Aragon is a builder and operator. NKP4 is the home for the
          companies and ideas he builds, operates, equips and invests in.
        </p>
      </section>
      <section className="hq-section hq-story-grid">
        <article>
          <p className="hq-mini-label">Technology</p>
          <h2>Close to the work</h2>
          <p>
            Nielsen learned by working inside technology environments and
            paying attention to how products, teams and systems actually
            operate.
          </p>
        </article>
        <article>
          <p className="hq-mini-label">Operator</p>
          <h2>Experience becomes practice</h2>
          <p>
            He is drawn to meaningful shifts, gets close to them early, and
            learns by participating rather than observing from the sidelines.
          </p>
        </article>
        <article>
          <p className="hq-mini-label">NKP4</p>
          <h2>A platform for building</h2>
          <p>
            NKP4 keeps the institution first while making the founder
            relationship clear. Its portfolio is the evidence of the work.
          </p>
        </article>
      </section>
    </PageShell>
  );
}
