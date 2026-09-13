export default function SiteNav() {
  return (
    <header className="hq-nav hq-nav-contained">
      <a href="/" className="hq-wordmark" aria-label="NKP4 home">
        NKP4
      </a>
      <nav aria-label="Primary navigation" className="hq-nav-links">
        <a href="/companies">Companies</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>
  );
}
