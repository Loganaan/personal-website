import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <div className="max-w-3xl mx-auto px-6 py-16 sm:px-8 sm:py-24">
        {/* Hero Section */}
        <div className="mb-16">
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-6">
            Logan Crotchett
          </h1>
          <p className="text-xl sm:text-2xl text-zinc-600 dark:text-zinc-400 mb-8">
            Software Engineer & Computer Science Student
          </p>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mb-8">
            Building enterprise applications with React, TypeScript, and modern web technologies. 
            Expected to graduate from Wichita State University in May 2026 with a degree in Computer Science.
          </p>
          
          {/* Contact Links */}
          <div className="flex flex-wrap gap-4 text-sm text-zinc-600 dark:text-zinc-400">
            <a 
              href="mailto:logancrotchett@gmail.com" 
              className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              logancrotchett@gmail.com
            </a>
            <span className="text-zinc-300 dark:text-zinc-700">•</span>
            <a 
              href="https://linkedin.com/in/logancrotchett" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              LinkedIn
            </a>
            <span className="text-zinc-300 dark:text-zinc-700">•</span>
            <span>Wichita, KS</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="mb-16">
          <ul className="flex flex-col gap-4">
            <li>
              <Link 
                href="/work" 
                className="group inline-flex items-center text-lg font-medium text-zinc-900 dark:text-zinc-100 hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors"
              >
                <span className="mr-2 text-zinc-400 dark:text-zinc-600 group-hover:text-zinc-600 dark:group-hover:text-zinc-400 transition-colors">→</span>
                Work Experience
              </Link>
            </li>
          </ul>
        </nav>

        {/* Highlights */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">Recent Highlights</h2>
          <div className="space-y-6">
            <div className="border-l-2 border-zinc-200 dark:border-zinc-800 pl-4">
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-1">
                Software Engineer Intern at Flint Hills Resources
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">May 2025 - Aug 2025</p>
              <p className="text-zinc-600 dark:text-zinc-400">
                Built enterprise React applications with TypeScript, Material-UI, and Redux. 
                Developed Neo4j Cypher queries and RESTful APIs with advanced filtering and pagination.
              </p>
            </div>
            
            <div className="border-l-2 border-zinc-200 dark:border-zinc-800 pl-4">
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-1">
                Winner - Hack Cats 2025 & NASA Space Apps Challenge 2025
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">October 2025</p>
              <p className="text-zinc-600 dark:text-zinc-400">
                Built a Next.js job interview simulator with real-time voice interaction and an 
                interactive asteroid-impact simulator with 2D/3D visualizations using CesiumJS.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-zinc-200 dark:border-zinc-800 pt-8 mt-16">
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            © 2025 | Logan Crotchett
          </p>
        </footer>
      </div>
    </div>
  );
}
