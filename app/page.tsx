"use client"

import { useState, useEffect } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Categories from "./components/Categories"
import PromoOffers from "./components/PromoOffers"
import AboutSection from "./components/AboutSection"
import ContactSection from "./components/ContactSection"
import Footer from "./components/Footer"
import WhatsAppButton from "./components/WhatsAppButton"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className={`min-h-screen transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
      <Navbar />
      <Hero />
      <Categories />
      <PromoOffers />
      <AboutSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
