"use client"

import { motion } from "framer-motion"
import { useState } from "react"

interface IntroBlock {
  emoji: string
  heading: string
  body: string
}

const introBlocks: IntroBlock[] = [
  {
    emoji: "👤",
    heading: "About Me",
    body: "I like to get my hands dirty. Give me a hard problem and I'll figure it out: not by waiting for direction, but by **diving in and finding clarity through action**. I'm genuinely curious, **pick things up fast**, and adapt without losing momentum. I do my best work around **ambitious people who care about results** as much as I do.",
  },
  {
    emoji: "💼",
    heading: "Work Snapshot",
    body: "A **generalist operator** across market research, D2C strategy, business operations, and content. Comfortable switching between **strategy and execution**: from **75+ consumer interviews** that shaped a product roadmap, to running a D2C vertical to **10% month-on-month growth**. The thread: **own the problem, see it through**.",
  },
  {
    emoji: "🎯",
    heading: "What I'm Looking For",
    body: "A **fast-paced, high-growth startup** that needs a smart operator to **own projects end-to-end**. Ideally a **founder's office role** where the real decisions happen, capabilities are tested, and I'm working **directly alongside the founder** and core team.",
  },
]

function renderBody(text: string) {
  return text.split(/\*\*(.*?)\*\*/g).map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="text-[#f0f0f0] font-semibold">
        {part}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    )
  )
}

function IntroCard({ block, index }: { block: IntroBlock; index: number }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="hover-target relative bg-[#111111] border border-[#222222] rounded-lg p-8 flex flex-col transition-all duration-300"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        boxShadow: isHovered
          ? "0 0 20px rgba(59, 130, 246, 0.15), 0 0 0 1px rgba(59, 130, 246, 0.5)"
          : "none",
      }}
    >
      <h3 className="text-xl font-semibold text-[#f0f0f0] mb-4">
        {block.emoji} {block.heading}
      </h3>
      <p className="text-[#f0f0f0]/60 leading-relaxed">
        {renderBody(block.body)}
      </p>
    </motion.div>
  )
}

export function IntroSection() {
  return (
    <section id="intro" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#f0f0f0] mb-4">
            ⚡ Quick Summary
          </h2>
          <div className="w-12 h-1 bg-[#3B82F6]" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {introBlocks.map((block, index) => (
            <IntroCard key={block.heading} block={block} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}