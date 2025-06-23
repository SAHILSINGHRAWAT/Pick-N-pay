"use client"

import { useState } from "react"
import { Users, Award, Clock, Heart, ArrowRight, CheckCircle } from "lucide-react"

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState("story")

  const stats = [
    { icon: Users, number: "1000+", label: "Happy Customers", color: "text-blue-600" },
    { icon: Award, number: "5+", label: "Years Experience", color: "text-green-600" },
    { icon: Clock, number: "24/7", label: "Service Available", color: "text-orange-600" },
    { icon: Heart, number: "99%", label: "Customer Satisfaction", color: "text-red-600" },
  ]

  const values = [
    {
      title: "Premium Brands",
      description: "We stock only the finest brands across all categories",
      icon: "🏆",
    },
    {
      title: "Wide Variety",
      description: "From cosmetics to baby care - everything under one roof",
      icon: "🛍️",
    },
    {
      title: "Competitive Pricing",
      description: "Best prices in town without compromising on quality",
      icon: "💰",
    },
    {
      title: "Expert Service",
      description: "Knowledgeable staff to help you find exactly what you need",
      icon: "👥",
    },
  ]

  const milestones = [
    { year: "2019", event: "Pick N Pay Mart Founded", description: "Started with a vision to serve quality products" },
    { year: "2020", event: "First 100 Customers", description: "Reached our first milestone of happy customers" },
    {
      year: "2021",
      event: "Product Range Expansion",
      description: "Added cosmetics, baby products, and more categories",
    },
    { year: "2022", event: "Digital Transformation", description: "Launched online presence and delivery services" },
    {
      year: "2023",
      event: "1000+ Happy Customers",
      description: "Celebrating our growing community of satisfied customers",
    },
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white via-orange-50 to-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full text-sm font-medium mb-4">
            🏪 About Us
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Your Premium
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              {" "}
              Shopping Destination
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the perfect blend of variety, quality, and convenience at Pick N Pay Mart - where every product
            tells a story of excellence.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center group"
            >
              <div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Tab Navigation */}
            <div className="flex space-x-4 border-b border-gray-200">
              {[
                { id: "story", label: "Our Story" },
                { id: "mission", label: "Our Mission" },
                { id: "values", label: "Our Values" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  className={`pb-4 px-2 font-medium transition-colors ${
                    activeTab === tab.id
                      ? "text-orange-600 border-b-2 border-orange-600"
                      : "text-gray-600 hover:text-orange-600"
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="space-y-6">
              {activeTab === "story" && (
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-800">The Pick N Pay Mart Experience</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Founded in 2022 with a vision to revolutionize neighborhood shopping. We've curated an extensive
                    collection of premium products across multiple categories - from beauty essentials to baby care,
                    from gourmet chocolates to household necessities.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Our modern store layout, competitive pricing, and expert product knowledge have made us the
                    preferred choice for discerning customers. We pride ourselves on offering variety that rivals big
                    box stores with the personal touch of a neighborhood mart.
                  </p>
                  <div className="flex items-center space-x-2 text-orange-600">
                    <CheckCircle className="w-5 h-5" />
                    <span className="font-medium">11 specialized product categories under one roof</span>
                  </div>
                </div>
              )}

              {activeTab === "mission" && (
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-800">Our Mission</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To be the most trusted and convenient shopping destination for our community by providing quality
                    products, exceptional service, and unbeatable value.
                  </p>
                  <div className="space-y-3">
                    {[
                      "Provide fresh, quality products daily",
                      "Offer competitive prices for all customers",
                      "Deliver exceptional customer service",
                      "Support our local community",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "values" && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-800">What We Stand For</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {values.map((value, index) => (
                      <div key={index} className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow">
                        <div className="text-2xl mb-2">{value.icon}</div>
                        <h4 className="font-bold text-gray-800 mb-1">{value.title}</h4>
                        <p className="text-sm text-gray-600">{value.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2">
              <span>Learn More About Us</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Right Content - Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl p-4 transform hover:scale-105 transition-all duration-300">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1.jpg-umCJuQhpmO9CQOiTg87oo5bsZM0imL.jpeg"
                    alt="Store Owner"
                    className="w-full h-48 object-cover rounded-xl"
                  />
                </div>
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-4 transform hover:scale-105 transition-all duration-300">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6.jpg-GHWjoK9I6uiWtodQS2TgySINM900Cr.jpeg"
                    alt="Store Interior"
                    className="w-full h-32 object-cover rounded-xl"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl p-4 transform hover:scale-105 transition-all duration-300">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.jpg-5AFr5lEzjdk0dZ0ydFvquwgP70rEw4.jpeg"
                    alt="Product Display"
                    className="w-full h-32 object-cover rounded-xl"
                  />
                </div>
                <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl p-4 transform hover:scale-105 transition-all duration-300">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9.jpg-lvQM4N4K2a49hFbE81F2w0NRyiqZCy.jpeg"
                    alt="Store Aisle"
                    className="w-full h-48 object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>

            {/* Floating Achievement Badge */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white p-4 rounded-2xl shadow-2xl transform rotate-12 hover:rotate-0 transition-transform duration-300">
              <div className="text-center">
                <Award className="w-8 h-8 mx-auto mb-2" />
                <div className="text-sm font-bold">5+ Years</div>
                <div className="text-xs opacity-90">Trusted Service</div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-white rounded-3xl p-8 shadow-xl">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Journey</h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-orange-500 to-red-500 rounded-full"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                    <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                      <div className="text-orange-600 font-bold text-lg mb-2">{milestone.year}</div>
                      <h4 className="text-xl font-bold text-gray-800 mb-2">{milestone.event}</h4>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="relative z-10">
                    <div className="w-6 h-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
