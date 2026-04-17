"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const projects = [
  {
    title: "Commercial Tower Interior",
    category: "Interior Design",
    image:"/interior.jpg"
    //image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Villa Renovation Project",
    category: "Renovation",
    image : "/renovation.jpg"
    //image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Office Glass Partitions",
    category: "Glass Works",
    image : "/glasswork.JPG"
    //image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Industrial AC Installation",
    category: "AC Maintenance",
    image:"/acreoair.JPG"
    // image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop",
  },
]

export function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1 })

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <section id="projects" className="py-20 lg:py-32 bg-[#f5f7fa] overflow-hidden">
      <div ref={ref} className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <h2 
            className={`font-serif text-4xl md:text-5xl text-[#351821] mb-6 md:mb-0 transition-all duration-700 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            Ongoing Projects
          </h2>
          <div 
            className={`flex gap-4 transition-all duration-700 delay-200 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full border-[#1e3a5f] text-[#1e3a5f] hover:bg-[#1e3a5f] hover:text-white hover:scale-110 transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full border-[#1e3a5f] text-[#1e3a5f] hover:bg-[#1e3a5f] hover:text-white hover:scale-110 transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative rounded-xl overflow-hidden h-80 cursor-pointer transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
              }`}
              style={{ transitionDelay: isInView ? `${index * 100}ms` : '0ms' }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f] via-[#1e3a5f]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              
              {/* Content that slides up on hover */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-500">
                <span className="text-white/80 text-sm block mb-1 transform group-hover:-translate-y-2 transition-transform duration-300">{project.category}</span>
                <h3 className="text-white font-bold text-lg transform group-hover:-translate-y-2 transition-transform duration-300 delay-75">{project.title}</h3>
                
                {/* View project link that appears on hover */}
                <div className="mt-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
                  <span className="text-white/90 text-sm font-medium flex items-center gap-2">
                    View Project 
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </div>
              </div>
              
              {/* Decorative corner accent */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
