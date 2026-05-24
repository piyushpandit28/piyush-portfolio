"use client"

import { motion } from "framer-motion"

export function ContactSection() {
  return (
    <section id="contact" className="py-40 px-6 md:px-12 min-h-[70vh] flex items-center justify-center relative overflow-hidden">
      {/* Animated gradient line */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-[#3B82F6]/40 to-transparent"
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#f0f0f0] mb-6"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          You read this far.
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-[#f0f0f0]/50 mb-12"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {"That's exactly the kind of attention I bring to work."}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a
            href="mailto:panditpiyush2005@gmail.com"
            className="hover-target text-lg text-[#f0f0f0]/70 hover:text-[#3B82F6] transition-colors duration-300 flex items-center gap-2 group"
          >
            <span className="text-[#f0f0f0]/40 group-hover:text-[#3B82F6] transition-colors">→</span>
            Email
          </a>

          <a
            href="https://www.linkedin.com/in/piyush-pandit28/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover-target text-lg text-[#f0f0f0]/70 hover:text-[#3B82F6] transition-colors duration-300 flex items-center gap-2 group"
          >
            <span className="text-[#f0f0f0]/40 group-hover:text-[#3B82F6] transition-colors">→</span>
            LinkedIn
          </a>
        </motion.div>

        <motion.p
          className="mt-24 text-xs text-[#f0f0f0]/30"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Piyush Pandit · MIT-WPU · 2025
        </motion.p>
      </div>
    </section>
  )
}
