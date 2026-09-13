import CompanyMark from "@/components/CompanyMark";
import RelationshipChip from "@/components/RelationshipChip";
import type { PortfolioCompany } from "@/data/portfolio";

export default function PortfolioCard({
  company,
}: {
  company: PortfolioCompany;
}) {
  return (
    <a href={`/companies/${company.slug}`} className="hq-company-card">
      <CompanyMark company={company} size="card" />
      <span className="hq-card-industry">{company.industry}</span>
      <h3>{company.name}</h3>
      <p>{company.description}</p>
      <RelationshipChip relationship={company.relationship} />
      <span className="hq-card-link">View →</span>
    </a>
  );
}
