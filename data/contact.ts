export type ContactRoute = {
  label: string;
  title: string;
  href: string;
  external?: boolean;
};

export const calendarUrl =
  "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3VkTqCvAGc8uCv8EXceT2STE_MDmOCCCR8mgXnNA6ZVOPr7gHF9n4Gkx28ttAoDRA1HOtqO1zj";

export const contactEmail = "contact@nkp4.com";

export const contactRoutes: ContactRoute[] = [
  {
    label: "Technology",
    title: "Work with DigitalMocean",
    href: `mailto:${contactEmail}`,
  },
  {
    label: "Insurance",
    title: "Explore SureHelp",
    href: "/companies/surehelp",
  },
  {
    label: "Partnerships",
    title: "Book a conversation",
    href: calendarUrl,
    external: true,
  },
  {
    label: "Nielsen",
    title: contactEmail,
    href: `mailto:${contactEmail}`,
  },
];
