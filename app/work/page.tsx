import Link from "next/link";

export default function Work() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 via-white to-zinc-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950">
      <div className="max-w-4xl mx-auto px-6 py-12 sm:px-8 sm:py-20">
        {/* Header */}
        <div>
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 mb-10 transition-colors group"
          >
            <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to home
          </Link>
        </div>

        {/* Work Experience */}
        <section className="mb-24">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-10">Work Experience</h1>
          <div className="space-y-12">
            {/* Software Engineer Intern */}
            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-3">
                <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
                  Flint Hills Resources; Koch Industries
                </h2>
                <span className="text-sm text-zinc-600 dark:text-zinc-400 mt-1 sm:mt-0">
                  May 2025 - Aug 2025
                </span>
              </div>
              <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-4">Software Engineer Intern</p>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Built enterprise React applications using TypeScript, Material-UI, and Redux. Worked on admin configuration systems with role-based access control and dynamic UI components. Developed modular frontend components with custom hooks for state management. Created Neo4j Cypher queries and RESTful APIs with advanced filtering, sorting, and pagination across complex data relationships. Participated in Agile development with daily stand-ups, sprint planning, and code reviews.
              </p>
            </div>

            {/* Student Web Developer */}
            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-3">
                <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
                  National Institute of Aviation Research
                </h2>
                <span className="text-sm text-zinc-600 dark:text-zinc-400 mt-1 sm:mt-0">
                  Sep 2024 - May 2025
                </span>
              </div>
              <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-4">Student Web Developer</p>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Designed and improved a full-stack internal web application using ASP.NET Core MVC architecture to optimize business processes. Configured Entity Framework to implement CRUD functionality and database interactions.
              </p>
            </div>

            {/* Student Assistant for Quality Control Lab */}
            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-3">
                <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
                  National Institute of Aviation Research
                </h2>
                <span className="text-sm text-zinc-600 dark:text-zinc-400 mt-1 sm:mt-0">
                  Feb 2023 - Sep 2024
                </span>
              </div>
              <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-4">Student Assistant for Quality Control Lab</p>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Built custom software in Visual Basic to speed up the creation of new dimensioning templates by roughly 20%. Interpreted engineering drawings and used Excel to document measurements and create forms based on ASTM criteria.
              </p>
            </div>

            {/* Qualification Tester */}
            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-3">
                <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
                  NetApp
                </h2>
                <span className="text-sm text-zinc-600 dark:text-zinc-400 mt-1 sm:mt-0">
                  Oct 2022 - Feb 2023
                </span>
              </div>
              <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-4">Qualification Tester</p>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Ran tests on Linux-based NetApp software to validate firmware for hard drive manufacturers. Worked with full-time engineers to ensure smooth testing operations and resolve server-related issues.
              </p>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-24">
          <h2 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-10">Education</h2>
          
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-3">
              <h3 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
                Wichita State University
              </h3>
              <span className="text-sm text-zinc-600 dark:text-zinc-400 mt-1 sm:mt-0">
                Expected May 2026
              </span>
            </div>
            <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-4">
              BSCS - Computer Science | Minor in Mathematics | 3.6 GPA
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-zinc-200 dark:border-zinc-800 pt-10 mt-20">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              © 2025 Logan Crotchett
            </p>
            <div className="flex gap-6">
              <Link href="/" className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                Home
              </Link>
              <a 
                href="#top" 
                className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
              >
                Back to top ↑
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
