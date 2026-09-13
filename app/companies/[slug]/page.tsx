import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CompanyMark from "@/components/CompanyMark";
import PageShell from "@/components/PageShell";
import RelationshipChip from "@/components/RelationshipChip";
import { getPortfolioCompany, portfolioCompanies } from "@/data/portfolio";

export function generateStaticParams() {
  return portfolioCompanies.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const company = getPortfolioCompany((await params).slug);
  return company
    ? { title: `${company.name} | NKP4`, description: company.description }
    : {};
}

export default async function CompanyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const company = getPortfolioCompany((await params).slug);
  if (!company) notFound();

  const destination = company.href ?? company.website;
  const external = destination?.startsWith("http") ?? false;

  return (
    <PageShell current="companies">
      <article className="hq-detail">
        <a href="/companies" className="hq-back-link">
          ← All companies
        </a>
        <CompanyMark company={company} size="detail" />
        <p className="hq-eyebrow">{company.industry}</p>
        <h1>{company.name}</h1>
        <RelationshipChip relationship={company.relationship} />
        <p className="hq-detail-summary">{company.description}</p>
        {destination && (
          <a
            href={destination}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            className="hq-primary-link"
          >
            {company.cta}
          </a>
        )}
      </article>
    </PageShell>
  );
}
