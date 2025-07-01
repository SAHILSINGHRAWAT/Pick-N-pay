"use client"

import { useState, useEffect } from "react"
import { Menu, X, ShoppingCart, Phone, MapPin, MessageCircle, Info } from "lucide-react"
import Image from "next/image"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [toggleCount, setToggleCount] = useState(0)
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (window.innerWidth < 1024) {
      setIsOpen(false)
      setToggleCount(prev => prev + 1) // force remount mobile menu on route change
    }
  }, [pathname])

  const categories = [
    "Groceries",
    "Food Products",
    "Dairy",
    "Nuts Dry Fruits",
    "Cosmetics",
    "Hygiene Products",
    "Baby Products",
    "Ration",
    "Ice Creams",
    "Chocolates",
    "Frozen Chicken",
  ]

  const handleMobileNav = (href: string) => {
    const isMobile = window.innerWidth < 1024;

    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) {
        if (isMobile) {
          setIsOpen(false);
          // setTimeout(() => {
          //   el.scrollIntoView({ behavior: "smooth" });
          // }, 300);
        } else {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else {
      if (isMobile) setIsOpen(false);
      window.location.href = href;
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 border-b-2 border-orange-600/90 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-md"
          : "bg-gradient-to-r from-orange-50 via-white to-orange-100"
      }`}
    >
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-500 text-white py-2 px-4 text-sm font-medium">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone className="w-4 h-4" />
              <span>7895433887</span>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin className="w-4 h-4" />
              <span> Lane No.1 Aam Bagh Nirmal Block A </span>
            </div>
          </div>
          <div className="hidden md:block">
            <span className="animate-pulse tracking-wide">🎯 11 Categories • Premium Quality • Best Prices!</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-1 px-6 ">
          <div className="flex items-center ml-6">
            <Image
              src="/images/logo.jpg"
              alt="Pick N Pay Mart Logo"
              width={180}
              height={72}
              className="h-[64px] md:h-[72px] w-auto object-contain"
              priority
            />
          </div>

          <div className="hidden lg:flex items-center space-x-10">
            {["Home", "Offers", "About", "Contact"].map((item) => (
              <a
                key={item}
                href={`/#${item.toLowerCase()}`}
                className="text-gray-800 hover:text-orange-600 font-semibold transition-colors"
              >
                {item}
              </a>
            ))}
            <div className="relative group">
              <button className="text-gray-800 hover:text-orange-600 font-semibold transition-colors flex items-center">
                Categories
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="grid grid-cols-1 gap-1 p-4">
                  {categories.map((category, index) => (
                    <a
                      key={index}
                      href={`/categories/${category.toLowerCase().replace(/\s+/g, "-")}`}
                      className="px-3 py-2 text-sm text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded transition-colors"
                    >
                      {category}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-5 py-2 rounded-full hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-md font-medium flex items-center">
              <ShoppingCart className="w-4 h-4 mr-2" />
              Shop Now
            </button>
            <button
              onClick={() =>
                window.open(
                  "https://wa.me/7895433887?text=Hi! I'd like to place an order from Pick N Pay Mart.",
                  "_blank"
                )
              }
              className="bg-gradient-to-r from-green-500 to-green-600 text-white px-5 py-2 rounded-full hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-md font-medium flex items-center"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Order on WhatsApp
            </button>
          </div>

          <button
            className="lg:hidden text-gray-700 hover:text-orange-600 transition-colors"
            onClick={() => {
              setIsOpen(!isOpen)
              if (!isOpen && window.innerWidth < 1024) {
                document.body.scrollTop = 0
                document.documentElement.scrollTop = 0
                setToggleCount(prev => prev + 1)
              }
            }}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div key={toggleCount} className="lg:hidden fixed inset-0 z-50 bg-gradient-to-br from-orange-50 to-orange-100 flex flex-col">
            <div className="flex items-center justify-between px-6 py-4 border-b border-orange-200 bg-gradient-to-r from-orange-600 to-orange-500">
              <Image
                src="/images/logo.jpg"
                alt="Pick N Pay Mart Logo"
                width={90}
                height={36}
                className="h-12 w-auto object-contain"
                priority
              />
              <button
                className="text-white text-3xl focus:outline-none"
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
              >
                <X className="w-8 h-8" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-6 py-4">
              <nav className="flex flex-col gap-2">
                <a href="/#home" onClick={() => handleMobileNav("/#home")} className="flex items-center gap-3 text-lg font-semibold text-gray-800 hover:text-orange-600 py-2">
                  <span className="bg-orange-100 p-2 rounded-full"><Menu className="w-5 h-5 text-orange-600" /></span> Home
                </a>
                <a href="/#about" onClick={() => handleMobileNav("/#about")} className="flex items-center gap-3 text-lg font-semibold text-gray-800 hover:text-orange-600 py-2">
                  <span className="bg-orange-100 p-2 rounded-full"><Info className="w-5 h-5 text-orange-600" /></span> About
                </a>
                <a href="/#offers" onClick={() => handleMobileNav("/#offers")} className="flex items-center gap-3 text-lg font-semibold text-gray-800 hover:text-orange-600 py-2">
                  <span className="bg-orange-100 p-2 rounded-full"><ShoppingCart className="w-5 h-5 text-orange-600" /></span> Offers
                </a>
                <a href="/#contact" onClick={() => handleMobileNav("/#contact")} className="flex items-center gap-3 text-lg font-semibold text-gray-800 hover:text-orange-600 py-2">
                  <span className="bg-orange-100 p-2 rounded-full"><Phone className="w-5 h-5 text-orange-600" /></span> Contact
                </a>

                <div className="mt-4 mb-2 text-orange-700 font-bold text-base tracking-wide">Categories</div>
                <div className="grid grid-cols-2 gap-2">
                  {categories.map((category, index) => (
                    <a
                      key={index}
                      href={`/categories/${category.toLowerCase().replace(/\s+/g, "-")}`}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-orange-600 py-2"
                    >
                      <span className="bg-orange-100 p-1 rounded-full"><Menu className="w-4 h-4 text-orange-600" /></span> {category}
                    </a>
                  ))}
                </div>
              </nav>
            </div>
            <div className="px-6 pb-6 flex flex-col gap-3">
              <button className="w-full bg-orange-500 text-white py-3 rounded-full text-lg font-semibold flex items-center justify-center gap-2 shadow-md hover:bg-orange-600 transition">
                <ShoppingCart className="w-5 h-5" /> Shop Now
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://wa.me/7895433887?text=Hi! I'd like to place an order from Pick N Pay Mart.",
                    "_blank"
                  )
                }
                className="w-full bg-green-500 text-white py-3 rounded-full text-lg font-semibold flex items-center justify-center gap-2 shadow-md hover:bg-green-600 transition"
              >
                <MessageCircle className="w-5 h-5" /> Order on WhatsApp
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
