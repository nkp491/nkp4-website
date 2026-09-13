import type { CurrentPage } from "@/components/PageShell";

const navItems: { href: string; label: string; key: CurrentPage }[] = [
  { href: "/companies", label: "Companies", key: "companies" },
  { href: "/about", label: "About", key: "about" },
  { href: "/contact", label: "Contact", key: "contact" },
];

export default function SiteNav({ current }: { current?: CurrentPage }) {
  return (
    <header className="hq-nav hq-nav-contained">
      <a href="/" className="hq-wordmark" aria-label="NKP4 home">
        NKP4
      </a>
      <nav aria-label="Primary navigation" className="hq-nav-links">
        {navItems.map((item) => (
          <a
            href={item.href}
            aria-current={current === item.key ? "page" : undefined}
            key={item.key}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
