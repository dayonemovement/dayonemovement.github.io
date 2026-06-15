import Hero from "../components/Hero"
import Facts from "../components/Facts"
import Statement from "../components/Statement"
import pImage from '../assets/navajo.jpg'
import ParallaxImage from "../components/ParallaxImage"
import Videos from "../components/Videos"
export default function Home() {

  
  return (
    <main>
      <Hero />

      <Facts />
      <ParallaxImage src={pImage} alt="Renewal" caption="Mononoke" />

      <Statement statement={{ kind: 'loud', lines: ['Together', 'Stronger'], foot: 'A shared experience of oppression' }} align="right" />
    </main>
  )
}