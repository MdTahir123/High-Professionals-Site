"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { CheckCircle, Loader2 } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1 })

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setIsSubmitting(true)

  try {
    await fetch("https://script.google.com/macros/s/AKfycbxsiykX2O8CyCr3QYxr0nozUMGaw3d7Zy_BXXtjpMVnsKOb4WEiHH-14wSubvKT289-XQ/exec", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        message: formData.message || "N/A",
      }),
    })

    setIsSubmitted(true)
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      message: "",
    })

    setTimeout(() => setIsSubmitted(false), 3000)

  } catch (error) {
    alert("Something went wrong")
  }

  setIsSubmitting(false)
}

  return (
    <section 
      id="contact" 
      className="py-20 lg:py-32 relative overflow-hidden"
    >
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-[#1e3a5f]/80" />
      </div>

      <div ref={ref} className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 
              className={`font-serif text-4xl md:text-5xl text-white italic leading-tight transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              Building Your Vision,{" "}
              <span className="block">Together.</span>
            </h2>
            <p 
              className={`mt-6 text-white/80 text-lg max-w-md transition-all duration-700 delay-200 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              Ready to start your next project? Contact us today and let&apos;s discuss how we can help bring your vision to life.
            </p>
          </div>

          {/* Right Content - Form */}
          <div 
            className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 transition-all duration-700 delay-300 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            }`}
          >
            {isSubmitted ? (
              <div className="text-center py-12 animate-in fade-in zoom-in duration-500">
                <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white text-xl font-bold mb-2">Thank You!</h3>
                <p className="text-white/80">We&apos;ll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="group">
                  <Input
                    type="text"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    required
                    className="bg-white border-0 h-12 text-[#1e3a5f] placeholder:text-[#1e3a5f]/50 focus:ring-2 focus:ring-white/50 transition-all duration-300 hover:shadow-lg"
                  />
                </div>
                <div className="group">
                  <Input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-white border-0 h-12 text-[#1e3a5f] placeholder:text-[#1e3a5f]/50 focus:ring-2 focus:ring-white/50 transition-all duration-300 hover:shadow-lg"
                  />
                </div>
                <div className="group">
                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="bg-white border-0 h-12 text-[#1e3a5f] placeholder:text-[#1e3a5f]/50 focus:ring-2 focus:ring-white/50 transition-all duration-300 hover:shadow-lg"
                  />
                </div>
                  <div className="group">
                  <textarea
                    placeholder="Any message for us"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full bg-white border-0 rounded-md p-3 text-[#1e3a5f] placeholder:text-[#1e3a5f]/50 focus:ring-2 focus:ring-white/50 transition-all duration-300 hover:shadow-lg resize-none"
                  />
                </div>
               <Button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#1e3a5f] hover:bg-[#152a47] text-white h-12 text-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-70 flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Submit"
                )}
              </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
