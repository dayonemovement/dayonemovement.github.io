import Reveal from "./Reveal"

export default function PhotoGrid({ images, eyebrow }) {
  return (
    <section className="border-t border-line py-20 md:py-28" id="photo-grid">
      <div className="container">
        {eyebrow && (
          <Reveal>
            <p className="mb-10 font-mono text-xs uppercase tracking-[0.25em] text-accent">{eyebrow}</p>
          </Reveal>
        )}
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {images.map((img, i) => (
            <Reveal
              key={i}
              delay={(i % 3) * 0.07}
              // Tall images span two rows for visual rhythm
              className={i === 1 || i === 4 ? 'row-span-2' : ''}
            >
              <figure className="group relative h-full min-h-[200px] overflow-hidden">
                <img
                  src={img.image}
                  alt={img.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                {/* Caption slides up on hover */}
                <figcaption className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-black/80 to-transparent px-4 pb-4 pt-8 font-mono text-[0.65rem] uppercase tracking-[0.15em] text-white/80 transition-transform duration-300 group-hover:translate-y-0">
                  {img.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
