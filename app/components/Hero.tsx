"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronRight, Star, Truck, Clock, Shield } from "lucide-react"

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [customerCount, setCustomerCount] = useState(0)
  const countRef = useRef<NodeJS.Timeout | null>(null)

  const slides = [
  {
    title: "Everything You Need, All in One Place",
    subtitle: "From Daily Basics to Premium Picks",
    description: "Browse a complete store filled with fresh dairy, household essentials, snacks, personal care & more — all just a click away.",
    cta: "Explore Categories",
    gradient: "from-orange-500 to-red-500",
  },
  {
    title: "Wide Variety, Freshly Delivered",
    subtitle: "Groceries That Go the Extra Mile",
    description: "Enjoy a curated selection of fresh produce, quality dairy, packaged foods & niche brands — delivered to your doorstep, fast & free.",
    cta: "Shop Now",
    gradient: "from-green-500 to-orange-500",
  },
  {
    title: "Experience Shopping Like Never Before",
    subtitle: "Service. Savings. Satisfaction.",
    description: "Get exclusive offers, seamless support, and a smooth shopping experience you’ll love — all while saving big every time you order.",
    cta: "View Offers",
    gradient: "from-purple-500 to-orange-500",
  },
  {
    title: "Freshness That Speaks for Itself",
    subtitle: "Dairy, Fruits & Veggies — Farm to Table",
    description: "Our promise: freshness in every bite. Whether it's milk, fruits, or pantry staples — we source directly, so you get the best.",
    cta: "Know About Us",
    gradient: "from-yellow-500 to-green-500",
  },
  {
    title: "We Deliver More Than Just Groceries",
    subtitle: "Free Delivery. No Minimums.",
    description: "Forget delivery charges. Order anything — anytime — and enjoy free doorstep delivery with care and speed.",
    cta: "Journey",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "The Ultimate One-Stop Store",
    subtitle: "Why Hop Stores When You Have It All Here?",
    description: "From breakfast cereals to cleaning essentials, baby care to wellness goods — find everything under one roof, anytime you need it.",
    cta: "Discover More",
    gradient: "from-rose-500 to-pink-500",
  },
]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  // Animated counter for "1000+ Happy Customers" that restarts only when the section is at least half visible
  const hasAnimatedRef = useRef(false)
  useEffect(() => {
    const startCounter = () => {
      setCustomerCount(0)
      if (countRef.current) clearInterval(countRef.current)
      const duration = 3000 // 3 seconds
      const target = 1000
      const steps = 60
      const increment = Math.ceil(target / steps)
      let current = 0
      let step = 0

      countRef.current = setInterval(() => {
        step++
        current += increment
        if (step >= steps) {
          setCustomerCount(target)
          if (countRef.current) clearInterval(countRef.current)
        } else {
          setCustomerCount(current)
        }
      }, duration / steps)
    }

    const handleScroll = () => {
      const section = document.getElementById('home')
      if (!section) return
      const rect = section.getBoundingClientRect()
      const halfVisible = rect.top < window.innerHeight && rect.bottom > window.innerHeight / 2
      if (halfVisible && !hasAnimatedRef.current) {
        startCounter()
        hasAnimatedRef.current = true
      } else if (!halfVisible) {
        hasAnimatedRef.current = false
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Run once on load

    return () => {
      if (countRef.current) clearInterval(countRef.current)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])


  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-r from-orange-200 via-white to-orange-100 pt-16"
    >
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-gray-800 space-y-8">
            <div className="space-y-4">
              <div
                className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${slides[currentSlide].gradient} text-white text-sm font-medium animate-pulse`}
              >
                ✨ Premium Quality & Variety
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-orange-600 to-red-400 bg-clip-text text-transparent">
                  {slides[currentSlide].title}
                </span>
              </h1>
              <h2 className="text-xl md:text-2xl text-orange-600 font-medium">{slides[currentSlide].subtitle}</h2>
              <p className="text-lg text-gray-700 max-w-lg">{slides[currentSlide].description}</p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center group"
                onClick={() => {
                  const cta = slides[currentSlide].cta.toLowerCase();
                  if (cta.includes("offer")) {
                    window.location.href = "/#offers";
                  } else if (cta.includes("category")) {
                    window.location.href = "/#categories/groceries";
                  } else if (cta.includes("product")) {
                    window.location.href = "/#products";
                  } else if (cta.includes("about")) {
                    window.location.href = "/#about";
                  } else if (cta.includes("shop")) {
                    window.location.href = "/#home";
                  } else {
                    window.location.href = "/";
                  }
                }}
              >
                {slides[currentSlide].cta}
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-orange-500 text-orange-600 px-8 py-4 rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300 transform hover:scale-105">
                Learn More
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
              <div className="text-center space-y-2">
                <div className="bg-orange-100/60 rounded-full w-12 h-12 flex items-center justify-center mx-auto">
                  <Truck className="w-6 h-6 text-orange-500" />
                </div>
                <p className="text-sm text-gray-700">Free Delivery</p>
              </div>
              <div className="text-center space-y-2">
                <div className="bg-orange-100/60 rounded-full w-12 h-12 flex items-center justify-center mx-auto">
                  <Clock className="w-6 h-6 text-orange-500" />
                </div>
                <p className="text-sm text-gray-700">24/7 Service</p>
              </div>
              <div className="text-center space-y-2">
                <div className="bg-orange-100/60 rounded-full w-12 h-12 flex items-center justify-center mx-auto">
                  <Shield className="w-6 h-6 text-orange-500" />
                </div>
                <p className="text-sm text-gray-700">Quality Assured</p>
              </div>
              <div className="text-center space-y-2">
                <div className="bg-orange-100/60 rounded-full w-12 h-12 flex items-center justify-center mx-auto">
                  <Star className="w-6 h-6 text-orange-500" />
                </div>
                <p className="text-sm text-gray-700">5-Star Rated</p>
              </div>
            </div>
          </div>

          {/* Right Content - Store Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 transform hover:scale-105 transition-all duration-300">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3.jpg-nXunGr9HZlehacVKlV2rbfwunBvX7e.jpeg"
                    alt="Store Interior"
                    className="w-full h-48 object-cover rounded-xl"
                  />
                </div>
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 transform hover:scale-105 transition-all duration-300">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4.jpg-uetpdiFnRFh1LeoHUcpCiSFNkFt2EM.jpeg"
                    alt="Product Aisles"
                    className="w-full h-32 object-cover rounded-xl"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 transform hover:scale-105 transition-all duration-300">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1.jpg-umCJuQhpmO9CQOiTg87oo5bsZM0imL.jpeg"
                    alt="Store Owner"
                    className="w-full h-32 object-cover rounded-xl"
                  />
                </div>
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 transform hover:scale-105 transition-all duration-300">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7.jpg-C7hQ0nCrfju5grLENVDMebP5ppkW3Z.jpeg"
                    alt="Grocery Section"
                    className="w-full h-48 object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-8 -left-8 bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6 rounded-2xl shadow-2xl">
              <div className="text-center">
                <div className="text-2xl font-bold">
                  {customerCount}+
                </div>
                <div className="text-sm opacity-90">Happy Customers</div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center space-x-2 mt-12">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-orange-500 w-8" : "bg-orange-200"
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-orange-600 animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-orange-500 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-orange-500 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
