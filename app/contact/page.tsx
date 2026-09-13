import type { Metadata } from "next";
import ContactRouteCard from "@/components/ContactRouteCard";
import PageShell from "@/components/PageShell";
import { contactRoutes } from "@/data/contact";

export const metadata: Metadata = {
  title: "Contact | NKP4",
  description:
    "Connect with NKP4 about its companies, partnerships and founder-led work.",
};

export default function ContactPage() {
  return (
    <PageShell current="contact">
      <section className="hq-page-hero">
        <p className="hq-eyebrow">Contact</p>
        <h1>Start with the right door.</h1>
        <p>Choose the path that best fits the conversation.</p>
      </section>
      <section className="hq-section hq-contact-grid">
        {contactRoutes.map((route) => (
          <ContactRouteCard route={route} key={route.label} />
        ))}
      </section>
    </PageShell>
  );
}
