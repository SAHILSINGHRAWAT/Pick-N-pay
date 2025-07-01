"use client"

import { useState } from "react"
import { ShoppingCart, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Categories() {
  const [hoveredCategory, setHoveredCategory] = useState(null)

  const categories = [
    {
      id: 1,
      name: "Groceries",
      icon: "🥦",
      description: "Essential vegetables, fruits, and daily necessities",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3.jpg-nXunGr9HZlehacVKlV2rbfwunBvX7e.jpeg",
      gradient: "from-green-400 to-green-600",
      items: "500+ Items",
    },
    {
      id: 2,
      name: "Food Products",
      icon: "🍲",
      description: "Ready-to-eat meals and premium cooking ingredients",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4.jpg-uetpdiFnRFh1LeoHUcpCiSFNkFt2EM.jpeg",
      gradient: "from-yellow-400 to-orange-500",
      items: "300+ Items",
    },
    {
      id: 3,
      name: "Dairy",
      icon: "🥛",
      description: "Quality milk, cheese, yogurt, and dairy essentials",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7.jpg-C7hQ0nCrfju5grLENVDMebP5ppkW3Z.jpeg",
      gradient: "from-blue-400 to-blue-600",
      items: "150+ Items",
    },
    {
      id: 4,
      name: "Nuts Dry Fruits",
      icon: "🥜",
      description: "Premium quality nuts and dried fruits",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8.jpg-yCgtpv8tby5R6bztGGYLX8w4IR3X4t.jpeg",
      gradient: "from-amber-400 to-orange-600",
      items: "80+ Items",
    },
    {
      id: 5,
      name: "Cosmetics",
      icon: "💄",
      description: "Beauty and personal care products",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9.jpg-lvQM4N4K2a49hFbE81F2w0NRyiqZCy.jpeg",
      gradient: "from-pink-400 to-rose-600",
      items: "200+ Items",
    },
    {
      id: 6,
      name: "Hygiene Products",
      icon: "🧴",
      description: "Personal hygiene and cleaning supplies",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.jpg-5AFr5lEzjdk0dZ0ydFvquwgP70rEw4.jpeg",
      gradient: "from-cyan-400 to-blue-600",
      items: "120+ Items",
    },
    {
      id: 7,
      name: "Baby Products",
      icon: "👶",
      description: "Everything for your little ones",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6.jpg-GHWjoK9I6uiWtodQS2TgySINM900Cr.jpeg",
      gradient: "from-purple-400 to-pink-600",
      items: "100+ Items",
    },
    {
      id: 8,
      name: "Ration",
      icon: "🧺",
      description: "Essential food grains and staples",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3.jpg-nXunGr9HZlehacVKlV2rbfwunBvX7e.jpeg",
      gradient: "from-orange-400 to-red-600",
      items: "50+ Items",
    },
    {
      id: 9,
      name: "Ice Creams",
      icon: "🍨",
      description: "Delicious frozen treats and desserts",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4.jpg-uetpdiFnRFh1LeoHUcpCiSFNkFt2EM.jpeg",
      gradient: "from-indigo-400 to-purple-600",
      items: "40+ Items",
    },
    {
      id: 10,
      name: "Chocolates",
      icon: "🍫",
      description: "Premium chocolates and confectionery",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7.jpg-C7hQ0nCrfju5grLENVDMebP5ppkW3Z.jpeg",
      gradient: "from-amber-600 to-orange-800",
      items: "60+ Items",
    },
    {
      id: 11,
      name: "Frozen Chicken",
      icon: "🍗",
      description: "Fresh frozen chicken and meat products",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8.jpg-yCgtpv8tby5R6bztGGYLX8w4IR3X4t.jpeg",
      gradient: "from-red-400 to-red-600",
      items: "25+ Items",
    },
  ]

  return (
    <section id="categories" className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full text-sm font-medium mb-4">
            🛍️ Shop by Category
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Explore Our
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              {" "}
              Categories
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover a wide range of quality products across all categories. From fresh groceries to premium cosmetics,
            we have everything you need.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/categories/${category.name.toLowerCase().replace(/\s+/g, "-")}`}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Background Image */}
              <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Gradient Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              ></div>

              {/* Content */}
              <div className="relative p-6 text-center">
                {/* Icon */}
                <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>

                {/* Category Name */}
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors">
                  {category.name}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{category.description}</p>

                {/* Items Count */}
                <div className="inline-block px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-xs font-medium mb-4">
                  {category.items}
                </div>

                {/* CTA Button */}
                <div className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform group-hover:scale-105 flex items-center justify-center space-x-2 shadow-lg">
                  <ShoppingCart className="w-4 h-4" />
                  <span>Explore {category.name}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-orange-300 rounded-2xl transition-colors duration-300"></div>
            </Link>
          ))}
        </div>

        {/* View All Categories Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-gray-800 to-gray-900 text-white px-8 py-4 rounded-full hover:from-gray-900 hover:to-black transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center space-x-2 mx-auto">
            <span>View All Categories</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
