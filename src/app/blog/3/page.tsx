"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Clock, Calendar, User, Share2, Heart } from "lucide-react"

console.log("[app/blog/3] - Blog post 3 loaded")

export default function BlogPost3() {
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
              <span className="px-3 py-1 bg-orange-500/20 text-orange-400 text-sm font-medium rounded-full">Yoga</span>
              <div className="flex items-center gap-2 text-slate-400 text-sm"><Clock className="w-4 h-4" />6 min read</div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">5 Morning Yoga Flows to Start Your Day Right</h1>
            <div className="flex items-center gap-6 text-slate-400 mb-8">
              <div className="flex items-center gap-2"><User className="w-4 h-4" />Sarah Williams</div>
              <div className="flex items-center gap-2"><Calendar className="w-4 h-4" />Mar 10, 2024</div>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="pb-12 bg-slate-950 dark:bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-600" />
            <div className="absolute inset-0 flex items-center justify-center"><span className="text-white text-6xl font-bold">Morning Yoga</span></div>
          </motion.div>
        </div>
      </section>
      <section className="py-12 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.article initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="prose prose-lg prose-slate dark:prose-invert max-w-none">
            <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-8">Starting your day with yoga sets a positive tone for everything that follows. These five morning flows will awaken your body, calm your mind, and prepare you for whatever the day brings.</p>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-12 mb-6">1. Sun Salutation Variation</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">Begin in mountain pose, flow through a gentle sun salutation sequence. Move mindfully with your breath, stretching every major muscle group. This traditional sequence warms the body and builds heat.</p>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-12 mb-6">2. Gentle Spinal Twist Flow</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">Start on your back, gently twisting from side to side. This flow releases tension in the spine and improves spinal mobility. Perfect for counteracting the effects of sleeping.</p>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-12 mb-6">3. Hip Opening Sequence</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">Move through low lunge, pigeon pose, and butterfly pose. These poses open tight hips from sitting and create space in the pelvis. Great for runners and desk workers.</p>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-12 mb-6">4. Core Awakening Flow</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">Transition through cat-cow, plank, and gentle boat pose variations. This sequence gently engages your core without strain. Build stability while honoring your body's limits.</p>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-12 mb-6">5. Standing Balance Flow</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">Practice tree pose, warrior III, and eagle pose. These standing balances improve focus and proprioception. Start your day with clarity and grounding.</p>
            <div className="mt-12 p-8 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-2xl border border-orange-500/30">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Morning Yoga Tips</h3>
              <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                <li>• Practice on an empty stomach</li>
                <li>• Move slowly and mindfully</li>
                <li>• Focus on breath over perfection</li>
                <li>• Listen to your body's limits</li>
                <li>• Set an intention for your day</li>
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
