import { motion } from "framer-motion"
import { useEffect, useRef } from "react"

export default function SegmentedPill({
  options,
  value,
  onChange,
  labels,
  layoutId = "segmented-pill",
}) {
  const containerRef = useRef(null)
  const activeIndex = options.indexOf(value)

  useEffect(() => {
    const handler = (e) => {
      if (!containerRef.current?.contains(document.activeElement)) return

      if (e.key === "ArrowRight") {
        e.preventDefault()
        const next = options[Math.min(options.length - 1, activeIndex + 1)]
        if (next) onChange(next)
      }

      if (e.key === "ArrowLeft") {
        e.preventDefault()
        const prev = options[Math.max(0, activeIndex - 1)]
        if (prev) onChange(prev)
      }
    }

    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [activeIndex, options, onChange])

  return (
    <div
      ref={containerRef}
      className="inline-flex rounded-full border border-line bg-bg p-1"
    >
      {options.map((opt) => {
        const isActive = opt === value

        return (
          <button
            key={opt}
            type="button"
            onClick={() => onChange(opt)}
            aria-pressed={isActive}
            className="relative rounded-full px-4 py-2 font-mono text-xs uppercase tracking-[0.1em] transition focus:outline-none"
          >
            {isActive && (
              <motion.div
                layoutId={layoutId}
                className="absolute inset-0 rounded-full bg-accent"
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 35,
                }}
              />
            )}

            <span
              className={`relative z-10 transition-colors ${
                isActive ? "text-white" : "text-muted"
              }`}
            >
              {labels?.[opt] ?? opt}
            </span>
          </button>
        )
      })}
    </div>
  )
}