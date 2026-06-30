import Reveal from "./Reveal"

const singingHref = 'https://www.facebook.com/reel/1147322711556234'

export default function PressConference() {

    return (
        <section className="border-b border-line py-20 md:py-28">
            <div className="container flex flex-col items-center gap-10">
                <Reveal className="text-center">
                    <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-accent">
                        Press Conference
                    </p>
                    <h2 className="font-display text-hero font-black">Introducing the Day 1 Movement</h2>
                </Reveal>

                <Reveal delay={0.1} className="w-full max-w-2xl">
                    <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-line bg-surface shadow-2xl">
                        <iframe
                            className="absolute inset-0 h-full w-full"
                            src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(singingHref)}&show_text=false&autoplay=false`}
                            title="Press Conference"
                            loading="lazy"
                            style={{ border: 'none', overflow: 'hidden' }}
                            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                            allowFullScreen
                        />
                    </div>
                    <p className="mt-3 text-center font-mono text-[0.7rem] uppercase tracking-[0.15em] text-muted">
                        If the video doesn't load,{' '}
                        <a
                            href={singingHref}
                            target="_blank"
                            rel="noreferrer"
                            className="text-accent hover:underline"
                        >
                            watch it on Facebook ↗
                        </a>
                    </p>
                </Reveal>
            </div>
        </section>

    )
}