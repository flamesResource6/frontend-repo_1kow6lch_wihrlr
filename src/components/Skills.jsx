import { motion } from 'framer-motion'
import { Code, Palette, Boxes, Rocket } from 'lucide-react'

const skills = [
  { name: 'HTML', icon: Code, color: 'from-orange-400 to-amber-500' },
  { name: 'CSS', icon: Palette, color: 'from-blue-400 to-sky-500' },
  { name: 'Tailwind CSS', icon: Boxes, color: 'from-cyan-400 to-teal-500' },
  { name: 'JavaScript', icon: Rocket, color: 'from-yellow-400 to-amber-500' },
  { name: 'React', icon: Boxes, color: 'from-sky-400 to-blue-500' },
  { name: 'TypeScript', icon: Code, color: 'from-indigo-400 to-violet-500' },
]

export default function Skills() {
  return (
    <section id="skills" className="relative w-full bg-[#0a0b14] py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_300px_at_80%_20%,rgba(14,165,233,0.12),transparent)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold"
        >
          Skills
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map(({ name, icon: Icon, color }) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="relative overflow-hidden rounded-2xl bg-white/5 p-6 backdrop-blur-md border border-white/10"
            >
              <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${color} text-black`}
              >
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">{name}</h3>
              <p className="text-sm text-slate-300 mt-1">Hover to feel the glow.</p>
              <div className="pointer-events-none absolute -inset-20 bg-gradient-to-tr from-indigo-500/10 to-cyan-500/10 blur-3xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
