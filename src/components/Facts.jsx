import Reveal from './Reveal'

const facts = [
    {
        stat: '1619',
        label: 'Year the first enslaved Africans were brought to the English colonies that became the United States.',
    },
    {
        stat: '1830',
        label: 'The Indian Removal Act, leading to the forced displacement of tens of thousands of Native Americans, including the Trail of Tears.',
    },
    {
        stat: '1965',
        label: 'The Voting Rights Act outlawed discriminatory voting practices like literacy tests, used for decades to disenfranchise Black Americans.',
    },
    {
        stat: '574',
        label: 'Federally recognized tribal nations in the U.S. today, each holding a degree of sovereign legal status.',
    },
]

export default function  Facts() {

    return (
    <section className="py-20 md:py-28">
                <div className="container">
                    <Reveal>
                        <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-accent">The cause</p>
                        <h2 className="max-w-3xl font-display text-hero font-black">
                            Lorem ipsum dolor sit amet consectetur adipisicing. 
                        </h2>
                    </Reveal>
                    <div className="mt-14 grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
                        {facts.map((f, i) => (
                            <Reveal key={i} delay={(i % 4) * 0.2} className="bg-bg">
                                <div className="flex h-full flex-col p-7">
                                    <p className="font-display text-5xl font-black text-accent md:text-6xl">{f.stat}</p>
                                    <p className="mt-4 text-sm leading-relaxed text-muted">{f.label}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>)
}
