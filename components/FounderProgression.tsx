export const founderSteps = [
  {
    label: "Bay Area",
    caption: "raised in the Bay Area",
    detail:
      "Nielsen Aragon was raised in the Bay Area. Observing before building is a habit that started there, and it still shapes how he works.",
  },
  {
    label: "Technology",
    caption: "learned inside fast-growing companies",
    detail:
      "He learned his craft inside fast-growing technology companies. Those years showed him how products, software, and teams behave at speed.",
  },
  {
    label: "Operator",
    caption: "finds the friction, builds systems",
    detail:
      "As an operator, he finds the friction and builds the systems that remove it. The pattern is consistent: sit with the work, see where time is lost, and give it back.",
  },
  {
    label: "Founder",
    caption: "built his own companies",
    detail:
      "He went on to build his own companies. Founding taught him to own the outcome, make results reliable, and repeat what works.",
  },
  {
    label: "NKP4",
    caption: "one home for what comes next",
    detail:
      "NKP4 is the business home for the companies, technology, investments, and ideas he builds or backs. It is one home for what comes next.",
  },
];

export default function FounderProgression({
  variant,
}: {
  variant: "band" | "full";
}) {
  return (
    <ol className={`hq-progression hq-progression-${variant}`}>
      {founderSteps.map((step) => (
        <li key={step.label}>
          <strong>{step.label}</strong>
          <span>{step.caption}</span>
          {variant === "full" && <p>{step.detail}</p>}
        </li>
      ))}
    </ol>
  );
}
