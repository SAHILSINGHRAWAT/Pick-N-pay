"use client"

import { useState, useEffect } from "react"
import { Tag, Star, ArrowRight, Gift } from "lucide-react"

export default function PromoOffers() {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 30,
    seconds: 45,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const offers = [
    {
      id: 1,
      title: "Premium Cosmetics",
      discount: "30% OFF",
      description: "Top beauty brands and skincare essentials",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9.jpg-lvQM4N4K2a49hFbE81F2w0NRyiqZCy.jpeg",
      gradient: "from-pink-500 to-purple-600",
      badge: "Beauty Special",
    },
    {
      id: 2,
      title: "Baby Care Products",
      discount: "25% OFF",
      description: "Everything for your little ones",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6.jpg-GHWjoK9I6uiWtodQS2TgySINM900Cr.jpeg",
      gradient: "from-blue-500 to-cyan-600",
      badge: "Family Care",
    },
    {
      id: 3,
      title: "Premium Chocolates",
      discount: "Buy 2 Get 1",
      description: "Indulgent treats and confectionery",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7.jpg-C7hQ0nCrfju5grLENVDMebP5ppkW3Z.jpeg",
      gradient: "from-amber-500 to-orange-600",
      badge: "Sweet Deals",
    },
  ]

  const featuredDeals = [
    {
      title: "Weekend Special",
      subtitle: "Extra 15% off on orders above $100",
      icon: "🎯",
    },
    {
      title: "Free Delivery",
      subtitle: "On all orders above $50",
      icon: "🚚",
    },
    {
      title: "Loyalty Rewards",
      subtitle: "Earn points on every purchase",
      icon: "⭐",
    },
  ]

  return (
    <section id="offers" className="py-20 bg-gradient-to-br from-orange-50 via-white to-red-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-red-500 to-orange-600 text-white rounded-full text-sm font-medium mb-4">
            🎯 Special Offers
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Amazing
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              {" "}
              Deals & Discounts
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover incredible savings on premium products across all categories. Quality meets affordability!
          </p>
        </div>

        {/* Main Offers Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {offers.map((offer, index) => (
            <div
              key={offer.id}
              className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={offer.image || "/placeholder.svg"}
                  alt={offer.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${offer.gradient} opacity-90`}></div>
              </div>

              {/* Badge */}
              <div className="absolute top-4 right-4 bg-white text-gray-800 px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                {offer.badge}
              </div>

              {/* Content */}
              <div className="relative p-8 text-white h-80 flex flex-col justify-end">
                <div className="space-y-4">
                  <div className="text-4xl font-bold">{offer.discount}</div>
                  <h3 className="text-2xl font-bold">{offer.title}</h3>
                  <p className="text-white/90">{offer.description}</p>
                  <button className="bg-white text-gray-800 px-6 py-3 rounded-full hover:bg-gray-100 transition-all duration-300 transform group-hover:scale-105 flex items-center space-x-2 w-fit">
                    <Tag className="w-4 h-4" />
                    <span>Grab Deal</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Deals */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {featuredDeals.map((deal, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-orange-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-orange-100"
            >
              <div className="text-center space-y-3">
                <div className="text-4xl">{deal.icon}</div>
                <h4 className="text-xl font-bold text-gray-800">{deal.title}</h4>
                <p className="text-gray-600">{deal.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-8 text-white text-center shadow-2xl">
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="flex items-center justify-center space-x-2">
              <Gift className="w-8 h-8" />
              <h3 className="text-3xl font-bold">Get Exclusive Offers!</h3>
            </div>
            <p className="text-xl opacity-90">
              Subscribe to our newsletter and be the first to know about our latest deals and offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-4 focus:ring-white/30"
              />
              <button className="bg-white text-orange-600 px-8 py-3 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 font-medium">
                Subscribe
              </button>
            </div>
            <div className="flex items-center justify-center space-x-4 text-sm opacity-90">
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 fill-current" />
                <span>No spam</span>
              </div>
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 fill-current" />
                <span>Unsubscribe anytime</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
