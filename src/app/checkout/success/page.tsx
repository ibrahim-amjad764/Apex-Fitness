"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useSearchParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { 
  CheckCircle, 
  Download, 
  User, 
  Receipt, 
  Home, 
  Mail, 
  Clock,
  CreditCard,
  Shield,
  Check,
  ArrowRight
} from "lucide-react"
import { membershipPlans } from "@/app/membership/page"

console.log("[app/checkout/success] - Success page loaded")

export default function PaymentSuccessPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [isEmailSent, setIsEmailSent] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState<any>(null)
  const [paymentDetails, setPaymentDetails] = useState({
    amount: 0,
    transactionId: "",
    planId: "",
    isYearly: false,
    paymentMethod: "",
  })

  useEffect(() => {
    const planParam = searchParams.get("plan")
    const yearlyParam = searchParams.get("isYearly")
    const amountParam = searchParams.get("amount")
    const transactionIdParam = searchParams.get("transactionId")
    const paymentMethodParam = searchParams.get("paymentMethod")

    if (planParam) {
      const plan = membershipPlans.find((p) => p.id === planParam)
      setSelectedPlan(plan)
    }

    setPaymentDetails({
      amount: amountParam ? parseFloat(amountParam) : 0,
      transactionId: transactionIdParam || "",
      planId: planParam || "",
      isYearly: yearlyParam === "true",
      paymentMethod: paymentMethodParam || "card",
    })

    // Simulate sending confirmation email
    setTimeout(() => {
      setIsEmailSent(true)
    }, 1500)
  }, [searchParams])

  const handleDownloadReceipt = () => {
    // Simulate download
    alert("Receipt downloaded successfully!")
  }

  const handleViewMembership = () => {
    router.push("/membership")
  }

  const handleGoToDashboard = () => {
    router.push("/")
  }

  if (!selectedPlan) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Payment details not found</h1>
          <Button onClick={() => router.push("/membership")} variant="default">
            Back to Membership
          </Button>
        </div>
      </div>
    )
  }

  const period = paymentDetails.isYearly ? "year" : "month"

  const getPaymentMethodName = (method: string) => {
    switch (method) {
      case "card":
        return "Credit Card"
      case "paypal":
        return "PayPal"
      case "applepay":
        return "Apple Pay"
      default:
        return "Credit Card"
    }
  }

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-8 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-green-400 to-green-600 rounded-full mb-6"
            >
              <CheckCircle className="w-12 h-12 text-white" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Payment Successful!
            </h1>
            <p className="text-slate-400 text-lg">
              Welcome to Apex Fitness. Your membership is now active.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Success Content */}
      <section className="py-12 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column - Payment Details */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Membership Plan Card */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                      Membership Plan
                    </h2>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Your active subscription
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b border-slate-200 dark:border-slate-700">
                    <span className="text-slate-600 dark:text-slate-400">Plan Name</span>
                    <span className="font-semibold text-slate-900 dark:text-white">
                      {selectedPlan.name}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-slate-200 dark:border-slate-700">
                    <span className="text-slate-600 dark:text-slate-400">Billing Cycle</span>
                    <span className="font-semibold text-slate-900 dark:text-white">
                      {paymentDetails.isYearly ? "Yearly" : "Monthly"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-slate-200 dark:border-slate-700">
                    <span className="text-slate-600 dark:text-slate-400">Amount Paid</span>
                    <span className="font-bold text-2xl text-orange-500">
                      ${paymentDetails.amount}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <span className="text-slate-600 dark:text-slate-400">Status</span>
                    <span className="flex items-center gap-2 px-3 py-1 bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-400 text-sm font-semibold rounded-full">
                      <Check className="w-4 h-4" />
                      Active
                    </span>
                  </div>
                </div>
              </div>

              {/* Transaction Details Card */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl">
                    <Receipt className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                      Transaction Details
                    </h2>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Payment information
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b border-slate-200 dark:border-slate-700">
                    <span className="text-slate-600 dark:text-slate-400">Transaction ID</span>
                    <span className="font-mono text-sm font-semibold text-slate-900 dark:text-white">
                      {paymentDetails.transactionId}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-slate-200 dark:border-slate-700">
                    <span className="text-slate-600 dark:text-slate-400">Payment Method</span>
                    <span className="font-semibold text-slate-900 dark:text-white">
                      {getPaymentMethodName(paymentDetails.paymentMethod)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-slate-200 dark:border-slate-700">
                    <span className="text-slate-600 dark:text-slate-400">Payment Status</span>
                    <span className="flex items-center gap-2 px-3 py-1 bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-400 text-sm font-semibold rounded-full">
                      <Check className="w-4 h-4" />
                      Verified
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <span className="text-slate-600 dark:text-slate-400">Activation Date</span>
                    <span className="font-semibold text-slate-900 dark:text-white">
                      {new Date().toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Actions & Email */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              {/* Email Confirmation Card */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                      Confirmation Email
                    </h2>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Receipt sent to your email
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-slate-50 dark:bg-slate-900 rounded-xl mb-4">
                  {isEmailSent ? (
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  ) : (
                    <Clock className="w-6 h-6 text-orange-500 animate-spin" />
                  )}
                  <span className="text-slate-700 dark:text-slate-300">
                    {isEmailSent
                      ? "Confirmation email sent successfully!"
                      : "Sending confirmation email..."}
                  </span>
                </div>

                <p className="text-sm text-slate-500 dark:text-slate-400">
                  A detailed receipt and membership confirmation has been sent to your registered email address.
                </p>
              </div>

              {/* Security Badge Card */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-r from-green-500 to-green-600 rounded-xl">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                      Secure Payment
                    </h2>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Your payment is protected
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>256-bit SSL encryption</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>PCI DSS compliant</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Fraud detection enabled</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Payment verified & confirmed</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleDownloadReceipt}
                  className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-800 hover:to-slate-900 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg"
                >
                  <Download className="w-5 h-5" />
                  Download Receipt
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleViewMembership}
                  className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-orange-500/30"
                >
                  <User className="w-5 h-5" />
                  View Membership
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleGoToDashboard}
                  className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 hover:border-orange-500 dark:hover:border-orange-500 text-slate-900 dark:text-white font-semibold rounded-xl transition-all duration-300"
                >
                  <Home className="w-5 h-5" />
                  Go to Dashboard
                  <ArrowRight className="w-5 h-5 ml-auto" />
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Bottom Info Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 p-6 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-500/10 dark:to-red-500/10 rounded-2xl border border-orange-200 dark:border-orange-500/30"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <CreditCard className="w-6 h-6 text-orange-500" />
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">
                    Need help with your membership?
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Contact our support team anytime
                  </p>
                </div>
              </div>
              <Button variant="default" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                Contact Support
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
