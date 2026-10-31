"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Clock, Calendar, User, Share2, Heart } from "lucide-react"

console.log("[app/blog/4] - Blog post 4 loaded")

export default function BlogPost4() {
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
              <span className="px-3 py-1 bg-orange-500/20 text-orange-400 text-sm font-medium rounded-full">Cardio</span>
              <div className="flex items-center gap-2 text-slate-400 text-sm"><Clock className="w-4 h-4" />10 min read</div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">HIIT vs. Steady State Cardio: Which is Better?</h1>
            <div className="flex items-center gap-6 text-slate-400 mb-8">
              <div className="flex items-center gap-2"><User className="w-4 h-4" />David Chen</div>
              <div className="flex items-center gap-2"><Calendar className="w-4 h-4" />Mar 8, 2024</div>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="pb-12 bg-slate-950 dark:bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-600" />
            <div className="absolute inset-0 flex items-center justify-center"><span className="text-white text-6xl font-bold">Cardio Training</span></div>
          </motion.div>
        </div>
      </section>
      <section className="py-12 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.article initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="prose prose-lg prose-slate dark:prose-invert max-w-none">
            <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-8">The debate between HIIT and steady state cardio has been ongoing for years. Both methods have their place in a well-rounded fitness program. Let's break down the science to help you choose the right approach for your goals.</p>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-12 mb-6">High-Intensity Interval Training (HIIT)</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">HIIT involves short bursts of intense exercise followed by rest periods. This method offers numerous benefits including EPOC (excess post-exercise oxygen consumption), which means you continue burning calories hours after your workout. HIIT is time-efficient, making it perfect for busy schedules.</p>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-12 mb-6">Steady State Cardio</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">Steady state cardio involves maintaining a consistent, moderate intensity for extended periods. This method builds aerobic base, improves endurance, and is generally lower impact. It's excellent for fat burning without excessive stress on the body.</p>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-12 mb-6">When to Choose HIIT</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">Choose HIIT if you're short on time, want maximum calorie burn, or are training for athletic performance. It's also great for breaking through plateaus and challenging your cardiovascular system.</p>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-12 mb-6">When to Choose Steady State</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">Opt for steady state if you're building an aerobic base, recovering from intense training, or prefer lower-impact exercise. It's ideal for active recovery and building endurance for longer events.</p>
            <div className="mt-12 p-8 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-2xl border border-orange-500/30">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">The Best Approach: Hybrid Training</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">Rather than choosing one, incorporate both into your routine. Try 2-3 HIIT sessions per week combined with 1-2 steady state sessions. This approach gives you the benefits of both methods while preventing overtraining.</p>
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
