"use client"

import { motion, useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"

const contactButtons = [
  { label: "✉️ Email", href: "mailto:panditpiyush2005@gmail.com" },
  { label: "💬 WhatsApp", href: "https://wa.me/919766026491" },
  { label: "💼 LinkedIn", href: "https://www.linkedin.com/in/piyush-pandit28/" },
]

function ProjectCounter() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

    const duration = 1500
    const target = 15
    const startTime = performance.now()

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1)
      setCount(Math.round(progress * target))
      if (progress < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [isInView])

  return (
    <motion.div
      ref={ref}
      className="mb-10"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <p className="text-4xl md:text-5xl font-bold text-[#3B82F6] tabular-nums">
        {count}<span>+</span>
      </p>
      <p className="mt-2 text-sm text-[#888]">projects shipped & counting 🚀</p>
    </motion.div>
  )
}

export function FooterSection() {
  return (
    <footer id="footer" className="py-24 px-6 md:px-12 min-h-[60vh] flex items-center justify-center relative overflow-hidden">
      <div className="max-w-3xl mx-auto text-center relative z-10 flex flex-col items-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-[#f0f0f0] mb-4"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Thank you for exploring this far.
        </motion.h2>

        <motion.p
          className="text-base md:text-lg text-[#f0f0f0]/50 mb-10"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          Let&apos;s connect soon. 🤝
        </motion.p>

        <ProjectCounter />

        <motion.div
          className="flex flex-wrap items-center justify-center gap-3 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {contactButtons.map((btn) => (
            <a
              key={btn.label}
              href={btn.href}
              target={btn.href.startsWith("http") ? "_blank" : undefined}
              rel={btn.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="hover-target px-5 py-2 rounded-full border border-[#f0f0f0]/30 text-[#f0f0f0]/70 text-sm font-medium hover:bg-[#3B82F6] hover:border-[#3B82F6] hover:text-white transition-all duration-300"
            >
              {btn.label}
            </a>
          ))}
        </motion.div>

        <motion.a
          href="https://wa.me/919766026491"
          target="_blank"
          rel="noopener noreferrer"
          className="hover-target inline-block bg-[#3B82F6] hover:bg-[#2563eb] text-white font-semibold py-2 px-6 rounded-full text-sm transition-colors duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          📞 {"Let's Get on a Call"}
        </motion.a>

        <motion.p
          className="mt-12 text-xs text-[#f0f0f0]/30"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          © 2026 Piyush Pandit
        </motion.p>
      </div>
    </footer>
  )
}
