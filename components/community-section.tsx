import { leadership } from "@/lib/portfolio-data"
import { accentHex } from "@/lib/accent"
import { SectionHeading, StateBadge } from "@/components/pixel"

export function CommunitySection() {
  const primary = leadership.filter((l) => l.primary)
  const secondary = leadership.filter((l) => !l.primary)

  return (
    <section id="community" className="scroll-mt-24 border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading
          eyebrow="The Community Branch"
          title="Leadership, culture, and creative collaboration"
          intro="A parallel branch of the map — cultural organizing, community building, and the game-dev community that shaped the creative side of my work."
          accent="amber"
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {primary.map((l) => (
            <article key={l.id} className="border border-border bg-surface-2 p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-foreground">{l.org}</h3>
                  <p className="mt-1 text-sm text-amber">{l.role}</p>
                  <p className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">{l.date}</p>
                </div>
                <StateBadge state={l.state} label={l.state === "current" ? "Ongoing" : "Completed"} />
              </div>
              {l.bullets && l.bullets.length > 0 && (
                <ul className="mt-4 space-y-2">
                  {l.bullets.map((b, i) => (
                    <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
                      <span
                        className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0"
                        style={{ background: accentHex.amber }}
                        aria-hidden
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>

        {/* smaller nodes */}
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {secondary.map((l) => (
            <div key={l.id} className="border border-border bg-surface p-4">
              <div className="flex items-center gap-2">
                <span
                  className="inline-block h-2.5 w-2.5"
                  style={{
                    backgroundColor: l.state === "exploring" ? "transparent" : accentHex.amber,
                    border: l.state === "exploring" ? `1px solid ${accentHex.amber}` : undefined,
                  }}
                  aria-hidden
                />
                <h4 className="text-sm font-semibold tracking-tight text-foreground">{l.org}</h4>
              </div>
              <p className="mt-1.5 text-xs text-muted-foreground">{l.role}</p>
              <p className="mt-0.5 text-[11px] uppercase tracking-wide text-muted-foreground">{l.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
