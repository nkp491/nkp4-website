import type { Metadata } from "next";
import LinkCard from "@/components/LinkCard";

export const metadata: Metadata = {
  title: "Links | NKP4",
  description: "Connect with NKP4 - Professional links and social media",
};

const professionalLinks = [
  {
    title: "LinkedIn",
    description: "Connect with me professionally",
    url: "https://linkedin.com/in/yourprofile",
    icon: "💼",
  },
  {
    title: "GitHub",
    description: "Check out my code and projects",
    url: "https://github.com/yourusername",
    icon: "💻",
  },
  {
    title: "Email",
    description: "Reach out for collaborations",
    url: "mailto:your.email@example.com",
    icon: "📧",
  },
  {
    title: "Portfolio",
    description: "View my complete portfolio",
    url: "/",
    icon: "🌐",
  },
];

export default function LinksPage() {
  return (
    <main className="min-h-screen px-6 py-20">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Connect With Me
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Find me on these platforms
          </p>
        </div>
        <div className="space-y-4">
          {professionalLinks.map((link, index) => (
            <LinkCard
              key={index}
              title={link.title}
              description={link.description}
              url={link.url}
              icon={link.icon}
            />
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href="/"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-600 transition-colors"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </main>
  );
}
