import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NKP4 | Personal Website",
  description: "Personal website and portfolio of NKP4",
  keywords: ["portfolio", "personal website", "developer"],
  authors: [{ name: "NKP4" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nkp4.com",
    siteName: "NKP4",
    title: "NKP4 | Personal Website",
    description: "Personal website and portfolio of NKP4",
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
