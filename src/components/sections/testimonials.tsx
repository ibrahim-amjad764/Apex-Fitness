"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import type { Testimonial } from "@/types"

console.log("[components/sections/testimonials] - Testimonials section loaded")

/**
 * Sample testimonial data
 * In production, this would come from an API or CMS
 */
const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Mitchell",
    role: "Lost 30 lbs in 6 months",
    image: "/images/testimonial-1.jpg",
    content: "Apex Fitness completely transformed my life. The trainers are incredibly supportive, and the community keeps me motivated every single day. I've never felt stronger or more confident.",
    rating: 5,
    date: "2024-01-15",
  },
  {
    id: "2",
    name: "James Chen",
    role: "Marathon Runner",
    image: "/images/testimonial-2.jpg",
    content: "The personalized training programs here helped me qualify for the Boston Marathon. The coaches really understand how to push you while preventing injuries. Best investment I've ever made.",
    rating: 5,
    date: "2024-02-03",
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    role: "Yoga Enthusiast",
    image: "/images/testimonial-3.jpg",
    content: "The variety of classes is amazing! From high-intensity workouts to restorative yoga, there's something for every mood. The instructors are world-class and truly care about your progress.",
    rating: 5,
    date: "2024-02-20",
  },
  {
    id: "4",
    name: "Michael Thompson",
    role: "Business Executive",
    image: "/images/testimonial-4.jpg",
    content: "As a busy professional, I needed a gym that could accommodate my schedule. Apex Fitness is open 24/7, and the express workouts are perfect for my lunch breaks. Highly recommend!",
    rating: 5,
    date: "2024-03-08",
  },
]

/**
 * Testimonials Section Component
 * Auto-rotating carousel with manual navigation
 */
export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)

    return () => clearInterval(timer)
  }, [])

  const handlePrev = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  }

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-white/10 text-orange-400 text-sm font-semibold rounded-full mb-4"
          >
            Success Stories
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            What Our Members Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-400"
          >
            Real stories from real members who transformed their lives with Apex Fitness.
          </motion.p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col md:flex-row items-center gap-8"
              >
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-500" />
                    <div className="absolute inset-1 rounded-xl bg-slate-800 flex items-center justify-center text-4xl font-bold text-white">
                      {currentTestimonial.name.charAt(0)}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <Quote className="w-10 h-10 text-orange-500 mb-4 mx-auto md:mx-0" />
                  <p className="text-xl md:text-2xl text-white leading-relaxed mb-6">
                    &ldquo;{currentTestimonial.content}&rdquo;
                  </p>
                  <div>
                    <h4 className="font-bold text-white text-lg">
                      {currentTestimonial.name}
                    </h4>
                    <p className="text-orange-400">{currentTestimonial.role}</p>
                  </div>
                  
                  {/* Stars */}
                  <div className="flex items-center gap-1 mt-4 justify-center md:justify-start">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={cn(
                          "w-5 h-5",
                          i < currentTestimonial.rating
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-slate-600"
                        )}
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-center md:justify-end gap-4 mt-8">
              <button
                onClick={handlePrev}
                className="p-3 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              {/* Dots */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setDirection(index > currentIndex ? 1 : -1)
                      setCurrentIndex(index)
                    }}
                    className={cn(
                      "w-2 h-2 rounded-full transition-all duration-300",
                      index === currentIndex
                        ? "w-8 bg-orange-500"
                        : "bg-white/30 hover:bg-white/50"
                    )}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="p-3 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
