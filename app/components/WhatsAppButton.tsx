"use client"

import { MessageCircle, Phone } from "lucide-react"

export default function WhatsAppButton() {
  const phoneNumber = "1234567890" // Replace with actual WhatsApp number
  const message = "Hi! I'd like to place an order from Pick N Pay Mart."

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="group relative bg-gradient-to-r from-green-500 to-green-600 text-white w-16 h-16 rounded-full shadow-2xl hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
      >
        <MessageCircle className="w-7 h-7 group-hover:animate-bounce" />

        {/* Pulse Animation */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>

        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Place Order on WhatsApp
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
        </div>
      </button>

      {/* Call Button */}
      <button
        onClick={() => window.open("tel:+1234567890", "_self")}
        className="group relative bg-gradient-to-r from-blue-500 to-blue-600 text-white w-14 h-14 rounded-full shadow-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-110 flex items-center justify-center mt-3"
      >
        <Phone className="w-6 h-6 group-hover:animate-pulse" />

        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Call Us Now
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
        </div>
      </button>
    </div>
  )
}
