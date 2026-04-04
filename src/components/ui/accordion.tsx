"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"
import type { FAQItem } from "@/types"

console.log("[components/ui/accordion] - Accordion component loaded")

interface AccordionProps {
  items: FAQItem[]
  defaultOpen?: string
  className?: string
}

/**
 * FAQ Accordion Component
 * Expandable/collapsible items with smooth animations
 * Single item open at a time (auto-close others)
 */
export function Accordion({ items, defaultOpen, className }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(defaultOpen || null)

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <div className={cn("space-y-4", className)}>
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className={cn(
            "rounded-2xl border transition-all duration-300 overflow-hidden",
            openId === item.id
              ? "border-orange-500/50 bg-orange-500/5 dark:bg-orange-500/10"
              : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-slate-300 dark:hover:border-slate-700"
          )}
        >
          {/* Question Header */}
          <button
            onClick={() => toggleItem(item.id)}
            className="w-full flex items-center justify-between p-6 text-left"
            aria-expanded={openId === item.id}
          >
            <span className="font-semibold text-slate-900 dark:text-white pr-4">
              {item.question}
            </span>
            <motion.div
              animate={{ rotate: openId === item.id ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className={cn(
                "flex-shrink-0 p-2 rounded-lg transition-colors",
                openId === item.id
                  ? "bg-orange-500 text-white"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-500"
              )}
            >
              <ChevronDown className="w-5 h-5" />
            </motion.div>
          </button>

          {/* Answer Content */}
          <AnimatePresence initial={false}>
            {openId === item.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
              >
                <div className="px-6 pb-6">
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  )
}

/**
 * Simple FAQ Section Component
 * Pre-styled FAQ section with accordion
 */
interface FAQSectionProps {
  title?: string
  subtitle?: string
  items: FAQItem[]
  className?: string
}

export function FAQSection({
  title = "Frequently Asked Questions",
  subtitle = "Everything you need to know about Apex Fitness",
  items,
  className,
}: FAQSectionProps) {
  return (
    <section className={cn("py-24 bg-slate-50 dark:bg-slate-950", className)}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4"
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 dark:text-slate-400"
          >
            {subtitle}
          </motion.p>
        </div>

        {/* FAQ Accordion */}
        <Accordion items={items} />
      </div>
    </section>
  )
}
