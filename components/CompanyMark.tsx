import type { CSSProperties } from "react";
import type { PortfolioCompany } from "@/data/portfolio";

type CompanyMarkProps = {
  company: PortfolioCompany;
  size: "card" | "detail";
};

export default function CompanyMark({ company, size }: CompanyMarkProps) {
  return (
    <span
      className={`hq-mark hq-mark-${size}`}
      style={{ "--accent": company.accent } as CSSProperties}
      aria-hidden="true"
    >
      {company.logo ? <img src={company.logo} alt="" /> : company.logoText}
    </span>
  );
}
