const formulaTerms = [
  { title: "Accountability", text: "Own the outcome." },
  { title: "Predictability", text: "Make results reliable." },
  { title: "Profitability", text: "Build durable value." },
  { title: "Scalability", text: "Repeat what works." },
];

export default function FormulaSequence() {
  return (
    <ol className="hq-formula">
      {formulaTerms.map((term) => (
        <li key={term.title}>
          <strong>{term.title}</strong>
          <span>{term.text}</span>
        </li>
      ))}
    </ol>
  );
}
