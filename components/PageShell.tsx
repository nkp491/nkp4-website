import type { ReactNode } from "react";
import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";

export default function PageShell({ children }: { children: ReactNode }) {
  return (
    <main className="hq-site">
      <SiteNav />
      {children}
      <SiteFooter />
    </main>
  );
}
