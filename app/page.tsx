import Link from "next/link";
import TypeWriter from "./components/TypeWriter";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 via-white to-zinc-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950">
      <div className="max-w-4xl mx-auto px-6 py-12 sm:px-8 sm:py-20">
        {/* Hero Section */}
        <div className="mb-20">
          <div className="inline-block mb-4">
            <span className="px-3 py-1 text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-full">
              Available for Summer 2026 Opportunities
            </span>
          </div>
          <TypeWriter 
            text="Logan Crotchett"
            delay={100}
            className="text-6xl sm:text-7xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-6 bg-clip-text min-h-[4.5rem] sm:min-h-[5.25rem]"
          />
          <p className="text-2xl sm:text-3xl font-light text-zinc-700 dark:text-zinc-300 mb-6">
            Software Engineer & Computer Science Student
          </p>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mb-10 leading-relaxed">
            Building enterprise applications with React, TypeScript, and modern web technologies. 
            Expected to graduate from Wichita State University in May 2026 with a degree in Computer Science.
          </p>
          
          {/* Contact Links */}
          <div className="flex flex-wrap gap-4">
            <a 
              href="mailto:logancrotchett@gmail.com" 
              className="inline-flex items-center gap-2 px-5 py-3 bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 rounded-lg hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-all font-medium shadow-sm hover:shadow-md"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email Me
            </a>
            <a 
              href="https://linkedin.com/in/logancrotchett" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 border-2 border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 rounded-lg hover:border-zinc-900 dark:hover:border-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all font-medium"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
            <a 
              href="/Logan_Crotchett_resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 border-2 border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 rounded-lg hover:border-zinc-900 dark:hover:border-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all font-medium"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              Resume
            </a>
            <div className="flex items-center gap-2 px-5 py-3 text-zinc-600 dark:text-zinc-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Wichita, KS
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="mb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link 
              href="/work" 
              className="group relative overflow-hidden bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl p-6 hover:border-zinc-400 dark:hover:border-zinc-500 transition-all hover:shadow-lg"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Experience</h3>
                <svg className="w-5 h-5 text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-all group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                View my professional experience and roles
              </p>
            </Link>
            
            <Link 
              href="/projects" 
              className="group relative overflow-hidden bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl p-6 hover:border-zinc-400 dark:hover:border-zinc-500 transition-all hover:shadow-lg"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Projects</h3>
                <svg className="w-5 h-5 text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-all group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Explore my latest projects and hackathons
              </p>
            </Link>
          </div>
        </nav>
        
        {/* Skills Section */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">Technologies</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-zinc-200 dark:from-zinc-800 to-transparent"></div>
          </div>
          <div className="flex flex-wrap gap-2">
            {['TypeScript', 'React', 'Next.js', 'Node.js', 'C#', 'Python', 'Neo4j', 'Material-UI', 'Tailwind CSS', 'Git', 'ASP.NET Core'].map((skill) => (
              <span key={skill} className="px-4 py-2 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-lg text-sm font-medium hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors">
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-zinc-200 dark:border-zinc-800 pt-10 mt-20">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              © 2025 Logan Crotchett
            </p>
            <div className="flex gap-4">
              <a href="mailto:logancrotchett@gmail.com" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
              <a href="https://linkedin.com/in/logancrotchett" target="_blank" rel="noopener noreferrer" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
