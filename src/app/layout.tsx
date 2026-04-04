import type { Metadata, Viewport } from "next"
import { Inter, Geist } from "next/font/google"
import { ThemeProvider } from "@/contexts/theme"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import "./globals.css"
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
})

console.log("[app/layout] - Root layout loaded")

export const metadata: Metadata = {
  title: {
    default: "Apex Fitness | Transform Your Body, Elevate Your Mind",
    template: "%s | Apex Fitness",
  },
  description:
    "Join Apex Fitness - the premier fitness center with world-class equipment, expert trainers, and a supportive community. Start your transformation today!",
  keywords: [
    "fitness",
    "gym",
    "workout",
    "personal training",
    "group classes",
    "nutrition",
    "health",
    "wellness",
  ],
  authors: [{ name: "Apex Fitness" }],
  creator: "Apex Fitness",
  publisher: "Apex Fitness",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Apex Fitness | Transform Your Body, Elevate Your Mind",
    description:
      "Join Apex Fitness - the premier fitness center with world-class equipment, expert trainers, and a supportive community.",
    url: "https://apexfitness.com",
    siteName: "Apex Fitness",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Apex Fitness | Transform Your Body, Elevate Your Mind",
    description:
      "Join Apex Fitness - the premier fitness center with world-class equipment, expert trainers, and a supportive community.",
    creator: "@apexfitness",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", inter.variable, "font-sans", geist.variable)}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
