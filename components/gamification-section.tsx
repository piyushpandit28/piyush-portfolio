"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

interface PaperStack {
  id: number
  label: string
  resolvedLabel: string
  icon: string
  papers: { rotation: number; x: number; y: number }[]
}

const paperStacks: PaperStack[] = [
  {
    id: 1,
    label: "Messy Operations",
    resolvedLabel: "📋 Ops Playbook Built",
    icon: "📋",
    papers: [
      { rotation: -12, x: -8, y: 0 },
      { rotation: 8, x: 6, y: -3 },
      { rotation: -5, x: -4, y: -6 },
      { rotation: 15, x: 10, y: -9 },
      { rotation: -3, x: 2, y: -12 },
    ],
  },
  {
    id: 2,
    label: "No Market Data",
    resolvedLabel: "📊 Research Delivered",
    icon: "📊",
    papers: [
      { rotation: 10, x: 7, y: 0 },
      { rotation: -14, x: -9, y: -3 },
      { rotation: 6, x: 4, y: -6 },
      { rotation: -8, x: -6, y: -9 },
      { rotation: 12, x: 8, y: -12 },
    ],
  },
  {
    id: 3,
    label: "Stalled Launch",
    resolvedLabel: "🚀 Product Live",
    icon: "🚀",
    papers: [
      { rotation: -9, x: -6, y: 0 },
      { rotation: 7, x: 5, y: -3 },
      { rotation: -16, x: -10, y: -6 },
      { rotation: 11, x: 7, y: -9 },
      { rotation: -4, x: -3, y: -12 },
    ],
  },
]

function PaperStackComponent({ stack, isCompleted, onClick }: { 
  stack: PaperStack
  isCompleted: boolean
  onClick: () => void 
}) {
  return (
    <motion.div 
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Paper stack */}
      <button
        onClick={onClick}
        className="hover-target relative w-[140px] h-[180px] md:w-[160px] md:h-[200px]"
      >
        {stack.papers.map((paper, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 bg-[#1a1a1a] border border-white/20 rounded-lg"
            animate={{
              rotate: isCompleted ? 0 : paper.rotation,
              y: isCompleted ? index * -2 : paper.y,
              x: isCompleted ? 0 : paper.x,
            }}
            transition={{
              duration: 0.4,
              delay: isCompleted ? index * 0.08 : 0,
              ease: "easeOut",
            }}
            style={{
              zIndex: stack.papers.length - index,
            }}
          />
        ))}

        {/* Completed state with icon */}
        <AnimatePresence>
          {isCompleted && (
            <motion.div
              className="absolute inset-0 flex flex-col items-center justify-center z-20 gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.4, duration: 0.2 }}
            >
              <motion.span
                className="text-5xl"
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.2, 1] }}
                transition={{ delay: 0.5, duration: 0.4, ease: "easeOut" }}
              >
                {stack.icon}
              </motion.span>
              <motion.span
                className="text-[#3B82F6] font-bold text-sm md:text-base text-center px-4"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.3, type: "spring" }}
              >
                COMPLETED
              </motion.span>
            </motion.div>
          )}
        </AnimatePresence>
      </button>

      {/* Label */}
      <motion.p
        className="mt-6 text-center text-sm md:text-base"
        animate={{
          color: isCompleted ? "#3B82F6" : "#666666",
        }}
        transition={{ duration: 0.3 }}
      >
        {isCompleted ? stack.resolvedLabel : stack.label}
      </motion.p>
    </motion.div>
  )
}

export function GamificationSection() {
  const [completedStacks, setCompletedStacks] = useState<Set<number>>(new Set())

  const handleStackClick = (stackId: number) => {
    if (!completedStacks.has(stackId)) {
      setCompletedStacks((prev) => new Set([...prev, stackId]))
    }
  }

  const handleReset = () => {
    setCompletedStacks(new Set())
  }

  return (
    <section id="gamification" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-[#f0f0f0] mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          🗂️ What happens after you hire me?
        </motion.h2>

        <motion.p
          className="text-[#666666] mb-16 text-base"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          👇 Click on any stack to find out.
        </motion.p>

        {/* Paper stacks grid */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 mb-12">
          {paperStacks.map((stack) => (
            <PaperStackComponent
              key={stack.id}
              stack={stack}
              isCompleted={completedStacks.has(stack.id)}
              onClick={() => handleStackClick(stack.id)}
            />
          ))}
        </div>

        {/* Reset link */}
        <motion.button
          onClick={handleReset}
          className="hover-target text-[#666666] hover:text-[#888888] text-sm transition-colors"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Reset
        </motion.button>
      </div>
    </section>
  )
}
