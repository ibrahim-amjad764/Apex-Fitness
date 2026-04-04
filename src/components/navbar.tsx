"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "@/contexts/theme"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import { cn } from "@/lib/utils"
import {
  Menu,
  X,
  Sun,
  Moon,
  Dumbbell,
  ChevronDown,
} from "lucide-react"
import type { NavLink } from "@/types"

console.log("[components/navbar] - Navbar component loaded")

// Navigation links configuration
const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Membership", href: "/membership" },
  { label: "Trainers", href: "/trainers" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
]

/**
 * Sticky animated navbar with blur effect
 * Features: glassmorphism, theme toggle, mobile menu, scroll-based styling changes
 */
export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, toggleTheme } = useTheme()
  const { isScrolled } = useScrollAnimation(50)
  const pathname = usePathname()

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  console.log(`[components/navbar] - Rendered, theme: ${resolvedTheme}, scrolled: ${isScrolled}`)

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl shadow-lg shadow-black/5"
            : "bg-transparent"
        )}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className={cn(
                  "p-2.5 rounded-xl transition-colors",
                  isScrolled
                    ? "bg-orange-500 text-white"
                    : "bg-white/10 dark:bg-white/10 backdrop-blur-sm text-white"
                )}
              >
                <Dumbbell className="w-6 h-6" />
              </motion.div>
              <div className="hidden sm:block">
                <span
                  className={cn(
                    "text-xl font-bold tracking-tight transition-colors",
                    isScrolled
                      ? "text-slate-900 dark:text-white"
                      : "text-white"
                  )}
                >
                  APEX
                </span>
                <span
                  className={cn(
                    "text-xl font-light tracking-tight transition-colors",
                    isScrolled
                      ? "text-orange-500"
                      : "text-orange-400"
                  )}
                >
                  FITNESS
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="relative hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium transition-colors rounded-lg",
                    isScrolled
                      ? "text-slate-600 hover:text-orange-500 dark:text-slate-300 dark:hover:text-orange-400"
                      : "text-white/80 hover:text-white"
                  )}
                >
                  {pathname === link.href && (
                    <motion.span
                      layoutId="navbar-active"
                      className={cn(
                        "absolute inset-0 rounded-lg",
                        isScrolled
                          ? "bg-orange-500/10"
                          : "bg-white/10"
                      )}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-2">
              {/* Theme Toggle */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleTheme}
                className={cn(
                  "p-2.5 rounded-xl transition-colors",
                  isScrolled
                    ? "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                    : "text-white/80 hover:bg-white/10"
                )}
                aria-label={mounted ? `Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode` : "Toggle theme"}
              >
                <AnimatePresence mode="wait">
                  {mounted ? (
                    <motion.div
                      key={resolvedTheme}
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 20, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {resolvedTheme === "dark" ? (
                        <Sun className="w-5 h-5" />
                      ) : (
                        <Moon className="w-5 h-5" />
                      )}
                    </motion.div>
                  ) : (
                    <div className="w-5 h-5" />
                  )}
                </AnimatePresence>
              </motion.button>

              {/* CTA Button - Desktop */}
              <Link
                href="/membership"
                className={cn(
                  "hidden md:flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all",
                  isScrolled
                    ? "bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/25"
                    : "bg-white text-slate-900 hover:bg-white/90"
                )}
              >
                Join Now
              </Link>

              {/* Mobile Menu Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={cn(
                  "lg:hidden p-2.5 rounded-xl transition-colors",
                  isScrolled
                    ? "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                    : "text-white/80 hover:bg-white/10"
                )}
                aria-label="Toggle menu"
                aria-expanded={isMobileMenuOpen}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={isMobileMenuOpen ? "close" : "menu"}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {isMobileMenuOpen ? (
                      <X className="w-6 h-6" />
                    ) : (
                      <Menu className="w-6 h-6" />
                    )}
                  </motion.div>
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white dark:bg-slate-950 z-50 lg:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Header */}
                <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-800">
                  <Link href="/" className="flex items-center gap-3">
                    <div className="p-2 bg-orange-500 rounded-xl">
                      <Dumbbell className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-xl font-bold text-slate-900 dark:text-white">
                      APEX<span className="text-orange-500">FITNESS</span>
                    </span>
                  </Link>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 rounded-lg transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Mobile Navigation Links */}
                <nav className="flex-1 overflow-y-auto p-4">
                  <div className="space-y-2">
                    {navLinks.map((link, index) => (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          href={link.href}
                          className={cn(
                            "flex items-center justify-between p-4 rounded-xl font-medium transition-all",
                            pathname === link.href
                              ? "bg-orange-500 text-white"
                              : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                          )}
                        >
                          {link.label}
                          <ChevronDown
                            className={cn(
                              "w-5 h-5 transition-transform",
                              pathname === link.href ? "rotate-180" : "-rotate-90"
                            )}
                          />
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </nav>

                {/* Mobile CTA */}
                <div className="p-4 border-t border-slate-200 dark:border-slate-800">
                  <Link
                    href="/membership"
                    className="flex items-center justify-center gap-2 w-full p-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-colors"
                  >
                    Join Now
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
