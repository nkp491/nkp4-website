import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NKP4 | Editorial Contact Hub",
  description:
    "A modern personal website for sharing background, company affiliations, and direct contact details.",
  keywords: ["personal website", "contact hub", "companies", "holding company"],
  authors: [{ name: "NKP4" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "NKP4",
    title: "NKP4 | Editorial Contact Hub",
    description:
      "A modern personal website for sharing background, company affiliations, and direct contact details.",
  },
  twitter: {
    card: "summary",
    title: "NKP4 | Editorial Contact Hub",
    description:
      "A modern personal website for sharing background, company affiliations, and direct contact details.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
