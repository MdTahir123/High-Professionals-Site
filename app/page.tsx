import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Divisions } from "@/components/divisions"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Projects } from "@/components/projects"
import { FAQ } from "@/components/faq"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Divisions />
      <WhyChooseUs />
      <Projects />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}
