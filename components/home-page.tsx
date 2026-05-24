"use client"

import { CustomCursor } from "@/components/custom-cursor"
import { DotNavigation } from "@/components/dot-navigation"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { IntroSection } from "@/components/intro-section"
import { WorkSection } from "@/components/work-section"
import { GamificationSection } from "@/components/gamification-section"
import { MessageSection } from "@/components/message-section"
import { FooterSection } from "@/components/footer-section"
import { SkipToBestPart } from "@/components/skip-to-best-part"

export function HomePage() {
  return (
    <>
      <CustomCursor />
      <DotNavigation />
      <Navbar />
      <SkipToBestPart />

      {/* Grain overlay */}
      <div className="grain-overlay" aria-hidden="true" />

      <main className="relative">
        <HeroSection />
        <IntroSection />
        <WorkSection />
        <GamificationSection />
        <MessageSection />
        <FooterSection />
      </main>
    </>
  )
}
