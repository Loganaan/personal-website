import Link from "next/link";
import Image from "next/image";

export default function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 via-white to-zinc-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950">
      <div className="max-w-4xl mx-auto px-6 py-12 sm:px-8 sm:py-20">
        {/* Header */}
        <div className="mb-16">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 mb-10 transition-colors group"
          >
            <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to home
          </Link>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-4">Projects</h1>
        </div>

        {/* Projects */}
        <section className="mb-24">
          <div className="space-y-16">
            {/* Meteor Madness */}
            <a 
              href="https://nasa-meteor-madness-wine.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-2xl overflow-hidden hover:shadow-xl hover:border-zinc-300 dark:hover:border-zinc-600 transition-all duration-300 hover:-translate-y-1">
                <div className="relative w-full aspect-video bg-zinc-100 dark:bg-zinc-900 p-4">
                  <Image
                    src="/Meteor_Madness.png"
                    alt="Meteor Madness - Asteroid Impact Simulator"
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <div className="p-8">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">Meteor Madness</h2>
                    <span className="text-sm text-zinc-600 dark:text-zinc-400">
                      Winner • October 2025
                    </span>
                  </div>
                  <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-6">NASA Space Apps Challenge 2025</p>
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                    An asteroid impact simulator that shows what happens when space rocks hit Earth. Built 2D impact maps with react-leaflet and Turf.js, plus a 3D globe in CesiumJS with camera controls and terrain visualization. Pulls real NASA data through serverless API routes.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-6">
                    {['Next.js', 'React', 'TypeScript', 'Node.js', 'CesiumJS', 'react-leaflet', 'Turf.js', 'NASA API'].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-zinc-100 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 rounded-md text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </a>

            {/* TechReady */}
            <a 
              href="https://www.techready.tech/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-2xl overflow-hidden hover:shadow-xl hover:border-zinc-300 dark:hover:border-zinc-600 transition-all duration-300 hover:-translate-y-1">
                <div className="relative w-full aspect-video bg-zinc-100 dark:bg-zinc-900 p-4">
                  <Image
                    src="/Tech_Ready.png"
                    alt="TechReady - Job Interview Simulator"
                    fill
                    className="object-contain p-4"
                    priority
                  />
                </div>
                <div className="p-8">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">TechReady</h2>
                    <span className="text-sm text-zinc-600 dark:text-zinc-400">
                      Winner • October 2025
                    </span>
                  </div>
                  <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-6">Hack Cats 2025</p>
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                    A job interview practice app with real-time voice interaction. Uses Deepgram for speech-to-text, ElevenLabs for text-to-speech, and Google Gemini to generate personalized questions and feedback. Firebase handles auth and saves your session data.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-6">
                    {['Next.js', 'React', 'TypeScript', 'Deepgram', 'ElevenLabs', 'Google Gemini', 'Firebase'].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-zinc-100 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 rounded-md text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </a>
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
