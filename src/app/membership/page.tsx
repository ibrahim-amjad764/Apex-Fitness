"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { MembershipCard } from "@/components/ui/cards"
import { FAQSection } from "@/components/ui/accordion"
import { CTASection } from "@/components/sections/cta"
import { Check, Sparkles } from "lucide-react"
import type { MembershipPlan, FAQItem } from "@/types"

console.log("[app/membership/page] - Membership page loaded")

// Membership plans data
export const membershipPlans: MembershipPlan[] = [
  {
    id: "basic",
    name: "Basic",
    description: "Perfect for beginners starting their fitness journey",
    monthlyPrice: 29,
    yearlyPrice: 290,
    features: [
      "Access to gym floor",
      "Locker room access",
      "2 group classes per week",
      "Basic app features",
      "Online workout library",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    description: "Our most popular plan for committed fitness enthusiasts",
    monthlyPrice: 59,
    yearlyPrice: 590,
    features: [
      "24/7 unlimited access",
      "Unlimited group classes",
      "1 personal training session/month",
      "Nutrition consultation",
      "Guest passes (2/month)",
      "Premium app features",
      "Sauna & steam room",
    ],
    popular: true,
  },
  {
    id: "elite",
    name: "Elite",
    description: "The ultimate fitness experience with exclusive perks",
    monthlyPrice: 99,
    yearlyPrice: 990,
    features: [
      "Everything in Pro, plus:",
      "4 personal training sessions/month",
      "Monthly massage therapy",
      "Cryotherapy sessions",
      "Priority class booking",
      "Unlimited guest passes",
      "Premium locker service",
      "Quarterly fitness assessments",
    ],
  },
]

// Compare features data
const compareFeatures = [
  { name: "Gym Access", basic: true, pro: true, elite: true },
  { name: "Group Classes", basic: "2/week", pro: "Unlimited", elite: "Unlimited" },
  { name: "Personal Training", basic: false, pro: "1/mo", elite: "4/mo" },
  { name: "Nutrition Coaching", basic: false, pro: true, elite: true },
  { name: "Sauna & Steam", basic: false, pro: true, elite: true },
  { name: "Massage Therapy", basic: false, pro: false, elite: true },
  { name: "Cryotherapy", basic: false, pro: false, elite: true },
  { name: "Guest Passes", basic: false, pro: "2/mo", elite: "Unlimited" },
  { name: "Premium App", basic: false, pro: true, elite: true },
  { name: "Priority Booking", basic: false, pro: false, elite: true },
]

// FAQ items for Membership page
const membershipFAQ: FAQItem[] = [
  {
    id: "1",
    question: "What's the difference between monthly and yearly plans?",
    answer: "Yearly plans offer significant savings (up to 2 months free) compared to paying monthly. Both plans include the same features and benefits. You can switch between monthly and yearly at any time.",
    category: "billing",
  },
  {
    id: "2",
    question: "Is there a joining fee?",
    answer: "We occasionally run promotions with waived joining fees. Standard joining fee is $49, which includes your fitness assessment, key fob, and welcome kit. Check our current promotions!",
    category: "billing",
  },
  {
    id: "3",
    question: "Can I upgrade or downgrade my plan?",
    answer: "Yes! You can change your plan at any time. Upgrades take effect immediately, while downgrades take effect at the start of your next billing cycle.",
    category: "plans",
  },
  {
    id: "4",
    question: "What's your cancellation policy?",
    answer: "We require 30 days notice for cancellations. You can cancel anytime without penalties after your first 3 months. Your membership remains active until the end of your billing period.",
    category: "cancellation",
  },
]

/**
 * Membership Page Component
 * Includes: Pricing toggle, Plan cards, Feature comparison table, FAQ
 */
export default function MembershipPage() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-slate-950 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-red-500/10 to-orange-500/10 bg-[length:400%_400%]"
          />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-slate-950/50 to-transparent" />
          <motion.div
            animate={{
              y: [0, -25, 0],
              x: [0, 12, 0],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md text-orange-400 text-sm font-semibold rounded-full mb-6 border border-orange-500/20"
            >
              {/* <Sparkles className="w-4 h-4" /> */}
              Flexible Plans
            </motion.span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Choose Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 animate-gradient">
                Plan
              </span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              No hidden fees, no long-term contracts. Just straightforward pricing 
              that fits your lifestyle and goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Toggle & Cards */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Billing Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-4 mb-16"
          >
            <span className={`text-lg font-medium transition-colors ${!isYearly ? "text-slate-900 dark:text-white" : "text-slate-500"}`}>
              Monthly
            </span>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsYearly(!isYearly)}
              className="relative w-16 h-8 bg-slate-200 dark:bg-slate-800 rounded-full p-1 transition-colors shadow-inner"
              aria-label="Toggle yearly billing"
            >
              <motion.div
                animate={{ x: isYearly ? 32 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="w-6 h-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-full shadow-lg"
              />
            </motion.button>
            <span className={`text-lg font-medium transition-colors ${isYearly ? "text-slate-900 dark:text-white" : "text-slate-500"}`}>
              Yearly
            </span>
            {isYearly && (
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="px-3 py-1 bg-green-500/20 text-green-600 dark:text-green-400 text-sm font-semibold rounded-full"
              >
                Save up to 2 months
              </motion.span>
            )}
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {membershipPlans.map((plan, index) => (
              <MembershipCard
                key={plan.id}
                plan={plan}
                isYearly={isYearly}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Compare Plans
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              See what&apos;s included in each membership tier
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-x-auto rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900"
          >
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800">
                  <th className="text-left py-4 px-4 font-semibold text-slate-900 dark:text-white">
                    Features
                  </th>
                  <th className="text-center py-4 px-4 font-semibold text-slate-900 dark:text-white">
                    Basic
                  </th>
                  <th className="text-center py-4 px-4 font-semibold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                    Pro
                  </th>
                  <th className="text-center py-4 px-4 font-semibold text-slate-900 dark:text-white">
                    Elite
                  </th>
                </tr>
              </thead>
              <tbody>
                {compareFeatures.map((feature, index) => (
                  <motion.tr
                    key={feature.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="border-b border-slate-100 dark:border-slate-800/50 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                  >
                    <td className="py-4 px-4 text-slate-600 dark:text-slate-400 font-medium">
                      {feature.name}
                    </td>
                    <td className="text-center py-4 px-4">
                      {renderFeatureValue(feature.basic)}
                    </td>
                    <td className="text-center py-4 px-4 bg-orange-500/5">
                      {renderFeatureValue(feature.pro)}
                    </td>
                    <td className="text-center py-4 px-4">
                      {renderFeatureValue(feature.elite)}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection title="Membership FAQs" items={membershipFAQ} />

      {/* CTA Section */}
      <CTASection />
    </>
  )
}

/**
 * Helper function to render feature values in comparison table
 */
function renderFeatureValue(value: boolean | string) {
  if (typeof value === "boolean") {
    return value ? (
      <Check className="w-5 h-5 text-green-500 mx-auto" />
    ) : (
      <span className="text-slate-300 dark:text-slate-700">-</span>
    )
  }
  return <span className="text-slate-600 dark:text-slate-400">{value}</span>
}
