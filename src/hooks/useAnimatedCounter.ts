// Custom hook for animated counter functionality
// Optimized animation frame handling with intersection observer for performance

"use client"

import { useState, useEffect, useRef, useCallback } from "react"

console.log("[hooks/useAnimatedCounter] - Hook loaded")

interface UseAnimatedCounterOptions {
  start?: number
  end: number
  duration?: number
  delay?: number
  decimals?: number
}

/**
 * Custom hook for creating animated number counters
 * Uses Intersection Observer to trigger animation only when visible (performance optimization)
 * Uses requestAnimationFrame for smooth 60fps animation
 * 
 * @param options - Configuration for the counter animation
 * @returns Object containing current value and visibility state
 */
export function useAnimatedCounter({
  start = 0,
  end,
  duration = 2000,
  delay = 0,
  decimals = 0,
}: UseAnimatedCounterOptions) {
  const [count, setCount] = useState(start)
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  // Intersection Observer setup to detect when element is visible
  useEffect(() => {
    console.log("[hooks/useAnimatedCounter] - Setting up Intersection Observer")
    
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            console.log("[hooks/useAnimatedCounter] - Element visible, starting animation")
            setIsVisible(true)
            hasAnimated.current = true
          }
        })
      },
      { threshold: 0.3 }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [])

  // Animation logic using requestAnimationFrame
  const animate = useCallback(() => {
    const startTime = performance.now()
    const startValue = start
    const endValue = end
    const diff = endValue - startValue

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime - delay

      if (elapsed < 0) {
        requestAnimationFrame(step)
        return
      }

      const progress = Math.min(elapsed / duration, 1)
      
      // Easing function: easeOutExpo for smooth deceleration
      const easeOutExpo = 1 - Math.pow(2, -10 * progress)
      
      const currentValue = startValue + diff * easeOutExpo
      
      setCount(Number(currentValue.toFixed(decimals)))

      if (progress < 1) {
        requestAnimationFrame(step)
      } else {
        setCount(endValue)
        console.log(`[hooks/useAnimatedCounter] - Animation complete: ${endValue}`)
      }
    }

    requestAnimationFrame(step)
  }, [start, end, duration, delay, decimals])

  // Trigger animation when visible
  useEffect(() => {
    if (isVisible) {
      animate()
    }
  }, [isVisible, animate])

  return { count, elementRef, isVisible }
}
