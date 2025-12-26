const contactMethods = [
  {
    label: "Email",
    value: "your.email@example.com",
    href: "mailto:your.email@example.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/yourprofile",
    href: "https://linkedin.com/in/yourprofile",
  },
  {
    label: "GitHub",
    value: "github.com/yourusername",
    href: "https://github.com/yourusername",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen flex items-center px-6 py-20">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">Get in Touch</h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
          Feel free to reach out if you&apos;d like to connect, collaborate, or just say hello.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-blue-600 dark:hover:border-blue-600 transition-colors"
            >
              <h3 className="text-lg font-semibold mb-2">{method.label}</h3>
              <p className="text-gray-600 dark:text-gray-400 break-words">
                {method.value}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
