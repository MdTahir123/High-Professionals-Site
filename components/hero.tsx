"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Building2, CheckCircle, Wrench } from "lucide-react"
import { useScrollAnimation, useStaggerAnimation } from "@/hooks/use-scroll-animation"

const stats = [
  {
    icon: Building2,
    text: "Qatar-Based Trading Company",
  },
  {
    icon: CheckCircle,
    text: "Quality Materials & Professional Services",
  },
  {
    icon: Wrench,
    text: "Complete Construction Solutions",
  },
]

export function Hero() {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.2 })
  const getStaggerDelay = useStaggerAnimation(stats.length, 150)

  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center pt-20 py-12 lg:py-20 overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[2s]"
        style={{
          backgroundImage: `url('/frontbackground.jpg')`,
          transform: isInView ? "scale(1)" : "scale(1.1)",
        }}
      >
        <div className="absolute inset-0 bg-[#1e3a5f]/65" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-end min-h-[80vh]">

          {/* LEFT */}
          <div>
            <h1
              className={`font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight transition-all duration-1000 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              Quality, Reliability &{" "}
              <span className="block">Excellence in Every</span>
              <span className="block">Project</span>
            </h1>

            <p
              className={`mt-6 text-white/90 text-lg max-w-xl transition-all duration-1000 delay-200 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              High Professional Trading and Services delivers premium building materials and expert construction services with commitment to quality, safety, and customer satisfaction.
            </p>

            {/* Stats */}
            <div className="mt-8 space-y-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-4 transition-all duration-700 ${
                    isInView
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-10"
                  }`}
                  style={getStaggerDelay(index)}
                >
                  <div className="w-12 h-12 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center group hover:bg-white/20 hover:scale-110 transition-all duration-300">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-white font-medium italic">
                    {stat.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div
              className={`mt-10 flex flex-wrap gap-4 transition-all duration-1000 delay-700 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <Button
                asChild
                size="lg"
                className="bg-white text-[#1e3a5f] rounded-full px-8 hover:scale-105 transition-all"
              >
                <Link href="#divisions">Explore Our Services</Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-[#1e3a5f] bg-white rounded-full px-8 hover:scale-105 transition-all"
              >
                <Link href="#contact">Request a Consultation</Link>
              </Button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div
            className={`hidden lg:flex justify-end items-center relative transition-all duration-1000 delay-500 ${
              isInView
                ? "opacity-100 translate-x-10"
                : "opacity-0 translate-x-20"
            }`}
          >
            {/* Scroll Layer */}
            <div
              style={{
                transform: `translateY(${-100 + scrollY * 0.12}px)`
              }}
            >
              {/* Float Layer */}
              <div className="relative group animate-float transition-transform duration-300">
                <img
                  src="/frontHero.jpeg"
                  alt="Construction"
                  className="w-[500px] h-[350px] object-cover rounded-lg shadow-2xl transition-transform duration-500 group-hover:scale-[1.06]"
                />

                {/* glow */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/10 rounded-full blur-xl animate-pulse delay-1000" />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-white/50 rounded-full animate-scroll" />
        </div>
      </div>
    </section>
  )
}