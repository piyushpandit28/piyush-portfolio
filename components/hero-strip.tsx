"use client"

import { useLayoutEffect, useState } from "react"

const CONTAINER_WIDTH = 120
const GAP = 12
const STRIDE = CONTAINER_WIDTH + GAP

function IdeasContainer() {
  return (
    <div className="flex h-[44px] w-[120px] shrink-0 items-center justify-center rounded-lg border border-[#333] bg-[#0a0a0a]">
      <span className="text-sm font-medium text-[#888]">💡 Ideas</span>
    </div>
  )
}

function ResultsContainer() {
  return (
    <div className="flex h-[44px] w-[120px] shrink-0 items-center justify-center rounded-lg border border-[#3B82F6]/30 bg-[#0a0a0a] shadow-[0_0_8px_#3B82F640]">
      <span className="text-sm font-medium text-[#3B82F6]">🚀 Results</span>
    </div>
  )
}

function IdeasRow({ prefix, count }: { prefix: string; count: number }) {
  const setWidth = count * STRIDE

  return (
    <div
      className="flex h-full shrink-0 items-center gap-3"
      style={{ width: setWidth }}
    >
      {Array.from({ length: count }, (_, i) => (
        <IdeasContainer key={`${prefix}-${i}`} />
      ))}
    </div>
  )
}

function ResultsRow({ prefix, count }: { prefix: string; count: number }) {
  const setWidth = count * STRIDE

  return (
    <div
      className="flex h-full shrink-0 items-center gap-3"
      style={{ width: setWidth }}
    >
      {Array.from({ length: count }, (_, i) => (
        <ResultsContainer key={`${prefix}-${i}`} />
      ))}
    </div>
  )
}

export function HeroStrip() {
  const [containerCount, setContainerCount] = useState(6)

  useLayoutEffect(() => {
    const updateCount = () => {
      const zoneWidth = window.innerWidth / 2
      setContainerCount(Math.max(4, Math.ceil(zoneWidth / STRIDE)))
    }

    updateCount()
    window.addEventListener("resize", updateCount)
    return () => window.removeEventListener("resize", updateCount)
  }, [])

  return (
    <div className="relative h-20 w-screen overflow-hidden">
      {/* Zone 1 — Ideas (left half, clipped at 50vw) */}
      <div className="absolute left-0 top-0 h-full w-[50vw] overflow-hidden">
        <div className="strip-zone-scroll">
          <IdeasRow prefix="ideas-a" count={containerCount} />
          <IdeasRow prefix="ideas-b" count={containerCount} />
        </div>
      </div>

      {/* Zone 2 — Action pill (fixed center) */}
      <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-white px-8 py-2.5 text-base font-bold text-[#0a0a0a] shadow-lg shadow-white/10">
        ⚡ Action
      </div>

      {/* Zone 3 — Results (right half, emerging from center) */}
      <div className="absolute left-[50vw] top-0 h-full w-[50vw] overflow-hidden">
        <div className="strip-zone-scroll">
          <ResultsRow prefix="results-a" count={containerCount} />
          <ResultsRow prefix="results-b" count={containerCount} />
        </div>
      </div>
    </div>
  )
}
