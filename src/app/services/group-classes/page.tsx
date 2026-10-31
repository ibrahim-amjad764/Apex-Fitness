"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { FAQSection } from "@/components/ui/accordion"
import { CTASection } from "@/components/sections/cta"
import { Users, Check, Clock, Music, Zap, Heart, ArrowRight, Calendar, Flame } from "lucide-react"
import type { FAQItem } from "@/types"

console.log("[app/services/group-classes] - Group Classes page loaded")

const groupClassesFAQ: FAQItem[] = [
  {
    id: "1",
    question: "Do I need to sign up for classes in advance?",
    answer: "While walk-ins are welcome, we recommend booking classes through our app to secure your spot. Popular classes can fill up quickly, especially during peak hours. Members can book up to 7 days in advance.",
    category: "booking",
  },
  {
    id: "2",
    question: "What should I bring to a group class?",
    answer: "Wear comfortable workout clothes and athletic shoes. Bring a water bottle and towel - we provide filtered water stations throughout the facility. For yoga classes, mats are provided, but you're welcome to bring your own.",
    category: "preparation",
  },
  {
    id: "3",
    question: "Are classes suitable for beginners?",
    answer: "Absolutely! All our classes are designed for all fitness levels. Instructors provide modifications for beginners and advanced options for experienced participants. We recommend arriving 10 minutes early if it's your first class.",
    category: "skill-level",
  },
  {
    id: "4",
    question: "How many people are in each class?",
    answer: "Class sizes vary by type and studio capacity. Small group classes cap at 12-15 participants for personalized attention, while larger classes like cycling can accommodate up to 30. We maintain optimal instructor-to-participant ratios.",
    category: "class-size",
  },
]

const classTypes = [
  {
    icon: Zap,
    title: "HIIT",
    description: "High-intensity interval training for maximum calorie burn",
    duration: "45 min",
    intensity: "High",
  },
  {
    icon: Music,
    title: "Zumba",
    description: "Fun dance fitness with infectious Latin rhythms",
    duration: "60 min",
    intensity: "Medium",
  },
  {
    icon: Heart,
    title: "Yoga Flow",
    description: "Mindful movement combining strength and flexibility",
    duration: "60 min",
    intensity: "Low-Medium",
  },
  {
    icon: Flame,
    title: "Spin/Cycling",
    description: "Indoor cycling with motivating music and coaching",
    duration: "45 min",
    intensity: "High",
  },
  {
    icon: Users,
    title: "Strength Training",
    description: "Group resistance training for muscle building",
    duration: "50 min",
    intensity: "Medium-High",
  },
  {
    icon: Heart,
    title: "Pilates",
    description: "Core-focused exercises for stability and posture",
    duration: "55 min",
    intensity: "Medium",
  },
]

const benefits = [
  {
    icon: Users,
    title: "Community Energy",
    description: "Feed off the collective energy and motivation of like-minded fitness enthusiasts.",
  },
  {
    icon: Clock,
    title: "Flexible Schedule",
    description: "With 100+ weekly classes, find sessions that fit your schedule perfectly.",
  },
  {
    icon: Heart,
    title: "Expert Instruction",
    description: "Learn from certified instructors who make every class engaging and effective.",
  },
  {
    icon: Zap,
    title: "Variety & Fun",
    description: "Never get bored with diverse class types that keep workouts exciting.",
  },
]

