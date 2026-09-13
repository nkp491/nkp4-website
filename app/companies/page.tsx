import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import PortfolioFilter from "@/components/PortfolioFilter";
import {
  getPortfolioIndustries,
  portfolioCompanies,
} from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Companies | NKP4",
  description: "The companies and investments connected to NKP4.",
};

export default function CompaniesPage() {
  return (
    <PageShell>
      <section className="hq-page-hero">
        <p className="hq-eyebrow">Portfolio</p>
        <h1>Companies and investments connected to NKP4.</h1>
        <p>Each entry shows what it is and how NKP4 is connected to it.</p>
      </section>
      <section className="hq-section hq-section-tight">
        <PortfolioFilter
          companies={portfolioCompanies}
          industries={getPortfolioIndustries()}
        />
      </section>
    </PageShell>
  );
}
