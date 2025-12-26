const posts = [
  {
    title: "First Blog Post",
    excerpt: "A short preview of what this blog post is about. Keep it concise and engaging to encourage readers to click through.",
    date: "December 25, 2025",
    link: "#",
  },
  {
    title: "Another Interesting Article",
    excerpt: "Share your thoughts, learnings, or tutorials. This is a great way to establish your voice and expertise.",
    date: "December 20, 2025",
    link: "#",
  },
  {
    title: "Reflections and Insights",
    excerpt: "Write about your experiences, challenges you've overcome, or lessons learned along your journey.",
    date: "December 15, 2025",
    link: "#",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="min-h-screen flex items-center px-6 py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">Writing</h2>
        <div className="space-y-8">
          {posts.map((post, index) => (
            <article
              key={index}
              className="border-l-4 border-blue-600 pl-6 py-2 hover:border-blue-700 transition-colors"
            >
              <time className="text-sm text-gray-500 dark:text-gray-500">
                {post.date}
              </time>
              <h3 className="text-2xl font-semibold mt-2 mb-3">
                <a href={post.link} className="hover:text-blue-600 transition-colors">
                  {post.title}
                </a>
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                {post.excerpt}
              </p>
              <a
                href={post.link}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Read more →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
