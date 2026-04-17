"use client"

import Link from "next/link"
import { Phone, Mail, MapPin, Linkedin, Instagram, Facebook, ArrowUp } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useState, useEffect } from "react"

const usefulLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "#about" },
  { name: "Our Services", href: "#divisions" },
  { name: "Projects", href: "#projects" },
  { name: "Contact Us", href: "#contact" },
]

const divisions = [
  { name: "Trading Division", href: "#divisions" },
  { name: "AC Maintenance", href: "#divisions" },
  { name: "Interior Design", href: "#divisions" },
  { name: "Glass & Fitout", href: "#divisions" },
  { name: "Building Maintenance", href: "#divisions" },
]

export function Footer() {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1 })
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-[#1e2a3a] text-white relative">
      
      {/* Scroll to top */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 w-12 h-12 bg-[#1e3a5f] hover:bg-[#152a47] rounded-full flex items-center justify-center shadow-lg z-50 transition-all duration-500 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        <ArrowUp className="w-5 h-5 text-white" />
      </button>

      {/* MAIN CONTAINER */}
      <div ref={ref} className="mx-auto max-w-7xl px-4 lg:px-8 py-16">
        
        {/* GRID FIX (THIS WAS MISSING ❗) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* LOGO SECTION */}
          <div className={`${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-700`}>
            
            <div className="flex items-center gap-3 mb-4">
              <img src="/logoNiche.png" alt="HPTS Logo" className="w-12 h-12 object-contain" />
              
              <div className="flex flex-col leading-tight">
                <span className="text-white font-bold text-lg">HPTS</span>
                <span className="text-white/70 text-[10px] tracking-widest">
                  TRADING & SERVICES
                </span>
              </div>
            </div>

            <p className="text-white/70 text-sm leading-relaxed">
              High Professional Trading and Services is a trusted Qatar-based company specializing in building material trading and construction services.
            </p>

            <div className="flex gap-4 mt-6">
              {[Linkedin, Instagram, Facebook].map((Icon, i) => (
                <Link
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* LINKS */}
          <div className={`${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-700 delay-100`}>
            <h3 className="text-lg font-bold mb-6">Useful Links</h3>
            <ul className="space-y-3">
              {usefulLinks.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-white/70 hover:text-white hover:translate-x-2 transition-all">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* DIVISIONS */}
          <div className={`${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-700 delay-200`}>
            <h3 className="text-lg font-bold mb-6">Divisions</h3>
            <ul className="space-y-3">
              {divisions.map((item, i) => (
                <li key={i}>
                  <Link href={item.href} className="text-white/70 hover:text-white hover:translate-x-2 transition-all">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div className={`${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-700 delay-300`}>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              {[
                { icon: Phone, text: "+974 7400 2300" },
                { icon: Mail, text: "info@hiprofessionalqr.com" },
                { icon: MapPin, text: "Doha, Qatar" },
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <item.icon className="w-5 h-5 text-white/70" />
                  <span className="text-white/70">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-white/10 text-center py-6 text-white/50 text-sm">
        © {new Date().getFullYear()} HPTS. All rights reserved.
      </div>
    </footer>
  )
}