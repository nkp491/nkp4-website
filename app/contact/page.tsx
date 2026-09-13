import type { Metadata } from "next";
import ContactRouteCard from "@/components/ContactRouteCard";
import PageShell from "@/components/PageShell";

const calendarUrl =
  "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3VkTqCvAGc8uCv8EXceT2STE_MDmOCCCR8mgXnNA6ZVOPr7gHF9n4Gkx28ttAoDRA1HOtqO1zj";

const routes = [
  {
    label: "Technology",
    title: "Work with DigitalMocean",
    href: "mailto:contact@nkp4.com",
  },
  {
    label: "Insurance",
    title: "Learn about SureHelp",
    href: "/companies/surehelp",
  },
  {
    label: "Partnerships",
    title: "Book a partnerships conversation",
    href: calendarUrl,
    external: true,
  },
  {
    label: "Nielsen",
    title: "Contact Nielsen directly",
    href: "mailto:contact@nkp4.com",
  },
];

export const metadata: Metadata = {
  title: "Contact | NKP4",
  description:
    "Connect with NKP4 about its companies, partnerships and founder-led work.",
};

export default function ContactPage() {
  return (
    <PageShell>
      <section className="hq-page-hero">
        <p className="hq-eyebrow">Contact</p>
        <h1>Start with the right door.</h1>
        <p>Choose the path that best fits the conversation.</p>
      </section>
      <section className="hq-section hq-contact-grid">
        {routes.map((route) => (
          <ContactRouteCard route={route} key={route.label} />
        ))}
      </section>
    </PageShell>
  );
}
