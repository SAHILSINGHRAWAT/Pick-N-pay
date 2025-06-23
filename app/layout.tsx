import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Pick N Pay Mart - Your One-Stop Shopping Destination",
  description:
    "Discover fresh groceries, dairy products, cosmetics, baby products and more at Pick N Pay Mart. Quality products at unbeatable prices.",
  keywords: "grocery store, mini mart, dairy products, cosmetics, baby products, frozen chicken, ice cream, chocolates",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
