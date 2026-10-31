"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { FAQSection } from "@/components/ui/accordion"
import { CTASection } from "@/components/sections/cta"
import { Building2, Check, Clock, Users, TrendingUp, Heart, ArrowRight, Briefcase, Award } from "lucide-react"
import type { FAQItem } from "@/types"

console.log("[app/services/corporate-wellness] - Corporate Wellness page loaded")

const corporateFAQ: FAQItem[] = [
  {
    id: "1",
    question: "How do you customize programs for different companies?",
    answer: "We conduct a thorough assessment of your company's needs, employee demographics, available space, and budget. Based on this, we design a tailored wellness program that aligns with your corporate culture and objectives.",
    category: "customization",
  },
  {
    id: "2",
    question: "What size companies do you work with?",
    answer: "We work with companies of all sizes, from startups with 10 employees to large corporations with thousands. Our programs are scalable and can be delivered on-site at your office or at our facilities.",
    category: "company-size",
  },
  {
    id: "3",
    question: "Can you measure the ROI of wellness programs?",
    answer: "Yes! We provide comprehensive analytics and reporting on participation rates, health improvements, productivity metrics, and healthcare cost savings. Many clients see significant ROI within the first year.",
    category: "roi",
  },
  {
    id: "4",
    question: "Do you offer virtual corporate wellness programs?",
    answer: "Absolutely. We have robust virtual options including live-streamed classes, wellness webinars, digital challenges, and app-based tracking. Perfect for remote teams or hybrid work environments.",
    category: "virtual",
  },
]

const services = [
  {
    icon: Users,
    title: "On-Site Fitness Classes",
    description: "Bring the gym to your office with convenient on-site classes.",
  },
  {
    icon: Heart,
    title: "Health Screenings",
    description: "Comprehensive health assessments for your employees.",
  },
  {
    icon: Briefcase,
    title: "Wellness Workshops",
    description: "Educational sessions on nutrition, stress management, and more.",
  },
  {
    icon: TrendingUp,
    title: "Team Challenges",
    description: "Engaging fitness challenges to build team spirit.",
  },
]

const benefits = [
  {
    icon: TrendingUp,
    title: "Increased Productivity",
    description: "Healthier employees are more focused and productive.",
  },
  {
    icon: Heart,
    title: "Reduced Healthcare Costs",
    description: "Preventive wellness lowers long-term medical expenses.",
  },
  {
    icon: Users,
    title: "Improved Retention",
    description: "Wellness programs increase employee satisfaction and loyalty.",
  },
  {
    icon: Award,
    title: "Better Company Culture",
    description: "Demonstrate commitment to employee well-being.",
  },
]

const programs = [
  {
    name: "Startup Program",
    description: "Perfect for smaller companies getting started with wellness",
    price: "Custom",
    features: [
      "Monthly on-site fitness classes",
      "Quarterly health workshops",
      "Basic health screenings",
      "Wellness app access",
      "Team fitness challenges",
    ],
  },
  {
    name: "Growth Program",
    description: "Comprehensive wellness for growing organizations",
    price: "Custom",
    features: [
      "Weekly on-site fitness classes",
      "Monthly health workshops",
      "Comprehensive health screenings",
      "Personal wellness coaching",
      "Nutrition guidance",
      "Stress management programs",
    ],
    popular: true,
  },
  {
    name: "Enterprise Program",
    description: "Full-service wellness for large corporations",
    price: "Custom",
    features: [
      "Daily on-site fitness classes",
      "Weekly educational workshops",
      "Full health assessment program",
      "On-site wellness center",
      "Dedicated wellness coordinator",
      "Custom app & portal",
      "Executive wellness services",
    ],
  },
]

export default function CorporateWellnessPage() {
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
                <Building2 className="w-4 h-4" />
                Corporate Wellness
              </motion.div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Healthier{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 animate-gradient">
                  Workplace
                </span>
              </h1>
              <p className="text-xl text-slate-400 mb-8 leading-relaxed">
                Customized wellness programs for businesses looking to improve employee health, 
                productivity, and satisfaction. Transform your workplace into a healthier, happier environment.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="default"
                    rightIcon={<ArrowRight className="w-5 h-5" />}
                    className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white border-0 shadow-lg shadow-orange-500/30"
                  >
                    Request Consultation
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outline"
                    className="border-white/20 bg-white/5 text-white hover:bg-white/10 backdrop-blur-sm"
                  >
                    Download Brochure
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
                      500+
                    </motion.div>
                    <div className="text-2xl font-light">Corporate Partners</div>
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
              Comprehensive wellness solutions for your organization
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
                Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Corporate Wellness</span>
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                Investing in employee wellness pays dividends. Our programs are designed to 
                deliver measurable results in health, productivity, and employee satisfaction.
              </p>
              <ul className="space-y-4">
                {[
                  "Reduce absenteeism and sick days",
                  "Lower healthcare costs and insurance premiums",
                  "Improve employee morale and job satisfaction",
                  "Increase productivity and focus",
                  "Attract and retain top talent",
                  "Build stronger team connections",
                  "Create a positive company culture",
                  "Demonstrate commitment to employee well-being",
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

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-r from-orange-500 to-red-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.2)_100%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Proven Results
            </h2>
            <p className="text-lg text-white/80">
              Measurable impact on organizations like yours
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: "25%", label: "Reduced Absenteeism" },
              { value: "30%", label: "Lower Healthcare Costs" },
              { value: "40%", label: "Higher Employee Satisfaction" },
              { value: "20%", label: "Increased Productivity" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Corporate <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Programs</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Scalable solutions for organizations of any size
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={program.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -12 }}
                className={`relative rounded-2xl p-8 transition-all duration-500 ${
                  program.popular
                    ? "bg-gradient-to-br from-orange-500 to-red-600 text-white shadow-2xl shadow-orange-500/30 scale-105 card-hover-lift"
                    : "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-orange-500/50 shadow-lg hover:shadow-2xl hover:shadow-orange-500/20"
                }`}
              >
                {program.popular && (
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

                <h3 className={`text-xl font-bold mb-2 ${program.popular ? "text-white" : "text-slate-900 dark:text-white"}`}>
                  {program.name}
                </h3>
                <p className={`text-sm mb-4 ${program.popular ? "text-white/80" : "text-slate-600 dark:text-slate-400"}`}>
                  {program.description}
                </p>
                <div className={`text-4xl font-bold mb-6 ${program.popular ? "text-white" : "text-slate-900 dark:text-white"}`}>
                  {program.price}
                </div>

                <ul className="space-y-3 mb-8">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className={`flex items-center gap-3 ${program.popular ? "text-white/90" : "text-slate-600 dark:text-slate-400"}`}>
                      <Check className={`w-5 h-5 flex-shrink-0 ${program.popular ? "text-white" : "text-orange-500"}`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
                    program.popular
                      ? "bg-white text-orange-600 hover:bg-white/90 shadow-lg"
                      : "bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg shadow-orange-500/30"
                  }`}
                >
                  Get Quote
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection title="Corporate Wellness FAQs" items={corporateFAQ} />

      {/* CTA Section */}
      <CTASection />
    </>
  )
}
