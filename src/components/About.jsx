import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative w-full bg-[#0b0d19] py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_300px_at_10%_10%,rgba(168,85,247,0.15),transparent),radial-gradient(800px_400px_at_90%_30%,rgba(59,130,246,0.12),transparent)]" />
      <div className="relative mx-auto max-w-5xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold"
        >
          About
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 text-lg leading-relaxed text-slate-300"
        >
          I’m a Software Engineering student passionate about crafting immersive, performant interfaces that feel alive. I combine a love for design with strong frontend engineering fundamentals to build responsive, accessible experiences—pushing pixels and performance in equal measure.
        </motion.p>
      </div>
    </section>
  )
}
