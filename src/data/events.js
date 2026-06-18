export const events = [
  {
    id: 'nyc-rally-july',
    title: 'Solidarity Rally',
    date: '2026-07-12T14:00:00',
    location: { name: 'Union Square', city: 'New York, NY', lat: 40.7359, lng: -73.9911 },
    description: 'A peaceful gathering to raise awareness, with speakers and a march to follow.',
    actions: [
      { type: 'rsvp', label: 'RSVP', url: 'https://example.com/rsvp/nyc-july' },
      { type: 'volunteer', label: 'Volunteer', url: 'https://example.com/volunteer/nyc' },
    ],
  },
  {
    id: 'nyc-vigil-august',
    title: 'Candlelight Vigil',
    date: '2026-08-03T19:00:00',
    location: { name: 'Union Square', city: 'New York, NY', lat: 40.7359, lng: -73.9911 },
    description: 'An evening vigil commemorating the anniversary, open to all.',
    actions: [{ type: 'contact', label: 'Contact organizer', email: 'events@example.org' }],
  },
  {
    id: 'sf-meetup-july',
    title: 'Community Meetup',
    date: '2026-07-20T11:00:00',
    location: { name: 'Yerba Buena Gardens', city: 'San Francisco, CA', lat: 37.7845, lng: -122.4011 },
    description: 'A casual meetup for community members to connect and plan upcoming projects.',
    actions: [
      { type: 'rsvp', label: 'RSVP', url: 'https://example.com/rsvp/sf-july' },
      { type: 'donate', label: 'Donate', url: 'https://example.com/donate' },
    ],
  },
]