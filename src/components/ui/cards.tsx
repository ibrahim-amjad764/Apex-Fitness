"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { ArrowRight, Check, Instagram, Twitter, Linkedin, Star, Quote } from "lucide-react"
import type { Trainer, Service, MembershipPlan, Testimonial, BlogPost } from "@/types"

console.log("[components/ui/cards] - Card components loaded")

/**
 * Service Card Component
 * Displays service information with hover animations
 */
interface ServiceCardProps {
  service: Service
  index?: number
}

export function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group relative bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 hover:border-orange-500/50 dark:hover:border-orange-500/50 transition-all duration-300 shadow-lg shadow-slate-200/50 dark:shadow-none hover:shadow-xl hover:shadow-orange-500/10"
    >
      {/* Icon */}
      <div className="mb-6 inline-flex p-4 rounded-xl bg-gradient-to-br from-orange-500/20 to-red-500/20 text-orange-500">
        <span className="text-3xl">{service.icon}</span>
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
        {service.title}
      </h3>
      <p className="text-slate-600 dark:text-slate-400 mb-6">
        {service.description}
      </p>

      {/* Features */}
      <ul className="space-y-3 mb-6">
        {service.features.map((feature, idx) => (
          <li key={idx} className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
            <Check className="w-4 h-4 text-orange-500 flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>

      {/* Price & CTA */}
      <div className="flex items-center justify-between pt-6 border-t border-slate-200 dark:border-slate-800">
        <div>
          <span className="text-2xl font-bold text-orange-500">{service.price}</span>
          <span className="text-slate-500 text-sm ml-2">/{service.duration}</span>
        </div>
        <Link
          href={`/services#${service.id}`}
          className="flex items-center gap-2 text-orange-500 hover:text-orange-600 font-medium transition-colors group/link"
        >
          Learn More
          <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
        </Link>
      </div>

      {/* Hover Gradient */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </motion.div>
  )
}

/**
 * Trainer Card Component
 * Displays trainer profile with social links
 */
interface TrainerCardProps {
  trainer: Trainer
  index?: number
}

export function TrainerCard({ trainer, index = 0 }: TrainerCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-orange-500/50 transition-all duration-300"
    >
      {/* Image */}
      <div className="relative h-72 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent z-10" />
        <Image
          src={trainer.image}
          alt={trainer.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Social Links */}
        <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center gap-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          {trainer.socialLinks.instagram && (
            <a
              href={trainer.socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/20 backdrop-blur-sm hover:bg-orange-500 text-white rounded-lg transition-colors"
              aria-label={`${trainer.name} Instagram`}
            >
              <Instagram className="w-4 h-4" />
            </a>
          )}
          {trainer.socialLinks.twitter && (
            <a
              href={trainer.socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/20 backdrop-blur-sm hover:bg-orange-500 text-white rounded-lg transition-colors"
              aria-label={`${trainer.name} Twitter`}
            >
              <Twitter className="w-4 h-4" />
            </a>
          )}
          {trainer.socialLinks.linkedin && (
            <a
              href={trainer.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/20 backdrop-blur-sm hover:bg-orange-500 text-white rounded-lg transition-colors"
              aria-label={`${trainer.name} LinkedIn`}
            >
              <Linkedin className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
          {trainer.name}
        </h3>
        <p className="text-orange-500 font-medium text-sm mb-3">{trainer.role}</p>
        <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">
          {trainer.bio}
        </p>
        
        {/* Specialties */}
        <div className="flex flex-wrap gap-2">
          {trainer.specialties.slice(0, 3).map((specialty, idx) => (
            <span
              key={idx}
              className="px-3 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-full"
            >
              {specialty}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

/**
 * Membership Card Component
 * Displays pricing plans with monthly/yearly toggle
 */
interface MembershipCardProps {
  plan: MembershipPlan
  isYearly: boolean
  index?: number
}

export function MembershipCard({ plan, isYearly, index = 0 }: MembershipCardProps) {
  const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice
  const period = isYearly ? "/year" : "/month"

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "relative rounded-2xl p-8 transition-all duration-300",
        plan.popular
          ? "bg-gradient-to-br from-orange-500 to-red-600 text-white shadow-xl shadow-orange-500/25 scale-105"
          : "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-orange-500/50"
      )}
    >
      {/* Popular Badge */}
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-white text-orange-600 text-sm font-bold rounded-full shadow-lg">
          Most Popular
        </div>
      )}

      {/* Plan Info */}
      <div className="mb-6">
        <h3 className={cn(
          "text-xl font-bold mb-2",
          plan.popular ? "text-white" : "text-slate-900 dark:text-white"
        )}>
          {plan.name}
        </h3>
        <p className={cn(
          "text-sm",
          plan.popular ? "text-white/80" : "text-slate-600 dark:text-slate-400"
        )}>
          {plan.description}
        </p>
      </div>

      {/* Price */}
      <div className="mb-8">
        <span className={cn(
          "text-5xl font-bold",
          plan.popular ? "text-white" : "text-slate-900 dark:text-white"
        )}>
          ${price}
        </span>
        <span className={cn(
          "text-lg",
          plan.popular ? "text-white/80" : "text-slate-500"
        )}>
          {period}
        </span>
        {isYearly && (
          <p className={cn(
            "text-sm mt-2",
            plan.popular ? "text-white/80" : "text-green-500"
          )}>
            Save ${(plan.monthlyPrice * 12) - plan.yearlyPrice}/year
          </p>
        )}
      </div>

      {/* Features */}
      <ul className="space-y-4 mb-8">
        {plan.features.map((feature, idx) => (
          <li key={idx} className={cn(
            "flex items-center gap-3",
            plan.popular ? "text-white/90" : "text-slate-600 dark:text-slate-400"
          )}>
            <Check className={cn(
              "w-5 h-5 flex-shrink-0",
              plan.popular ? "text-white" : "text-orange-500"
            )} />
            {feature}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <button
        className={cn(
          "w-full py-4 rounded-xl font-semibold transition-all duration-200",
          plan.popular
            ? "bg-white text-orange-600 hover:bg-white/90 shadow-lg"
            : "bg-orange-500 text-white hover:bg-orange-600 shadow-lg shadow-orange-500/25"
        )}
      >
        Get Started
      </button>
    </motion.div>
  )
}

/**
 * Testimonial Card Component
 * Displays customer reviews with star ratings
 */
interface TestimonialCardProps {
  testimonial: Testimonial
  index?: number
}

export function TestimonialCard({ testimonial, index = 0 }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800"
    >
      {/* Quote Icon */}
      <div className="absolute top-6 right-6 p-3 bg-orange-500/10 rounded-xl">
        <Quote className="w-6 h-6 text-orange-500" />
      </div>

      {/* Rating */}
      <div className="flex items-center gap-1 mb-6">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={cn(
              "w-5 h-5",
              i < testimonial.rating
                ? "text-yellow-400 fill-yellow-400"
                : "text-slate-300 dark:text-slate-700"
            )}
          />
        ))}
      </div>

      {/* Content */}
      <p className="text-slate-700 dark:text-slate-300 mb-8 text-lg leading-relaxed">
        "{testimonial.content}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-4">
        <div className="relative w-14 h-14 rounded-full overflow-hidden">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            fill
            className="object-cover"
            sizes="56px"
          />
        </div>
        <div>
          <h4 className="font-bold text-slate-900 dark:text-white">
            {testimonial.name}
          </h4>
          <p className="text-sm text-slate-500">{testimonial.role}</p>
        </div>
      </div>
    </motion.div>
  )
}

/**
 * Blog Card Component
 * Displays blog post preview
 */
interface BlogCardProps {
  post: BlogPost
  index?: number
  featured?: boolean
}

export function BlogCard({ post, index = 0, featured = false }: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "group relative bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-orange-500/50 transition-all duration-300",
        featured && "md:col-span-2 md:grid md:grid-cols-2 md:gap-0"
      )}
    >
      {/* Image */}
      <div className={cn(
        "relative overflow-hidden bg-slate-100 dark:bg-slate-800",
        featured ? "h-80 md:h-96" : "h-64"
      )}>
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-contain transition-transform duration-500 group-hover:scale-105"
          sizes={featured ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Category & Date */}
        <div className="flex items-center gap-4 mb-4">
          <span className="px-3 py-1 text-xs font-medium bg-orange-500/10 text-orange-500 rounded-full">
            {post.category}
          </span>
          <span className="text-sm text-slate-500">{post.date}</span>
        </div>

        {/* Title & Excerpt */}
        <h3 className={cn(
          "font-bold text-slate-900 dark:text-white mb-3 group-hover:text-orange-500 transition-colors",
          featured ? "text-2xl" : "text-xl"
        )}>
          {post.title}
        </h3>
        <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-3">
          {post.excerpt}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500 text-sm font-bold">
              {post.author.charAt(0)}
            </div>
            <span className="text-sm text-slate-600 dark:text-slate-400">{post.author}</span>
          </div>
          <span className="text-sm text-slate-500">{post.readTime} min read</span>
        </div>
      </div>
    </motion.article>
  )
}

/**
 * Stat Card Component
 * Displays animated statistics with counter
 */
interface StatCardProps {
  label: string
  value: number
  suffix?: string
  prefix?: string
  index?: number
}

export function StatCard({ label, value, suffix = "", prefix = "", index = 0 }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 text-center"
    >
      <div className="text-4xl md:text-5xl font-bold text-white mb-2">
        {prefix}{value}{suffix}
      </div>
      <div className="text-slate-400">{label}</div>
    </motion.div>
  )
}
