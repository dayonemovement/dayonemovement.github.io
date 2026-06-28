import Reveal from "./Reveal"
import { Link } from "react-router-dom"
import { ArrowUpRight } from "lucide-react"

const FORM_URL = 'https://form.jotform.com/261651421910045'

export default function CTA() {

    return (
        <section className="relative overflow-hidden py-28 text-center md:py-40" id="cta">
            <div className="glow pointer-events-none absolute left-1/2 top-1/2 h-[70vmin] w-[70vmin] -translate-x-1/2 -translate-y-1/2" />
            <Reveal className="container relative">
                <h2 className="mx-auto max-w-3xl font-display text-display font-black">
                    Submit your <span className="text-accent">Media</span>.
                </h2>
                <p className="mx-auto mt-6 max-w-md text-muted">
                    Click the form to submit a written story, media, resources, or an event to be featured on this website. Please review this <Link
                        to='/video-guide'
                        className="text-accent underline underline-offset-2 decoration-accent/50 hover:decoration-accent transition-colors"
                    >
                        video guide
                    </Link> before submitting.
                </p>
                <a
                    href={FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-10 inline-flex items-center gap-2 bg-accent px-9 py-4 font-mono text-xs uppercase tracking-[0.15em] text-white transition-opacity hover:opacity-90"
                >
                    Open form <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
            </Reveal>
        </section>

    )
}

