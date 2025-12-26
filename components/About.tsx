export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center px-6 py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">About Me</h2>
        <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300">
          <p>
            This is where you can tell your story. Share your background, what drives you,
            and what makes you unique.
          </p>
          <p>
            Talk about your interests, your journey, and what you&apos;re passionate about.
            This section helps visitors understand who you are beyond your professional work.
          </p>
          <p>
            You can also mention your current focus, what you&apos;re learning, or what
            you&apos;re working towards. Make it personal and authentic.
          </p>
        </div>
      </div>
    </section>
  );
}
