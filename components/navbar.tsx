"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Menu, X, Home } from "lucide-react"

const navLinks = [
  { label: "Resume", href: "https://drive.google.com/file/d/1hVNQKo1EzRjt7iUxkucXDAcKIFMhMSxq/view?usp=sharing", icon: "📄" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/piyush-pandit28/", icon: "💼" },
  { label: "Email", href: "mailto:panditpiyush2005@gmail.com", icon: "✉️" },
  { label: "WhatsApp", href: "https://wa.me/919766026491", icon: "💬" },
  { label: "Linktree", href: "https://linktr.ee/Piyush_Panditt", icon: "🌐" },
]

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 h-[60px] bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#222222]/50"
        initial={{ y: -60 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
          {/* Home Icon */}
          <a 
            href="#hero" 
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: "smooth" })
            }}
            className="hover-target text-[#3B82F6] hover:text-[#60a5fa] transition-colors"
          >
            <Home size={24} />
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="hover-target text-[13px] text-[#f0f0f0]/70 hover:text-[#f0f0f0] transition-colors duration-300 relative group"
              >
                <span className="mr-1.5">{link.icon}</span>
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#3B82F6] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="hover-target md:hidden p-2 text-[#f0f0f0]/70 hover:text-[#f0f0f0] transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-[#0a0a0a]/98 md:hidden pt-[60px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="hover-target text-xl text-[#f0f0f0]/70 hover:text-[#3B82F6] transition-colors duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="mr-2">{link.icon}</span>
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
