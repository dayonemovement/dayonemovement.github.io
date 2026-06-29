"use client"

import { ArrowDown } from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"
import bgImage from "../assets/protest.webp"

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
        <section className="relative flex h-dvh items-center overflow-hidden" id="hero">

            {/* Background image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url(${bgImage})`,
                    filter: "blur(3px)",
                    // transform: "scale(1.05)",
                }}
            />
            {/* Dark overlay for dark mode, stronger overlay for light mode */}
            <div className="absolute inset-0 bg-black/50 dark:bg-black/70" />

            {/* Foreground content */}
            <div className="container relative z-10">
                <motion.p
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                    transition={transition(0)}
                    className="mb-6 font-mono text-xs uppercase text-accent tracking-[0.3em] md:text-sm"
                >
                    Day One
                </motion.p>

                <h1 className="font-display text-display leading-[0.95] text-white">
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
                    className="mt-8 max-w-xl text-lg leading-relaxed text-white/70 md:text-xl"
                >
                    A movement of people committed to a simple promise of not another 250 years of the same injustice. Day 1 is for anyone who believes in naming the harms of the past and building a future that includes LANDBACK and Reparations, where all people can thrive. 
                </motion.p>

                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                    transition={transition(0.4)}
                    className="mt-10 flex flex-wrap gap-4"
                >
                    <a
                        href="#cta"
                        className="group inline-flex items-center gap-2 bg-accent px-7 py-3.5 font-mono text-xs uppercase tracking-[0.15em] text-white transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                    >
                        Take part
                        <ArrowDown
                            size={16}
                            className="transition-transform group-hover:translate-y-0.5"
                        />
                    </a>
                </motion.div>
            </div>
        </section>
    )
}