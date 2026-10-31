"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useSearchParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft, CreditCard, Clock, Check, Lock, Shield, AlertCircle, XCircle, Mail, Smartphone } from "lucide-react"
import { membershipPlans } from "@/app/membership/page"

console.log("[app/checkout] - Checkout page loaded")

export default function CheckoutPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [planId, setPlanId] = useState<string | null>(null)
  const [isYearly, setIsYearly] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState("card")

  // Form state
  const [formData, setFormData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardholderName: "",
    paypalEmail: "",
    paypalPassword: "",
    applePayDevice: "",
  })

  // Validation state
  const [validation, setValidation] = useState({
    cardNumber: { valid: false, error: "" },
    expiryDate: { valid: false, error: "" },
    cvv: { valid: false, error: "" },
    cardholderName: { valid: false, error: "" },
    paypalEmail: { valid: false, error: "" },
    paypalPassword: { valid: false, error: "" },
    applePayDevice: { valid: false, error: "" },
  })

  useEffect(() => {
    const planParam = searchParams.get("plan")
    const yearlyParam = searchParams.get("isYearly")
    if (planParam) setPlanId(planParam)
    if (yearlyParam) setIsYearly(yearlyParam === "true")
  }, [searchParams])

  const selectedPlan = membershipPlans.find((plan) => plan.id === planId)
  const price = selectedPlan ? (isYearly ? selectedPlan.yearlyPrice : selectedPlan.monthlyPrice) : 0
  const period = isYearly ? "year" : "month"

  // Validation functions
  const validateCardNumber = (value: string) => {
    const cleaned = value.replace(/\s/g, "")
    const isValid = /^\d{16}$/.test(cleaned)
    return {
      valid: isValid,
      error: isValid ? "" : "Please enter a valid 16-digit card number",
    }
  }

  const validateExpiryDate = (value: string) => {
    const regex = /^(0[1-9]|1[0-2])\/\d{2}$/
    const isValid = regex.test(value)
    return {
      valid: isValid,
      error: isValid ? "" : "Please enter a valid expiry date (MM/YY)",
    }
  }

  const validateCVV = (value: string) => {
    const isValid = /^\d{3,4}$/.test(value)
    return {
      valid: isValid,
      error: isValid ? "" : "Please enter a valid CVV (3-4 digits)",
    }
  }

  const validateCardholderName = (value: string) => {
    const isValid = value.trim().length >= 2
    return {
      valid: isValid,
      error: isValid ? "" : "Please enter the cardholder name",
    }
  }

  const validatePayPalEmail = (value: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const isValid = regex.test(value)
    return {
      valid: isValid,
      error: isValid ? "" : "Please enter a valid PayPal email address",
    }
  }

  const validatePayPalPassword = (value: string) => {
    const isValid = value.length >= 6
    return {
      valid: isValid,
      error: isValid ? "" : "Password must be at least 6 characters",
    }
  }

  const validateApplePayDevice = (value: string) => {
    const isValid = value.trim().length >= 2
    return {
      valid: isValid,
      error: isValid ? "" : "Please enter your device name",
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value })

    let validationResult
    switch (field) {
      case "cardNumber":
        validationResult = validateCardNumber(value)
        break
      case "expiryDate":
        validationResult = validateExpiryDate(value)
        break
      case "cvv":
        validationResult = validateCVV(value)
        break
      case "cardholderName":
        validationResult = validateCardholderName(value)
        break
      case "paypalEmail":
        validationResult = validatePayPalEmail(value)
        break
      case "paypalPassword":
        validationResult = validatePayPalPassword(value)
        break
      case "applePayDevice":
        validationResult = validateApplePayDevice(value)
        break
    }

    setValidation({ ...validation, [field]: validationResult })
  }

  const isFormValid = () => {
    switch (paymentMethod) {
      case "card":
        return validation.cardNumber.valid && validation.expiryDate.valid && validation.cvv.valid && validation.cardholderName.valid
      case "paypal":
        return validation.paypalEmail.valid && validation.paypalPassword.valid
      case "applepay":
        return validation.applePayDevice.valid
      default:
        return false
    }
  }

  const handlePayment = async () => {
    setIsProcessing(true)
    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsProcessing(false)
    
    // Generate transaction data
    const transactionId = "TXN" + Date.now()
    const redirectUrl = `/checkout/success?plan=${planId}&isYearly=${isYearly}&amount=${price}&transactionId=${transactionId}&paymentMethod=${paymentMethod}`
    router.push(redirectUrl)
  }

  if (!selectedPlan) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Plan not found</h1>
          <Button onClick={() => router.push("/membership")} variant="default">
            Back to Membership
          </Button>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-8 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => router.push("/membership")}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Plans
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Complete Your Membership
            </h1>
            <p className="text-slate-400 text-lg">
              Review your plan details and complete your purchase securely
            </p>
          </motion.div>
        </div>
      </section>

      {/* Checkout Content */}
      <section className="py-12 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Plan Summary Card */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-lg">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {selectedPlan.name} Plan
                  </h2>
                  <div className="px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-semibold rounded-full">
                    {selectedPlan.popular ? "Most Popular" : "Standard"}
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between text-slate-600 dark:text-slate-400">
                    <span>Plan Type</span>
                    <span className="font-medium text-slate-900 dark:text-white">{isYearly ? "Yearly" : "Monthly"}</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-600 dark:text-slate-400">
                    <span>Billing Cycle</span>
                    <span className="font-medium text-slate-900 dark:text-white">{period}</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-600 dark:text-slate-400">
                    <span>Price</span>
                    <span className="font-bold text-2xl text-orange-500">${price}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Included Features</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {selectedPlan.features.slice(0, 6).map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Payment Method Selection */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-lg">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Payment Method</h2>
                <div className="space-y-3">
                  {[
                    { id: "card", label: "Credit Card", icon: CreditCard },
                    { id: "paypal", label: "PayPal", icon: Mail },
                    { id: "applepay", label: "Apple Pay", icon: Smartphone },
                  ].map((method) => (
                    <motion.button
                      key={method.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setPaymentMethod(method.id)}
                      className={`w-full flex items-center gap-4 p-4 rounded-xl border-2 transition-all ${
                        paymentMethod === method.id
                          ? "border-orange-500 bg-orange-50 dark:bg-orange-500/10"
                          : "border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600"
                      }`}
                    >
                      <method.icon className="w-6 h-6 text-slate-600 dark:text-slate-400" />
                      <span className="font-medium text-slate-900 dark:text-white">{method.label}</span>
                      {paymentMethod === method.id && (
                        <Check className="w-5 h-5 text-orange-500 ml-auto" />
                      )}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Card Details (if card selected) */}
              {paymentMethod === "card" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-lg"
                >
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Card Details</h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Card Number
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="1234 5678 9012 3456"
                          value={formData.cardNumber}
                          onChange={(e) => handleInputChange("cardNumber", e.target.value)}
                          className={`w-full px-4 py-3 pr-10 bg-slate-50 dark:bg-slate-900 border rounded-xl text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all ${
                            validation.cardNumber.valid
                              ? "border-green-500 focus:border-green-500"
                              : validation.cardNumber.error
                              ? "border-red-500 focus:border-red-500"
                              : "border-slate-200 dark:border-slate-700 focus:border-orange-500"
                          }`}
                        />
                        {validation.cardNumber.valid && (
                          <Check className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500" />
                        )}
                        {validation.cardNumber.error && (
                          <XCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-red-500" />
                        )}
                      </div>
                      {validation.cardNumber.error && (
                        <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {validation.cardNumber.error}
                        </p>
                      )}
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                          Expiry Date
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            placeholder="MM/YY"
                            value={formData.expiryDate}
                            onChange={(e) => handleInputChange("expiryDate", e.target.value)}
                            className={`w-full px-4 py-3 pr-10 bg-slate-50 dark:bg-slate-900 border rounded-xl text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all ${
                              validation.expiryDate.valid
                                ? "border-green-500 focus:border-green-500"
                                : validation.expiryDate.error
                                ? "border-red-500 focus:border-red-500"
                                : "border-slate-200 dark:border-slate-700 focus:border-orange-500"
                            }`}
                          />
                          {validation.expiryDate.valid && (
                            <Check className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500" />
                          )}
                          {validation.expiryDate.error && (
                            <XCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-red-500" />
                          )}
                        </div>
                        {validation.expiryDate.error && (
                          <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                            <AlertCircle className="w-4 h-4" />
                            {validation.expiryDate.error}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                          CVV
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            placeholder="123"
                            value={formData.cvv}
                            onChange={(e) => handleInputChange("cvv", e.target.value)}
                            className={`w-full px-4 py-3 pr-10 bg-slate-50 dark:bg-slate-900 border rounded-xl text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all ${
                              validation.cvv.valid
                                ? "border-green-500 focus:border-green-500"
                                : validation.cvv.error
                                ? "border-red-500 focus:border-red-500"
                                : "border-slate-200 dark:border-slate-700 focus:border-orange-500"
                            }`}
                          />
                          {validation.cvv.valid && (
                            <Check className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500" />
                          )}
                          {validation.cvv.error && (
                            <XCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-red-500" />
                          )}
                        </div>
                        {validation.cvv.error && (
                          <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                            <AlertCircle className="w-4 h-4" />
                            {validation.cvv.error}
                          </p>
                        )}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Cardholder Name
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="John Doe"
                          value={formData.cardholderName}
                          onChange={(e) => handleInputChange("cardholderName", e.target.value)}
                          className={`w-full px-4 py-3 pr-10 bg-slate-50 dark:bg-slate-900 border rounded-xl text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all ${
                            validation.cardholderName.valid
                              ? "border-green-500 focus:border-green-500"
                              : validation.cardholderName.error
                              ? "border-red-500 focus:border-red-500"
                              : "border-slate-200 dark:border-slate-700 focus:border-orange-500"
                          }`}
                        />
                        {validation.cardholderName.valid && (
                          <Check className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500" />
                        )}
                        {validation.cardholderName.error && (
                          <XCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-red-500" />
                        )}
                      </div>
                      {validation.cardholderName.error && (
                        <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {validation.cardholderName.error}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* PayPal Details (if PayPal selected) */}
              {paymentMethod === "paypal" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-lg"
                >
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">PayPal Details</h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        PayPal Email
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          placeholder="your@email.com"
                          value={formData.paypalEmail}
                          onChange={(e) => handleInputChange("paypalEmail", e.target.value)}
                          className={`w-full px-4 py-3 pr-10 bg-slate-50 dark:bg-slate-900 border rounded-xl text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all ${
                            validation.paypalEmail.valid
                              ? "border-green-500 focus:border-green-500"
                              : validation.paypalEmail.error
                              ? "border-red-500 focus:border-red-500"
                              : "border-slate-200 dark:border-slate-700 focus:border-orange-500"
                          }`}
                        />
                        {validation.paypalEmail.valid && (
                          <Check className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500" />
                        )}
                        {validation.paypalEmail.error && (
                          <XCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-red-500" />
                        )}
                      </div>
                      {validation.paypalEmail.error && (
                        <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {validation.paypalEmail.error}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        PayPal Password
                      </label>
                      <div className="relative">
                        <input
                          type="password"
                          placeholder="••••••••"
                          value={formData.paypalPassword}
                          onChange={(e) => handleInputChange("paypalPassword", e.target.value)}
                          className={`w-full px-4 py-3 pr-10 bg-slate-50 dark:bg-slate-900 border rounded-xl text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all ${
                            validation.paypalPassword.valid
                              ? "border-green-500 focus:border-green-500"
                              : validation.paypalPassword.error
                              ? "border-red-500 focus:border-red-500"
                              : "border-slate-200 dark:border-slate-700 focus:border-orange-500"
                          }`}
                        />
                        {validation.paypalPassword.valid && (
                          <Check className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500" />
                        )}
                        {validation.paypalPassword.error && (
                          <XCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-red-500" />
                        )}
                      </div>
                      {validation.paypalPassword.error && (
                        <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {validation.paypalPassword.error}
                        </p>
                      )}
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-500/10 rounded-xl border border-blue-200 dark:border-blue-500/30">
                      <p className="text-sm text-blue-700 dark:text-blue-400">
                        <Shield className="w-4 h-4 inline mr-2" />
                        Your PayPal account will be charged securely. You'll receive a confirmation email after payment.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Apple Pay Details (if Apple Pay selected) */}
              {paymentMethod === "applepay" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-lg"
                >
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Apple Pay Details</h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Device Name
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="iPhone 15 Pro"
                          value={formData.applePayDevice}
                          onChange={(e) => handleInputChange("applePayDevice", e.target.value)}
                          className={`w-full px-4 py-3 pr-10 bg-slate-50 dark:bg-slate-900 border rounded-xl text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all ${
                            validation.applePayDevice.valid
                              ? "border-green-500 focus:border-green-500"
                              : validation.applePayDevice.error
                              ? "border-red-500 focus:border-red-500"
                              : "border-slate-200 dark:border-slate-700 focus:border-orange-500"
                          }`}
                        />
                        {validation.applePayDevice.valid && (
                          <Check className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500" />
                        )}
                        {validation.applePayDevice.error && (
                          <XCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-red-500" />
                        )}
                      </div>
                      {validation.applePayDevice.error && (
                        <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {validation.applePayDevice.error}
                        </p>
                      )}
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
                      <div className="flex items-center gap-3 mb-3">
                        <Smartphone className="w-6 h-6 text-slate-600 dark:text-slate-400" />
                        <div>
                          <p className="font-semibold text-slate-900 dark:text-white">Apple Pay</p>
                          <p className="text-sm text-slate-500 dark:text-slate-400">Secure payment via Face ID or Touch ID</p>
                        </div>
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Complete your purchase using Apple Pay on your iPhone, iPad, or Mac. Your payment information is securely stored in your Apple Wallet.
                      </p>
                    </div>
                    <div className="p-4 bg-green-50 dark:bg-green-500/10 rounded-xl border border-green-200 dark:border-green-500/30">
                      <p className="text-sm text-green-700 dark:text-green-400">
                        <Lock className="w-4 h-4 inline mr-2" />
                        Apple Pay uses Face ID, Touch ID, or your device passcode for secure authentication.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>

            {/* Right Column - Order Summary */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-1"
            >
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-lg sticky top-8">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Order Summary</h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-slate-600 dark:text-slate-400">
                    <span>{selectedPlan.name} Plan ({period})</span>
                    <span className="font-medium text-slate-900 dark:text-white">${price}</span>
                  </div>
                  <div className="flex justify-between text-slate-600 dark:text-slate-400">
                    <span>Joining Fee</span>
                    <span className="font-medium text-green-500">Waived</span>
                  </div>
                  <div className="flex justify-between text-slate-600 dark:text-slate-400">
                    <span>Tax</span>
                    <span className="font-medium text-slate-900 dark:text-white">$0.00</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 dark:border-slate-700 mb-6">
                  <div className="flex justify-between text-lg font-bold text-slate-900 dark:text-white mb-2">
                    <span>Total</span>
                    <span className="text-orange-500">${price}</span>
                  </div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    You will be charged ${price} {period === "month" ? "monthly" : "yearly"}
                  </p>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <Lock className="w-4 h-4 text-green-500" />
                    <span>Secure 256-bit SSL encryption</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <Shield className="w-4 h-4 text-green-500" />
                    <span>Protected by fraud detection</span>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handlePayment}
                  disabled={!isFormValid() || isProcessing}
                  className="w-full py-4 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-orange-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isProcessing ? (
                    <span className="flex items-center justify-center gap-2">
                      <Clock className="w-5 h-5 animate-spin" />
                      Processing...
                    </span>
                  ) : (
                    `Confirm & Pay $${price}`
                  )}
                </motion.button>

                <p className="text-xs text-slate-500 dark:text-slate-400 text-center">
                  By clicking "Confirm & Pay", you agree to our Terms of Service and Privacy Policy
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
