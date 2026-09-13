import type { Metadata } from "next";
import FormulaSequence from "@/components/FormulaSequence";
import FounderProgression from "@/components/FounderProgression";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "About | NKP4",
  description: "The founder-led story behind NKP4.",
};

export default function AboutPage() {
  return (
    <PageShell current="about">
      <section className="hq-page-hero">
        <p className="hq-eyebrow">About Nielsen</p>
        <h1>From the Bay Area to NKP4.</h1>
      </section>
      <section className="hq-section hq-about-progression">
        <FounderProgression variant="full" />
      </section>
      <section className="hq-section hq-about-quote">
        <figure className="hq-founder-quote">
          <blockquote>
            I sit, observe, immerse myself, then build the thing that gives
            people their time back.
          </blockquote>
          <figcaption>— Nielsen Aragon</figcaption>
        </figure>
      </section>
      <section className="hq-section hq-philosophy-band">
        <FormulaSequence />
      </section>
      <section className="hq-section hq-about-contact">
        <p className="hq-eyebrow">Connect</p>
        <h2>Start a conversation.</h2>
        <a href="/contact" className="hq-primary-link">
          Contact NKP4
        </a>
      </section>
    </PageShell>
  );
}
