"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Clock, Calendar, User, Share2, Heart } from "lucide-react"

console.log("[app/blog/2] - Blog post 2 loaded")

export default function BlogPost2() {
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
              <div className="flex items-center gap-2 text-slate-400 text-sm"><Clock className="w-4 h-4" />12 min read</div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">The Complete Guide to Nutrition for Muscle Growth</h1>
            <div className="flex items-center gap-6 text-slate-400 mb-8">
              <div className="flex items-center gap-2"><User className="w-4 h-4" />Emily Rodriguez</div>
              <div className="flex items-center gap-2"><Calendar className="w-4 h-4" />Mar 12, 2024</div>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="pb-12 bg-slate-950 dark:bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-600" />
            <div className="absolute inset-0 flex items-center justify-center"><span className="text-white text-6xl font-bold">Muscle Nutrition</span></div>
          </motion.div>
        </div>
      </section>
      <section className="py-12 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.article initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="prose prose-lg prose-slate dark:prose-invert max-w-none">
            <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-8">Building muscle isn't just about what happens in the gym. Nutrition plays an equally crucial role in muscle growth and recovery. This comprehensive guide covers everything you need to know to fuel your gains effectively.</p>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-12 mb-6">Protein: The Building Block</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">Protein is essential for muscle repair and growth. Aim for 1.6-2.2g of protein per kg of body weight daily. Spread your intake across 4-6 meals for optimal absorption. High-quality sources include lean meats, eggs, dairy, legumes, and protein supplements.</p>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-12 mb-6">Carbohydrates: Energy for Training</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">Carbs fuel your workouts and replenish glycogen stores. Focus on complex carbohydrates like oats, rice, potatoes, and whole grains. Time your carb intake around training sessions for maximum benefit.</p>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-12 mb-6">Fats: Hormonal Health</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">Healthy fats support hormone production essential for muscle growth. Include sources like avocados, nuts, olive oil, and fatty fish in your diet. Aim for 0.5-1g of fat per kg of body weight.</p>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-12 mb-6">Meal Timing</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">While total daily intake matters most, strategic timing can optimize results. Consume protein and carbs within 2 hours post-workout. Consider pre-workout nutrition 1-2 hours before training.</p>
            <div className="mt-12 p-8 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-2xl border border-orange-500/30">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Sample Daily Meal Plan</h3>
              <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                <li>• Breakfast: Oatmeal with protein powder and berries</li>
                <li>• Snack: Greek yogurt with nuts</li>
                <li>• Lunch: Chicken breast with rice and vegetables</li>
                <li>• Pre-workout: Banana with almond butter</li>
                <li>• Post-workout: Protein shake with dextrose</li>
                <li>• Dinner: Salmon with sweet potato and broccoli</li>
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
