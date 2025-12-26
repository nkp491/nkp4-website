import type { Metadata } from "next";
import LinkCard from "@/components/LinkCard";

export const metadata: Metadata = {
  title: "Secret Links | NKP4",
  robots: {
    index: false,
    follow: false,
  },
};

const personalLinks = [
  {
    title: "Instagram",
    description: "Follow my personal life",
    url: "https://instagram.com/yourusername",
    icon: "📸",
  },
  {
    title: "Twitter/X",
    description: "My thoughts and musings",
    url: "https://twitter.com/yourusername",
    icon: "🐦",
  },
  {
    title: "Personal Blog",
    description: "My personal writing space",
    url: "#",
    icon: "✍️",
  },
  {
    title: "Spotify",
    description: "What I'm listening to",
    url: "https://open.spotify.com/user/yourusername",
    icon: "🎵",
  },
];

export default function SecretPage() {
  return (
    <main className="min-h-screen px-6 py-20">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm mb-4">
            🤫 Secret Page
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Personal Links
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            You found the hidden page! Here are my personal links.
          </p>
        </div>
        <div className="space-y-4">
          {personalLinks.map((link, index) => (
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
