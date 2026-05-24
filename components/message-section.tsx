"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export function MessageSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault()
    setStatus("sending")

    try {
      const response = await fetch("https://formspree.io/f/xzdwaboe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      })

      if (response.ok) {
        setStatus("success")
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-start">

          {/* Left column */}
          <motion.div
            className="md:w-2/5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#f0f0f0] mb-4">
              📬 Send Me a Message
            </h2>
            <div className="w-10 h-1 bg-[#3B82F6] mb-6" />
            <p className="text-[#f0f0f0]/50 text-sm leading-relaxed">
              Fastest response via WhatsApp — but this works too.
            </p>
          </motion.div>

          {/* Right column — form */}
          <motion.div
            className="md:w-3/5 w-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {status === "success" ? (
              <motion.div
                className="rounded-2xl border border-[#3B82F6]/30 bg-[#0f1f3d] p-8 text-center"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold text-[#f0f0f0] mb-2">Message sent!</h3>
                <p className="text-[#f0f0f0]/60 text-sm">I'll get back to you soon. Thanks for reaching out.</p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-xs text-[#3B82F6] hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <div className="rounded-2xl border border-[#222] bg-[#111] p-6 flex flex-col gap-4">

                {/* Name + Email row */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 flex flex-col gap-1">
                    <label className="text-xs text-[#f0f0f0]/40 uppercase tracking-wider">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Bruce Wayne"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-[#0a0a0a] border border-[#333] rounded-lg px-4 py-2.5 text-sm text-[#f0f0f0] placeholder-[#f0f0f0]/20 focus:outline-none focus:border-[#3B82F6] transition-colors"
                    />
                  </div>
                  <div className="flex-1 flex flex-col gap-1">
                    <label className="text-xs text-[#f0f0f0]/40 uppercase tracking-wider">Your Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Bruce_Wayne@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-[#0a0a0a] border border-[#333] rounded-lg px-4 py-2.5 text-sm text-[#f0f0f0] placeholder-[#f0f0f0]/20 focus:outline-none focus:border-[#3B82F6] transition-colors"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="flex flex-col gap-1">
                  <label className="text-xs text-[#f0f0f0]/40 uppercase tracking-wider">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Let's work together"
                    value={formData.subject}
                    onChange={handleChange}
                    className="bg-[#0a0a0a] border border-[#333] rounded-lg px-4 py-2.5 text-sm text-[#f0f0f0] placeholder-[#f0f0f0]/20 focus:outline-none focus:border-[#3B82F6] transition-colors"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1">
                  <label className="text-xs text-[#f0f0f0]/40 uppercase tracking-wider">Message</label>
                  <textarea
                    name="message"
                    placeholder="Hi Piyush, I'd love to discuss..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="bg-[#0a0a0a] border border-[#333] rounded-lg px-4 py-2.5 text-sm text-[#f0f0f0] placeholder-[#f0f0f0]/20 focus:outline-none focus:border-[#3B82F6] transition-colors resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  onClick={handleSubmit}
                  disabled={status === "sending"}
                  className="w-full bg-[#3B82F6] hover:bg-[#2563eb] disabled:opacity-50 text-white font-semibold py-3 rounded-lg text-sm transition-colors duration-200"
                >
                  {status === "sending" ? "Sending... ⏳" : "Send Message 🚀"}
                </button>

                {status === "error" && (
                  <p className="text-red-400 text-xs text-center">
                    Something went wrong. Try emailing directly instead.
                  </p>
                )}

                <p className="text-[#f0f0f0]/20 text-xs text-center">
                  Powered by Formspree — no data is stored on this site.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}