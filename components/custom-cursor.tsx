"use client"

import { useEffect, useState } from "react"
import { motion, useSpring } from "framer-motion"

export function CustomCursor() {
  const [mounted, setMounted] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isScrolling, setIsScrolling] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 }
  const cursorX = useSpring(0, springConfig)
  const cursorY = useSpring(0, springConfig)

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      setIsVisible(true)
    }

    const handleMouseLeave = () => setIsVisible(false)

    let scrollTimeout: ReturnType<typeof setTimeout>
    const handleScroll = () => {
      setIsScrolling(true)
      clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(() => setIsScrolling(false), 120)
    }

    const addHoverListeners = () => {
      const hoverElements = document.querySelectorAll('a, button, [role="button"], .hover-target')
      hoverElements.forEach((el) => {
        el.addEventListener("mouseenter", () => setIsHovering(true))
        el.addEventListener("mouseleave", () => setIsHovering(false))
      })
    }

    window.addEventListener("mousemove", updatePosition)
    document.addEventListener("mouseleave", handleMouseLeave)
    window.addEventListener("scroll", handleScroll, { passive: true })

    addHoverListeners()
    const observer = new MutationObserver(addHoverListeners)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener("mousemove", updatePosition)
      document.removeEventListener("mouseleave", handleMouseLeave)
      window.removeEventListener("scroll", handleScroll)
      clearTimeout(scrollTimeout)
      observer.disconnect()
    }
  }, [cursorX, cursorY])

  if (!mounted) return null

  return (
    <motion.div
      className="fixed pointer-events-none z-[10000] text-2xl select-none"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        opacity: isVisible && !isScrolling ? 1 : 0,
        scale: isHovering ? 1.3 : 1,
      }}
      transition={{
        opacity: { duration: 0.2 },
        scale: { type: "spring", stiffness: 400, damping: 25 },
      }}
    >
      {"💻"}
    </motion.div>
  )
}
