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
      : companies.filter((company) => company.industry === selected);

  return (
    <>
      <div className="hq-filter-scroll">
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
      </div>
      <p className="hq-filter-count" aria-live="polite">
        Showing {visible.length} of {companies.length}
      </p>
      <div className="hq-portfolio-grid">
        {visible.map((company) => (
          <PortfolioCard company={company} key={company.slug} />
        ))}
      </div>
    </>
  );
}
