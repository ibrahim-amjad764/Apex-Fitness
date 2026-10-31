import type { ReactNode } from "react"

// Type definitions for the Apex Fitness application

console.log("[types/index] - Type definitions loaded")

// Trainer profile type definition
export interface Trainer {
  id: string
  name: string
  role: string
  image: string
  bio: string
  specialties: string[]
  experience: number
  socialLinks: {
    instagram?: string
    twitter?: string
    linkedin?: string
  }
  certifications: string[]
}

// Service offering type definition
export interface Service {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  features: string[]
  price: string
  duration: string
}

// Membership plan type definition
export interface MembershipPlan {
  id: string
  name: string
  description: string
  monthlyPrice: number
  yearlyPrice: number
  features: string[]
  popular?: boolean
  badge?: string
}

// Testimonial type definition
export interface Testimonial {
  id: string
  name: string
  role: string
  image: string
  content: string
  rating: number
  date: string
}

// Blog article type definition
export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  image: string
  author: string
  date: string
  category: string
  readTime: number
  tags: string[]
}

// FAQ item type definition
export interface FAQItem {
  id: string
  question: string
  answer: string
  category: string
}

// Contact form data type
export interface ContactFormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

// Class schedule type
export interface ClassSchedule {
  id: string
  className: string
  instructor: string
  day: string
  time: string
  duration: number
  capacity: number
  enrolled: number
  level: "beginner" | "intermediate" | "advanced"
}

// BMI calculation result type
export interface BMIResult {
  bmi: number
  category: "underweight" | "normal" | "overweight" | "obese"
  message: string
  color: string
}

// Stats counter type
export interface StatItem {
  id: string
  label: string
  value: number
  suffix?: string
  prefix?: string
}

// Navigation link type
export interface NavLink {
  label: string
  href: string
  children?: NavLink[]
}

// Feature highlight type
export interface Feature {
  id: string
  title: string
  description: string
  icon: ReactNode
}

// Social media link type
export interface SocialLink {
  platform: string
  url: string
  icon: string
}
