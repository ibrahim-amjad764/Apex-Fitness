"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useMotionValue, useTransform, PanInfo } from "framer-motion"
import { MessageCircle, X, Send, Minimize2, Maximize2, User, Bot, Dumbbell, ChevronUp, ChevronDown, ArrowDown } from "lucide-react"
import { cn } from "@/lib/utils"

console.log("[components/chatbot] - Chatbot component loaded")

// Suggestion messages for proactive outreach
const suggestions = [
  "Looking for the perfect membership plan? ",
  "Need help choosing the right workout?",
  "Want to explore our personal training services?",
]

// Quick reply options
const quickReplies = [
  { label: "Membership Plans", action: "membership" },
  { label: "Personal Training", action: "training" },
  { label: "Workout Plans", action: "workouts" },
  { label: "Contact Us", action: "contact" },
]

// Message type
interface Message {
  id: string
  content: string
  sender: "user" | "bot"
  timestamp: Date
}

/**
 * Premium AI Chatbot Component
 * Features: Floating button, proactive suggestions, smooth animations, quick replies, swipe gestures
 */
export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [currentSuggestion, setCurrentSuggestion] = useState<number | null>(null)
  const [suggestionDismissed, setSuggestionDismissed] = useState(false)
  const [dragDirection, setDragDirection] = useState<"up" | "down" | null>(null)

  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const chatWindowRef = useRef<HTMLDivElement>(null)
  const messagesContainerRef = useRef<HTMLDivElement>(null)

  const y = useMotionValue(0)
  const opacity = useTransform(y, [-100, 0], [0, 1])

  const handleDragEnd = (_: any, info: PanInfo) => {
    const threshold = 50
    if (info.offset.y < -threshold) {
      // Swiped up - open chat
      setIsOpen(true)
      setIsMinimized(false)
    } else if (info.offset.y > threshold) {
      // Swiped down - close or minimize
      if (isOpen) {
        setIsMinimized(true)
      } else {
        setIsOpen(false)
      }
    }
    y.set(0)
  }

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    })
  }, [messages, isTyping])

  // Manual scroll functions
  const scrollToTop = () => {
    messagesContainerRef.current?.scrollTo({ top: 0, behavior: "smooth" })
  }

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }


  // Proactive suggestion timing
  useEffect(() => {
    if (isOpen || suggestionDismissed) return

    const suggestionTimings = [5000, 25000, 55000] // 5s, 25s (5+20), 55s (25+30)

    suggestionTimings.forEach((timing, index) => {
      const timer = setTimeout(() => {
        if (!isOpen && !suggestionDismissed) {
          setCurrentSuggestion(index)
          // Auto-hide after 6 seconds
          setTimeout(() => {
            setCurrentSuggestion(null)
          }, 6000)
        }
      }, timing)

      return () => clearTimeout(timer)
    })
  }, [isOpen, suggestionDismissed])

  // Stop suggestions when chat opens
  useEffect(() => {
    if (isOpen) {
      setCurrentSuggestion(null)
    }
  }, [isOpen])

  // Welcome message on first open
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage: Message = {
        id: Date.now().toString(),
        content: "Hi there!  I'm your Apex Fitness assistant. How can I help you today? Feel free to ask about memberships, training, or anything else!",
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages([welcomeMessage])
    }
  }, [isOpen, messages.length])

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && !isMinimized) {
      setTimeout(() => inputRef.current?.focus(), 300)
    }
  }, [isOpen, isMinimized])

  const handleSendMessage = (content: string) => {
    if (!content.trim()) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      sender: "user",
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, userMessage])
    setInputValue("")

    // Show typing indicator
    setIsTyping(true)

    // Simulate bot response (since no backend is configured)
    setTimeout(() => {
      setIsTyping(false)
      const botResponse = generateBotResponse(content)
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: botResponse,
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botMessage])
    }, 1000 + Math.random() * 500)
  }

  const generateBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase()

    if (lowerMessage.includes("membership") || lowerMessage.includes("plan") || lowerMessage.includes("price")) {
      return "We offer three membership tiers: Basic ($29/mo), Pro ($59/mo), and Elite ($99/mo). The Pro plan is our most popular, offering unlimited classes and personal training sessions. Would you like me to help you compare the plans?"
    }

    if (lowerMessage.includes("train") || lowerMessage.includes("personal")) {
      return "Our certified personal trainers create customized workout plans tailored to your goals. Sessions start at $79 and include progress tracking and nutritional guidance. Would you like to learn more about our trainers?"
    }

    if (lowerMessage.includes("workout") || lowerMessage.includes("exercise")) {
      return "We have 100+ weekly classes including HIIT, yoga, strength training, and more! Our trainers can also create personalized workout plans. What type of workout are you interested in?"
    }

    if (lowerMessage.includes("contact") || lowerMessage.includes("location") || lowerMessage.includes("hours")) {
      return "We're located at 123 Fitness Street, Gym City, GC 12345. Our gym is open 24/7 for members, and our staff is available from 5 AM to 11 PM daily. You can reach us at +1 (555) 123-4567 or info@apexfitness.com."
    }

    if (lowerMessage.includes("hello") || lowerMessage.includes("hi")) {
      return "Hello! Welcome to Apex Fitness! I'm here to help you with membership inquiries, training programs, class schedules, or any other questions you might have. What would you like to know?"
    }

    // Default response
    return "I'd be happy to help with that! For more detailed information, I recommend exploring our website or contacting our team directly. You can also ask me about memberships, personal training, workout classes, or our facilities."
  }

  const handleQuickReply = (action: string) => {
    let message = ""
    switch (action) {
      case "membership":
        message = "Tell me about your membership plans"
        break
      case "training":
        message = "What personal training options do you offer?"
        break
      case "workouts":
        message = "What workout programs are available?"
        break
      case "contact":
        message = "How can I contact Apex Fitness?"
        break
    }
    handleSendMessage(message)
  }

  const handleSuggestionClick = (suggestion: string) => {
    setSuggestionDismissed(true)
    setIsOpen(true)
    setTimeout(() => {
      handleSendMessage(suggestion)
    }, 500)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage(inputValue)
    }
  }

  return (
    <>
      {/* Collapsed Chat Icon (Swipe to Open) */}
      <AnimatePresence>
        {!isOpen && !isMinimized && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-24 right-6 z-40"
          >
            {/* <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(true)}
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg shadow-orange-500/20 p-3 border border-orange-200 dark:border-orange-900/30 cursor-pointer"
            > */}
              {/* <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                  <Dumbbell className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Chat with us</span>
                <ChevronUp className="w-4 h-4 text-orange-500" />
              </div> */}
            {/* </motion.div> */}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Chat Button */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20, delay: 1 }}
        className="fixed bottom-6 right-6 z-50"
      >
        {/* Proactive Suggestion Bubble */}
        <AnimatePresence>
          {currentSuggestion !== null && !isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="absolute bottom-full right-0 mb-4 w-72 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl shadow-orange-500/20 p-4 border border-orange-200 dark:border-orange-900/30"
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {suggestions[currentSuggestion]}
                  </p>
                </div>
                <button
                  onClick={() => {
                    setCurrentSuggestion(null)
                    setSuggestionDismissed(true)
                  }}
                  className="flex-shrink-0 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                  aria-label="Dismiss suggestion"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <motion.button
                onClick={() => handleSuggestionClick(suggestions[currentSuggestion])}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-3 w-full py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-medium rounded-xl transition-all duration-300"
              >
                Let's Chat
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Chat Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "relative flex items-center justify-center w-16 h-16 rounded-full shadow-lg transition-all duration-300",
            isOpen
              ? "bg-gradient-to-br from-slate-700 to-slate-800 dark:from-slate-600 dark:to-slate-700 text-white"
              : "bg-gradient-to-br from-orange-500 to-red-500 text-white shadow-orange-500/30"
          )}
          aria-label={isOpen ? "Close chat" : "Open chat"}
        >
          {/* Pulse Animation when closed */}
          {!isOpen && (
            <>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-500 to-red-500 opacity-75"
              />
              <motion.span
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-500 to-red-500 opacity-50"
              />
            </>
          )}

          {isOpen ? (
            <X className="w-6 h-6 relative z-10" />
          ) : (
            <MessageCircle className="w-6 h-6 relative z-10" />
          )}
        </motion.button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={chatWindowRef}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
            style={{ y, opacity }}

            className={cn(
              "fixed bottom-24 right-6 z-50 flex flex-col w-[calc(100%-3rem)] sm:w-96 bg-white dark:bg-slate-900 rounded-3xl shadow-2xl shadow-orange-500/20 border border-slate-200 dark:border-slate-700 overflow-hidden",
              isMinimized ? "h-14" : "h-[500px] max-h-[calc(100vh-8rem)]"
            )}

          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-orange-500 to-red-500 text-white">
              <div className="flex items-center gap-3">
                {/* Swipe indicator */}
                <motion.div
                  animate={{ y: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  className="w-8 h-1 bg-white/50 rounded-full"
                />
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Dumbbell className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold">Apex Fitness Assistant</h3>
                  <p className="text-xs text-white/80">Online • Ready to help</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                  aria-label={isMinimized ? "Expand chat" : "Minimize chat"}
                >
                  {isMinimized ? (
                    <Maximize2 className="w-4 h-4" />
                  ) : (
                    <Minimize2 className="w-4 h-4" />
                  )}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                  aria-label="Close chat"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Messages Area */}
            {!isMinimized && (
              <>
                <div className="relative">
                  {/* Scroll buttons */}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={scrollToTop}
                    className="absolute top-2 right-2 z-10 p-2 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:text-orange-500 transition-colors"
                    aria-label="Scroll to top"
                  >
                    <ArrowDown className="w-4 h-4 rotate-180" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={scrollToBottom}
                    className="absolute bottom-2 right-2 z-10 p-2 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:text-orange-500 transition-colors"
                    aria-label="Scroll to bottom"
                  >
                    <ArrowDown className="w-4 h-4" />
                  </motion.button>

                  <div
                    ref={messagesContainerRef}
                    className="flex-1 min-h-0 overflow-y-auto overscroll-contain p-4 space-y-4 bg-slate-50 dark:bg-slate-950"
                  >

                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className={cn(
                        "flex gap-3",
                        message.sender === "user" ? "flex-row-reverse" : "flex-row"
                      )}
                    >
                      <div
                        className={cn(
                          "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center",
                          message.sender === "user"
                            ? "bg-gradient-to-br from-orange-500 to-red-500 text-white"
                            : "bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 text-slate-700 dark:text-slate-300"
                        )}
                      >
                        {message.sender === "user" ? (
                          <User className="w-4 h-4" />
                        ) : (
                          <Bot className="w-4 h-4" />
                        )}
                      </div>
                      <div
                        className={cn(
                          "max-w-[75%] px-4 py-3 rounded-2xl text-sm leading-relaxed",
                          message.sender === "user"
                            ? "bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-br-sm"
                            : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-bl-sm border border-slate-200 dark:border-slate-700"
                        )}
                      >
                        {message.content}
                      </div>
                    </motion.div>
                  ))}

                  {/* Typing Indicator */}
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex gap-3"
                    >
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 flex items-center justify-center text-slate-700 dark:text-slate-300">
                        <Bot className="w-4 h-4" />
                      </div>
                      <div className="bg-white dark:bg-slate-800 px-4 py-3 rounded-2xl rounded-bl-sm border border-slate-200 dark:border-slate-700">
                        <div className="flex gap-1">
                          <motion.span
                            animate={{ y: [0, -4, 0] }}
                            transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
                            className="w-2 h-2 bg-slate-400 rounded-full"
                          />
                          <motion.span
                            animate={{ y: [0, -4, 0] }}
                            transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut", delay: 0.1 }}
                            className="w-2 h-2 bg-slate-400 rounded-full"
                          />
                          <motion.span
                            animate={{ y: [0, -4, 0] }}
                            transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                            className="w-2 h-2 bg-slate-400 rounded-full"
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  <div ref={messagesEndRef} />
                </div>
                </div>

                {/* Quick Replies */}
                {messages.length === 1 && (
                  <div className="px-4 pb-4 bg-slate-50 dark:bg-slate-950">
                    <div className="flex flex-wrap gap-2">
                      {quickReplies.map((reply) => (
                        <motion.button
                          key={reply.action}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleQuickReply(reply.action)}
                          className="px-3 py-2 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-medium rounded-xl border border-slate-200 dark:border-slate-700 hover:border-orange-500/50 transition-all duration-300"
                        >
                          {reply.label}
                        </motion.button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Input Area */}
                <div className="p-4 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700">
                  <div className="flex items-center gap-2">
                    <input
                      ref={inputRef}
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyDown={handleKeyDown}
                      placeholder="Type your message..."
                      className="flex-1 px-4 py-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all duration-300"
                      aria-label="Chat message input"
                    />
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleSendMessage(inputValue)}
                      disabled={!inputValue.trim() || isTyping}
                      className="p-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-orange-500/30"
                      aria-label="Send message"
                    >
                      <Send className="w-5 h-5" />
                    </motion.button>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