export default function GroupClassesPage() {
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
                <Users className="w-4 h-4" />
                Group Fitness Classes
              </motion.div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Fitness That{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 animate-gradient">
                  Feels Like Fun
                </span>
              </h1>
              <p className="text-xl text-slate-400 mb-8 leading-relaxed">
                Join high-energy classes led by expert instructors. From HIIT to yoga, 
                find your perfect fit in our supportive community atmosphere. 
                With 100+ weekly classes, there's always something new to try.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="default"
                    rightIcon={<ArrowRight className="w-5 h-5" />}
                    className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white border-0 shadow-lg shadow-orange-500/30"
                  >
                    View Schedule
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outline"
                    className="border-white/20 bg-white/5 text-white hover:bg-white/10 backdrop-blur-sm"
                  >
                    Try a Free Class
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
                      100+
                    </motion.div>
                    <div className="text-2xl font-light">Weekly Classes</div>
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
              Why Group <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Fitness</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Experience the power of community and expert-led workouts
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

      {/* Class Types Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Class Types</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Diverse workouts to keep you motivated and challenged
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {classTypes.map((cls, index) => (
              <motion.div
                key={cls.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -12, scale: 1.02 }}
                className="relative bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 hover:border-orange-500/50 transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-orange-500/20 card-hover-lift"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="mb-6 inline-flex p-4 rounded-2xl bg-gradient-to-br from-orange-500/20 to-red-500/20 text-orange-500"
                >
                  <cls.icon className="w-8 h-8" />
                </motion.div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {cls.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  {cls.description}
                </p>

                <div className="flex items-center gap-4 pt-6 border-t border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <Clock className="w-4 h-4 text-orange-500" />
                    {cls.duration}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <Zap className="w-4 h-4 text-orange-500" />
                    {cls.intensity}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-24 bg-white dark:bg-slate-950">
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
                Every group class membership includes full access to our premium facilities and expert instruction.
              </p>
              <ul className="space-y-4">
                {[
                  "Unlimited access to 100+ weekly classes",
                  "State-of-the-art studios with premium equipment",
                  "Expert instructors with specialized certifications",
                  "All fitness levels welcome with modifications provided",
                  "Complimentary towel service and filtered water",
                  "Mobile app for easy booking and tracking",
                  "Community events and fitness challenges",
                  "Access to locker rooms with premium amenities",
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
                  <Calendar className="w-6 h-6" />
                  <h3 className="text-2xl font-bold">Weekly Schedule</h3>
                </div>
                <div className="space-y-4">
                  {[
                    { day: "Monday", classes: "18 classes available" },
                    { day: "Tuesday", classes: "20 classes available" },
                    { day: "Wednesday", classes: "18 classes available" },
                    { day: "Thursday", classes: "22 classes available" },
                    { day: "Friday", classes: "16 classes available" },
                  ].map((day, index) => (
                    <motion.div
                      key={day.day}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center justify-between py-3 border-b border-white/20 last:border-0"
                    >
                      <span className="font-semibold">{day.day}</span>
                      <span className="text-white/80">{day.classes}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Simple <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Pricing</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Pay per class or get unlimited access with our membership
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -12 }}
              className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 hover:border-orange-500/50 shadow-lg hover:shadow-2xl hover:shadow-orange-500/20 card-hover-lift"
            >
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Drop-In Class</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">Perfect for trying out classes</p>
              <div className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
                $29
                <span className="text-lg text-slate-500">/class</span>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-4 rounded-xl font-semibold bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg shadow-orange-500/30 transition-all duration-300"
              >
                Book a Class
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -12 }}
              className="bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl p-8 text-white shadow-2xl shadow-orange-500/30 scale-105 card-hover-lift"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-white text-orange-600 text-sm font-bold rounded-full shadow-lg">
                Best Value
              </div>
              <h3 className="text-2xl font-bold mb-2">Unlimited Classes</h3>
              <p className="text-white/80 mb-6">Access all classes, anytime</p>
              <div className="text-4xl font-bold mb-6">
                $89
                <span className="text-lg text-white/80">/month</span>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-4 rounded-xl font-semibold bg-white text-orange-600 hover:bg-white/90 shadow-lg transition-all duration-300"
              >
                Get Unlimited Access
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection title="Group Classes FAQs" items={groupClassesFAQ} />

      {/* CTA Section */}
      <CTASection />
    </>
  )
}
