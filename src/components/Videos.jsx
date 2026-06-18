import Reveal from "../components/Reveal"
import VideoEmbed from "../components/VideoEmbed"

const videos = [
  {
    id: '8uTLb1I5tlA',
    title: 'LANDBACK Action Network',
    caption:
      'The LANDBACK Action Network (LAN) is a membership-based organizing network advancing the LandBack movement that brings together Indigenous Peoples, Tribal Nations, grassroots groups, artists, organizers, institutions, and aligned accomplices to build collective power through: Organizing, Political Action and Resourcing.',
  },
  {
    id: 'WuCeUyItpzE',
    title: 'Daveed Diggs asks: “What to My People is the Fourth of July?”',
    caption: 'Amidst the national uprising against racist violence, Daveed Diggs demands we ask what the Fourth of July means to Black people in America right now.'
  },
  {
    id: 'GiS44Yn1AN8',
    title: 'Life As A Young and Native American | Indigenous Voices',
    caption: 'For a century, the U.S government believed what was best for Native American kids was to strip them of their families and communities, their culture and language, their hair and clothes. Now, mounting research has demonstrated how this policy has decimated communities and been deadly to Native peoples. “Identification with a particular cultural background and a secure sense of cultural identity is associated with higher self-esteem, better educational attainment (grades and going to college), and is protective against mental health problems, substance use, and other issues for adolescents and adults,” a summary of research by the National Indian Child Welfare Association stated in 2017.',
  },
  {
    id: 'siMal6QVblE',
    title: 'A Conversation With Native Americans on Race | Op-Docs',
    caption: 'Directed by Michèle Stephenson and Brian Young, the film grapples with the racist contradictions of a country that, many feel, would prefer it if Native Americans didn’t exist.'
  }
]


export default function Videos() {
  return (
    <section className="border-t border-line py-20 md:py-28">
      <div className="container">
        <Reveal>
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-accent">Watch & witness</p>
          <h2 className="font-display text-hero font-black">Voices of the struggle</h2>
        </Reveal>
        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-2">
          {videos.map((v, i) => (
            <Reveal key={i} delay={(i % 2) * 0.08}>
              <VideoEmbed video={v} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>

  )
}