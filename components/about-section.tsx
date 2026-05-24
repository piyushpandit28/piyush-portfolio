"use client"

import { motion } from "framer-motion"

export function AboutSection() {
  const paragraphs = [
    "I grew up wanting to build things. Somewhere between cold-calling 1,000 schools, living in a Wardha village for a week, and launching a 3D-printed product on Amazon — I figured out that I'm most useful when the problem is unclear and someone needs to move fast.",
    "I've worked inside three early-stage startups as a one-person founder's office. I don't specialize. I find what's broken, figure out how to fix it, and ship.",
    "Currently finishing my degree at MIT-WPU. Looking for a founder who needs someone to just handle things.",
  ]

  return (
    <section id="about" className="py-40 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-[#f0f0f0] mb-4">
            About
          </h2>
          <div className="w-12 h-1 bg-[#3B82F6]" />
        </motion.div>

        <div className="space-y-8">
          {paragraphs.map((paragraph, index) => (
            <motion.p
              key={index}
              className="text-lg md:text-xl text-[#f0f0f0]/80 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  )
}
