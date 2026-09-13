"use client";

import { useState } from "react";
import type { PortfolioCompany } from "@/data/portfolio";
import PortfolioCard from "@/components/PortfolioCard";

export default function PortfolioFilter({
  companies,
  industries,
}: {
  companies: PortfolioCompany[];
  industries: string[];
}) {
  const [selected, setSelected] = useState("All");
  const visible =
    selected === "All"
      ? companies
      : companies.filter((company) => company.industry.includes(selected));

  return (
    <>
      <div
        className="hq-filter-row"
        aria-label="Filter portfolio by industry"
        role="group"
      >
        {industries.map((industry) => (
          <button
            type="button"
            className={selected === industry ? "is-active" : ""}
            aria-pressed={selected === industry}
            onClick={() => setSelected(industry)}
            key={industry}
          >
            {industry}
          </button>
        ))}
      </div>
      <div className="hq-portfolio-grid">
        {visible.map((company) => (
          <PortfolioCard company={company} key={company.slug} />
        ))}
      </div>
    </>
  );
}
