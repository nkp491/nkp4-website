export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Hi, I&apos;m <span className="text-blue-600">NKP4</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8">
          Welcome to my corner of the internet
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#about"
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Learn More
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:border-blue-600 dark:hover:border-blue-600 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
