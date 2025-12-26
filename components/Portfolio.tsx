const projects = [
  {
    title: "Project One",
    description: "A brief description of your first project. What problem does it solve? What technologies did you use?",
    link: "#",
    tags: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    title: "Project Two",
    description: "Description of another project you've worked on. Highlight the key features and your role.",
    link: "#",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Project Three",
    description: "Another interesting project. Explain what makes it unique and what you learned from it.",
    link: "#",
    tags: ["Python", "AI/ML", "Flask"],
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="min-h-screen flex items-center px-6 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:border-blue-600 dark:hover:border-blue-600 transition-colors"
            >
              <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
