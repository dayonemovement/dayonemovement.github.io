import Hero from "../components/Hero"
import Facts from "../components/Facts"
import Statement from "../components/Statement"
import pImage from '../assets/navajo.jpg'
import ParallaxImage from "../components/ParallaxImage"
import Reveal from "../components/Reveal"
import { Link } from "react-router-dom"
import { ArrowUpRight } from "lucide-react"
export default function Home() {


  return (
    <main>
      <Hero />

      <Facts />
      <ParallaxImage src={pImage} alt="Renewal" caption="Mononoke" />

      <Statement
        statement={{
          kind: 'loud',
          lines: ['America, stolen lands', 'built by stolen hands.'],
          foot: "The 4th of YOU LIE (July), 2026 marks 250 years of a fictional story this country has told about itself. Day 1 is the telling of the real history and the start of another story. We're calling it Day 1 because that's what it is. July 5th, 2026 is the day after America's 250th and the first day of a better, more just and equitable world, unyielding solidarity between Black & Indigenous Peoples, the unflinching demand for genuine repair of past harms and a future that belongs to and includes all of us."
        }}
        align="right" />


      <section className="relative overflow-hidden border-t border-line py-28 text-center md:py-40" id="cta">
        <div className="glow pointer-events-none absolute left-1/2 top-1/2 h-[70vmin] w-[70vmin] -translate-x-1/2 -translate-y-1/2" />
        <Reveal className="container relative">
          <h2 className="mx-auto max-w-3xl font-display text-display font-black">
            Submit your <span className="text-accent">Packet</span>.
          </h2>
          <p className="mx-auto mt-6 max-w-md text-muted">
            Learn the history. Share the story. Refuse the silence. Solidarity is the freedom
            struggle's longest road home.
          </p>
          <Link
            to="https://form.jotform.com/261651421910045"
            className="mt-10 group inline-flex items-center gap-2 bg-accent px-9 py-4 font-mono text-xs uppercase tracking-[0.15em] text-white transition-opacity hover:opacity-90"
          >
            Form <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </Reveal>
      </section>
    </main>
  )
}