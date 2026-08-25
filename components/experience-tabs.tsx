"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import {
  experiences,
  education,
  leadership,
  stateLabel,
  categoryAccent,
  type NodeState,
} from "@/lib/portfolio-data"
import { accentHex } from "@/lib/accent"
import { SectionHeading, PixelTag } from "@/components/pixel"

type TabKey = "experience" | "education" | "community"

const tabs: { key: TabKey; label: string }[] = [
  { key: "experience", label: "Professional" },
  { key: "education", label: "Education" },
  { key: "community", label: "Community" },
]

export function ExperienceTabs() {
  const [tab, setTab] = useState<TabKey>("experience")

  return (
    <section id="experience" className="scroll-mt-24 border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading
          eyebrow="Background"
          title="Experience, education, and community"
          intro="A closer look at the jobs, classes, and communities I've been part of."
          accent="blue"
        />

        {/* tab bar */}
        <div
          role="tablist"
          aria-label="Experience categories"
          className="flex flex-wrap gap-0 border border-border bg-surface"
        >
          {tabs.map((t) => (
            <button
              key={t.key}
              role="tab"
              aria-selected={tab === t.key}
              onClick={() => setTab(t.key)}
              className={cn(
                "flex-1 border-r border-border px-4 py-3 text-xs font-pixel uppercase tracking-[0.12em] transition-colors last:border-r-0",
                tab === t.key
                  ? "bg-surface-2 text-cyan"
                  : "text-muted-foreground hover:bg-surface-2 hover:text-foreground",
              )}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="mt-8">
          {tab === "experience" && (
            <Timeline
              items={experiences.map((e) => ({
                id: e.id,
                title: e.role,
                org: e.org,
                meta: `${e.location} · ${e.date}`,
                state: e.state,
                category: e.category,
                summary: e.summary,
                bullets: e.bullets,
                tags: e.skills,
              }))}
            />
          )}

          {tab === "education" && (
            <Timeline
              items={education.map((e) => ({
                id: e.id,
                title: e.credential,
                org: e.school,
                meta: `${e.location} · ${e.date}`,
                state: e.state,
                category: e.category,
                summary: e.detail,
                bullets: [],
                tags: e.highlights,
              }))}
            />
          )}

          {tab === "community" && (
            <Timeline
              items={leadership.map((e) => ({
                id: e.id,
                title: e.role,
                org: e.org,
                meta: e.date,
                state: e.state,
                category: e.category,
                summary: e.detail,
                bullets: e.bullets ?? [],
                tags: [],
              }))}
            />
          )}
        </div>
      </div>
    </section>
  )
}

type Item = {
  id: string
  title: string
  org: string
  meta: string
  state: NodeState
  category: keyof typeof categoryAccent
  summary: string
  bullets: string[]
  tags: string[]
}

function Timeline({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<string | null>(items[0]?.id ?? null)

  return (
    <ol className="relative border-l border-border pl-6 sm:pl-8">
      {items.map((it) => {
        const accent = categoryAccent[it.category]
        const isOpen = open === it.id
        const expandable = it.bullets.length > 0 || it.tags.length > 0
        return (
          <li key={it.id} className="relative pb-6 last:pb-0">
            {/* node marker */}
            <span
              className={cn(
                "absolute top-1.5 inline-block h-3.5 w-3.5",
                it.state === "current" && "animate-pulse-node",
                "-left-[31px] sm:-left-[39px]",
              )}
              style={{
                backgroundColor: it.state === "exploring" ? "transparent" : accentHex[accent],
                border: it.state === "exploring" ? `1px solid ${accentHex[accent]}` : undefined,
                color: accentHex[accent],
              }}
              aria-hidden
            />

            <div className="border border-border bg-surface-2">
              <button
                type="button"
                onClick={() => expandable && setOpen(isOpen ? null : it.id)}
                className={cn(
                  "flex w-full items-start justify-between gap-4 p-4 text-left",
                  expandable && "cursor-pointer",
                )}
                aria-expanded={isOpen}
                disabled={!expandable}
              >
                <div>
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                    <h3 className="text-base font-semibold tracking-tight text-foreground">{it.title}</h3>
                    <span className="text-sm text-muted-foreground">— {it.org}</span>
                  </div>
                  <p className="mt-0.5 text-xs uppercase tracking-wide text-muted-foreground">{it.meta}</p>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">{it.summary}</p>
                </div>
                <div className="flex shrink-0 flex-col items-end gap-2">
                  <span
                    className="font-pixel text-[8px] uppercase tracking-[0.12em]"
                    style={{ color: accentHex[accent] }}
                  >
                    {stateLabel[it.state]}
                  </span>
                  {expandable && (
                    <span className="font-pixel text-[10px] text-muted-foreground">{isOpen ? "[-]" : "[+]"}</span>
                  )}
                </div>
              </button>

              {isOpen && expandable && (
                <div className="border-t border-border px-4 py-4">
                  {it.bullets.length > 0 && (
                    <ul className="space-y-2">
                      {it.bullets.map((b, i) => (
                        <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
                          <span
                            className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0"
                            style={{ backgroundColor: accentHex[accent] }}
                            aria-hidden
                          />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {it.tags.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {it.tags.map((t) => (
                        <PixelTag key={t}>{t}</PixelTag>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </li>
        )
      })}
    </ol>
  )
}
