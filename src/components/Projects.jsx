import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Neon UI Kit',
    description: 'A glowing component library with glassmorphism and motion primitives.',
    stack: ['React', 'Tailwind', 'Framer Motion'],
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Parallax Portfolio',
    description: 'A scrolling experience with layered depth and physics-based motion.',
    stack: ['Vite', 'React', 'Lenis'],
    image: 'https://images.unsplash.com/photo-1644352739408-a191ed85e513?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxQYXJhbGxheCUyMFBvcnRmb2xpb3xlbnwwfDB8fHwxNzYyNjIxOTM5fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    title: 'Interactive Playground',
    description: 'Sandbox to prototype micro-interactions and transitions.',
    stack: ['TypeScript', 'React', 'Framer Motion'],
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1600&auto=format&fit=crop',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative w-full bg-[#0b0d19] py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_300px_at_30%_0%,rgba(79,70,229,0.12),transparent)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold"
        >
          Projects
        </motion.h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -6 }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md"
            >
              <div className="relative aspect-video overflow-hidden">
                <img src={p.image} alt="" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b0d19] via-transparent to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-slate-300 text-sm">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
