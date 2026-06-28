import protest from "../assets/protest.jpg"
import poster from "../assets/poster.png"

export const resources = [
  {
    id: 'tibetan-language-primer',
    title: 'Draft Your Own Local Community Safety Policy',
    description: 'A beginner-friendly guide covering the Tibetan script, pronunciation, and common phrases.',
    category: 'Toolkits',
    tags: ['tibetan', 'beginner', 'guide'],
    type: 'pdf', // 'link' | 'pdf' | 'image'
    url: '/resources/tibetan-primer.pdf',
    thumbnail: protest,
  },
  {
    id: 'monastery-map',
    title: 'PEOPLE’S RESPONSE ACT',
    description: 'An interactive map documenting historic monastery sites across the region.',
    category: 'Grantmaking',
    tags: ['geography', 'history', 'monasteries'],
    type: 'link',
    url: 'https://example.com/monastery-map',
    thumbnail: poster,
  },
  {
    id: 'flag-illustration',
    title: '4th of You lie banner',
    description: 'A high-resolution illustration available for educational and non-commercial use.',
    category: 'Artwork',
    tags: ['illustration', 'culture'],
    type: 'image',
    url: '/images/resources/snow-lion-full.jpg',
    thumbnail: poster,
  },
]