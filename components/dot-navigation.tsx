"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const sections = ["hero", "intro", "work", "message", "footer"]

export function DotNavigation() {
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4">
      {sections.map((section) => (
        <button
          key={section}
          onClick={() => scrollToSection(section)}
          className="hover-target group relative flex items-center"
          aria-label={`Scroll to ${section}`}
        >
          <motion.div
            className="w-2.5 h-2.5 rounded-full border transition-all duration-300"
            animate={{
              backgroundColor: activeSection === section ? "#3B82F6" : "transparent",
              borderColor: activeSection === section ? "#3B82F6" : "rgba(240, 240, 240, 0.4)",
              scale: activeSection === section ? 1.2 : 1,
            }}
          />
          <span className="absolute left-6 text-xs text-[#f0f0f0]/0 group-hover:text-[#f0f0f0]/60 transition-all duration-300 capitalize whitespace-nowrap">
            {section}
          </span>
        </button>
      ))}
    </nav>
  )
}
