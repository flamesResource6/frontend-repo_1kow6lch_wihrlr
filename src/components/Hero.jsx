import { useEffect, useState } from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

const roles = [
  'Frontend Developer',
  'Software Engineering Student',
  'UI/UX Enthusiast',
  'Animation Lover',
]

function useTypewriter(words, speed = 70, delay = 1200) {
  const [index, setIndex] = useState(0)
  const [display, setDisplay] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[index % words.length]

    if (!deleting && display.length < current.length) {
      const t = setTimeout(() => setDisplay(current.slice(0, display.length + 1)), speed)
      return () => clearTimeout(t)
    }

    if (deleting && display.length > 0) {
      const t = setTimeout(() => setDisplay(current.slice(0, display.length - 1)), speed / 2)
      return () => clearTimeout(t)
    }

    if (display.length === current.length && !deleting) {
      const t = setTimeout(() => setDeleting(true), delay)
      return () => clearTimeout(t)
    }

    if (display.length === 0 && deleting) {
      setDeleting(false)
      setIndex((i) => (i + 1) % words.length)
    }
  }, [display, deleting, index, words, speed, delay])

  return display + (deleting ? '' : '▌')
}

export default function Hero() {
  const typed = useTypewriter(roles)

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-[#0a0b14] text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_70%_10%,rgba(99,102,241,0.25),transparent),radial-gradient(800px_400px_at_20%_60%,rgba(56,189,248,0.2),transparent)]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-extrabold tracking-tight text-4xl sm:text-6xl leading-tight"
          >
            Hey, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-sky-300 to-cyan-300">Your Name</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-4 text-lg text-slate-300"
          >
            Frontend Developer & Software Engineering Student
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-6 text-xl font-medium text-slate-200"
          >
            {typed}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mt-10 flex gap-4"
          >
            <a href="#projects" className="rounded-full bg-white/10 px-6 py-3 backdrop-blur-md transition hover:bg-white/20">
              View Projects
            </a>
            <a href="#skills" className="rounded-full border border-white/20 px-6 py-3 backdrop-blur-md transition hover:bg-white/10">
              Skills
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
