"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Clock, Calendar, User, Share2, Heart } from "lucide-react"

console.log("[app/blog/7] - Blog post 7 loaded")

export default function BlogPost7() {
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
              <span className="px-3 py-1 bg-orange-500/20 text-orange-400 text-sm font-medium rounded-full">Wellness</span>
              <div className="flex items-center gap-2 text-slate-400 text-sm"><Clock className="w-4 h-4" />11 min read</div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">Mental Fitness: The Mind-Body Connection</h1>
            <div className="flex items-center gap-6 text-slate-400 mb-8">
              <div className="flex items-center gap-2"><User className="w-4 h-4" />Sarah Williams</div>
              <div className="flex items-center gap-2"><Calendar className="w-4 h-4" />Mar 1, 2024</div>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="pb-12 bg-slate-950 dark:bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-600" />
            <div className="absolute inset-0 flex items-center justify-center"><span className="text-white text-6xl font-bold">Mental Fitness</span></div>
          </motion.div>
        </div>
      </section>
      <section className="py-12 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.article initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="prose prose-lg prose-slate dark:prose-invert max-w-none">
            <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-8">Physical fitness is only half the equation. Mental fitness - the strength and resilience of your mind - is equally important for overall well-being and performance. Train your mind like you train your body for optimal results.</p>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-12 mb-6">The Mind-Body Connection</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">Your mental state directly impacts physical performance. Stress increases cortisol, which can hinder muscle growth and recovery. Anxiety can affect focus and form during workouts. Conversely, physical exercise releases endorphins that improve mental clarity and mood.</p>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-12 mb-6">Mindfulness Practices</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">Incorporate mindfulness into your routine. Start with 5-10 minutes of daily meditation. Practice deep breathing exercises. Use visualization techniques before workouts. These practices reduce stress and improve focus.</p>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-12 mb-6">Building Mental Resilience</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">Mental toughness is like a muscle - it grows with training. Challenge yourself with difficult workouts. Practice positive self-talk. Set realistic but challenging goals. Learn to embrace discomfort as growth. Celebrate small wins along the way.</p>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-12 mb-6">Stress Management</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">Chronic stress undermines both mental and physical health. Identify your stress triggers. Develop healthy coping mechanisms. Prioritize sleep and recovery. Practice time management. Don't hesitate to seek professional help when needed.</p>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-12 mb-6">The Power of Positive Thinking</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">Your mindset shapes your reality. Practice gratitude daily. Reframe negative thoughts. Surround yourself with positive influences. Focus on progress, not perfection. Believe in your ability to improve and grow.</p>
            <div className="mt-12 p-8 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-2xl border border-orange-500/30">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Daily Mental Fitness Routine</h3>
              <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                <li>• Morning: 5 minutes of meditation or breathing</li>
                <li>• Pre-workout: Visualization of success</li>
                <li>• During workout: Positive self-talk</li>
                <li>• Post-workout: Gratitude journaling</li>
                <li>• Evening: Reflection on the day</li>
                <li>• Before bed: Mindfulness practice</li>
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
