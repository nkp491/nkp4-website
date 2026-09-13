export type PortfolioRelationship =
  | "Operating Company"
  | "Founder & Operator"
  | "Investment";

export type PortfolioCompany = {
  name: string;
  slug: string;
  logoText: string;
  logo?: string;
  website?: string;
  href?: string;
  relationship: PortfolioRelationship;
  industry: string;
  description: string;
  cta: string;
  accent: string;
};

export const portfolioCompanies: PortfolioCompany[] = [
  {
    name: "DigitalMocean",
    slug: "digitalmocean",
    logoText: "DM",
    href: "mailto:contact@nkp4.com",
    relationship: "Operating Company",
    industry: "AI & Technology",
    description:
      "A technology business applying practical systems and software to help companies work with more leverage.",
    cta: "Work with DigitalMocean",
    accent: "#8a6a3a",
  },
  {
    name: "SureHelp",
    slug: "surehelp",
    logoText: "SH",
    relationship: "Founder & Operator",
    industry: "Insurtech",
    description:
      "An insurance technology company built around a better experience for life insurance professionals.",
    cta: "Explore SureHelp",
    accent: "#7a4632",
  },
  {
    name: "Manifest Network",
    slug: "manifest-network",
    logoText: "MN",
    website: "https://manifest.network/",
    relationship: "Investment",
    industry: "Web3",
    description:
      "An outside investment in a Web3 company focused on Proof of Authority.",
    cta: "Visit Manifest Network",
    accent: "#6c5a42",
  },
];

export function getPortfolioCompany(slug: string) {
  return portfolioCompanies.find((company) => company.slug === slug);
}

export function getPortfolioIndustries() {
  return ["All", ...new Set(portfolioCompanies.map((company) => company.industry))];
}
