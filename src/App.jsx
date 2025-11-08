import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import TimelineContact from './components/TimelineContact'

function App() {
  return (
    <div className="min-h-screen w-full scroll-smooth bg-[#0a0b14] text-white">
      <header className="fixed left-0 right-0 top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-[#0a0b14]/50">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="font-semibold tracking-tight">Portfolio</a>
          <div className="hidden gap-6 text-sm text-slate-200 sm:flex">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#experience" className="hover:text-white">Contact</a>
          </div>
        </nav>
      </header>

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <TimelineContact />
      </main>

      <footer className="border-t border-white/10 bg-[#0a0b14] py-8 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Your Name — Built with React, Tailwind, and a splash of 3D.
      </footer>
    </div>
  )
}

export default App
