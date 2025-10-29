import Link from "next/link";

export default function Work() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
      <div className="max-w-3xl mx-auto px-6 py-16 sm:px-8 sm:py-24">
        {/* Header */}
        <div className="mb-16">
          <Link 
            href="/" 
            className="inline-flex items-center text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 mb-8 transition-colors"
          >
            ← Go to home page
          </Link>
          <h1 className="text-5xl font-bold tracking-tight mb-4">Work</h1>
        </div>

        {/* Work Experience */}
        <section className="mb-20">
          {/* Software Engineer Intern */}
          <div className="mb-12">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-3">
              <h2 className="text-2xl font-semibold">
                <span className="text-zinc-900 dark:text-zinc-100">Flint Hills Resources; Koch Industries</span>
              </h2>
              <span className="text-sm text-zinc-600 dark:text-zinc-400 mt-1 sm:mt-0">
                May 2025 - Aug 2025
              </span>
            </div>
            <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-4">Software Engineer Intern</p>
            <ul className="space-y-3 text-zinc-600 dark:text-zinc-400">
              <li className="flex gap-3">
                <span className="text-zinc-400 dark:text-zinc-600 mt-1">✦</span>
                <span>Built enterprise React applications with TypeScript, Material-UI, and Redux, implementing admin configuration systems and role-based access control with dynamic UI components</span>
              </li>
              <li className="flex gap-3">
                <span className="text-zinc-400 dark:text-zinc-600 mt-1">✦</span>
                <span>Architected modular frontend components with React and TypeScript, implementing reusable configuration systems and custom hooks for state management across enterprise applications</span>
              </li>
              <li className="flex gap-3">
                <span className="text-zinc-400 dark:text-zinc-600 mt-1">✦</span>
                <span>Developed Neo4j Cypher queries and RESTful APIs with advanced filtering, sorting, and pagination across complex data relationships using graph database patterns</span>
              </li>
              <li className="flex gap-3">
                <span className="text-zinc-400 dark:text-zinc-600 mt-1">✦</span>
                <span>Collaborated in an Agile development team, participating in daily stand-ups, sprint planning, code reviews, and team discussions to ensure rapid iteration and work towards business goals</span>
              </li>
            </ul>
          </div>

          {/* Student Web Developer */}
          <div className="mb-12">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-3">
              <h2 className="text-2xl font-semibold">
                <span className="text-zinc-900 dark:text-zinc-100">National Institute of Aviation Research</span>
              </h2>
              <span className="text-sm text-zinc-600 dark:text-zinc-400 mt-1 sm:mt-0">
                Sep 2024 - May 2025
              </span>
            </div>
            <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-4">Student Web Developer</p>
            <ul className="space-y-3 text-zinc-600 dark:text-zinc-400">
              <li className="flex gap-3">
                <span className="text-zinc-400 dark:text-zinc-600 mt-1">✦</span>
                <span>Designed and improved a full-stack internal web application utilizing ASP.NET Core MVC architecture, focusing on the optimization of business processes</span>
              </li>
              <li className="flex gap-3">
                <span className="text-zinc-400 dark:text-zinc-600 mt-1">✦</span>
                <span>Installed and configured Entity Framework to implement CRUD functionality and interactions with the database</span>
              </li>
            </ul>
          </div>

          {/* Student Assistant for Quality Control Lab */}
          <div className="mb-12">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-3">
              <h2 className="text-2xl font-semibold">
                <span className="text-zinc-900 dark:text-zinc-100">National Institute of Aviation Research</span>
              </h2>
              <span className="text-sm text-zinc-600 dark:text-zinc-400 mt-1 sm:mt-0">
                Feb 2023 - Sep 2024
              </span>
            </div>
            <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-4">Student Assistant for Quality Control Lab</p>
            <ul className="space-y-3 text-zinc-600 dark:text-zinc-400">
              <li className="flex gap-3">
                <span className="text-zinc-400 dark:text-zinc-600 mt-1">✦</span>
                <span>Built custom software in Visual Basic to increase the speed of creating new dimensioning templates by roughly 20%</span>
              </li>
              <li className="flex gap-3">
                <span className="text-zinc-400 dark:text-zinc-600 mt-1">✦</span>
                <span>Interpreted engineering drawings and utilized Excel to document measurements and create forms based on ASTM criteria</span>
              </li>
            </ul>
          </div>

          {/* Qualification Tester */}
          <div className="mb-12">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-3">
              <h2 className="text-2xl font-semibold">
                <span className="text-zinc-900 dark:text-zinc-100">NetApp</span>
              </h2>
              <span className="text-sm text-zinc-600 dark:text-zinc-400 mt-1 sm:mt-0">
                Oct 2022 - Feb 2023
              </span>
            </div>
            <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-4">Qualification Tester</p>
            <ul className="space-y-3 text-zinc-600 dark:text-zinc-400">
              <li className="flex gap-3">
                <span className="text-zinc-400 dark:text-zinc-600 mt-1">✦</span>
                <span>Ran tests on Linux-based NetApp software to test firmware for hard drive manufacturers</span>
              </li>
              <li className="flex gap-3">
                <span className="text-zinc-400 dark:text-zinc-600 mt-1">✦</span>
                <span>Frequently communicated with full-time engineers to ensure smooth testing, and helped with any server-related issues</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Education */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold tracking-tight mb-8">Education</h2>
          
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-3">
              <h3 className="text-2xl font-semibold">
                <span className="text-zinc-900 dark:text-zinc-100">Wichita State University</span>
              </h3>
              <span className="text-sm text-zinc-600 dark:text-zinc-400 mt-1 sm:mt-0">
                Expected May 2026
              </span>
            </div>
            <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-4">
              Bachelor of Science in Computer Science | Minor in Mathematics | 3.6 GPA
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4">
              During my studies, I&apos;ve developed a strong foundation in computer science fundamentals and gained hands-on experience through various projects and competitions.
            </p>
            <ul className="space-y-3 text-zinc-600 dark:text-zinc-400">
              <li className="flex gap-3">
                <span className="text-zinc-400 dark:text-zinc-600 mt-1">✦</span>
                <span><strong>Hack Cats 2025 Winner:</strong> Built a Next.js web app simulating realistic job interviews with real-time voice interaction, personalized question generation, and automated performance feedback using Deepgram, ElevenLabs, Google Gemini, and Firebase</span>
              </li>
              <li className="flex gap-3">
                <span className="text-zinc-400 dark:text-zinc-600 mt-1">✦</span>
                <span><strong>NASA Space Apps Challenge 2025 Winner:</strong> Designed and shipped an interactive asteroid-impact simulator with 2D maps (react-leaflet/Turf.js) and a 3D globe using CesiumJS, built with Next.js, React, TypeScript, and Node.js</span>
              </li>
              <li className="flex gap-3">
                <span className="text-zinc-400 dark:text-zinc-600 mt-1">✦</span>
                <span><strong>Dimensioning Template Generator:</strong> Developed a Visual Basic tool to streamline the dimensioning process at NIAR, designed to be scalable for future enhancements</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold tracking-tight mb-8">Skills</h2>
          
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-3">Programming Languages</h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                TypeScript, C#, C++, SQL, Cypher, Python, Visual Basic
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-3">Web Development</h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                React, Next.js, HTML, CSS, JavaScript, ASP.NET Core MVC, Node.js
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-3">Tools & Technologies</h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Linux, Neo4j, Entity Framework, jQuery, Bootstrap, Material-UI, GitHub, Git, Redux, Firebase
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-3">Methodologies</h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Agile Development, REST APIs, Graph Databases, Full-Stack Development
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-zinc-200 dark:border-zinc-800 pt-8 mt-16">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              © 2025 | Logan Crotchett
            </p>
            <a 
              href="#top" 
              className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              Back to top ↑
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
