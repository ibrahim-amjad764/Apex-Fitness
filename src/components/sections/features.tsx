"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import {
  Dumbbell,
  Users,
  Heart,
  Target,
  Zap,
  Shield,
} from "lucide-react"

console.log("[components/sections/features] - Features section loaded")

const features = [
  {
    icon: Dumbbell,
    title: "State-of-the-Art Equipment",
    description: "Access the latest fitness technology and premium equipment from top brands like Technogym and Life Fitness.",
  },
  {
    icon: Users,
    title: "Expert Personal Trainers",
    description: "Certified professionals with specialized expertise to guide your fitness journey with personalized attention.",
  },
  {
    icon: Heart,
    title: "Holistic Wellness Approach",
    description: "Comprehensive programs combining fitness, nutrition, and mental wellness for total body transformation.",
  },
  {
    icon: Target,
    title: "Goal-Oriented Programs",
    description: "Customized workout plans designed around your specific goals, whether it's weight loss, muscle gain, or endurance.",
  },
  {
    icon: Zap,
    title: "High-Energy Group Classes",
    description: "From HIIT to yoga, our diverse class schedule keeps you motivated with energetic instructors and great music.",
  },
  {
    icon: Shield,
    title: "Safe & Clean Environment",
    description: "24/7 sanitized facilities with advanced air filtration systems for your health and safety.",
  },
]

/**
 * Features Section Component
 * Displays key features with icon cards and animations
 */
export function FeaturesSection() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-orange-500/10 text-orange-500 text-sm font-semibold rounded-full mb-4"
          >
            Why Choose Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6"
          >
            Everything You Need to{" "}
            <span className="text-orange-500">Succeed</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 dark:text-slate-400"
          >
            Apex Fitness provides a complete fitness ecosystem designed to help you 
            achieve your goals faster and more effectively.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 hover:border-orange-500/50 transition-all duration-300"
            >
              {/* Icon */}
              <div className="mb-6 inline-flex p-4 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 text-white shadow-lg shadow-orange-500/25 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
