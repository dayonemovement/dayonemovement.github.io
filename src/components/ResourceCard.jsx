import { ArrowUpRight } from 'lucide-react'

const typeLabels = {
    link: 'Visit site',
    pdf: 'Open PDF',
    image: 'View image',
}

export default function ResourceCard({ resource }) {
    const { title, description, url, thumbnail, type } = resource

    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col overflow-hidden border border-line transition-colors hover:border-text"
        >
            <div className="aspect-[4/3] overflow-hidden bg-line/20">
                {thumbnail ? (
                    <img
                        src={thumbnail}
                        alt=""
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                ) : (
                    <div className="flex h-full items-center justify-center font-mono text-xs uppercase tracking-[0.2em] text-muted">
                        {type}
                    </div>
                )}
            </div>

            <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-lg">{title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                    {description}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-accent">
                    {typeLabels[type] ?? 'Open'}
                    <ArrowUpRight
                        size={14}
                        className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                </span>
            </div>
        </a>
    )
}