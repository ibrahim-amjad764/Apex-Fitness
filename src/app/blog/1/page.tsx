"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Clock, Calendar, User, Share2, Heart } from "lucide-react"

console.log("[app/blog/1] - Blog post 1 loaded")

export default function BlogPost1() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-12 bg-slate-950 dark:bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 bg-orange-500/20 text-orange-400 text-sm font-medium rounded-full">
                Strength Training
              </span>
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <Clock className="w-4 h-4" />
                8 min read
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              10 Essential Exercises for Building Core Strength
            </h1>

            <div className="flex items-center gap-6 text-slate-400 mb-8">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Marcus Johnson
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Mar 15, 2024
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-12 bg-slate-950 dark:bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-600" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white text-6xl font-bold">Core Strength</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="prose prose-lg prose-slate dark:prose-invert max-w-none"
          >
            <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
              A strong core is the foundation of all movement. Whether you're lifting weights, running,
              or simply going about your daily activities, your core muscles are constantly working to
              stabilize your body and transfer force. Here are 10 essential exercises to build a powerful,
              functional core.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-12 mb-6">1. Plank</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              The plank is the king of core exercises. It targets your entire core, including your rectus
              abdominis, transverse abdominis, and obliques. Hold a straight line from head to heels,
              engaging your core throughout. Start with 30 seconds and work your way up to 2 minutes.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-12 mb-6">2. Dead Bug</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              Lie on your back with arms extended toward the ceiling and legs in tabletop position.
              Slowly lower your right arm behind your head while extending your left leg. Return to center
              and switch sides. This exercise teaches your core to resist rotation and extension.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-12 mb-6">3. Russian Twist</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              Sit on the floor with knees bent and feet elevated. Lean back slightly and rotate your
              torso from side to side, touching the ground beside you. This targets your obliques and
              improves rotational strength.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-12 mb-6">4. Bicycle Crunches</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              Lie on your back with hands behind your head. Bring your right elbow to your left knee while
              extending your right leg. Alternate sides in a pedaling motion. This dynamic movement engages
              multiple muscle groups simultaneously.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-12 mb-6">5. Leg Raises</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              Lie flat on your back with legs straight. Slowly raise your legs until they're perpendicular
              to the ground, then lower them with control. Keep your lower back pressed into the floor
              throughout the movement.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-12 mb-6">6. Mountain Climbers</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              Start in a plank position and rapidly alternate driving your knees toward your chest.
              This explosive movement builds core endurance while also providing a cardiovascular challenge.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-12 mb-6">7. Bird Dog</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              Start on hands and knees. Extend your right arm forward and left leg backward, maintaining
              balance. Switch sides. This exercise improves core stability and coordination.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-12 mb-6">8. Ab Wheel Rollout</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              Kneel with an ab wheel in front of you. Roll forward as far as you can while maintaining
              a straight line from knees to head, then roll back. This advanced exercise builds tremendous
              core strength.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-12 mb-6">9. Side Plank</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              Lie on your side and prop yourself up on your forearm. Lift your hips to create a straight
              line from head to feet. Hold for 30-60 seconds per side. This targets your obliques and
              lateral core muscles.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-12 mb-6">10. Hollow Body Hold</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              Lie on your back and lift your arms and legs off the ground, creating a slight curve in your
              body like a banana. Hold this position while pressing your lower back into the floor.
              This gymnastics staple builds incredible core tension.
            </p>

            <div className="mt-12 p-8 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-2xl border border-orange-500/30">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Programming Tips</h3>
              <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                <li>• Perform 2-3 core sessions per week</li>
                <li>• Choose 3-4 exercises per session</li>
                <li>• Perform 3-4 sets of each exercise</li>
                <li>• Focus on quality over quantity</li>
                <li>• Progress gradually as you get stronger</li>
              </ul>
            </div>
          </motion.article>

          {/* Share & Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-between mt-12 pt-8 border-t border-slate-200 dark:border-slate-800"
          >
            <div className="flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-slate-100 dark:bg-slate-800 hover:bg-orange-500 dark:hover:bg-orange-500 rounded-full transition-colors"
              >
                <Heart className="w-5 h-5 text-slate-600 dark:text-slate-400 hover:text-white" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-slate-100 dark:bg-slate-800 hover:bg-orange-500 dark:hover:bg-orange-500 rounded-full transition-colors"
              >
                <Share2 className="w-5 h-5 text-slate-600 dark:text-slate-400 hover:text-white" />
              </motion.button>
            </div>
            <Link
              href="/blog"
              className="text-orange-500 hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-300 font-medium transition-colors"
            >
              Read More Articles →
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
