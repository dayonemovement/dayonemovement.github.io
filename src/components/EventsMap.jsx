import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

function createMarkerIcon(count) {
  return L.divIcon({
    className: '',
    html: `<div class="flex items-center justify-center w-8 h-8 rounded-full border-2 border-bg bg-accent font-mono text-xs text-white">${count > 1 ? count : ''}</div>`,
    iconSize: [32, 32],
    iconAnchor: [16, 16],
  })
}

export default function EventsMap({ groups, onSelectEvent }) {
  const center = groups.length
    ? [groups[0].location.lat, groups[0].location.lng]
    : [20, 0]

  return (
    <MapContainer
      center={center}
      zoom={groups.length ? 4 : 2}
      scrollWheelZoom={false}
      className="h-[60vh] w-full"
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        subdomains="abcd"
        maxZoom={19}
      />
      {groups.map((group) => (
        <Marker
          key={`${group.location.lat}-${group.location.lng}`}
          position={[group.location.lat, group.location.lng]}
          icon={createMarkerIcon(group.events.length)}
        >
          <Popup>
            <div className="font-mono text-xs uppercase tracking-[0.1em]">
              <p className="mb-2 text-muted">{group.location.name}</p>
              <ul className="space-y-2">
                {group.events.map((event) => (
                  <li key={event.id}>
                    <button
                      onClick={() => onSelectEvent(event.id)}
                      className="text-left hover:text-accent"
                    >
                      {event.title}
                      <br />
                      <span className="text-muted">
                        {new Date(event.date).toLocaleDateString(undefined, {
                          month: 'short',
                          day: 'numeric',
                        })}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}