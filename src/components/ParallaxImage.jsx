import { useRef } from "react"
import { motion, useScroll, useTransform } from 'framer-motion'


export default function ParallaxImage({ src, alt, caption }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'], layoutEffect: false})
  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '20%'])
  return (
    <figure ref={ref} className="relative overflow-hidden" style={{ height: 'calc(75 * var(--vh))', }}>
      <motion.img style={{ y, scale: 1.2 }} src={src} alt={alt} className="h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/30 to-transparent" />
      {caption && (
        <figcaption className="absolute bottom-8 left-0 w-full">
          <p className="container font-mono text-xs uppercase tracking-[0.2em] text-muted">{caption}</p>
        </figcaption>
      )}
    </figure>
  )
}