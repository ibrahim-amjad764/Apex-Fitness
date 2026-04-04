// Custom hook for BMI (Body Mass Index) calculations
// Calculates BMI and provides category classification with health recommendations

"use client"

import { useState, useCallback } from "react"
import type { BMIResult } from "@/types"

console.log("[hooks/useBMICalculator] - Hook loaded")

interface UseBMICalculatorReturn {
  bmi: number | null
  result: BMIResult | null
  calculateBMI: (weight: number, height: number, unit?: "metric" | "imperial") => void
  reset: () => void
  isValid: boolean
}

/**
 * Custom hook for BMI calculation and classification
 * Supports both metric (kg/m) and imperial (lbs/ft) units
 * Returns BMI value, category classification, and health recommendations
 */
export function useBMICalculator(): UseBMICalculatorReturn {
  const [bmi, setBmi] = useState<number | null>(null)
  const [result, setResult] = useState<BMIResult | null>(null)
  const [isValid, setIsValid] = useState(false)

  /**
   * Calculate BMI and determine health category
   * @param weight - Weight in kg (metric) or lbs (imperial)
   * @param height - Height in meters (metric) or inches (imperial)
   * @param unit - Unit system: "metric" or "imperial"
   */
  const calculateBMI = useCallback((
    weight: number, 
    height: number, 
    unit: "metric" | "imperial" = "metric"
  ) => {
    console.log(`[hooks/useBMICalculator] - Calculating BMI: ${weight}${unit === "metric" ? "kg" : "lbs"}, ${height}${unit === "metric" ? "m" : "in"}`)

    // Validation
    if (weight <= 0 || height <= 0) {
      console.log("[hooks/useBMICalculator] - Invalid input values")
      setIsValid(false)
      return
    }

    let calculatedBMI: number

    if (unit === "metric") {
      // Metric: BMI = weight(kg) / height(m)²
      calculatedBMI = weight / (height * height)
    } else {
      // Imperial: BMI = 703 × weight(lbs) / height(in)²
      calculatedBMI = 703 * weight / (height * height)
    }

    calculatedBMI = Math.round(calculatedBMI * 10) / 10
    setBmi(calculatedBMI)
    setIsValid(true)

    // Determine category and recommendations
    let category: BMIResult["category"]
    let message: string
    let color: string

    if (calculatedBMI < 18.5) {
      category = "underweight"
      message = "You're underweight. Consider consulting a nutritionist for a balanced diet plan to reach a healthy weight."
      color = "#3b82f6" // blue
    } else if (calculatedBMI < 25) {
      category = "normal"
      message = "Great job! Your weight is in the healthy range. Keep maintaining your balanced lifestyle."
      color = "#22c55e" // green
    } else if (calculatedBMI < 30) {
      category = "overweight"
      message = "You're slightly above the ideal range. Regular exercise and portion control can help."
      color = "#f59e0b" // orange
    } else {
      category = "obese"
      message = "Your BMI suggests obesity. We recommend consulting a healthcare provider for a personalized plan."
      color = "#ef4444" // red
    }

    const bmiResult: BMIResult = {
      bmi: calculatedBMI,
      category,
      message,
      color,
    }

    setResult(bmiResult)
    console.log(`[hooks/useBMICalculator] - Result: BMI ${calculatedBMI}, Category: ${category}`)
  }, [])

  /**
   * Reset calculator state
   */
  const reset = useCallback(() => {
    console.log("[hooks/useBMICalculator] - Resetting calculator")
    setBmi(null)
    setResult(null)
    setIsValid(false)
  }, [])

  return {
    bmi,
    result,
    calculateBMI,
    reset,
    isValid,
  }
}
