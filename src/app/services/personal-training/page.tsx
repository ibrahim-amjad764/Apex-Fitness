"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { FAQSection } from "@/components/ui/accordion"
import { CTASection } from "@/components/sections/cta"
import { Dumbbell, Check, Clock, Target, Trophy, Heart, ArrowRight, Calendar, Star } from "lucide-react"
import type { FAQItem } from "@/types"

console.log("[app/services/personal-training] - Personal Training page loaded")

const personalTrainingFAQ: FAQItem[] = [
  {
    id: "1",
    question: "What should I expect in my first session?",
    answer: "Your first session includes a comprehensive fitness assessment, goal setting, movement screening, and a customized workout plan. We'll discuss your health history, current fitness level, and create a roadmap for your success.",
    category: "getting-started",
  },
  {
    id: "2",
    question: "How often should I train with a personal trainer?",
    answer: "Most clients train 2-3 times per week for optimal results. However, we offer flexible scheduling to fit your lifestyle and budget. Your trainer will recommend a frequency based on your goals and availability.",
    category: "frequency",
  },
  {
    id: "3",
    question: "Can I change trainers if needed?",
    answer: "Absolutely! We want you to have the best possible experience. If you feel another trainer would be a better fit, we'll happily accommodate the switch at no additional cost.",
    category: "trainer-matching",
  },
  {
    id: "4",
    question: "Do you offer specialized training programs?",
    answer: "Yes! Our trainers specialize in various areas including weight loss, muscle building, athletic performance, post-rehabilitation, senior fitness, and more. We'll match you with a trainer who specializes in your specific goals.",
    category: "specialization",
  },
]

const benefits = [
  {
    icon: Target,
    title: "Customized Programming",
    description: "Every workout is tailored specifically to your goals, fitness level, and preferences. No cookie-cutter programs.",
  },
  {
    icon: Trophy,
    title: "Expert Guidance",
    description: "Certified trainers with years of experience to ensure proper form, prevent injury, and maximize results.",
  },
  {
    icon: Heart,
    title: "Accountability & Motivation",
    description: "Stay on track with regular check-ins, progress tracking, and the support you need to reach your goals.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Book sessions at times that work for you, with early morning, evening, and weekend options available.",
  },
]

const packages = [
  {
    name: "Starter",
    sessions: "4 sessions/month",
    price: "$299",
    features: ["Custom workout plan", "Progress tracking", "Nutrition guidance", "Email support"],
  },
  {
    name: "Standard",
    sessions: "8 sessions/month",
    price: "$549",
    features: ["Everything in Starter", "Weekly check-ins", "Advanced programming", "Priority scheduling"],
    popular: true,
  },
  {
    name: "Premium",
    sessions: "12 sessions/month",
    price: "$749",
    features: ["Everything in Standard", "Daily messaging", "Meal planning", "Supplement guidance"],
  },
]

export default function PersonalTrainingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-slate-950 relative overflow-hidden">
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
              y: [0, -30, 0],
              x: [0, 15, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md rounded-full text-orange-400 text-sm font-semibold border border-orange-500/20 mb-6"
              >
                <Dumbbell className="w-4 h-4" />
                Personal Training
              </motion.div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                One-on-One{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 animate-gradient">
                  Excellence
                </span>
              </h1>
              <p className="text-xl text-slate-400 mb-8 leading-relaxed">
                Work directly with certified personal trainers who will design a program specifically for you. 
                Whether you're just starting out or looking to break through plateaus, our expert trainers are here to guide you.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="default"
                    rightIcon={<ArrowRight className="w-5 h-5" />}
                    className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white border-0 shadow-lg shadow-orange-500/30"
                  >
                    Book a Session
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outline"
                    className="border-white/20 bg-white/5 text-white hover:bg-white/10 backdrop-blur-sm"
                  >
                    Meet Our Trainers
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
              className="relative"
            >
              <motion.div
                animate={{
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative h-[500px] rounded-3xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-red-500 to-orange-600 animate-gradient" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                      className="text-8xl font-bold mb-4"
                    >
                      $79
                    </motion.div>
                    <div className="text-2xl font-light">per session</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Personal Training</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Experience the difference that expert guidance and personalized attention can make
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -12, scale: 1.02 }}
                className="text-center p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 border border-slate-200 dark:border-slate-800 shadow-lg card-hover-lift"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-orange-500/20 to-red-500/20 text-orange-500 mb-4"
                >
                  <benefit.icon className="w-6 h-6" />
                </motion.div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                What's <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Included</span>
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                Every personal training package includes comprehensive support to ensure your success.
              </p>
              <ul className="space-y-4">
                {[
                  "Custom workout programs designed specifically for you",
                  "Progress tracking with detailed performance analytics",
                  "Nutritional guidance and meal planning support",
                  "Flexible scheduling to fit your busy lifestyle",
                  "Goal assessment and milestone tracking",
                  "Form correction and technique refinement",
                  "Unlimited email support from your trainer",
                  "Access to our exclusive trainer app",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-3 text-slate-600 dark:text-slate-400"
                  >
                    <Check className="w-5 h-5 text-orange-500 flex-shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-3xl p-8 text-white">
                <div className="flex items-center gap-3 mb-6">
                  <Star className="w-6 h-6" />
                  <h3 className="text-2xl font-bold">Success Story</h3>
                </div>
                <p className="text-lg mb-6 leading-relaxed">
                  "Working with my personal trainer completely transformed my approach to fitness. 
                  In just 6 months, I lost 30 pounds and gained strength I never thought possible. 
                  The personalized attention made all the difference."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center font-bold">
                    JM
                  </div>
                  <div>
                    <div className="font-semibold">Jessica M.</div>
                    <div className="text-white/80 text-sm">Lost 30 lbs in 6 months</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Training <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Packages</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Choose the package that fits your goals and schedule
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -12 }}
                className={`relative rounded-2xl p-8 transition-all duration-500 ${
                  pkg.popular
                    ? "bg-gradient-to-br from-orange-500 to-red-600 text-white shadow-2xl shadow-orange-500/30 scale-105 card-hover-lift"
                    : "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-orange-500/50 shadow-lg hover:shadow-2xl hover:shadow-orange-500/20"
                }`}
              >
                {pkg.popular && (
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                    className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-white text-orange-600 text-sm font-bold rounded-full shadow-lg"
                  >
                    Most Popular
                  </motion.div>
                )}

                <h3 className={`text-xl font-bold mb-2 ${pkg.popular ? "text-white" : "text-slate-900 dark:text-white"}`}>
                  {pkg.name}
                </h3>
                <p className={`text-sm mb-4 ${pkg.popular ? "text-white/80" : "text-slate-600 dark:text-slate-400"}`}>
                  {pkg.sessions}
                </p>
                <div className={`text-4xl font-bold mb-6 ${pkg.popular ? "text-white" : "text-slate-900 dark:text-white"}`}>
                  {pkg.price}
                  <span className={`text-lg ${pkg.popular ? "text-white/80" : "text-slate-500"}`}>/month</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className={`flex items-center gap-3 ${pkg.popular ? "text-white/90" : "text-slate-600 dark:text-slate-400"}`}>
                      <Check className={`w-5 h-5 flex-shrink-0 ${pkg.popular ? "text-white" : "text-orange-500"}`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
                    pkg.popular
                      ? "bg-white text-orange-600 hover:bg-white/90 shadow-lg"
                      : "bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg shadow-orange-500/30"
                  }`}
                >
                  Get Started
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection title="Personal Training FAQs" items={personalTrainingFAQ} />

      {/* CTA Section */}
      <CTASection />
    </>
  )
}
