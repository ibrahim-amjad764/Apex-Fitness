"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useAnimatedCounter } from "@/hooks/useAnimatedCounter"
import { FAQSection } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Target, Eye, Heart, Award, Users, Clock, TrendingUp } from "lucide-react"
import type { FAQItem } from "@/types"

console.log("[app/about/page] - About page loaded")

// FAQ items for About page
const aboutFAQ: FAQItem[] = [
  {
    id: "1",
    question: "How did Apex Fitness get started?",
    answer: "Apex Fitness was founded in 1999 by former professional athletes who wanted to create a gym that truly focused on member success. What started as a small facility has grown into a premier fitness destination.",
    category: "history",
  },
  {
    id: "2",
    question: "What makes Apex Fitness different?",
    answer: "We combine cutting-edge equipment, expert coaching, and a supportive community to create an environment where everyone can thrive. Our holistic approach addresses fitness, nutrition, and mental wellness.",
    category: "philosophy",
  },
  {
    id: "3",
    question: "Do you support local communities?",
    answer: "Absolutely! We regularly partner with local schools, charities, and community organizations. Our annual charity events have raised over $500,000 for health and wellness initiatives.",
    category: "community",
  },
]

// Stats for animated counters
const stats = [
  { label: "Years of Excellence", value: 25, suffix: "+" },
  { label: "Lives Transformed", value: 50000, suffix: "+" },
  { label: "Certified Trainers", value: 100, suffix: "+" },
  { label: "Sq. Ft. Facility", value: 50000, suffix: "" },
]

/**
 * About Page Component
 * Includes: Mission, Vision, Story, Values, Stats, FAQ
 */
export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-slate-950 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-500/10 to-transparent" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 bg-orange-500/20 text-orange-400 text-sm font-semibold rounded-full mb-6">
                Our Story
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Building a <span className="text-orange-500">Healthier</span> World
              </h1>
              <p className="text-xl text-slate-400 mb-8 leading-relaxed">
                For over 25 years, Apex Fitness has been at the forefront of the fitness industry, 
                helping thousands of people transform their lives through exercise, nutrition, and community support.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="default" rightIcon={<ArrowRight className="w-5 h-5" />}>
                  Join Our Community
                </Button>
                <Button variant="outline" className="border-white/30 text-black hover:bg-white/10">
                  Watch Our Story
                </Button>
              </div>
            </motion.div>

            {/* Image/Visual */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative h-[500px] rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-600" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-9xl font-bold mb-4">25+</div>
                    <div className="text-2xl">Years of Excellence</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
            >
              <div className="inline-flex p-4 rounded-2xl bg-orange-500/10 text-orange-500 mb-6">
                <Target className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Our Mission
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                To empower every individual to achieve their full potential through fitness, 
                providing world-class facilities, expert guidance, and an unwavering commitment 
                to their health and wellness journey. We believe fitness is for everyone, 
                regardless of age, ability, or background.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
            >
              <div className="inline-flex p-4 rounded-2xl bg-orange-500/10 text-orange-500 mb-6">
                <Eye className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Our Vision
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                To become the world most trusted fitness partner, creating a global community 
                where health and wellness are accessible to all. We envision a future where 
                every person has the tools, knowledge, and support to live their healthiest life.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <StatCard key={stat.label} stat={stat} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Our Core <span className="text-orange-500">Values</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              The principles that guide everything we do at Apex Fitness
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Heart, title: "Passion", description: "We love what we do and bring energy to every interaction." },
              { icon: Award, title: "Excellence", description: "We strive for the highest standards in everything." },
              { icon: Users, title: "Community", description: "We believe we're stronger together than alone." },
              { icon: TrendingUp, title: "Growth", description: "We continuously learn, adapt, and improve." },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
              >
                <div className="inline-flex p-4 rounded-2xl bg-orange-500/10 text-orange-500 mb-4">
                  <value.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Milestones that shaped who we are today
            </p>
          </div>

          <div className="space-y-12">
            {[
              { year: "1999", title: "The Beginning", description: "Apex Fitness opens its first location with just 500 sq ft and 2 trainers." },
              { year: "2005", title: "Expansion", description: "We expand to 3 locations and introduce our signature group fitness classes." },
              { year: "2012", title: "Innovation", description: "Launch of our digital platform and virtual training programs." },
              { year: "2019", title: "Global Reach", description: "Expanded to 15 locations across 5 states with 50,000+ active members." },
              { year: "2024", title: "Future Forward", description: "Continuing to innovate with AI-powered training and wellness programs." },
            ].map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-8 items-start"
              >
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="text-2xl font-bold text-orange-500">{milestone.year}</span>
                </div>
                <div className="flex-1 pb-8 border-l-2 border-slate-200 dark:border-slate-800 pl-8 relative">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-orange-500 rounded-full" />
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection title="Learn More About Us" items={aboutFAQ} />
    </>
  )
}

/**
 * Stat Card Component with Animated Counter
 */
function StatCard({ stat, index }: { stat: { label: string; value: number; suffix: string }; index: number }) {
  const { count, elementRef } = useAnimatedCounter({
    end: stat.value,
    duration: 2000,
    delay: index * 200,
  })

  return (
    <motion.div
      ref={elementRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl font-bold text-white mb-2">
        {count.toLocaleString()}{stat.suffix}
      </div>
      <div className="text-slate-400">{stat.label}</div>
    </motion.div>
  )
}
