"use client"

import { motion } from "framer-motion"
import { BlogCard } from "@/components/ui/cards"
import type { BlogPost } from "@/types"

console.log("[app/blog/page] - Blog page loaded")

// Blog posts data
const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "10 Essential Exercises for Building Core Strength",
    excerpt: "Discover the most effective exercises to build a strong, stable core that supports every movement you make. These exercises target all areas of your midsection for complete development.",
    content: "Full article content here...",
    image: "/Marcus Johnson12.png",
    author: "Marcus Johnson",
    date: "Mar 15, 2024",
    category: "Strength Training",
    readTime: 8,
    tags: ["core", "strength", "workout"],
  },
  {
    id: "2",
    title: "The Complete Guide to Nutrition for Muscle Growth",
    excerpt: "Learn the science-backed nutrition strategies that will help you pack on lean muscle mass. From protein timing to carb cycling, we've got you covered.",
    content: "Full article content here...",
    image: "/Emily Rodriguez01.png",
    author: "Emily Rodriguez",
    date: "Mar 12, 2024",
    category: "Nutrition",
    readTime: 12,
    tags: ["nutrition", "muscle", "diet"],
  },
  {
    id: "3",
    title: "5 Morning Yoga Flows to Start Your Day Right",
    excerpt: "Begin each day with intention and movement. These gentle yet energizing yoga sequences will wake up your body and mind for optimal performance.",
    content: "Full article content here...",
    image: "/Sarah Williamss1.png",
    author: "Sarah Williams",
    date: "Mar 10, 2024",
    category: "Yoga",
    readTime: 6,
    tags: ["yoga", "morning", "wellness"],
  },
  {
    id: "4",
    title: "HIIT vs. Steady State Cardio: Which is Better?",
    excerpt: "We break down the science behind both training methods to help you decide which approach fits your goals, schedule, and fitness level best.",
    content: "Full article content here...",
    image: "/David Chenn.png",
    author: "David Chen",
    date: "Mar 8, 2024",
    category: "Cardio",
    readTime: 10,
    tags: ["cardio", "HIIT", "fat loss"],
  },
  {
    id: "5",
    title: "Recovery 101: Why Rest Days Are Essential",
    excerpt: "Understanding the importance of recovery is crucial for long-term progress. Learn how to optimize your rest days for maximum gains.",
    content: "Full article content here...",
    image: "/Amanda Fosterr.png",
    author: "Amanda Foster",
    date: "Mar 5, 2024",
    category: "Recovery",
    readTime: 7,
    tags: ["recovery", "rest", "injury prevention"],
  },
  {
    id: "6",
    title: "Meal Prep Mastery: Save Time and Eat Better",
    excerpt: "Transform your nutrition with our comprehensive meal prep guide. Learn how to prepare a week of healthy meals in just a few hours.",
    content: "Full article content here...",
    image: "/Emily Rodriguez01.png",
    author: "Emily Rodriguez",
    date: "Mar 3, 2024",
    category: "Nutrition",
    readTime: 9,
    tags: ["meal prep", "nutrition", "healthy eating"],
  },
  {
    id: "7",
    title: "Mental Fitness: The Mind-Body Connection",
    excerpt: "Discover how mental resilience and mindfulness practices can enhance your physical performance and overall well-being. Train your mind like you train your body.",
    content: "Full article content here...",
    image: "/Sarah Williamss1.png",
    author: "Sarah Williams",
    date: "Mar 1, 2024",
    category: "Wellness",
    readTime: 11,
    tags: ["mental health", "mindfulness", "wellness"],
  },
]

// Categories for filtering
const categories = ["All"]

/**
 * Blog Page Component
 * Includes: Hero, Category filter, Blog grid
 */
export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-slate-950 relative overflow-hidden">
        {/* Animated Background */}
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
              y: [0, -26, 0],
              x: [0, 13, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-0 left-0 w-[460px] h-[460px] bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 bg-white/5 backdrop-blur-md text-orange-400 text-sm font-semibold rounded-full mb-6 border border-orange-500/20"
            >
              Fitness Insights
            </motion.span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Expert{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 animate-gradient">
                Tips
              </span>{" "}
              & Guides
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              Stay informed with the latest fitness trends, workout tips, and 
              nutrition advice from our team of certified professionals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid Section */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-3 justify-center mb-12"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  index === 0
                    ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg shadow-orange-500/30"
                    : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Featured Article */}
          <div className="mb-12">
            <BlogCard post={blogPosts[0]} featured />
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Never Miss a Post
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
            Subscribe to our newsletter and get the latest fitness tips delivered straight to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-5 py-4 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
