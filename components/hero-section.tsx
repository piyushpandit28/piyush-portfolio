"use client"

import { motion } from "framer-motion"
import { HeroStrip } from "@/components/hero-strip"

export function HeroSection() {
  const words = ["Founder's", "Office", "—", "Strategy", "·", "Operations", "·", "0→1", "Execution"]
  
  const scrollToWork = () => {
    const element = document.getElementById("intro")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center px-6 relative pt-[60px]"
    >
      <div className="text-center">
        <motion.h1
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-[#f0f0f0]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Piyush Pandit
        </motion.h1>

        <div className="mt-6 md:mt-8 flex flex-wrap justify-center gap-x-2 text-lg sm:text-xl md:text-2xl text-[#3B82F6]">
          {words.map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.8 + index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              {word}
            </motion.span>
          ))}
        </div>

        <motion.div
          className="relative left-1/2 mt-12 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          <div className="absolute top-1/2 left-0 z-0 h-[1px] w-screen -translate-y-1/2 bg-[#222222]" />
          <HeroStrip />
        </motion.div>
      </div>

      <div className="absolute bottom-12 flex flex-col items-center gap-3">
        <motion.button
          onClick={scrollToWork}
          className="hover-target text-sm text-[#f0f0f0]/50 hover:text-[#f0f0f0] transition-colors duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.8 }}
        >
          See the work ↓
        </motion.button>

        <motion.p
          className="text-[10px] sm:text-xs text-[#f0f0f0]/30 text-center whitespace-nowrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.2, duration: 0.8 }}
        >
          🚀 10+ Startup & Entrepreneurship Projects · 🤝 5+ Client Projects · 🌍 3+ Apprenticeships & Full-time Roles
        </motion.p>
      </div>
    </section>
  )
}
