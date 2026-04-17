// "use client"

// import { HardHat, Wrench, PaintBucket, Building, GlassWater, Package } from "lucide-react"
// import { useScrollAnimation } from "@/hooks/use-scroll-animation"

// const divisions = [
//   {
//     icon: Package,
//     title: "Trading Division",
//     description: "High-quality building materials including tiles, marble, granite, ceramic, sanitary ware, and all building materials.",
//   },
//   {
//     icon: Wrench,
//     title: "AC Maintenance & MEP",
//     description: "Professional AC maintenance, civil work, MEP work, plumbing and electrical services for all project types.",
//   },
//   {
//     icon: PaintBucket,
//     title: "Interior Design",
//     description: "Custom interior design solutions that blend style, practicality, and comfort for residential and commercial spaces.",
//   },
//   {
//     icon: Building,
//     title: "Building Maintenance",
//     description: "Complete building maintenance services that refresh and improve spaces, keeping them functional, safe, and beautiful.",
//   },
//   {
//     icon: GlassWater,
//     title: "Glass & Fitout Works",
//     description: "Glass partitions, fitout works, fire rated doors, and aluminium door installations with precision and quality.",
//   },
//   {
//     icon: HardHat,
//     title: "Construction Services",
//     description: "Smart construction solutions for residential, commercial, and industrial projects bringing precision and innovation.",
//   },
// ]

// export function Divisions() {
//   const { ref, isInView } = useScrollAnimation({ threshold: 0.1 })

//   return (
//     <section 
//       id="divisions" 
//       className="py-20 lg:py-32 relative overflow-hidden"
//     >
//       {/* Background with overlay and parallax effect */}
//       <div 
//         className="absolute inset-0 bg-cover bg-center bg-fixed"
//         style={{
//           backgroundImage: `url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2000&auto=format&fit=crop')`,
//         }}
//       >
//         <div className="absolute inset-0 bg-[#1e3a5f]/90" />
//       </div>

//       <div ref={ref} className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
//         <h2 
//           className={`font-serif text-4xl md:text-5xl text-white text-center mb-16 transition-all duration-700 ${
//             isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
//           }`}
//         >
//           Our Divisions
//         </h2>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {divisions.map((division, index) => (
//             <div
//               key={index}
//               className={`group p-8 rounded-xl bg-white/95 hover:bg-white transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 cursor-pointer ${
//                 isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
//               }`}
//               style={{ transitionDelay: isInView ? `${index * 100}ms` : '0ms' }}
//             >
//               <div className="w-20 h-20 rounded-full bg-[#f5f7fa] border-2 border-[#1e3a5f] flex items-center justify-center mb-6 mx-auto group-hover:bg-[#1e3a5f] group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
//                 <division.icon className="w-8 h-8 text-[#1e3a5f] group-hover:text-white transition-colors duration-300" />
//               </div>
//               <h3 className="text-[#1e3a5f] font-bold text-xl text-center mb-4 group-hover:text-[#1e3a5f] transition-colors">{division.title}</h3>
//               <p className="text-[#1e3a5f]/70 text-center leading-relaxed group-hover:text-[#1e3a5f]/80 transition-colors">{division.description}</p>
              
//               {/* Animated underline */}
//               <div className="mt-6 h-0.5 bg-[#1e3a5f]/20 rounded-full overflow-hidden">
//                 <div className="h-full w-0 bg-[#1e3a5f] group-hover:w-full transition-all duration-500" />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }


// new one 

"use client"

import { HardHat, Wrench, PaintBucket, Building, GlassWater, Package } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const THEME = "#351821"

const divisions = [
  {
    icon: Package,
    title: "Trading Division",
    description: "High-quality building materials including tiles, marble, granite, ceramic, sanitary ware, and all building materials.",
  },
  {
    icon: Wrench,
    title: "AC Maintenance & MEP",
    description: "Professional AC maintenance, civil work, MEP work, plumbing and electrical services for all project types.",
  },
  {
    icon: PaintBucket,
    title: "Interior Design",
    description: "Custom interior design solutions that blend style, practicality, and comfort.",
  },
  {
    icon: Building,
    title: "Building Maintenance",
    description: "Complete building maintenance services keeping spaces functional and safe.",
  },
  {
    icon: GlassWater,
    title: "Glass & Fitout Works",
    description: "Glass partitions, fitout works, fire rated doors and aluminium installations.",
  },
  {
    icon: HardHat,
    title: "Construction Services",
    description: "Smart construction solutions for residential and commercial projects.",
  },
]

export function Divisions() {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1 })

  return (
    <section id="divisions" className="py-20 lg:py-28 relative overflow-hidden">

      {/* BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1548454934-8c01558aa290?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        }}
      >
        {/* LIGHT overlay (important change) */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div ref={ref} className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">

        {/* TITLE */}
        <h2
          className={`font-serif text-4xl md:text-5xl text-white text-center mb-16 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Our Divisions
        </h2>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {divisions.map((division, index) => (
            <div
              key={index}
              className={`group p-6 rounded-xl backdrop-blur-md bg-white/70 hover:bg-white/85 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
              }`}
              style={{ transitionDelay: isInView ? `${index * 100}ms` : "0ms" }}
            >

              {/* ICON */}
              <div
                className="w-16 h-16 rounded-full border-2 flex items-center justify-center mb-5 mx-auto transition-all duration-500 group-hover:scale-110"
                style={{
                  borderColor: THEME,
                }}
              >
                <division.icon
                  className="w-7 h-7 transition-all duration-300"
                  style={{
                    color: THEME,
                  }}
                />
              </div>

              {/* TITLE */}
              <h3
                className="font-bold text-lg text-center mb-3 transition-colors"
                style={{ color: THEME }}
              >
                {division.title}
              </h3>

              {/* TEXT */}
              <p className="text-center text-sm leading-relaxed text-black/70">
                {division.description}
              </p>

              {/* UNDERLINE */}
              <div className="mt-5 h-0.5 bg-black/10 rounded-full overflow-hidden">
                <div
                  className="h-full w-0 group-hover:w-full transition-all duration-500"
                  style={{ backgroundColor: THEME }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}