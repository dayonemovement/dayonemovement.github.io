const actionLabels = {
  rsvp: 'RSVP',
  volunteer: 'Volunteer',
  donate: 'Donate',
  contact: 'Contact organizer',
}

export default function EventCard({ event, highlighted, registerRef }) {
  const date = new Date(event.date)

  return (
    <div
      ref={registerRef}
      className={`border p-6 transition-colors ${highlighted ? 'border-accent' : 'border-line'}`}
    >
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
        {date.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
        {' · '}
        {date.toLocaleTimeString(undefined, { hour: 'numeric', minute: '2-digit' })}
      </p>
      <h3 className="mt-2 font-display text-lg">{event.title}</h3>
      <p className="mt-1 font-mono text-xs uppercase tracking-[0.1em] text-muted">
        {event.location.name} · {event.location.city}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-muted">{event.description}</p>

      {event.actions?.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-3">
          {event.actions.map((action) => (
            <a
              key={action.type}
              href={action.url ?? `mailto:${action.email}`}
              target={action.url ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-line px-4 py-2 font-mono text-xs uppercase tracking-[0.1em] transition-colors hover:border-text"
            >
              {action.label ?? actionLabels[action.type] ?? 'Learn more'}
            </a>
          ))}
        </div>
      )}
    </div>
  )
}