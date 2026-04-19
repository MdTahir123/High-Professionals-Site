"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown, Linkedin, Instagram, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const THEME = "#351821"
const THEME_HOVER = "#220e14"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [visible, setVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      setScrolled(currentScrollY > 50)

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false)
      } else {
        setVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white backdrop-blur-md shadow-lg"
          : "bg-white backdrop-blur-sm shadow-sm"
      } ${visible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">

        {/* LOGO */}
        <Link href="/" className="flex items-center group">
          <img
            src="/logo.png"
            alt="HTC Logo"
            className="h-16 md:h-20 w-[220px] md:w-[300px] object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-8">
          {[{ name: "Home", href: "/" }, { name: "About Us", href: "#about" }].map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative text-[#1e3a5f] font-medium group"
            >
              {link.name}
              <span
                className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                style={{ backgroundColor: THEME }}
              />
            </Link>
          ))}

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-[#1e3a5f] font-medium group">
              Divisions
              <ChevronDown className="w-4 h-4 transition-transform duration-300 group-data-[state=open]:rotate-180" />
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-56">
              {["Trading Division", "Construction Services", "AC Maintenance", "Interior Design", "Glass & Fitout Works", "Building Maintenance"].map((name) => (
                <DropdownMenuItem key={name} asChild>
                  <Link href="#divisions">{name}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {[
              { name: "Ongoing Projects", href: "#projects" },
              { name: "Contact Us", href: "#contact" }, // 👈 FIX
            ].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative text-[#1e3a5f] font-medium group"
              >
                {link.name}
                <span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                  style={{ backgroundColor: THEME }}
                />
              </Link>
            ))}
        </div>

        {/* RIGHT SIDE */}
        <div className="hidden lg:flex lg:items-center lg:gap-4">

          {/* Icons */}
          {[Linkedin, Instagram].map((Icon, i) => (
            <Link
              key={i}
              href="#"
              className="w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-300"
              style={{
                borderColor: THEME,
                color: THEME,
              }}
            >
              <Icon className="w-5 h-5" />
            </Link>
          ))}

          {/* Get in Touch Button */}
          <Button
            asChild
            className="text-white rounded-full px-6 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{
              backgroundColor: THEME,
            }}
          >
            <Link href="#contact">
              <Phone className="w-4 h-4 mr-2" />
              Get in Touch
            </Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <button
          className="lg:hidden p-2"
          style={{ color: THEME }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>
    </header>
  )
}