"use client"

import { motion } from "framer-motion"
import { TrainerCard } from "@/components/ui/cards"
import { FAQSection } from "@/components/ui/accordion"
import { CTASection } from "@/components/sections/cta"
import type { Trainer, FAQItem } from "@/types"

console.log("[app/trainers/page] - Trainers page loaded")

// All trainers data
const trainers: Trainer[] = [
  {
    id: "1",
    name: "Marcus Johnson",
    role: "Head Strength Coach",
    image: "/Marcus Johnson.png",
    bio: "Former Olympic weightlifter with 15 years of coaching experience. Specializes in powerlifting and athletic performance.",
    specialties: ["Powerlifting", "Strength Training", "Olympic Lifting", "Athletic Performance"],
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
    specialties: ["Yoga", "Pilates", "Mobility Training", "Mindfulness"],
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
    specialties: ["HIIT", "Cardio", "Fat Loss", "Metabolic Conditioning"],
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
    specialties: ["Nutrition", "Weight Loss", "Wellness Coaching", "Meal Planning"],
    experience: 12,
    socialLinks: {
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
    certifications: ["RD", "NASM-CPT", "Precision Nutrition L2"],
  },
  {
    id: "5",
    name: "Michael Torres",
    role: "Bodybuilding Coach",
    image: "/images/trainer-5.jpg",
    bio: "Competitive bodybuilder and physique coach. Expert in muscle hypertrophy and competition prep.",
    specialties: ["Bodybuilding", "Physique Training", "Contest Prep", "Muscle Hypertrophy"],
    experience: 11,
    socialLinks: {
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
    certifications: ["IFBB Pro", "NASM-CPT", "ISSA-SNS"],
  },
  {
    id: "6",
    name: "Lisa Park",
    role: "Group Fitness Director",
    image: "/images/trainer-6.jpg",
    bio: "Energetic instructor specializing in dance fitness and group motivation. Makes every class feel like a party.",
    specialties: ["Dance Fitness", "Zumba", "Group Training", "Choreography"],
    experience: 9,
    socialLinks: {
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
    },
    certifications: ["AFAA-GFI", "Zumba B1", "NASM-CPT"],
  },
  {
    id: "7",
    name: "Robert Kim",
    role: "Sports Performance Coach",
    image: "/images/trainer-7.jpg",
    bio: "Former professional athlete turned coach. Specializes in speed, agility, and sport-specific training.",
    specialties: ["Speed Training", "Agility", "Sports Performance", "Youth Training"],
    experience: 14,
    socialLinks: {
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
    certifications: ["NSCA-CSCS", "USAW-L1SP", "NASM-PES"],
  },
  {
    id: "8",
    name: "Amanda Foster",
    role: "Senior Pilates Instructor",
    image: "/images/trainer-8.jpg",
    bio: "Classical Pilates instructor with expertise in rehabilitation and pre/post-natal fitness.",
    specialties: ["Classical Pilates", "Rehabilitation", "Pre/Post Natal", "Core Strength"],
    experience: 13,
    socialLinks: {
      instagram: "https://instagram.com",
    },
    certifications: ["Polestar Pilates", "PMA-CPT", "ACE-CPT"],
  },
]

// FAQ items for Trainers page
const trainersFAQ: FAQItem[] = [
  {
    id: "1",
    question: "How do I choose the right trainer?",
    answer: "Consider your goals, preferred training style, and schedule. We offer complimentary consultations where you can meet trainers and find the best fit. You can also switch trainers if needed.",
    category: "general",
  },
  {
    id: "2",
    question: "What certifications do your trainers hold?",
    answer: "All our trainers hold nationally recognized certifications (NASM, ACE, NSCA, etc.) and maintain continuing education. Many have specialized credentials in areas like nutrition, rehabilitation, and sports performance.",
    category: "qualifications",
  },
  {
    id: "3",
    question: "Can I work with multiple trainers?",
    answer: "Yes! Many members work with different trainers for various goals. For example, you might see a strength coach twice a week and a yoga instructor once a week.",
    category: "training",
  },
  {
    id: "4",
    question: "How are training sessions scheduled?",
    answer: "Sessions can be booked through our app or website with your trainer's available time slots. Most trainers offer morning, afternoon, and evening sessions to accommodate different schedules.",
    category: "booking",
  },
]

/**
 * Trainers Page Component
 * Includes: Hero, Trainers grid, CTA, FAQ
 */
export default function TrainersPage() {
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
              Expert Team
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Meet Our <span className="text-orange-500">Elite Trainers</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              Our certified professionals bring decades of combined experience to help you 
              achieve your fitness goals. Every trainer is dedicated to your success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Trainers Grid */}
      <section className="py-24 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trainers.map((trainer, index) => (
              <TrainerCard key={trainer.id} trainer={trainer} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
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
                Join Our <span className="text-orange-500">Team</span>
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                Are you a certified fitness professional passionate about helping others? 
                We're always looking for talented trainers to join our growing team.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Competitive compensation and benefits",
                  "Continuing education support",
                  "State-of-the-art facilities",
                  "Flexible scheduling options",
                  "Growth and advancement opportunities",
                ].map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                    <span className="w-2 h-2 bg-orange-500 rounded-full" />
                    {benefit}
                  </li>
                ))}
              </ul>
              <button className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-colors">
                Apply Now
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-[400px] rounded-3xl overflow-hidden bg-gradient-to-br from-orange-500 to-red-600"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl font-bold mb-4">100+</div>
                  <div className="text-2xl">Certified Trainers</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection title="Trainer FAQs" items={trainersFAQ} />

      {/* CTA Section */}
      <CTASection />
    </>
  )
}
