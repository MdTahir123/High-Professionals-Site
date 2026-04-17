"use client"

import { Shield, Clock, Heart } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const reasons = [
  {
    icon: Shield,
    title: "Quality & Reliability",
    description: "We are committed to delivering superior quality in both trading and contracting services. Our materials are sourced from trusted suppliers, and every project is executed with strict quality control to ensure durability, safety, and long-term performance.",
  },
  {
    icon: Clock,
    title: "Professional Expertise & Timely Execution",
    description: "With a skilled and experienced team, we ensure that every project is handled with professionalism and attention to detail. We understand the importance of deadlines and are dedicated to completing all projects on time without compromising quality.",
  },
  {
    icon: Heart,
    title: "Customer Focus & Competitive Value",
    description: "We prioritize customer satisfaction by understanding client needs and providing customized solutions. Our pricing is competitive, and we aim to deliver maximum value through efficient service and transparent communication.",
  },
]

export function WhyChooseUs() {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1 })

  return (
    <section className="py-20 lg:py-32 bg-white overflow-hidden">
      <div ref={ref} className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 
          className={`font-serif text-4xl md:text-5xl text-[#1e3a5f] text-center mb-16 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Why Choose Us?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className={`text-center group transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
              }`}
              style={{ transitionDelay: isInView ? `${index * 150}ms` : '0ms' }}
            >
              <div className="relative w-20 h-20 rounded-full bg-[#1e3a5f] flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-500">
                <reason.icon className="w-10 h-10 text-white" />
                {/* Pulse ring animation */}
                <div className="absolute inset-0 rounded-full border-2 border-[#1e3a5f] animate-ping opacity-20" />
              </div>
              <h3 className="text-[#1e3a5f] font-bold text-xl mb-4 group-hover:text-[#1e3a5f]/80 transition-colors">{reason.title}</h3>
              <p className="text-[#1e3a5f]/70 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
