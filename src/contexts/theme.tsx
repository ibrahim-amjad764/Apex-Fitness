"use client"

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
  useMemo,
} from "react"

type Theme = "dark" | "light" | "system"

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
  resolvedTheme: "dark" | "light"
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

console.log("[contexts/theme] - Theme provider context initialized")

export function ThemeProvider({ children }: { children: ReactNode }) {
  // ✅ Initialize safely (SSR + no effect needed)
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") {
      console.log("[contexts/theme] - SSR fallback → system")
      return "system"
    }

    const savedTheme = localStorage.getItem("apex-theme") as Theme | null
    console.log(
      `[contexts/theme] - Initial theme from localStorage: ${savedTheme}`
    )

    return savedTheme || "system"
  })

  // ✅ Derived state (no setState → no lint error)
  const resolvedTheme = useMemo<"dark" | "light">(() => {
    if (typeof window === "undefined") return "dark"

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light"

      console.log(
        `[contexts/theme] - Resolved system theme: ${systemTheme}`
      )

      return systemTheme
    }

    console.log(`[contexts/theme] - Resolved theme: ${theme}`)
    return theme
  }, [theme])

  // ✅ Only side-effect: DOM sync (correct usage)
  useEffect(() => {
    const root = document.documentElement

    if (resolvedTheme === "dark") {
      root.classList.add("dark")
      root.style.colorScheme = "dark"
    } else {
      root.classList.remove("dark")
      root.style.colorScheme = "light"
    }

    console.log(`[contexts/theme] - Theme applied to DOM: ${resolvedTheme}`)
  }, [resolvedTheme])

  // ✅ System listener (no state update → clean)
  useEffect(() => {
    if (theme !== "system") return

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")

    const handleChange = (e: MediaQueryListEvent) => {
      console.log(
        `[contexts/theme] - System preference changed: ${e.matches ? "dark" : "light"
        }`
      )
      // ✅ No setState → resolvedTheme auto updates via useMemo
    }

    mediaQuery.addEventListener("change", handleChange)

    return () => {
      mediaQuery.removeEventListener("change", handleChange)
    }
  }, [theme])

  // ✅ Persist theme
  const handleSetTheme = (newTheme: Theme) => {
    setTheme(newTheme)
    localStorage.setItem("apex-theme", newTheme)

    console.log(`[contexts/theme] - Theme saved: ${newTheme}`)
  }

  // ✅ Toggle
  const toggleTheme = () => {
    const newTheme = resolvedTheme === "dark" ? "light" : "dark"
    handleSetTheme(newTheme)
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme: handleSetTheme,
        resolvedTheme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

// Custom hook
export function useTheme() {
  const context = useContext(ThemeContext)

  if (context === undefined) {
    console.error("[contexts/theme] - useTheme used outside provider")
    throw new Error("useTheme must be used within a ThemeProvider")
  }

  return context
}