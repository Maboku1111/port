const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center px-8 py-16 md:py-32 space-y-8 md:space-x-16">
      {/* Left Side: Image */}
      <div className="w-full md:w-1/2">
        <img
          src="/your-image.jpg" // Replace with your image path
          alt="Maboku Seimela"
          className="w-80 h-80 object-cover rounded-full shadow-lg"
        />
      </div>

      {/* Right Side: Text */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Hello, I’m <span className="text-blue-600">Maboku Seimela</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Innovation Engineer | Passionate about Learning & Growth
        </p>

        {/* Buttons */}
        <div className="mt-6 flex justify-center md:justify-start space-x-4">
          <a
            href="/resume.pdf"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
          >
            Download Resume
          </a>
          <a
            href="mailto:your@email.com"
            className="px-6 py-2 border border-gray-600 text-gray-900 dark:text-white rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            Contact Me
          </a>
        </div>

        {/* Social Links */}
        <div className="mt-6 flex justify-center md:justify-start space-x-4">
          <a
            href="https://github.com/yourgithub"
            className="text-gray-700 dark:text-white hover:text-blue-600"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourlinkedin"
            className="text-gray-700 dark:text-white hover:text-blue-600"
          >
            LinkedIn
          </a>
        </div>

        {/* Bible Verse (Placeholder) */}
        <p className="mt-6 italic text-gray-500 dark:text-gray-400">
          Fetching Bible Verse...
        </p>
      </div>
    </section>
  );
};

export default Hero;
