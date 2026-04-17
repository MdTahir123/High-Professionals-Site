"use client"

import { Award, Users, ShieldCheck, Target } from "lucide-react"
import { useScrollAnimation, useStaggerAnimation } from "@/hooks/use-scroll-animation"

const features = [
  {
    icon: Award,
    title: "Legacy & Trust",
    description: "Serving clients with dedication and building long-term relationships through professional performance.",
  },
  {
    icon: Users,
    title: "Skilled Team",
    description: "Experienced professionals aligned with global standards and industry best practices.",
  },
  {
    icon: ShieldCheck,
    title: "Quality & Safety",
    description: "ISO quality controls and a safety-first approach in all trading and contracting activities.",
  },
  {
    icon: Target,
    title: "Vision",
    description: "To become a leading trading and contracting company in Qatar known for trust and quality.",
  },
]

export function About() {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1 })
  const getStaggerDelay = useStaggerAnimation(features.length, 100)

  return (
    <section id="about" className="py-20 lg:py-32 bg-white overflow-hidden">
      <div ref={ref} className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Content */}
          <div>
            <h2 
              className={`font-serif text-4xl md:text-5xl text-[#351821] mb-6 transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              About Us
            </h2>
            <p 
              className={`text-[#1e3a5f]/80 text-lg leading-relaxed mb-8 transition-all duration-700 delay-100 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Welcome to High Professional Trading and Services, a Qatar-based company specializing in trading and contracting solutions. We are committed to delivering high-quality building materials and professional contracting services with reliability, integrity, and excellence.
            </p>
            <p 
              className={`text-[#1e3a5f]/80 text-lg leading-relaxed mb-10 transition-all duration-700 delay-200 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Our experienced team works closely with clients to provide reliable building materials and professional construction services. We ensure that each project is completed with attention to detail, safety standards, and high-quality workmanship.
            </p>

            {/* Feature Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className={`p-6 rounded-xl bg-[#f5f7fa] hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group cursor-pointer ${
                    isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: isInView ? `${300 + index * 100}ms` : '0ms' }}
                >
                  <div className="w-14 h-14 rounded-full bg-white border-2 border-[#1e3a5f] flex items-center justify-center mb-4 group-hover:bg-[#1e3a5f] transition-colors duration-300">
                    <feature.icon className="w-6 h-6 text-[#1e3a5f] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-[#1e3a5f] font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-[#1e3a5f]/70 text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Images */}
          <div 
            className={`relative transition-all duration-1000 delay-300 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            }`}
          >
            <div className="grid grid-cols-2 gap-4">
              {/* Main tall image */}
              <div className="relative h-[500px] rounded-xl overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop"
                  alt="Modern skyscraper"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#1e3a5f]/0 group-hover:bg-[#1e3a5f]/20 transition-colors duration-300" />
              </div>
              
              {/* Right column with stat and image */}
              <div className="flex flex-col gap-4">
                {/* Experience stat */}
                <div 
                  className={`bg-[#e8f4fc] rounded-xl p-6 text-center transition-all duration-700 delay-500 ${
                    isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                  }`}
                >
                  <span className="text-6xl font-bold text-[#1e3a5f] counter-animate">15+</span>
                  <p className="text-[#1e3a5f] font-medium mt-2">Years Of Experience</p>
                </div>
                
                {/* Bottom image */}
                <div className="flex-1 rounded-xl overflow-hidden min-h-[300px] group">
                  <img
                    src="/about.jpg"
                    alt="Construction site with crane"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
