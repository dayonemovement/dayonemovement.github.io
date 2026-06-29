import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import Reveal from '../components/Reveal'

const FORM_URL = 'https://form.jotform.com/261651421910045'

const context = `The 4th of YOU LIE (July), 2026 marks 250 years of a fictional story this country has told about itself. We're launching a cross movement network called the "Day 1 Movement" as we approach the 250th year of US empire. Day 1 is the telling of the real history and the start of another story. We're calling it Day 1 because that's what it is. July 5th, 2026 is the day after America's 250th and the first day of a better, more just and equitable world, unyielding solidarity between Black and Indigenous Peoples, the unflinching demand for genuine repair of past harms and a future that belongs to and includes all of us.`

const tips = [
    {
        label: 'Prepare',
        body: 'Take the time to think, sit with the question, imagine, and write down your thoughts before filming. Be creative in your imagining — you could list the things that would be different, talk about a day in the life of someone like you in that future, or anything else you think of.',
    },
    {
        label: 'Sound',
        body: "Limit the background noise. No TVs or music in the background — but also 'silent' things like fans and air conditioners show up in the audio.",
    },
    {
        label: 'Framing',
        body: "Framing matters. Face your main light source, don't sit in too close to the camera, and make sure your background is clear and not distracting.",
    },
    {
        label: 'Voice',
        body: "Your voice here matters. Don't speak too slow, and make sure you project (not yell) clearly.",
    },
    {
        label: 'Be natural',
        body: "Let the audience feel like they're having a convo with you. Don't look like you're reading a script (even if you are) and don't over-emote. Doing 3–5 passes is a great way to shake off nerves and pick up on minor tweaks.",
    },
    {
        label: 'Orientation',
        body: 'Film vertically.',
    },
]

const prompts = [
    'What do you picture when you think of the next 250 years? How does it differ from the last 250?',
    'What could change for the better for the land, for this earth, over the next 250 years?',
    'When we achieve reparations and landback, what will be the impact of that repair over the next 250 years?',
    'What could community look and feel like in the future when our goals are realized?',
    'What could safety and dignity look and feel like in the future when our goals are realized?',
    "In the future we're building, what would life look like for someone like you or your loved ones ? ",
    'What will we do together over the next year, five years, ten years, to move us toward our vision for the next 250?',
]

const promptNote = `These questions feel BIG — that's the point, but it can also feel like a lot of pressure. You don't need to have the policy and infrastructure answers. We're looking for what the liberated future we imagine for ourselves looks like, feels like for people like you, your loved ones, all oppressed people.`

const promptExample = `Examples could be: A future where access to the healthcare we need is freely accessible instead of paywalled, where the land returned to the stewardship of Indigenous people starts coming back to life, where holistic reparations have been made to Black people and we start to see how new generations shape themselves when they're born into a more healed world.`

export default function VideoGuide() {
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
            <header className="container border-b border-line py-20 md:py-28">
                <Reveal>
                    <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-accent">
                        Day One Movement
                    </p>
                    <h1 className="font-display text-[clamp(2.8rem,8vw,7rem)] font-black uppercase leading-none">
                        Video<br />
                        <span className="text-accent">Submission</span><br />
                        Guide
                    </h1>
                </Reveal>
                <Reveal delay={0.1} className="mt-10 max-w-2xl">
                    <p className="border-l-2 border-accent pl-4 font-display text-3xl font-black uppercase tracking-wide">
                        America, stolen lands built by stolen hands.<br />
                        Not another 250. Not another day.
                    </p>
                </Reveal>
                <Reveal delay={0.15} className="mt-8 max-w-2xl">
                    <p className="text-base leading-relaxed text-muted">{context}</p>
                </Reveal>
            </header>

            {/* Recording tips */}
            <section className="container py-16 md:py-24">
                <Reveal>
                    <p className="mb-10 font-mono text-3xl uppercase tracking-[0.25em] text-accent">
                        Guidance for Recording
                    </p>
                </Reveal>
                <div className="divide-y divide-line border-t border-b border-line">
                    {tips.map((tip, i) => (
                        <Reveal key={i} delay={0.04 * i}>
                            <div className="grid grid-cols-[6rem_1fr] gap-6 py-8 md:grid-cols-[10rem_1fr] md:gap-10">
                                <p className="pt-0.5 font-display text-2xl font-black uppercase tracking-wide text-accent">
                                    {tip.label}
                                </p>
                                <p className="text-base leading-relaxed">{tip.body}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* Prompts */}
            <section className="container pb-16 md:pb-24">
                <Reveal>
                    <p className="mb-10 font-mono text-3xl uppercase tracking-[0.25em] text-accent">
                        Prompts
                    </p>
                </Reveal>
                <div className="divide-y divide-line border-t border-line">
                    {prompts.map((prompt, i) => (
                        <Reveal key={i} delay={0.04 * i}>
                            <div className="flex gap-6 py-8 md:gap-10">
                                <span className="mt-0.5 shrink-0 font-mono text-xs text-muted opacity-60 w-5">
                                    {String(i + 1).padStart(2, '0')}
                                </span>
                                <p className="text-base leading-relaxed">{prompt}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>

                {/* Prompt note */}
                <Reveal delay={0.1} className="mt-10 border border-line p-7 md:p-10">
                    <p className="text-sm leading-relaxed text-muted">{promptNote}</p>
                    <p className="mt-4 border-l-2 border-accent pl-4 text-sm leading-relaxed text-fg">
                        {promptExample}
                    </p>
                </Reveal>
            </section>

            {/* CTA */}
            <section className="border-t border-line">
                <Reveal className="container py-20 md:py-28 text-center">
                    <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-accent">
                        Ready?
                    </p>
                    <h2 className="mx-auto max-w-2xl font-display text-[clamp(2rem,5vw,4rem)] font-black uppercase leading-none">
                        Submit your video
                    </h2>
                    <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-muted">
                        Upon completion, use the form below to upload your video. We're building something together — thank you for being part of it.
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

        </main>
    )
}