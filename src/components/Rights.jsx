import Reveal from './Reveal'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { rights, intro, declaration } from '../data/rights'


export default function Rights() {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <Reveal>
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-accent">Our Principals</p>
          <h2 className="max-w-3xl font-display text-hero font-black">
            Bill of Essential Rights
          </h2>
        </Reveal>

        <Reveal delay={0.08} className="mt-6 max-w-2xl space-y-4">
          <p className="text-sm leading-relaxed text-muted">{intro}</p>
          <p className="border-l-2 border-accent pl-4 text-sm leading-relaxed text-fg">
            {declaration}
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-10 border border-line">
            <div className="h-[480px] overflow-y-auto divide-y divide-line scrollbar-thin scrollbar-track-transparent scrollbar-thumb-line">
              {rights.map((r, i) => (
                <div key={i} className="flex gap-6 p-7 transition-colors hover:bg-surface">
                  <span className="mt-0.5 font-mono text-xs text-accent opacity-50 shrink-0 w-5">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <p className="font-display text-3xl font-black uppercase tracking-wide">{r.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{r.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between border-t border-line px-7 py-4">
              <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted">
                10 Essential Rights
              </p>
              <Link
                to="/bill-of-essential-rights"
                className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-accent transition-opacity hover:opacity-70"
              >
                Read the full document <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}