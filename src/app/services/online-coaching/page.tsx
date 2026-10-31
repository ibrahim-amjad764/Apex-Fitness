"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { FAQSection } from "@/components/ui/accordion"
import { CTASection } from "@/components/sections/cta"
import { Laptop, Check, Clock, Video, Smartphone, MessageSquare, ArrowRight, Globe, Wifi } from "lucide-react"
import type { FAQItem } from "@/types"

console.log("[app/services/online-coaching] - Online Coaching page loaded")

const onlineCoachingFAQ: FAQItem[] = [
  {
    id: "1",
    question: "How does online coaching work?",
    answer: "You'll receive a personalized workout program through our app, complete with video demonstrations. Schedule live virtual sessions with your trainer, track your progress with our app, and communicate 24/7 through messaging. It's like having a personal trainer in your pocket.",
    category: "how-it-works",
  },
  {
    id: "2",
    question: "What equipment do I need at home?",
    answer: "This depends on your goals and available space. We can design programs with minimal equipment (bodyweight, resistance bands) or full home gym setups. Your trainer will assess what you have and create a program that works for your situation.",
    category: "equipment",
  },
  {
    id: "3",
    question: "Can I switch between online and in-person training?",
    answer: "Yes! Many of our clients use a hybrid approach. You can train online when convenient and visit the gym for in-person sessions. We offer flexible packages that accommodate both training styles.",
    category: "flexibility",
  },
  {
    id: "4",
    question: "How do I track my progress online?",
    answer: "Our comprehensive app allows you to log workouts, track weights, record measurements, upload progress photos, and monitor nutrition. Your trainer reviews this data weekly to adjust your program and keep you on track.",
    category: "tracking",
  },
]

const features = [
  {
    icon: Video,
    title: "Live Virtual Sessions",
    description: "Real-time video training with your personal trainer from anywhere.",
  },
  {
    icon: Smartphone,
    title: "App-Based Tracking",
    description: "Track workouts, nutrition, and progress all in one place.",
  },
  {
    icon: MessageSquare,
    title: "24/7 Messaging",
    description: "Get support and answers whenever you need them.",
  },
  {
    icon: Globe,
    title: "Train Anywhere",
    description: "Access your program from home, travel, or anywhere life takes you.",
  },
]

const benefits = [
  {
    icon: Clock,
    title: "Flexible Schedule",
    description: "Work out on your time, no gym hours to worry about.",
  },
  {
    icon: Wifi,
    title: "No Commute",
    description: "Save time and train in the comfort of your own space.",
  },
  {
    icon: Video,
    title: "Video Library",
    description: "Access hundreds of exercise demonstrations and tutorials.",
  },
  {
    icon: Globe,
    title: "Global Access",
    description: "Train with our experts no matter where you live.",
  },
]

const packages = [
  {
    name: "Digital Only",
    price: "$99",
    period: "month",
    features: [
      "Custom workout program",
      "App access & tracking",
      "Exercise video library",
      "Monthly check-ins",
    ],
  },
  {
    name: "Hybrid",
    price: "$149",
    period: "month",
    features: [
      "Everything in Digital Only",
      "4 live virtual sessions/month",
      "Weekly check-ins",
      "Nutrition guidance",
      "Priority messaging",
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: "$249",
    period: "month",
    features: [
      "Everything in Hybrid",
      "8 live virtual sessions/month",
      "Daily accountability",
      "Meal planning",
      "Unlimited messaging",
    ],
  },
]

export default function OnlineCoachingPage() {
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
                <Laptop className="w-4 h-4" />
                Online Coaching
              </motion.div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Train{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 animate-gradient">
                  Anywhere
                </span>
              </h1>
              <p className="text-xl text-slate-400 mb-8 leading-relaxed">
                Train anywhere with virtual sessions and personalized programs delivered to your device. 
                Our comprehensive online coaching brings expert guidance to your home, office, or anywhere life takes you.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="default"
                    rightIcon={<ArrowRight className="w-5 h-5" />}
                    className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white border-0 shadow-lg shadow-orange-500/30"
                  >
                    Start Online Training
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outline"
                    className="border-white/20 bg-white/5 text-white hover:bg-white/10 backdrop-blur-sm"
                  >
                    View Demo
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
                      $149
                    </motion.div>
                    <div className="text-2xl font-light">starting/month</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Online <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Features</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Everything you need for effective remote training
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
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
                  <feature.icon className="w-6 h-6" />
                </motion.div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
                Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Online Coaching</span>
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                Experience the same quality training as in-person sessions, with the flexibility 
                to fit your busy lifestyle. Our online coaching program delivers results without compromise.
              </p>
              <ul className="space-y-4">
                {[
                  "Train from home, office, or while traveling",
                  "Flexible scheduling around your commitments",
                  "Same expert trainers as our in-person programs",
                  "Comprehensive app for tracking and communication",
                  "Video demonstrations for every exercise",
                  "Regular progress reviews and program adjustments",
                  "Access to exclusive online community",
                  "Cost-effective alternative to in-person training",
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
              className="grid grid-cols-2 gap-6"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg card-hover-lift"
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex p-3 rounded-xl bg-gradient-to-br from-orange-500/20 to-red-500/20 text-orange-500 mb-4"
                  >
                    <benefit.icon className="w-5 h-5" />
                  </motion.div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{benefit.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              What's <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Included</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Complete online training experience with full support
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Custom Workout Program",
                description: "Personalized routines updated weekly based on your progress",
              },
              {
                title: "Video Exercise Library",
                description: "HD demonstrations for every exercise in your program",
              },
              {
                title: "Live Virtual Sessions",
                description: "Real-time coaching via video with your personal trainer",
              },
              {
                title: "Progress Tracking App",
                description: "Log workouts, track measurements, and monitor nutrition",
              },
              {
                title: "Weekly Video Calls",
                description: "Review progress, adjust programs, and set new goals",
              },
              {
                title: "24/7 Messaging Support",
                description: "Get answers and support whenever you need it",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -12 }}
                className="p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 border border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-2xl hover:shadow-orange-500/20 card-hover-lift"
              >
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-24 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Online <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Packages</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Choose the level of virtual support that fits your needs
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
                <div className={`text-4xl font-bold mb-6 ${pkg.popular ? "text-white" : "text-slate-900 dark:text-white"}`}>
                  {pkg.price}
                  <span className={`text-lg ${pkg.popular ? "text-white/80" : "text-slate-500"}`}>/{pkg.period}</span>
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
      <FAQSection title="Online Coaching FAQs" items={onlineCoachingFAQ} />

      {/* CTA Section */}
      <CTASection />
    </>
  )
}
