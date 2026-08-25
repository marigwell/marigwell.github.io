import { education } from "@/lib/portfolio-data"
import { SectionHeading, PixelTag, StateBadge } from "@/components/pixel"

export function EducationSection() {
  return (
    <section id="education" className="scroll-mt-24 border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading
          eyebrow="Foundational Landmarks"
          title="Where the map is anchored"
          intro="Education forms the major landmarks of the journey — the places the rest of the routes grow out from."
          accent="blue"
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {education.map((e) => (
            <article key={e.id} className="flex flex-col border border-border bg-surface-2 p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-foreground">{e.school}</h3>
                  <p className="mt-1 text-sm text-cyan">{e.credential}</p>
                  <p className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">
                    {e.location} · {e.date}
                  </p>
                </div>
                <StateBadge state={e.state} label={e.state === "current" ? "In progress" : "Completed"} />
              </div>

              <p className="mt-4 leading-relaxed text-muted-foreground">{e.detail}</p>

              <div className="mt-5">
                <p className="font-pixel text-[9px] uppercase tracking-[0.15em] text-muted-foreground">
                  Honors & Activities
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {e.highlights.map((h) => (
                    <PixelTag key={h}>{h}</PixelTag>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
