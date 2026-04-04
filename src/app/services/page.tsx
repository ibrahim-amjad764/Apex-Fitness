"use client"

import { motion } from "framer-motion"
import { ServiceCard } from "@/components/ui/cards"
import { BMICalculator } from "@/components/ui/bmi-calculator"
import { FAQSection } from "@/components/ui/accordion"
import { CTASection } from "@/components/sections/cta"
import type { Service, FAQItem } from "@/types"

console.log("[app/services/page] - Services page loaded")

// Services data
const services: Service[] = [
  {
    id: "personal-training",
    title: "Personal Training",
    description: "One-on-one sessions with certified trainers tailored to your specific goals and fitness level.",
    icon: "💪",
    features: [
      "Custom workout programs",
      "Progress tracking & analysis",
      "Nutritional guidance",
      "Flexible scheduling",
      "Goal assessment sessions",
    ],
    price: "$79",
    duration: "session",
  },
  {
    id: "group-classes",
    title: "Group Fitness Classes",
    description: "High-energy classes led by expert instructors. From HIIT to yoga, find your perfect fit.",
    icon: "👥",
    features: [
      "100+ weekly classes",
      "All fitness levels welcome",
      "Variety of class types",
      "State-of-the-art studios",
      "Community atmosphere",
    ],
    price: "$29",
    duration: "class",
  },
  {
    id: "nutrition",
    title: "Nutrition Coaching",
    description: "Expert nutrition guidance to fuel your fitness journey and achieve lasting results.",
    icon: "🥗",
    features: [
      "Personalized meal plans",
      "Macro tracking support",
      "Supplement guidance",
      "Weekly check-ins",
      "Recipe libraries",
    ],
    price: "$99",
    duration: "month",
  },
  {
    id: "online-coaching",
    title: "Online Coaching",
    description: "Train anywhere with virtual sessions and personalized programs delivered to your device.",
    icon: "💻",
    features: [
      "Video workout library",
      "Live virtual sessions",
      "App-based tracking",
      "24/7 messaging support",
      "Weekly video calls",
    ],
    price: "$149",
    duration: "month",
  },
  {
    id: "recovery",
    title: "Recovery & Wellness",
    description: "Comprehensive recovery services including massage, cryotherapy, and physical therapy.",
    icon: "🧘",
    features: [
      "Sports massage therapy",
      "Cryotherapy sessions",
      "Infrared sauna access",
      "Stretching sessions",
      "Physical therapy",
    ],
    price: "$59",
    duration: "session",
  },
  {
    id: "corporate",
    title: "Corporate Wellness",
    description: "Customized wellness programs for businesses looking to improve employee health and productivity.",
    icon: "🏢",
    features: [
      "On-site fitness classes",
      "Health screenings",
      "Wellness workshops",
      "Team challenges",
      "Custom programs",
    ],
    price: "Custom",
    duration: "program",
  },
]

// FAQ items for Services page
const servicesFAQ: FAQItem[] = [
  {
    id: "1",
    question: "How do I book a personal training session?",
    answer: "You can book personal training sessions through our app, website, or by speaking with our front desk staff. We recommend booking at least 24 hours in advance to secure your preferred time slot.",
    category: "booking",
  },
  {
    id: "2",
    question: "Do I need experience for group classes?",
    answer: "Not at all! Our classes are designed for all fitness levels. Instructors provide modifications for beginners and advanced options for experienced participants. Just show up ready to move!",
    category: "classes",
  },
  {
    id: "3",
    question: "What's included in nutrition coaching?",
    answer: "Our nutrition coaching includes a comprehensive assessment, personalized meal planning, macro calculations, supplement recommendations, weekly check-ins, and ongoing support through our app.",
    category: "nutrition",
  },
  {
    id: "4",
    question: "Can I combine multiple services?",
    answer: "Absolutely! Many members combine personal training with group classes and nutrition coaching for optimal results. We offer bundled packages that provide significant savings.",
    category: "packages",
  },
]

/**
 * Services Page Component
 * Includes: Service cards grid, BMI Calculator, Class schedule teaser, FAQ
 */
export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-500/10 to-transparent" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 bg-orange-500/20 text-orange-400 text-sm font-semibold rounded-full mb-6">
              What We Offer
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Services Designed for <span className="text-orange-500">Your Success</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              From personal training to nutrition coaching, we offer everything you need to 
              reach your fitness goals. Choose the services that fit your lifestyle.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* BMI Calculator Section */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                Know Your <span className="text-orange-500">Numbers</span>
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                Understanding your Body Mass Index (BMI) is the first step toward a healthier you. 
                Use our calculator to get insights, then let our experts help you build a plan.
              </p>
              <ul className="space-y-4">
                {[
                  "Quick and accurate calculation",
                  "Personalized health insights",
                  "Connect with nutrition experts",
                  "Track your progress over time",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                    <span className="w-6 h-6 bg-orange-500/20 text-orange-500 rounded-full flex items-center justify-center text-sm font-bold">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <BMICalculator />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection title="Service FAQs" items={servicesFAQ} />

      {/* CTA Section */}
      <CTASection />
    </>
  )
}
