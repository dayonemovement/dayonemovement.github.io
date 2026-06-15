import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import { resources } from '../data/resources'
import ResourceCard from '../components/ResourceCard'
import SegmentedPill from '../components/SegmentedPill'

const typeOptions = ['all', 'link', 'pdf', 'image']
const typeLabels = { all: 'All', link: 'Links', pdf: 'PDFs', image: 'Images' }

export default function Resources() {
    const [query, setQuery] = useState('')
    const [activeType, setActiveType] = useState('all')
    const [activeCategory, setActiveCategory] = useState('all')

    const categoryOptions = useMemo(() => {
        const unique = Array.from(new Set(resources.map((r) => r.category)))
        return ['all', ...unique]
    }, [])

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase()
        return resources.filter((r) => {
            if (activeType !== 'all' && r.type !== activeType) return false
            if (activeCategory !== 'all' && r.category !== activeCategory) return false
            if (!q) return true
            const haystack = [r.title, r.description, r.category, ...(r.tags ?? [])]
                .join(' ')
                .toLowerCase()
            return haystack.includes(q)
        })
    }, [query, activeType, activeCategory])

    return (
        <main>
            <section className="py-24 md:py-32">
                <div className="container">
                    <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-accent md:text-sm">
                        Library
                    </p>
                    <h1 className="font-display text-display">Your Resource Hub</h1>
                    <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
                        A growing collection of guides, readings, maps, and media — search
                        below to find what you need.
                    </p>
                </div>
            </section>

            <section className="border-t border-line py-16">
                <div className="container flex flex-wrap items-center gap-4">
                    <div className="relative min-w-[240px] flex-1 max-w-xl">
                        <Search
                            size={18}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-muted"
                        />
                        <input
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search resources..."
                            className="w-full border border-line bg-transparent py-3.5 pl-12 pr-4 font-mono text-sm uppercase tracking-[0.1em] placeholder:text-muted focus:border-accent focus:outline-none"
                        />
                    </div>

                    <div className="flex flex-wrap gap-4">
                        <SegmentedPill
                            layoutId="type-pill"
                            options={typeOptions}
                            value={activeType}
                            onChange={setActiveType}
                            labels={typeLabels}
                        />
                        <SegmentedPill
                            layoutId="category-pill"
                            options={categoryOptions}
                            value={activeCategory}
                            onChange={setActiveCategory}
                            labels={{ all: 'All categories' }}
                        />
                    </div>

                    {filtered.length === 0 ? (
                        <p className="mt-16 font-mono text-sm uppercase tracking-[0.1em] text-muted">
                            No resources found.
                        </p>
                    ) : (
                        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {filtered.map((resource) => (
                                <ResourceCard key={resource.id} resource={resource} />
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </main>
    )
}