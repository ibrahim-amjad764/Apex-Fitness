"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { FAQSection } from "@/components/ui/accordion"
import { CTASection } from "@/components/sections/cta"
import { Sparkles, Check, Clock, Heart, Thermometer, Droplets, ArrowRight, Wind, Activity } from "lucide-react"
import type { FAQItem } from "@/types"

console.log("[app/services/recovery-wellness] - Recovery & Wellness page loaded")

const recoveryFAQ: FAQItem[] = [
  {
    id: "1",
    question: "What is cryotherapy and how does it work?",
    answer: "Cryotherapy involves exposing your body to extremely cold temperatures for 2-3 minutes. This triggers a natural healing response, reducing inflammation, accelerating muscle recovery, and boosting metabolism. It's safe, quick, and highly effective.",
    category: "cryotherapy",
  },
  {
    id: "2",
    question: "Do I need a referral for physical therapy?",
    answer: "No referral is needed for our wellness physical therapy services. However, if you have a specific injury requiring medical treatment, we recommend consulting with your healthcare provider first. Our physical therapists are licensed and experienced.",
    category: "physical-therapy",
  },
  {
    id: "3",
    question: "How often should I use recovery services?",
    answer: "Frequency depends on your training intensity and goals. Most active members use recovery services 1-2 times per week. We can create a personalized recovery schedule based on your workout routine and recovery needs.",
    category: "frequency",
  },
  {
    id: "4",
    question: "Are your massage therapists certified?",
    answer: "Yes, all our massage therapists are licensed and certified with specialized training in sports massage, deep tissue, and therapeutic techniques. They have experience working with athletes and fitness enthusiasts at all levels.",
    category: "certifications",
  },
]

const services = [
  {
    icon: Heart,
    title: "Sports Massage",
    description: "Therapeutic massage to relieve muscle tension and improve circulation.",
  },
  {
    icon: Thermometer,
    title: "Cryotherapy",
    description: "Whole-body cold therapy for rapid recovery and inflammation reduction.",
  },
  {
    icon: Wind,
    title: "Infrared Sauna",
    description: "Detoxifying heat therapy with infrared technology for deep relaxation.",
  },
  {
    icon: Activity,
    title: "Stretching Sessions",
    description: "Assisted stretching to improve flexibility and prevent injury.",
  },
]

const benefits = [
  {
    icon: Sparkles,
    title: "Faster Recovery",
    description: "Reduce muscle soreness and get back to training faster.",
  },
  {
    icon: Heart,
    title: "Injury Prevention",
    description: "Proactive care to keep you training at your best.",
  },
  {
    icon: Droplets,
    title: "Stress Relief",
    description: "Relax your mind and body with therapeutic treatments.",
  },
  {
    icon: Activity,
    title: "Improved Performance",
    description: "Optimize your body's recovery for better results.",
  },
]

const packages = [
  {
    name: "Recovery Session",
    price: "$59",
    period: "session",
    features: [
      "Choice of one recovery service",
      "30-60 minute session",
      "Professional guidance",
      "Complimentary amenities",
    ],
  },
  {
    name: "Recovery Package",
    price: "$199",
    period: "month",
    features: [
      "4 recovery sessions/month",
      "Mix of any recovery services",
      "Priority booking",
      "Progress tracking",
      "Wellness consultation",
    ],
    popular: true,
  },
  {
    name: "Unlimited Recovery",
    price: "$349",
    period: "month",
    features: [
      "Unlimited recovery sessions",
      "All recovery services included",
      "Physical therapy assessment",
      "Custom recovery plan",
      "VIP booking priority",
    ],
  },
]

export default function RecoveryWellnessPage() {
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
                <Sparkles className="w-4 h-4" />
                Recovery & Wellness
              </motion.div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Recover{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 animate-gradient">
                  Faster
                </span>
              </h1>
              <p className="text-xl text-slate-400 mb-8 leading-relaxed">
                Comprehensive recovery services including massage, cryotherapy, and physical therapy. 
                Our wellness programs help you recover faster, prevent injury, and perform at your peak.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="default"
                    rightIcon={<ArrowRight className="w-5 h-5" />}
                    className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white border-0 shadow-lg shadow-orange-500/30"
                  >
                    Book Recovery Session
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outline"
                    className="border-white/20 bg-white/5 text-white hover:bg-white/10 backdrop-blur-sm"
                  >
                    Learn More
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
                      $59
                    </motion.div>
                    <div className="text-2xl font-light">per session</div>
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
              Recovery <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Services</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Professional treatments to optimize your recovery
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
                Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Recovery Matters</span>
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                Recovery is just as important as training. Our comprehensive wellness services 
                help your body repair, rebuild, and come back stronger after every workout.
              </p>
              <ul className="space-y-4">
                {[
                  "Reduce muscle soreness and inflammation",
                  "Prevent injuries before they happen",
                  "Accelerate healing after intense training",
                  "Improve flexibility and range of motion",
                  "Enhance overall athletic performance",
                  "Reduce stress and promote mental wellness",
                  "Better sleep quality and energy levels",
                  "Compliment your fitness routine perfectly",
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
              Service <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Details</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Learn more about each recovery treatment
            </p>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                title: "Sports Massage Therapy",
                description: "Deep tissue and sports massage techniques to target specific muscle groups, release tension, and improve blood flow. Perfect for post-workout recovery and injury prevention.",
                duration: "30-90 minutes",
              },
              {
                title: "Cryotherapy Sessions",
                description: "Whole-body cryotherapy exposes you to temperatures as low as -200°F for 2-3 minutes. This triggers a powerful anti-inflammatory response and boosts endorphins.",
                duration: "3 minutes",
              },
              {
                title: "Infrared Sauna Access",
                description: "Our infrared saunas use light to create heat, penetrating deeper into your body than traditional saunas. Great for detoxification, relaxation, and pain relief.",
                duration: "15-45 minutes",
              },
              {
                title: "Stretching Sessions",
                description: "One-on-one assisted stretching with our experts to improve flexibility, correct imbalances, and enhance your range of motion for better performance.",
                duration: "30-60 minutes",
              },
              {
                title: "Physical Therapy",
                description: "Licensed physical therapists provide assessment, treatment, and rehabilitation for injuries. We help you recover safely and return to training stronger.",
                duration: "45-60 minutes",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 8 }}
                className="p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 border border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-2xl hover:shadow-orange-500/20 card-hover-lift"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-orange-500">
                    <Clock className="w-4 h-4" />
                    {item.duration}
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>
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
              Recovery <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Packages</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Choose the recovery plan that fits your training routine
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
      <FAQSection title="Recovery & Wellness FAQs" items={recoveryFAQ} />

      {/* CTA Section */}
      <CTASection />
    </>
  )
}
