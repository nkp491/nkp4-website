import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nkp4.com"),
  title: "NKP4 — Build. Operate. Equip. Invest.",
  description:
    "NKP4 is the founder-led business home for companies, technology, investments and ideas built or backed by Nielsen Aragon.",
  keywords: ["NKP4", "holding company", "technology", "companies", "ventures"],
  authors: [{ name: "Nielsen Aragon" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "NKP4",
    title: "NKP4 — Build. Operate. Equip. Invest.",
    description:
      "The founder-led business home for companies, technology, investments and ideas built or backed by Nielsen Aragon.",
    images: [
      {
        url: "/og-card.png",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "NKP4 — Build. Operate. Equip. Invest.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NKP4 — Build. Operate. Equip. Invest.",
    description:
      "The founder-led business home for companies, technology, investments and ideas built or backed by Nielsen Aragon.",
    images: ["/og-card.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
