"use client"

import { motion } from "framer-motion"

interface TimelineNode {
  year: string
  label: string
  description: string
}

const timelineData: TimelineNode[] = [
  {
    year: "2019",
    label: "School",
    description: "First encounter with entrepreneurship"
  },
  {
    year: "2021",
    label: "College begins",
    description: "Joined institution, first projects"
  },
  {
    year: "2022",
    label: "First startup work",
    description: "Worked inside early-stage company"
  },
  {
    year: "2023",
    label: "Field & research",
    description: "500+ hours field research, rural immersions"
  },
  {
    year: "2024",
    label: "Now",
    description: "14 projects, 3 startups, graduating"
  },
]

export function StorySection() {
  return (
    <section id="story" className="py-32 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Desktop: Horizontal Timeline */}
        <div className="hidden md:block relative">
          {/* Horizontal line */}
          <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-[#222222] -translate-y-1/2" />
          
          <div className="flex justify-between items-center relative">
            {timelineData.map((node, index) => (
              <motion.div
                key={node.year}
                className="flex flex-col items-center relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                {/* Year above */}
                <span className="text-[#3B82F6] font-mono text-sm mb-4">
                  {node.year}
                </span>
                
                {/* Node circle with pulse */}
                <motion.div
                  className="relative w-3 h-3 rounded-full bg-[#3B82F6] z-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.15 + 0.2 }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-full bg-[#3B82F6]"
                    animate={{
                      scale: [1, 2, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                  />
                </motion.div>
                
                {/* Label and description below */}
                <div className="mt-4 text-center max-w-[140px]">
                  <p className="text-[#f0f0f0] font-medium text-sm mb-1">
                    {node.label}
                  </p>
                  <p className="text-[#f0f0f0]/50 text-xs leading-relaxed">
                    {node.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile: Vertical Timeline */}
        <div className="md:hidden relative">
          {/* Vertical line */}
          <div className="absolute top-0 bottom-0 left-4 w-[1px] bg-[#222222]" />
          
          <div className="flex flex-col gap-10">
            {timelineData.map((node, index) => (
              <motion.div
                key={node.year}
                className="flex items-start gap-6 relative"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                {/* Node circle with pulse */}
                <motion.div
                  className="relative w-3 h-3 rounded-full bg-[#3B82F6] flex-shrink-0 mt-1 ml-[5px]"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.15 + 0.2 }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-full bg-[#3B82F6]"
                    animate={{
                      scale: [1, 2, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                  />
                </motion.div>
                
                {/* Content */}
                <div>
                  <span className="text-[#3B82F6] font-mono text-sm">
                    {node.year}
                  </span>
                  <p className="text-[#f0f0f0] font-medium mt-1">
                    {node.label}
                  </p>
                  <p className="text-[#f0f0f0]/50 text-sm mt-1">
                    {node.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
