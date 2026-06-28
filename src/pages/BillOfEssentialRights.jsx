import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import Reveal from '../components/Reveal'
import { rights, sources, intro, declaration } from '../data/rights'

export default function BillOfEssentialRights() {
    return (
        <main className="min-h-screen bg-bg text-fg">

            {/* Back nav */}
            <div className="container pt-10">
                <Link
                    to="/"
                    className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-muted transition-colors hover:text-fg"
                >
                    <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-0.5" />
                    Back
                </Link>
            </div>

            {/* Hero */}
            <header className="container py-20 md:py-28 border-b border-line">
                <Reveal>
                    <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-accent">
                        Day One Movement
                    </p>
                    <h1 className="font-display text-[clamp(2.8rem,8vw,7rem)] font-black leading-none uppercase">
                        Bill of<br />
                        <span className="text-accent">Essential</span><br />
                        Rights
                    </h1>
                </Reveal>

                <Reveal delay={0.1} className="mt-10 max-w-2xl">
                    <p className="text-base leading-relaxed text-muted">{intro}</p>
                </Reveal>

                <Reveal delay={0.15} className="mt-8 max-w-2xl">
                    <p className="border-l-2 border-accent pl-5 text-base leading-relaxed text-fg font-medium">
                        {declaration}
                    </p>
                </Reveal>
            </header>

            {/* Rights */}
            <section className="container py-16 md:py-24">
                <div className="divide-y divide-line border-t border-b border-line">
                    {rights.map((r, i) => (
                        <Reveal key={i} delay={0.05}>
                            <div className="grid grid-cols-[3rem_1fr] gap-6 py-10 md:grid-cols-[6rem_1fr] md:gap-10">
                                {/* Index */}
                                <div className="pt-1">
                                    <span className="font-mono text-xs text-accent opacity-60">
                                        {String(i + 1).padStart(2, '0')}
                                    </span>
                                </div>
                                {/* Content */}
                                <div>
                                    <h2 className="font-display text-xl font-black uppercase tracking-wide md:text-2xl">
                                        {r.title}
                                    </h2>
                                    <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
                                        {r.body}
                                    </p>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* Sources */}
            <footer className="container pb-24">
                <Reveal>
                    <p className="mb-6 font-mono text-xs uppercase tracking-[0.25em] text-accent">
                        Sources & Resources
                    </p>
                    <ul className="space-y-2">
                        {sources.map((s, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-muted">
                                <span className="mt-1 block h-px w-4 shrink-0 bg-line" />
                                <a
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-muted underline underline-offset-2 decoration-muted/30 hover:text-fg hover:decoration-muted transition-colors"
                                >
                                    {s.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </Reveal>
            </footer>
        </main >
    )
}