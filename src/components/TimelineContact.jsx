import { motion } from 'framer-motion'
import { Mail, Github, Linkedin } from 'lucide-react'

const timeline = [
  {
    title: 'Software Engineering Student',
    place: 'University',
    period: '2023 — Present',
    detail: 'Focused on algorithms, systems, and human–computer interaction.',
  },
  {
    title: 'Frontend Projects',
    place: 'Personal Work',
    period: '2022 — Present',
    detail: 'Built interactive, performant sites with React, TypeScript and Tailwind.',
  },
]

export default function TimelineContact() {
  return (
    <section id="experience" className="relative w-full bg-[#0a0b14] py-24 text-white">
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold"
        >
          Experience & Education
        </motion.h2>

        <div className="mt-10 grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="relative border-l border-white/10 pl-6">
              {timeline.map((t, i) => (
                <motion.div
                  key={t.title}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="relative py-6"
                >
                  <span className="absolute -left-[9px] top-7 h-4 w-4 rounded-full bg-gradient-to-br from-indigo-400 to-cyan-400 shadow-[0_0_20px_rgba(99,102,241,0.6)]" />
                  <h3 className="text-xl font-semibold">{t.title}</h3>
                  <p className="text-slate-300 text-sm mt-1">{t.place} • {t.period}</p>
                  <p className="text-slate-300 mt-2">{t.detail}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <motion.h3
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-semibold"
            >
              Contact
            </motion.h3>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
            >
              <p className="text-slate-300">Let’s build something delightful together.</p>
              <div className="mt-4 flex items-center gap-3">
                <a href="mailto:you@example.com" className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:bg-white/10">
                  <Mail className="h-5 w-5" /> <span>Email</span>
                </a>
                <a href="https://github.com/" target="_blank" className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:bg-white/10" rel="noreferrer">
                  <Github className="h-5 w-5" /> <span>GitHub</span>
                </a>
                <a href="https://linkedin.com/in/" target="_blank" className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:bg-white/10" rel="noreferrer">
                  <Linkedin className="h-5 w-5" /> <span>LinkedIn</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
