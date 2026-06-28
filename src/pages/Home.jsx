import Hero from "../components/Hero"
import Rights from "../components/Rights"
import Statement from "../components/Statement"
import pImage from '../assets/navajo.jpg'
import ParallaxImage from "../components/ParallaxImage"
import CTA from "../components/CTA"
export default function Home() {


  return (
    <main>
      <Hero />
      
      <Rights />
      <ParallaxImage src={pImage} alt="Renewal" caption="" />

      <Statement
        statement={{
          kind: 'loud',
          lines: ['America, stolen lands', 'built by stolen hands.'],
          foot: "The 4th of YOU LIE (July), 2026 marks 250 years of a fictional story this country has told about itself. Day 1 is the telling of the real history and the start of another story. We're calling it Day 1 because that's what it is. July 5th, 2026 is the day after America's 250th and the first day of a better, more just and equitable world, unyielding solidarity between Black & Indigenous Peoples, the unflinching demand for genuine repair of past harms and a future that belongs to and includes all of us."
        }}
        align="right" />


    <CTA />
    </main>
  )
}