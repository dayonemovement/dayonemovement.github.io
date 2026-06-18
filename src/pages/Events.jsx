import { useMemo, useRef, useState } from 'react'
import { events } from '../data/events'
import EventsMap from '../components/EventsMap'
import EventCard from '../components/EventCard'

function groupByLocation(events) {
  const groups = new Map()
  for (const event of events) {
    const key = `${event.location.lat},${event.location.lng}`
    if (!groups.has(key)) {
      groups.set(key, { location: event.location, events: [] })
    }
    groups.get(key).events.push(event)
  }
  return Array.from(groups.values())
}

export default function Events() {
  const [highlightedId, setHighlightedId] = useState(null)
  const cardRefs = useRef({})

  const sortedEvents = useMemo(
    () => [...events].sort((a, b) => new Date(a.date) - new Date(b.date)),
    []
  )

  const groups = useMemo(() => groupByLocation(sortedEvents), [sortedEvents])

  const handleSelectEvent = (id) => {
    setHighlightedId(id)
    cardRefs.current[id]?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  return (
    <main>
      <section className="py-24 md:py-32">
        <div className="container">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-accent md:text-sm">
            Events
          </p>
          <h1 className="font-display text-display">Find an event near you</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
            Upcoming gatherings, rallies, and volunteer opportunities — find
            one near you and see how to get involved.
          </p>
        </div>
      </section>

      <section className="border-t border-line py-16">
        <div className="container">
          <EventsMap groups={groups} onSelectEvent={handleSelectEvent} />

          <div className="mt-12 space-y-6">
            {sortedEvents.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                highlighted={event.id === highlightedId}
                registerRef={(el) => (cardRefs.current[event.id] = el)}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}