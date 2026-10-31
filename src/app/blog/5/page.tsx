"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Clock, Calendar, User, Share2, Heart } from "lucide-react"

console.log("[app/blog/5] - Blog post 5 loaded")

export default function BlogPost5() {
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
              <span className="px-3 py-1 bg-orange-500/20 text-orange-400 text-sm font-medium rounded-full">Recovery</span>
              <div className="flex items-center gap-2 text-slate-400 text-sm"><Clock className="w-4 h-4" />7 min read</div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">Recovery 101: Why Rest Days Are Essential</h1>
            <div className="flex items-center gap-6 text-slate-400 mb-8">
              <div className="flex items-center gap-2"><User className="w-4 h-4" />Amanda Foster</div>
              <div className="flex items-center gap-2"><Calendar className="w-4 h-4" />Mar 5, 2024</div>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="pb-12 bg-slate-950 dark:bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-600" />
            <div className="absolute inset-0 flex items-center justify-center"><span className="text-white text-6xl font-bold">Recovery</span></div>
          </motion.div>
        </div>
      </section>
      <section className="py-12 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.article initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="prose prose-lg prose-slate dark:prose-invert max-w-none">
            <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-8">In the fitness world, the motto "no pain, no gain" often overshadows an equally important truth: no rest, no progress. Understanding and prioritizing recovery is essential for long-term success and injury prevention.</p>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-12 mb-6">The Science of Recovery</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">During exercise, you create micro-tears in your muscle fibers. It's during rest that these fibers repair and grow stronger. Without adequate recovery, you risk overtraining, decreased performance, and increased injury risk.</p>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-12 mb-6">Types of Recovery</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">Recovery comes in multiple forms. Physical rest allows your body to repair tissues. Sleep is when most recovery hormones are released. Active recovery, like light walking or yoga, promotes blood flow without additional stress. Nutrition provides the building blocks for repair.</p>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-12 mb-6">Signs You Need More Recovery</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">Watch for persistent fatigue, decreased performance, irritability, sleep disturbances, and nagging aches that won't go away. These are your body's signals that it needs more rest. Listen to them before they become injuries.</p>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-12 mb-6">Optimizing Your Rest Days</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">Plan 1-2 complete rest days per week. Use active recovery on other off days. Prioritize sleep with 7-9 hours nightly. Focus on nutrition, especially protein intake. Consider techniques like foam rolling, stretching, and massage.</p>
            <div className="mt-12 p-8 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-2xl border border-orange-500/30">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Recovery Checklist</h3>
              <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                <li>• 7-9 hours of quality sleep nightly</li>
                <li>• Proper post-workout nutrition</li>
                <li>• Hydration throughout the day</li>
                <li>• 1-2 complete rest days weekly</li>
                <li>• Stress management techniques</li>
                <li>• Regular mobility work</li>
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
