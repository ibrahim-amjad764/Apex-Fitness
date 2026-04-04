"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { useBMICalculator } from "@/hooks/useBMICalculator"
import { Button } from "./button"
import { Calculator, RotateCcw, Info } from "lucide-react"

console.log("[components/ui/bmi-calculator] - BMI Calculator component loaded")

/**
 * BMI Calculator Component
 * Interactive tool for calculating Body Mass Index
 * Supports both metric (kg/cm) and imperial (lbs/ft-in) units
 */
export function BMICalculator() {
  const [unit, setUnit] = useState<"metric" | "imperial">("metric")
  const [weight, setWeight] = useState("")
  const [height, setHeight] = useState("")
  const [heightInches, setHeightInches] = useState("")
  const { bmi, result, calculateBMI, reset, isValid } = useBMICalculator()

  const handleCalculate = () => {
    const w = parseFloat(weight)
    const h = parseFloat(height)
    const hi = parseFloat(heightInches) || 0

    if (unit === "metric") {
      // Convert cm to meters
      calculateBMI(w, h / 100, "metric")
    } else {
      // Convert feet+inches to total inches
      const totalInches = (h * 12) + hi
      calculateBMI(w, totalInches, "imperial")
    }
  }

  const handleReset = () => {
    setWeight("")
    setHeight("")
    setHeightInches("")
    reset()
  }

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-xl">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-orange-500/10 rounded-xl">
          <Calculator className="w-6 h-6 text-orange-500" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            BMI Calculator
          </h3>
          <p className="text-sm text-slate-500">Check your body mass index</p>
        </div>
      </div>

      {/* Unit Toggle */}
      <div className="flex gap-2 mb-6 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl">
        <button
          onClick={() => {
            setUnit("metric")
            handleReset()
          }}
          className={cn(
            "flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all",
            unit === "metric"
              ? "bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm"
              : "text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
          )}
        >
          Metric (kg/cm)
        </button>
        <button
          onClick={() => {
            setUnit("imperial")
            handleReset()
          }}
          className={cn(
            "flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all",
            unit === "imperial"
              ? "bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm"
              : "text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
          )}
        >
          Imperial (lb/ft)
        </button>
      </div>

      {/* Input Fields */}
      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
            Weight ({unit === "metric" ? "kg" : "lbs"})
          </label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder={unit === "metric" ? "e.g., 70" : "e.g., 154"}
            className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
            Height ({unit === "metric" ? "cm" : "ft"})
          </label>
          <div className="flex gap-3">
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder={unit === "metric" ? "e.g., 175" : "e.g., 5"}
              className="flex-1 px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
            />
            {unit === "imperial" && (
              <input
                type="number"
                value={heightInches}
                onChange={(e) => setHeightInches(e.target.value)}
                placeholder="in"
                className="w-24 px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
              />
            )}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 mb-6">
        <Button
          onClick={handleCalculate}
          className="flex-1"
          leftIcon={<Calculator className="w-4 h-4" />}
        >
          Calculate
        </Button>
        <Button
          onClick={handleReset}
          variant="outline"
          leftIcon={<RotateCcw className="w-4 h-4" />}
        >
          Reset
        </Button>
      </div>

      {/* Result Display */}
      <AnimatePresence mode="wait">
        {result && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="p-6 rounded-2xl border-2"
            style={{ borderColor: result.color, backgroundColor: `${result.color}10` }}
          >
            <div className="text-center mb-4">
              <div className="text-5xl font-bold mb-2" style={{ color: result.color }}>
                {result.bmi}
              </div>
              <div className="text-lg font-semibold capitalize text-slate-900 dark:text-white">
                {result.category}
              </div>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-center leading-relaxed">
              {result.message}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Info Note */}
      <div className="mt-6 flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
        <Info className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
        <p className="text-xs text-slate-500 leading-relaxed">
          BMI is a screening tool, not a diagnostic of body fatness or health. 
          Consult with our trainers for a comprehensive fitness assessment.
        </p>
      </div>
    </div>
  )
}
