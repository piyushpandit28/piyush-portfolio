"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

interface Project {
  title: string
  description: string
  tags: { emoji: string; label: string }[]
  image: string
  summary?: string
  report?: string
}

interface WorkSubsection {
  emoji: string
  heading: string
  projects: Project[]
}

const workSubsections: WorkSubsection[] = [
  {
    emoji: "🏢",
    heading: "Apprenticeships & Full-Time Roles",
    projects: [
      {
        title: "Stahl Kitchens — Current Role",
        description:
          "Leading D2C strategy and operations. 10% month-on-month growth, 4 campaigns executed, HoReCa market research presented to management.",
          tags: [
            { emoji: "📈", label: "D2C growth" },
            { emoji: "🎯", label: "campaign execution" },
            { emoji: "🔍", label: "market research" },
          ],
        image: "/images/stahl.jpeg",
        summary: "Strategy & Growth — Stahl Kitchens | Sep 2025 – Current\n\nLed the D2C business vertical, overseeing comprehensive strategy and operations for the website. Collaborated with the performance marketing agency to achieve **10% month-on-month growth**.\n\nExecuted 4 campaigns on the website to showcase specific products and for special occasions including Valentine's Day and Mother's Day. Worked in close partnership with the marketing team to implement these initiatives.\n\nConducted thorough market research to assess the potential of HoReCa as a new business vertical for the brand, and presented insights to management.",
      },
      {
        title: "Glovatrix — Founder's Office",
        description: "Built deployment process + 50+ institution lead pipeline for a sign-language glove startup.",
        tags: [
          { emoji: "⚙️", label: "process design" },
          { emoji: "📈", label: "lead generation" },
          { emoji: "♿", label: "inclusive tech" },
        ],
        image: "/images/Glovatrix.jpg",
        summary: "Worked as a Founder's Office Apprentice at Glovatrix — a startup building sign-language to audio/text gloves for deaf employees. Over 400+ hours across May–July 2025, I designed a comprehensive sequence flowchart outlining all possible pathways to streamline the on-ground deployment process for deaf employees at client sites. I also built a network of 50+ leads from institutions and organizations, enabling partnerships for an upcoming project pipeline. Additionally, I learned the basics of Indian Sign Language (ISL) to better understand the problem space.",
      },
      {
        title: "Vaayu Biogas — Founder's Office",
        description: "Took ERP from zero to live, built service clusters, ran email campaigns to re-engage prospects.",
        tags: [
          { emoji: "🖥️", label: "ERP implementation" },
          { emoji: "🔧", label: "ops design" },
          { emoji: "📧", label: "email marketing" },
        ],
        image: "/images/Vaayu.png",
        summary: "Worked as a Founder's Office Intern at Vaayu Biogas, an early-stage biogas startup, investing 400+ hours from June–July 2024. I supported the implementation of the company's ERP system from initial setup through to live deployment, provided direct client support to troubleshoot issues, executed email marketing campaigns to re-engage prospects, and developed service clusters to optimize operational efficiency. The role required wearing multiple hats in a zero-structure environment and building systems from scratch.",
      },
      {
        title: "Pragati Leadership Institute — Founder's Office",
        description: "Built two complete online courses on mental health and mindfulness. Managed website independently.",
        tags: [
          { emoji: "🎬", label: "course production" },
          { emoji: "📚", label: "instructional design" },
          { emoji: "✍️", label: "content creation" },
        ],
        image: "/images/Pragati Leadership.jpg",
        summary: "Worked as a Founder's Office Intern at Pragati Leadership Institute from January–March 2025, investing 400+ hours. I assisted the founder in developing and producing two professional online courses focused on mental health and mindfulness. I also managed website updates through developer coordination and executed changes independently, and created engaging visual learning materials including mind maps and comprehensive workbooks to enhance the course experience.",
      },
    ],
  },
  {
    emoji: "🤝",
    heading: "Client & Consulting Projects",
    projects: [
      {
        title: "Stahl Kitchens — Retail Experience Design",
        description: "Designed and built a full physical walkthrough prototype in a 500 sq ft factory space — holographic display, quality testing stations, branded environment.",
        tags: [
          { emoji: "🎯", label: "customer experience" },
          { emoji: "🎨", label: "rapid prototyping" },
          { emoji: "✅", label: "client delivery" },
        ],
        image: "/images/stahl.jpeg",
        summary: "A 3-week intensive project (100+ hours, March 2024) to conceptualize, design, and prototype an experiential retail space for Stahl Kitchens in a 500 sq ft factory space. We researched successful retail environments and identified three core brand values: Engagement, Assurance, and Knowledge. After client feedback, we shifted to hands-on prototyping — using tables, projection equipment, and a holographic display to create an interactive customer journey. We transformed the space using cardboard, black cloth, and orange tape, and set up quality testing stations to demonstrate product durability. The final walkthrough was documented on video, giving Stahl a working blueprint.",
        report: "Challenge: Create an innovative retail store concept as both a marketing and sales tool, effectively showcasing Stahl's products while creating a memorable customer experience.\n\nApproach: Three-phase design thinking — Week 1: retail store visits and brainstorming to identify core values. Week 2: space assessment, layout design, and rapid prototyping exercises. Week 3: physical prototype build using makeshift materials, holographic display integration, and video documentation.\n\nKey Deliverables: Physical prototype in 500 sq ft space, customer journey mapping, video walkthrough documentation, and final presentation to Stahl's stakeholders.\n\nResults: Positive client feedback on concept and execution. Created a replicable retail experience blueprint that Stahl could use as a reference for future store builds.",
      },
      {
        title: "KOEL (Kirloskar) — Market Research",
        description: "500+ hours of field research across 5 cities. Presented findings directly to the MD, CHRO, and Product VP.",
        tags: [
          { emoji: "📊", label: "market research" },
          { emoji: "🔍", label: "B2C/B2B insight" },
          { emoji: "🎤", label: "stakeholder presentation" },
        ],
        image: "/images/KOEL.jpg",
        summary: "A comprehensive 2.5-month market research project (500+ hours, August–October 2024) for Kirloskar Oil Engines Limited's electric water pumps segment. We traveled to Pune, Mumbai, Kolhapur, Satara, and Sangli — interviewing distributors, retailers, domestic users, and agricultural users. We uncovered regional differences in product preferences, supply chain inefficiencies, and new market opportunities. Final findings were presented directly to KOEL's Managing Director, CHRO, and Product VP.",
        report: "Challenge: Provide KOEL with actionable market intelligence by understanding needs and pain points across their entire distribution network — from distributors to end customers.\n\nMethodology: Created customized questionnaires for each stakeholder group. Conducted field interviews across 5 Maharashtra cities. Analyzed data from both B2C and B2B segments.\n\nKey Findings: Significant regional variations in product preferences and purchasing patterns. Supply chain inefficiencies between distributor and retailer tiers. Unaddressed needs in the agricultural pump segment. Gap between brand perception at distributor vs. end-user level.\n\nDeliverables: Comprehensive stakeholder insight report, market opportunity analysis, supply chain efficiency recommendations, and customer needs assessment — presented to senior KOEL leadership.",
      },
      {
        title: "Reeva's Salon — Service Design",
        description: "Ran customer observations, design sprint, and prototyped a UV sanitization box for a local salon.",
        tags: [
          { emoji: "💡", label: "design thinking" },
          { emoji: "👥", label: "user research" },
          { emoji: "🎨", label: "prototyping" },
        ],
        image: "/images/Service Design.jpg",
        summary: "A 2-week service design project (100+ hours, November–December 2023) applying design thinking to improve customer experience at Reeva's Salon. After immersive on-site observations, we identified key challenges around hygiene and customer satisfaction. We formulated a 'How Might We' statement to guide ideation: 'How might we enhance customer satisfaction and hygiene standards within Reeva's Salon?' Through collaborative prototyping, we developed a UV light box solution allowing customers to sanitize personal items during their visit — improving hygiene while enhancing perceived service value.",
        report: "Challenge: Identify and solve real service experience problems at a local salon using design thinking methodology.\n\nProcess: Phase 1 — Observation of customer interactions, service delivery, and staff behavior. Phase 2 — Stakeholder interviews to identify pain points (hygiene, wait experience). Phase 3 — HMW ideation, concept generation, and prototype development. Phase 4 — Solution presentation to salon management with feedback loop.\n\nSolution: UV sanitization box prototype that customers could use to sanitize personal belongings during their salon visit — addressing the hygiene concern while adding perceived value.\n\nOutcome: Presented full case study to Reeva's Salon owner. Demonstrated how design thinking can identify and solve real-world service challenges through a customer-centric lens.",
      },
      {
        title: "Business X-Ray — Field Analysis",
        description: "Applied Porter's Five Forces live on a street food vendor and paint shop owner. Built analysis deck from scratch.",
        tags: [
          { emoji: "📈", label: "business analysis" },
          { emoji: "🔬", label: "field research" },
          { emoji: "🧠", label: "strategic frameworks" },
        ],
        image: "/images/Business X-ray.jpg",
        summary: "A 30+ hour entrepreneurial skill-building project (October 2023) focused on developing the ability to analyze real businesses without access to formal documentation. I studied two local businesses — a 'Matki Bhel' food stall and a paint shop — by observing operations before directly interviewing the owners. Applied Porter's Five Forces to understand competitive positioning, capital requirements, daily operations, and revenue structures for both businesses. Built a complete analysis deck and received complimentary Matki Bhel as appreciation from the food stall owner.",
        report: "Challenge: Develop entrepreneurial insight by assessing the health, operations, and financial dynamics of real businesses without formal documentation — the 'Business X-Ray' skill.\n\nMethodology: Observation-first approach — 30 minutes of silent observation before engaging with owners. Structured interview questions to uncover operational and financial insights. Applied Porter's Five Forces framework to both businesses.\n\nKey Insights (Paint Shop): Moderate competitive rivalry in local area. High customer dependency on relationships with specific shop owners. Barriers to entry include supplier relationships and inventory capital. Profitability driven by volume and supplier margins.\n\nKey Learnings: Overcame the intimidation of approaching business owners cold. Learned to see beyond surface operations to understand underlying business drivers. Built confidence in real-world entrepreneurial analysis.",
      },
    ],
  },
  {
    emoji: "🚀",
    heading: "Startup & Entrepreneurship Projects",
    projects: [
      {
        title: "Kickstart Entrepreneurship",
        description: "Rs 13,000 profit, 130% ROI. Built and operated a fruit box business, two F&B stalls, and a kids' art workshop in 3 weeks.",
        tags: [
          { emoji: "🌱", label: "0→1 execution" },
          { emoji: "🔧", label: "operations" },
          { emoji: "💰", label: "direct sales" },
        ],
        image: "/images/Startup Project.jpg",
        summary: "A 3-week entrepreneurial sprint (150+ hours, August–September 2023) where we transformed Rs 10,000 seed capital into four simultaneous micro-businesses, achieving 130% ROI. We established a parent company structure and deployed capital across: a primary fruit box business (curated packages at Rs 499), a lemonade stand and brownie sales operation, and a children's art workshop. The project taught us to prioritize execution over branding — we initially spent too much time naming ourselves 'MINK' before our mentor redirected our focus to operations.",
        report: "Challenge: Apply entrepreneurial concepts in a real-world setting by creating profitable businesses with Rs 10,000 seed capital in 3 weeks, targeting a 10x return.\n\nVenture Portfolio:\n1. Fruit Box Business — bulk-sourced fruit, curated packages at Rs 499, targeted health-conscious consumers. Primary revenue driver.\n2. F&B Micro-Ventures — Lemonade stand outside college, brownie sales at high-traffic locations.\n3. Art Workshop — Children's art sessions led by team member, combining education with revenue.\n\nKey Results: Rs 13,000 profit generated. 130% ROI on Rs 10,000 seed capital. Four operational businesses run simultaneously.\n\nKey Learning: Operations first, branding second. Spent too long naming the company before mentor Sharjeel redirected focus to execution — the most important lesson of the project.",
      },
      {
        title: "3D-Printed Product — Amazon Launch",
        description: "Idea to live Amazon listing in under 4 weeks. Sold 10 units — Rs 2,000 revenue on Rs 800 investment, 150% ROI.",
        tags: [
          { emoji: "🛒", label: "e-commerce" },
          { emoji: "🌱", label: "0→1 execution" },
          { emoji: "🚀", label: "product launch" },
        ],
        image: "/images/Ecom Project.jpg",
        summary: "A 2–3 week sprint (100+ hours, March–April 2025) where we learned 3D printing basics, selected a product, printed it, and listed it on Amazon — all from scratch. We understood the full e-commerce lifecycle: product research, pricing accounting for Amazon's charges, packaging, shipping, and listing compliance (white backgrounds, approval timelines). We also built a small Instagram page (@anveshakids) to document the journey. Sold 10 units achieving 150% ROI on a Rs 800 investment.",
        report: "Challenge: Understand both the technical and commercial aspects of launching a 3D-printed product through Amazon's seller ecosystem under tight time constraints.\n\nProcess: Learned 3D printing basics and product feasibility. Selected product based on material constraints and market demand. Created Amazon seller account and compliant listing. Built pricing framework accounting for Amazon fees, shipping, and packaging costs. Documented the journey on Instagram for personal branding.\n\nKey Results: Live Amazon product listing. 10 units sold. Rs 2,000 revenue on Rs 800 investment (150% ROI).\n\nKey Learnings: Product research before listing is non-negotiable. Amazon's hidden charges significantly affect profitability — pricing must account for all fees upfront. Image compliance (white backgrounds) directly impacts listing visibility and approval.",
      },
      {
        title: "Digital Marketing — Game Night Event",
        description: "1,500 messages, full funnel, email automation, 15 registrations. Learned what kills conversion at each stage.",
        tags: [
          { emoji: "📣", label: "GTM strategy" },
          { emoji: "🔄", label: "marketing funnel" },
          { emoji: "⚡", label: "automation" },
        ],
        image: "/images/Game Night.jpg",
        summary: "A 3-week WhatsApp marketing project (50+ hours, December 2023–January 2024) promoting a 30-person game night event. Implemented a full TOFU-MOFU-BOFU marketing funnel: sent ~1,500 WhatsApp messages at awareness stage, managed low mid-funnel conversion, and deployed targeted discounts at decision stage to drive registrations. Set up email automation for registrants — a technically challenging task completed with mentor support. Final result: 15 confirmed registrations.",
        report: "Challenge: Fill a 30-person event using only WhatsApp marketing with no existing audience — and learn the mechanics of a real marketing funnel.\n\nFunnel Execution:\nTOFU: ~1,500 WhatsApp messages sent for awareness. Low initial conversion rate observed.\nMOFU: Few customers progressed to middle stage. Identified messaging and targeting gaps.\nBOFU: Deployed timely discounts and offers in final days. Conversion rate improved significantly.\n\nAutomation: Set up email automation system to nurture registrants through confirmation and reminder sequences. Required troubleshooting and mentor collaboration to complete.\n\nResults: 15 confirmed registrations. Full funnel executed end-to-end.\n\nKey Learnings: Conversion rates die between TOFU and MOFU if messaging isn't specific enough. Discounts at BOFU can recover a slow funnel. Automation setup is harder than expected but critical for scale.",
      },
      {
        title: "Entrepreneurial Mindset Toy",
        description: "Designed a kaleidoscope as a physical metaphor for creating order from chaos. Now used across institute events.",
        tags: [
          { emoji: "🎨", label: "rapid prototyping" },
          { emoji: "🧠", label: "conceptual thinking" },
          { emoji: "🎯", label: "product design" },
        ],
        image: "/images/Legacy Project.png",
        summary: "A 2-week rapid prototyping project (50+ hours, October–November 2023) where our inaugural UG-MED cohort designed a toy embodying the entrepreneurial mindset. After exploring concepts including Russian dolls and spring toys, we selected the kaleidoscope — it perfectly symbolizes entrepreneurship: beauty and coherence emerging from chaos, just as entrepreneurs create order amid challenges. The kaleidoscope now serves as a tangible legacy used across institute events to communicate enterprise principles to future cohorts.",
        report: "Challenge: As the inaugural cohort, create a physical product that captures and communicates the essence of entrepreneurial mindset for future students.\n\nIdeation Process: Explored multiple concepts — Russian Dolls (layers of entrepreneurship), Spring Toy (resilience and bounce-back), Kaleidoscope (order from chaos). Selected kaleidoscope for its symbolic power.\n\nPrototyping: Iterative development with testing and feedback sessions. Refined design for durability, visual appeal, and ease of use. Final product represents how entrepreneurs create structure and opportunity from seemingly chaotic inputs.\n\nOutcome: Kaleidoscope adopted as a legacy object across institute events. Demonstrates how abstract concepts of entrepreneurship can be made tangible and engaging.",
      },
      {
        title: "Entrepreneurship Education Research",
        description: "Cold-called 1,000+ schools, conducted 75+ interviews with principals, published a research paper.",
        tags: [
          { emoji: "📋", label: "qualitative research" },
          { emoji: "📞", label: "cold outreach" },
          { emoji: "🔬", label: "field research" },
        ],
        image: "/images/Research Project.png",
        summary: "A multi-month research initiative (300+ hours, January–February 2024) examining the entrepreneurial education landscape in Pune's schools. Contacted 1,000+ school principals via email campaigns, cold calls, and in-person visits. Conducted 75+ in-depth interviews with principals and department heads across government, private, and international schools. Key finding: significant gap between educator enthusiasm and institutional support for entrepreneurship education. One successful principal connection led to 11 additional school referrals through relationship-based networking.",
        report: "Challenge: Understand the current state, barriers, and opportunities for entrepreneurial education in Pune's school system by engaging directly with educational leaders despite access limitations.\n\nOutreach Strategy: Email marketing automation campaign via Bravo platform to 1,000+ schools. Cold calling and in-person visits to schools without prior appointments. Referral networking from successful engagements.\n\nKey Findings: Significant disparity in entrepreneurial education across school types. Educator enthusiasm consistently outpaces institutional support. Outdated syllabi and administrative barriers are primary blockers. Relationship-building is the most effective way to gain school access — one referral led to 11 more.\n\nDeliverables: Published research paper on entrepreneurship education in Pune schools. Database of school contacts. Qualitative analysis of barriers and recommendations for systemic change.\n\nLink: https://docs.google.com/document/d/11lHDyuZJesK9lueJQ7sTWQqVj902vzVdNkX4PO8Q9q0/edit?usp=sharing",
      },
    ],
  },
  {
    emoji: "🌍",
    heading: "Travel & Immersion Projects",
    projects: [
      {
        title: "Solo Trip — Pondicherry",
        description: "Traveled solo with no accommodation budget. Found a host through networking, then built a 3-month marketing plan for her social enterprise as a way to give back.",
        tags: [
          { emoji: "🤝", label: "networking" },
          { emoji: "📣", label: "marketing strategy" },
          { emoji: "💚", label: "pro bono execution" },
        ],
        image: "/images/Solo Pondi.jpg",
        summary: "My first solo trip — to Pondicherry — with a personal challenge: find accommodation without spending money. This forced genuine connection with people. Through my network, I met Chitra Shah, who warmly hosted me. She runs Satya Special School for children with special needs, and as a way to give back, I created a 3-month marketing plan for her new business making artificial limbs and support products. Beyond the work, I explored Pondicherry's French-style streets, Auroville, and met travelers whose perspectives shaped how I see the world. This trip taught me self-reliance, adaptability, and the compounding returns of giving before taking.",
      },
      {
        title: "Rural Immersion — Wardha",
        description: "7 days living and working in a village in Wardha — farming, talking to the Sarpanch, sitting with the school teacher.",
        tags: [
          { emoji: "🔬", label: "field research" },
          { emoji: "👥", label: "community engagement" },
          { emoji: "🇮🇳", label: "rural India" },
        ],
        image: "/images/wardha.jpg",
        summary: "Spent 7 days living and working in a village in Wardha for a rural immersion project. Worked on a farm for a full day, stayed overnight to experience village life up close, and spoke with residents about their daily lives, challenges, and traditions. Met the local school teacher and the Sarpanch (village head) — gaining ground-level understanding of how rural communities are governed, educated, and sustained. Came back with lasting perspective on rural India that no classroom could provide, and shared learnings with the local activist driving change in the community.",
      },
    ],
  },
]

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
        <motion.div
          className="relative z-10 w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl bg-[#111] border border-[#222] p-8"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-[#f0f0f0]/50 hover:text-[#f0f0f0] text-2xl font-light transition-colors"
          >
            ×
          </button>

          <h2 className="text-2xl md:text-3xl font-bold text-[#f0f0f0] mb-4 pr-8">
            {project.title}
          </h2>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, i) => (
              <span key={i} className="text-xs px-3 py-1 rounded-full bg-[#0f1f3d] text-[#3B82F6]">
                {tag.emoji} {tag.label}
              </span>
            ))}
          </div>

          <div className="w-full h-px bg-[#222] mb-6" />

          {project.summary && (
            <div className="mb-6">
              <p className="text-xs uppercase tracking-widest text-[#3B82F6] font-medium mb-3">
                📋 Summary
              </p>
              <p className="text-[#f0f0f0]/80 text-sm leading-relaxed whitespace-pre-line">
                {project.summary}
              </p>
            </div>
          )}

          {project.report && (
            <div>
              <p className="text-xs uppercase tracking-widest text-[#3B82F6] font-medium mb-3">
                📄 Project Report
              </p>
              <p className="text-[#f0f0f0]/70 text-sm leading-relaxed whitespace-pre-line">
                {project.report}
              </p>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isHovered, setIsHovered] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <motion.div
        className="hover-target relative group overflow-hidden rounded-lg bg-[#111111] border border-[#222222] flex flex-col cursor-pointer"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.4, delay: index * 0.05 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setModalOpen(true)}
        style={{
          boxShadow: isHovered ? "0 0 0 1px #3B82F6" : "none",
        }}
      >
        <motion.div
          className="absolute top-0 left-0 right-0 h-[2px] bg-[#3B82F6]"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        <div className="relative w-full h-[180px] overflow-hidden flex-shrink-0">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            animate={{
              opacity: isHovered ? 0.55 : 0.2,
              scale: isHovered ? 1.05 : 1,
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        </div>

        <div className="relative z-10 p-6 flex flex-col gap-3 flex-grow">
          <div>
            <motion.h3
              className="text-lg font-semibold text-[#f0f0f0] mb-2 flex items-center gap-2"
              animate={{ scale: isHovered ? 1.02 : 1 }}
              transition={{ duration: 0.3 }}
            >
              {project.title}
              <motion.span
                className="text-[#3B82F6]"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
                transition={{ duration: 0.3 }}
              >
                →
              </motion.span>
            </motion.h3>
            <p className="text-[#f0f0f0]/60 text-sm leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mt-auto pt-2">
            {project.tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="text-xs px-3 py-1 rounded-full bg-[#0f1f3d] text-[#3B82F6]"
              >
                {tag.emoji} {tag.label}
              </span>
            ))}
          </div>

          <motion.p
            className="text-xs text-[#3B82F6] mt-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.2 }}
          >
            View details →
          </motion.p>
        </div>
      </motion.div>

      {modalOpen && (
        <ProjectModal project={project} onClose={() => setModalOpen(false)} />
      )}
    </>
  )
}

