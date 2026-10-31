"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Clock, Calendar, User, Share2, Heart } from "lucide-react"

console.log("[app/blog/6] - Blog post 6 loaded")

export default function BlogPost6() {
  return (
    <>
      <section className="pt-32 pb-12 bg-slate-950 dark:bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 bg-orange-500/20 text-orange-400 text-sm font-medium rounded-full">Nutrition</span>
              <div className="flex items-center gap-2 text-slate-400 text-sm"><Clock className="w-4 h-4" />9 min read</div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">Meal Prep Mastery: Save Time and Eat Better</h1>
            <div className="flex items-center gap-6 text-slate-400 mb-8">
              <div className="flex items-center gap-2"><User className="w-4 h-4" />Emily Rodriguez</div>
              <div className="flex items-center gap-2"><Calendar className="w-4 h-4" />Mar 3, 2024</div>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="pb-12 bg-slate-950 dark:bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-600" />
            <div className="absolute inset-0 flex items-center justify-center"><span className="text-white text-6xl font-bold">Meal Prep</span></div>
          </motion.div>
        </div>
      </section>
      <section className="py-12 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.article initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="prose prose-lg prose-slate dark:prose-invert max-w-none">
            <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-8">Meal prep is the secret weapon of successful fitness enthusiasts. By dedicating a few hours each week to preparation, you can ensure you always have healthy, nutritious meals ready. This guide will transform your approach to nutrition.</p>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-12 mb-6">Getting Started with Meal Prep</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">Begin by choosing one day per week for prep. Sunday works well for most people. Start with just 2-3 meals to avoid overwhelm. Invest in quality storage containers. Plan your meals before shopping to avoid waste.</p>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-12 mb-6">Essential Equipment</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">You'll need glass or BPA-free plastic containers in various sizes. A good set of knives, cutting boards, and measuring tools are essential. Consider a slow cooker or instant pot for batch cooking. Label everything with dates for freshness tracking.</p>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-12 mb-6">Smart Storage Strategies</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">Store prepared meals in the refrigerator for 3-4 days maximum. Freeze portions for later in the week. Keep proteins, carbs, and vegetables separate until ready to eat. This maintains texture and prevents sogginess.</p>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-12 mb-6">Time-Saving Techniques</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">Batch cook proteins in bulk. Use sheet pan meals for easy cleanup. Prep vegetables in advance. Cook once, eat twice by doubling recipes. Use your slow cooker for hands-off cooking. Pre-portion snacks for grab-and-go convenience.</p>
            <div className="mt-12 p-8 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-2xl border border-orange-500/30">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Weekly Prep Schedule</h3>
              <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                <li>• Saturday: Plan meals and shop</li>
                <li>• Sunday: Prep proteins and vegetables</li>
                <li>• Monday: Assemble meals for the week</li>
                <li>• Wednesday: Mid-week refresh prep</li>
                <li>• Friday: Plan next week's menu</li>
              </ul>
            </div>
          </motion.article>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="flex items-center justify-between mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-4">
              <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="p-3 bg-slate-100 dark:bg-slate-800 hover:bg-orange-500 dark:hover:bg-orange-500 rounded-full transition-colors"><Heart className="w-5 h-5 text-slate-600 dark:text-slate-400 hover:text-white" /></motion.button>
              <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="p-3 bg-slate-100 dark:bg-slate-800 hover:bg-orange-500 dark:hover:bg-orange-500 rounded-full transition-colors"><Share2 className="w-5 h-5 text-slate-600 dark:text-slate-400 hover:text-white" /></motion.button>
            </div>
            <Link href="/blog" className="text-orange-500 hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-300 font-medium transition-colors">Read More Articles →</Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
