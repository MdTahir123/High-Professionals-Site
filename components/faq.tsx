"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const faqs = [
  {
    question: "What services does High Professional Trading & Services offer?",
    answer: "We offer comprehensive trading and contracting services including building material supply (tiles, marble, granite, ceramic, sanitary ware), AC maintenance, civil work, MEP work, glass partitions, fitout works, fire rated doors, plumbing, electrical works, interior design, and complete building maintenance.",
  },
  {
    question: "Do you supply building materials for large projects?",
    answer: "Yes, we supply high-quality building materials for projects of all sizes - residential, commercial, and industrial. Our materials are sourced from trusted suppliers and meet international quality standards.",
  },
  {
    question: "What areas in Qatar do you serve?",
    answer: "We serve all areas across Qatar including Doha and surrounding regions. Our team is equipped to handle projects throughout the country with reliable delivery and professional services.",
  },
  {
    question: "How do you ensure quality and safety in your projects?",
    answer: "Safety is a top priority at High Professional Trading and Services. We follow strict safety guidelines and ISO quality controls. Our quality control processes ensure that all materials and services meet the highest industry standards.",
  },
  {
    question: "Can you handle renovations and maintenance work?",
    answer: "Absolutely. We specialize in renovation and maintenance services that refresh and improve spaces, keeping them functional, safe, and beautiful. From minor repairs to complete renovations, we handle it all.",
  },
]

export function FAQ() {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1 })

  return (
    <section className="py-20 lg:py-32 bg-white overflow-hidden">
      <div ref={ref} className="mx-auto max-w-4xl px-4 lg:px-8">
        <h2 
          className={`font-serif text-4xl md:text-5xl text-[#1e3a5f] text-center mb-12 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Frequently Asked Questions
        </h2>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className={`border border-[#1e3a5f]/20 rounded-lg px-6 data-[state=open]:bg-[#f5f7fa] data-[state=open]:shadow-lg transition-all duration-500 hover:border-[#1e3a5f]/40 ${
                isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
              style={{ transitionDelay: isInView ? `${index * 100}ms` : '0ms' }}
            >
              <AccordionTrigger className="text-[#1e3a5f] text-left font-medium hover:no-underline py-5 group">
                <span className="group-hover:translate-x-2 transition-transform duration-300 inline-block">
                  {index + 1}. {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-[#1e3a5f]/70 pb-5 animate-in slide-in-from-top-2 duration-300">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
