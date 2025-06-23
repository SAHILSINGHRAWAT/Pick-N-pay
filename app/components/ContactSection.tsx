"use client"

import { useState } from "react"
import { Phone, Mail, MapPin, Send, MessageCircle } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: MessageCircle,
      title: "WhatsApp Order",
      details: "+1 (555) 123-4567",
      subtitle: "Quick & Easy Ordering",
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      subtitle: "Mon-Sun: 8AM-10PM",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "info@picknpaymart.com",
      subtitle: "We reply within 24hrs",
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "123 Main Street, City",
      subtitle: "Easy parking available",
      color: "text-red-600",
      bgColor: "bg-red-100",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 via-white to-orange-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full text-sm font-medium mb-4">
            📞 Get In Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Contact
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent"> Us</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions or need assistance? We're here to help! Reach out to us through any of the channels below.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center group"
            >
              <div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${info.bgColor} mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <info.icon className={`w-8 h-8 ${info.color}`} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{info.title}</h3>
              <p className="text-gray-800 font-medium mb-1">{info.details}</p>
              <p className="text-gray-600 text-sm">{info.subtitle}</p>
            </div>
          ))}
        </div>

        {/* Main Contact Section */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Send us a Message</h3>
              <p className="text-gray-600">Fill out the form below and we'll get back to you as soon as possible.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2 font-medium"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>

          {/* Map and Store Info */}
          <div className="space-y-8">
            {/* Interactive Map */}
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Find Us on Map</h3>
              <div className="relative">
                <div className="w-full h-80 rounded-2xl overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.723687728995!2d78.27362847501158!3d30.073453817196658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39093ff9de636a8f%3A0xe9dc25cf0148adb0!2sPICK%20N%20PAY%20MART!5e0!3m2!1sen!2sin!4v1750701833651!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-2xl"
                  />
                </div>
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <h4 className="font-bold text-gray-800 mb-1">Pick N Pay Mart</h4>
                  <p className="text-sm text-gray-600">Nirmal Bagh , Rishikesh</p>
                  <a
                    href="https://maps.google.com/?q=Pick+N+Pay+Mart+123+Main+Street"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium inline-flex items-center mt-2"
                  >
                    <MapPin className="w-4 h-4 mr-1" />
                    View larger map
                  </a>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-orange-50 rounded-xl">
                  <div className="text-orange-600 font-bold">📍</div>
                  <p className="text-sm font-medium text-gray-800">Easy to Find</p>
                  <p className="text-xs text-gray-600">Main road location</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <div className="text-blue-600 font-bold">🚗</div>
                  <p className="text-sm font-medium text-gray-800">Free Parking</p>
                  <p className="text-xs text-gray-600">Ample parking space</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-xl">
                  <div className="text-green-600 font-bold">♿</div>
                  <p className="text-sm font-medium text-gray-800">Accessible</p>
                  <p className="text-xs text-gray-600">Wheelchair friendly</p>
                </div>
              </div>
            </div>

            {/* Store Images */}
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Visit Our Store</h3>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3.jpg-nXunGr9HZlehacVKlV2rbfwunBvX7e.jpeg"
                  alt="Store Interior"
                  className="w-full h-32 object-cover rounded-xl hover:scale-105 transition-transform duration-300"
                />
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4.jpg-uetpdiFnRFh1LeoHUcpCiSFNkFt2EM.jpeg"
                  alt="Product Aisles"
                  className="w-full h-32 object-cover rounded-xl hover:scale-105 transition-transform duration-300"
                />
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7.jpg-C7hQ0nCrfju5grLENVDMebP5ppkW3Z.jpeg"
                  alt="Checkout Counter"
                  className="w-full h-32 object-cover rounded-xl hover:scale-105 transition-transform duration-300"
                />
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8.jpg-yCgtpv8tby5R6bztGGYLX8w4IR3X4t.jpeg"
                  alt="Store Display"
                  className="w-full h-32 object-cover rounded-xl hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-gray-600 mb-4">
                Experience our well-organized store with wide aisles, fresh products, and friendly service. Easy parking
                and wheelchair accessible.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2">
                  <MapPin className="w-5 h-5" />
                  <span>Get Directions</span>
                </button>
                <button
                  onClick={() =>
                    window.open(
                      "https://wa.me/1234567890?text=Hi! I need directions to Pick N Pay Mart. Can you help?",
                      "_blank",
                    )
                  }
                  className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Ask for Directions</span>
                </button>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-8 text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-4">Place Your Order Now!</h3>
              <p className="mb-6 opacity-90">
                Order directly through WhatsApp for quick delivery or call us for immediate assistance.
              </p>
              <div className="space-y-4">
                <button
                  onClick={() =>
                    window.open(
                      "https://wa.me/1234567890?text=Hi! I'd like to place an order from Pick N Pay Mart.",
                      "_blank",
                    )
                  }
                  className="w-full bg-white text-green-600 py-3 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 font-medium flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Order on WhatsApp</span>
                </button>
                <button className="w-full bg-white/20 backdrop-blur-sm text-white py-3 rounded-xl hover:bg-white/30 transition-all duration-300 transform hover:scale-105 font-medium flex items-center justify-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>Call: +1 (555) 123-4567</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