function WorkSubsectionComponent({ subsection, index }: { subsection: WorkSubsection; index: number }) {
  const [expanded, setExpanded] = useState(false)
  const hasMore = subsection.projects.length > 2

  return (
    <div className={index > 0 ? "mt-20" : ""}>
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-2xl font-bold text-[#f0f0f0] mb-3">
          {subsection.emoji} {subsection.heading}
        </h3>
        <div className="w-10 h-1 bg-[#3B82F6]" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {subsection.projects.map((project, projectIndex) => {
          let visibilityClass = ""
          if (!expanded) {
            if (projectIndex >= 3) visibilityClass = "hidden"
            else if (projectIndex === 2) visibilityClass = "hidden md:block"
          }

          return (
            <div key={project.title} className={visibilityClass}>
              <ProjectCard project={project} index={projectIndex} />
            </div>
          )
        })}
      </div>

      {hasMore && (
        <button
          type="button"
          onClick={() => setExpanded((prev) => !prev)}
          className="hover-target mt-6 rounded-full border border-[#333] px-5 py-2 text-sm text-[#f0f0f0]/70 transition-colors duration-300 hover:border-[#3B82F6] hover:text-[#3B82F6]"
        >
          {expanded ? "Show less ↑" : "See more →"}
        </button>
      )}
    </div>
  )
}

export function WorkSection() {
  return (
    <section id="work" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#f0f0f0] mb-4">
            Work Experience
          </h2>
          <div className="w-12 h-1 bg-[#3B82F6]" />
        </motion.div>

        {workSubsections.map((subsection, index) => (
          <WorkSubsectionComponent key={subsection.heading} subsection={subsection} index={index} />
        ))}
      </div>
    </section>
  )
}