import type { ReactNode } from "react";
import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";

export type CurrentPage = "companies" | "about" | "contact";

export default function PageShell({
  children,
  current,
}: {
  children: ReactNode;
  current?: CurrentPage;
}) {
  return (
    <main className="hq-site">
      <SiteNav current={current} />
      {children}
      <SiteFooter />
    </main>
  );
}
