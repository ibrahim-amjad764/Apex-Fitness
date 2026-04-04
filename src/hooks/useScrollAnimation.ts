// Custom hook for scroll-based animations and parallax effects
// Provides scroll position, direction, and progress for various animations

"use client"

import { useState, useEffect, useRef, useCallback } from "react"

console.log("[hooks/useScrollAnimation] - Hook loaded")

interface ScrollState {
  scrollY: number
  scrollX: number
  scrollProgress: number
  scrollDirection: "up" | "down" | null
  isScrolled: boolean
}

/**
 * Custom hook for tracking scroll position and animations
 * Throttled scroll handler for performance optimization
 * Returns scroll state with position, progress, and direction
 */
export function useScrollAnimation(threshold = 50) {
  const [scrollState, setScrollState] = useState<ScrollState>({
    scrollY: 0,
    scrollX: 0,
    scrollProgress: 0,
    scrollDirection: null,
    isScrolled: false,
  })

  const lastScrollY = useRef(0)
  const ticking = useRef(false)

  const updateScrollState = useCallback(() => {
    const currentScrollY = window.scrollY
    const currentScrollX = window.scrollX
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight
    const scrollProgress = documentHeight > 0 ? (currentScrollY / documentHeight) * 100 : 0
    
    const direction = currentScrollY > lastScrollY.current ? "down" : "up"
    
    setScrollState({
      scrollY: currentScrollY,
      scrollX: currentScrollX,
      scrollProgress,
      scrollDirection: currentScrollY === lastScrollY.current ? null : direction,
      isScrolled: currentScrollY > threshold,
    })

    lastScrollY.current = currentScrollY
    ticking.current = false
  }, [threshold])

  useEffect(() => {
    console.log("[hooks/useScrollAnimation] - Initializing scroll listener")
    
    const handleScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(updateScrollState)
        ticking.current = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    
    // Initial state
    updateScrollState()

    return () => {
      window.removeEventListener("scroll", handleScroll)
      console.log("[hooks/useScrollAnimation] - Scroll listener removed")
    }
  }, [updateScrollState])

  return scrollState
}

/**
 * Hook for parallax effect calculations
 * @param speed - Parallax speed multiplier (0.1 to 1.0)
 * @returns Object with transform style for parallax
 */
export function useParallax(speed = 0.5) {
  const elementRef = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    console.log(`[hooks/useParallax] - Initializing with speed: ${speed}`)
    
    const handleScroll = () => {
      if (!elementRef.current) return
      
      const rect = elementRef.current.getBoundingClientRect()
      const scrolled = window.scrollY
      const elementTop = rect.top + scrolled
      const relativeScroll = scrolled - elementTop + window.innerHeight
      
      if (relativeScroll > 0 && relativeScroll < window.innerHeight + rect.height) {
        setOffset(relativeScroll * speed * 0.1)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [speed])

  return { ref: elementRef, offset, style: { transform: `translateY(${offset}px)` } }
}
