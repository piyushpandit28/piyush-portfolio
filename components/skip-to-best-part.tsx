"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export function SkipToBestPart() {
  const [isHovered, setIsHovered] = useState(false)

  const scrollToGamification = () => {
    document.getElementById("gamification")?.scrollIntoView({ behavior: "smooth" })
  }

  const handleMouseEnter = () => {
    if (window.matchMedia("(min-width: 768px)").matches) {
      setIsHovered(true)
    }
  }

  return (
    <motion.button
      type="button"
      onClick={scrollToGamification}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setIsHovered(false)}
      className="hover-target fixed bottom-[32px] left-[32px] z-50 flex h-14 items-center justify-center overflow-hidden rounded-full bg-[#3B82F6] text-white shadow-lg shadow-[#3B82F6]/25"
      animate={{
        width: isHovered ? "auto" : 56,
        scale: [1, 1.05, 1],
      }}
      transition={{
        width: { duration: 0.3, ease: "easeOut" },
        scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
      }}
      aria-label="Skip to the best part"
    >
      <span className="flex shrink-0 items-center justify-center text-xl" style={{ width: 56 }}>
        ⚡
      </span>
      {isHovered && (
        <span className="hidden whitespace-nowrap pr-5 text-sm font-medium md:inline">
          Skip to the best part →
        </span>
      )}
    </motion.button>
  )
}
