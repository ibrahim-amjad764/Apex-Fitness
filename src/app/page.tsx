"use client"

import { HeroSection } from "@/components/sections/hero"
import { FeaturesSection } from "@/components/sections/features"
import { TestimonialsSection } from "@/components/sections/testimonials"
import { CTASection } from "@/components/sections/cta"
import { TrainerCard } from "@/components/ui/cards"
import { FAQSection } from "@/components/ui/accordion"
import { useAnimatedCounter } from "@/hooks/useAnimatedCounter"
import { motion } from "framer-motion"
import { Dumbbell, Users, Trophy, Clock } from "lucide-react"
import type { Trainer, FAQItem } from "@/types"

console.log("[app/page] - Home page loaded")

// Featured trainers data (subset for homepage)
const featuredTrainers: Trainer[] = [
  {
    id: "1",
    name: "Marcus Johnson",
    role: "Head Strength Coach",
    image: "/Marcus Johnson.png",
    bio: "Former Olympic weightlifter with 15 years of coaching experience. Specializes in powerlifting and athletic performance.",
    specialties: ["Powerlifting", "Strength Training", "Olympic Lifting"],
    experience: 15,
    socialLinks: {
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
    certifications: ["NSCA-CSCS", "USA Weightlifting Level 2", "CrossFit L3"],
  },
  {
    id: "2",
    name: "Sarah Williams",
    role: "Yoga & Pilates Instructor",
    image: "/Sarah Williams.png",
    bio: "Certified yoga instructor with a background in physical therapy. Helps clients improve flexibility and mind-body connection.",
    specialties: ["Yoga", "Pilates", "Mobility Training"],
    experience: 10,
    socialLinks: {
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
    },
    certifications: ["RYT-500", "Pilates Method Alliance", "FRCms"],
  },
  {
    id: "3",
    name: "David Chen",
    role: "HIIT & Cardio Specialist",
    image: "/David Chen.png",
    bio: "High-energy trainer who specializes in metabolic conditioning and fat loss. Former competitive sprinter.",
    specialties: ["HIIT", "Cardio", "Fat Loss"],
    experience: 8,
    socialLinks: {
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
    certifications: ["ACE-CPT", "NASM-PES", "TRX Level 2"],
  },
  {
    id: "4",
    name: "Emily Rodriguez",
    role: "Nutrition & Wellness Coach",
    image: "/Emily Rodriguez.png",
    bio: "Registered dietitian and certified personal trainer. Specializes in holistic nutrition and lifestyle transformation.",
    specialties: ["Nutrition", "Weight Loss", "Wellness Coaching"],
    experience: 12,
    socialLinks: {
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
    certifications: ["RD", "NASM-CPT", "Precision Nutrition L2"],
  },
]

// FAQ data
const faqItems: FAQItem[] = [
  {
    id: "1",
    question: "What are your operating hours?",
    answer: "Our gym is open 24/7, 365 days a year for members. Front desk staff is available from 5:00 AM to 11:00 PM daily. Personal training sessions can be scheduled during staffed hours.",
    category: "general",
  },
  {
    id: "2",
    question: "Do you offer trial memberships?",
    answer: "Yes! We offer a complimentary 3-day trial pass for first-time visitors. This includes full access to all gym facilities, group classes, and a free fitness assessment with one of our trainers.",
    category: "membership",
  },
  {
    id: "3",
    question: "What should I bring for my first workout?",
    answer: "Please bring a water bottle, comfortable workout clothes, athletic shoes, and a towel. We provide lockers, showers, and basic amenities. Don't forget to bring your ID for your first visit!",
    category: "general",
  },
  {
    id: "4",
    question: "Can I freeze my membership?",
    answer: "Absolutely. You can freeze your membership for up to 3 months per year with 7 days notice. This is perfect for vacations, work assignments, or other life events. Contact our membership team for details.",
    category: "membership",
  },
  {
    id: "5",
    question: "Do you have locker rooms and showers?",
    answer: "Yes, we have premium locker rooms with secure lockers, rainfall showers, saunas, and steam rooms. We also provide complimentary towel service and premium toiletries.",
    category: "facilities",
  },
]

// Stats data for animated counters
const stats = [
  { label: "Active Members", value: 10000, suffix: "+", icon: Users },
  { label: "Expert Trainers", value: 50, suffix: "+", icon: Dumbbell },
  { label: "Classes Weekly", value: 200, suffix: "+", icon: Clock },
  { label: "Years Experience", value: 25, suffix: "", icon: Trophy },
]

/**
 * Home Page Component
 * Combines all homepage sections: Hero, Features, Trainers preview, Stats, Testimonials, FAQ, CTA
 */
export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <section className="py-16 bg-orange-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <StatItem
                key={stat.label}
                label={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                icon={stat.icon}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <FeaturesSection />

      {/* Featured Trainers Section */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 bg-orange-500/10 text-orange-500 text-sm font-semibold rounded-full mb-4"
            >
              Expert Team
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6"
            >
              Meet Our <span className="text-orange-500">Elite Trainers</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-600 dark:text-slate-400"
            >
              Our certified professionals are dedicated to helping you achieve your fitness goals.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredTrainers.map((trainer, index) => (
              <TrainerCard key={trainer.id} trainer={trainer} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* FAQ Section */}
      <FAQSection items={faqItems} />

      {/* CTA Section */}
      <CTASection />
    </>
  )
}

/**
 * Animated Stat Item Component
 * Uses useAnimatedCounter hook for smooth number animation
 */
function StatItem({
  label,
  value,
  suffix,
  icon: Icon,
  index,
}: {
  label: string
  value: number
  suffix: string
  icon: React.ElementType
  index: number
}) {
  const { count, elementRef } = useAnimatedCounter({
    end: value,
    duration: 2000,
    delay: index * 200,
  })

  return (
    <motion.div
      ref={elementRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="text-center"
    >
      <Icon className="w-8 h-8 text-white/60 mx-auto mb-4" />
      <div className="text-4xl md:text-5xl font-bold text-white mb-2">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-white/80">{label}</div>
    </motion.div>
  )
}
