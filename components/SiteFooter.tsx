import { contactEmail } from "@/data/contact";

export default function SiteFooter() {
  return (
    <footer className="hq-footer">
      <a href="/" className="hq-wordmark">
        NKP4
      </a>
      <nav aria-label="Footer navigation">
        <a href="/companies">Companies</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>
      <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
      <span>© NKP4</span>
    </footer>
  );
}
