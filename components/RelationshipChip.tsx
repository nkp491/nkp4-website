import type { PortfolioRelationship } from "@/data/portfolio";

export default function RelationshipChip({
  relationship,
}: {
  relationship: PortfolioRelationship;
}) {
  const treatment =
    relationship === "Investment" ? "hq-chip-outline" : "hq-chip-filled";

  return <span className={`hq-chip ${treatment}`}>{relationship}</span>;
}
