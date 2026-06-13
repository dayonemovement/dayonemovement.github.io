"use client"

import { ArrowDown } from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
}

export default function Hero() {
    const shouldReduceMotion = useReducedMotion()

    const transition = (delay = 0) => ({
        duration: shouldReduceMotion ? 0 : 0.6,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
    })

    return (
        <section className="flex h-dvh items-center">
            <div className="container">
                <motion.p
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                    transition={transition(0)}
                    className="mb-6 font-mono text-xs uppercase text-accent tracking-[0.3em] md:text-sm"
                >
                    Lorem, ipsum dolor sit amet. Itaque iste qui nam! 250 Rerum?
                </motion.p>

                <h1 className="font-display text-display leading-[0.95]">
                    <motion.span
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        transition={transition(0.1)}
                        className="block"
                    >
                        Not another 250
                    </motion.span>
                </h1>

                <motion.p
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                    transition={transition(0.3)}
                    className="mt-8 max-w-xl text-lg leading-relaxed text-muted md:text-xl"
                >
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi hic
                    ducimus fugit adipisci harum cupiditate assumenda officia, dolorem
                    voluptatibus sapiente maiores dolore commodi, accusamus soluta atque
                    esse expedita suscipit voluptas.
                </motion.p>

                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                    transition={transition(0.4)}
                    className="mt-10 flex flex-wrap gap-4"
                >
                    <a
                        href="#takePart"
                        className="group inline-flex items-center gap-2 bg-accent px-7 py-3.5 font-mono text-xs uppercase tracking-[0.15em] text-white transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                    >
                        Take part
                        <ArrowDown
                            size={16}
                            className="transition-transform group-hover:translate-y-0.5"
                        />
                    </a>
                    <a
                        href="#eventsNearYou"
                        className="inline-flex items-center border border-line px-7 py-3.5 font-mono text-xs uppercase tracking-[0.15em] transition-colors hover:border-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-text"
                    >
                        Events near you
                    </a>
                </motion.div>
            </div>
        </section>
    )
}