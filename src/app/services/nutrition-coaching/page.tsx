"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { FAQSection } from "@/components/ui/accordion"
import { CTASection } from "@/components/sections/cta"
import { Apple, Check, Clock, Target, Scale, BookOpen, ArrowRight, Utensils, TrendingUp } from "lucide-react"
import type { FAQItem } from "@/types"

console.log("[app/services/nutrition-coaching] - Nutrition Coaching page loaded")

const nutritionFAQ: FAQItem[] = [
  {
    id: "1",
    question: "How does the nutrition coaching program work?",
    answer: "We start with a comprehensive assessment of your current eating habits, goals, and lifestyle. Your nutrition coach will create a personalized meal plan, provide macro calculations, and offer weekly check-ins to track progress and make adjustments as needed.",
    category: "process",
  },
  {
    id: "2",
    question: "Will I have to give up my favorite foods?",
    answer: "Not at all! Our philosophy is sustainable nutrition, not restrictive dieting. We teach you how to incorporate your favorite foods in moderation while optimizing your nutrition for your goals. It's about balance, not deprivation.",
    category: "lifestyle",
  },
  {
    id: "3",
    question: "Do you provide meal prep guidance?",
    answer: "Yes! We offer comprehensive meal prep tutorials, batch cooking tips, and time-saving strategies. Our recipe library includes hundreds of easy-to-prepare meals that align with your nutritional goals.",
    category: "meal-prep",
  },
  {
    id: "4",
    question: "Can nutrition coaching help with specific dietary needs?",
    answer: "Absolutely. Our nutrition coaches are experienced with various dietary approaches including vegetarian, vegan, gluten-free, keto, paleo, and medical nutrition therapy. We'll work within your specific requirements.",
    category: "special-diets",
  },
]

const services = [
  {
    icon: Target,
    title: "Personalized Meal Plans",
    description: "Custom meal plans designed around your preferences, schedule, and goals.",
  },
  {
    icon: Scale,
    title: "Macro Tracking",
    description: "Learn to track and optimize your macros for optimal performance.",
  },
  {
    icon: BookOpen,
    title: "Recipe Library",
    description: "Access hundreds of healthy, delicious recipes updated weekly.",
  },
  {
    icon: Utensils,
    title: "Supplement Guidance",
    description: "Expert recommendations on supplements that actually work for you.",
  },
]

const benefits = [
  {
    icon: TrendingUp,
    title: "Sustainable Results",
    description: "Build healthy habits that last a lifetime, not just quick fixes.",
  },
  {
    icon: Clock,
    title: "Time-Saving Strategies",
    description: "Learn efficient meal prep and planning techniques for busy lifestyles.",
  },
  {
    icon: Apple,
    title: "Expert Knowledge",
    description: "Work with certified nutritionists with years of clinical experience.",
  },
  {
    icon: Target,
    title: "Goal-Oriented",
    description: "Plans tailored to weight loss, muscle gain, or performance goals.",
  },
]

const packages = [
  {
    name: "Basic",
    price: "$99",
    period: "month",
    features: [
      "Personalized meal plan",
      "Macro calculations",
      "Recipe library access",
      "Monthly check-ins",
    ],
  },
  {
    name: "Premium",
    price: "$149",
    period: "month",
    features: [
      "Everything in Basic",
      "Weekly check-ins",
      "Meal prep guidance",
      "Supplement recommendations",
      "24/7 messaging support",
    ],
    popular: true,
  },
  {
    name: "Elite",
    price: "$199",
    period: "month",
    features: [
      "Everything in Premium",
      "Daily accountability",
      "Grocery shopping guidance",
      "Dining out strategies",
      "Family meal planning",
    ],
  },
]

export default function NutritionCoachingPage() {
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
                <Apple className="w-4 h-4" />
                Nutrition Coaching
              </motion.div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Fuel Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 animate-gradient">
                  Success
                </span>
              </h1>
              <p className="text-xl text-slate-400 mb-8 leading-relaxed">
                Expert nutrition guidance to fuel your fitness journey and achieve lasting results. 
                Our certified nutritionists create personalized plans that fit your lifestyle 
                and help you reach your goals faster.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="default"
                    rightIcon={<ArrowRight className="w-5 h-5" />}
                    className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white border-0 shadow-lg shadow-orange-500/30"
                  >
                    Start Your Plan
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outline"
                    className="border-white/20 bg-white/5 text-white hover:bg-white/10 backdrop-blur-sm"
                  >
                    Free Consultation
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
                      $99
                    </motion.div>
                    <div className="text-2xl font-light">starting/month</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Services</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Comprehensive nutrition support for every aspect of your journey
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
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
                  <service.icon className="w-6 h-6" />
                </motion.div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">{service.description}</p>
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
                Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Choose Us</span>
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                Our nutrition coaching goes beyond meal plans - we teach you sustainable habits 
                that transform your relationship with food.
              </p>
              <ul className="space-y-4">
                {[
                  "Evidence-based nutrition science",
                  "Personalized to your lifestyle and preferences",
                  "Focus on sustainable habits, not quick fixes",
                  "Flexible approach that adapts to your progress",
                  "Support for special dietary requirements",
                  "Education on reading labels and making smart choices",
                  "Strategies for dining out and social situations",
                  "Family-friendly meal planning options",
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
              Nutrition <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Packages</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Choose the level of support that fits your needs
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
      <FAQSection title="Nutrition Coaching FAQs" items={nutritionFAQ} />

      {/* CTA Section */}
      <CTASection />
    </>
  )
}
