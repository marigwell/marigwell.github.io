"use client"

import { useMemo, useState } from "react"
import { cn } from "@/lib/utils"
import {
  mapNodes,
  mapConnections,
  categoryAccent,
  stateLabel,
  type MapNode,
} from "@/lib/portfolio-data"
import { accentHex } from "@/lib/accent"
import { SectionHeading, StateBadge } from "@/components/pixel"

const COLS = 5
const ROWS = 5
const x = (col: number) => 8 + (col / COLS) * 84
const y = (row: number) => 12 + (row / ROWS) * 76

function nodeById(id: string) {
  return mapNodes.find((n) => n.id === id)
}

export function CareerMap() {
  const [selectedId, setSelectedId] = useState<string>("suot")
  const selected = nodeById(selectedId) as MapNode

  const paths = useMemo(
    () =>
      mapConnections
        .map((c) => {
          const a = nodeById(c.from)
          const b = nodeById(c.to)
          if (!a || !b) return null
          const ax = x(a.col)
          const ay = y(a.row)
          const bx = x(b.col)
          const by = y(b.row)
          const midx = (ax + bx) / 2
          return {
            key: `${c.from}-${c.to}`,
            d: `M ${ax} ${ay} L ${midx} ${ay} L ${midx} ${by} L ${bx} ${by}`,
            active: c.from === selectedId || c.to === selectedId,
          }
        })
        .filter(Boolean) as { key: string; d: string; active: boolean }[],
    [selectedId],
  )

  // chronological-ish order for the mobile journey
  const ordered = useMemo(
    () => [...mapNodes].sort((a, b) => a.col - b.col || a.row - b.row),
    [],
  )

  return (
    <section id="journey" className="scroll-mt-24 border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading
          eyebrow="The Career Map"
          title="How I got here"
          intro="This map connects my classes, campus roles, and projects to the areas I work in now. Pick a node to see the details."
          accent="cyan"
        />

        {/* legend */}
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <StateBadge state="complete" label={stateLabel.complete} />
          <StateBadge state="current" label={stateLabel.current} />
          <StateBadge state="exploring" label={stateLabel.exploring} />
        </div>

        {/* ---------- Desktop map ---------- */}
        <div className="hidden overflow-x-auto pb-3 md:block">
          <div className="relative aspect-[16/9] min-w-[960px] w-full border border-border bg-surface">
            {/* faint inner grid */}
            <div
              className="pointer-events-none absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(76,124,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(76,124,255,0.06) 1px, transparent 1px)",
                backgroundSize: "5% 8.33%",
              }}
              aria-hidden
            />

            {/* connectors */}
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="absolute inset-0 h-full w-full"
              aria-hidden
            >
              {paths.map((p) => (
                <path
                  key={p.key}
                  d={p.d}
                  fill="none"
                  stroke={p.active ? accentHex.cyan : "#2c3a55"}
                  strokeWidth={p.active ? 2 : 1.25}
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                  vectorEffect="non-scaling-stroke"
                  opacity={p.active ? 1 : 0.8}
                />
              ))}
            </svg>

            {/* nodes */}
            {mapNodes.map((n) => {
              const accent = categoryAccent[n.category]
              const isSel = n.id === selectedId
              return (
                <button
                  key={n.id}
                  type="button"
                  onClick={() => setSelectedId(n.id)}
                  onMouseEnter={() => setSelectedId(n.id)}
                  className={cn(
                    "group absolute -translate-x-1/2 -translate-y-1/2 border bg-surface-2 px-2.5 py-1.5 text-left transition-colors",
                    isSel ? "z-20 border-cyan" : "z-10 border-border hover:border-border-bright",
                  )}
                  style={{ left: `${x(n.col)}%`, top: `${y(n.row)}%`, maxWidth: "160px" }}
                  aria-pressed={isSel}
                >
                  <span className="flex items-center gap-1.5">
                    <span
                      className={cn(
                        "inline-block h-2.5 w-2.5 shrink-0",
                        n.state === "current" && "animate-pulse-node",
                      )}
                      style={{
                        backgroundColor: n.state === "exploring" ? "transparent" : accentHex[accent],
                        border: n.state === "exploring" ? `1px solid ${accentHex[accent]}` : undefined,
                        color: accentHex[accent],
                      }}
                      aria-hidden
                    />
                    <span className="whitespace-nowrap text-xs font-semibold tracking-tight text-foreground">
                      {n.label}
                    </span>
                  </span>
                  <span className="mt-0.5 block whitespace-nowrap text-[10px] text-muted-foreground">
                    {n.date}
                  </span>
                </button>
              )
            })}
          </div>

          {/* detail panel */}
          <div className="mt-4 border border-border bg-surface-2 p-5">
            <NodeDetail node={selected} />
          </div>
        </div>

        {/* ---------- Mobile vertical journey ---------- */}
        <div className="md:hidden">
          <ol className="relative border-l border-border pl-6">
            {ordered.map((n) => {
              const accent = categoryAccent[n.category]
              return (
                <li key={n.id} className="relative pb-8 last:pb-0">
                  <span
                    className={cn(
                      "absolute -left-[26px] top-1 inline-block h-3 w-3",
                      n.state === "current" && "animate-pulse-node",
                    )}
                    style={{
                      backgroundColor: n.state === "exploring" ? "transparent" : accentHex[accent],
                      border: n.state === "exploring" ? `1px solid ${accentHex[accent]}` : undefined,
                      color: accentHex[accent],
                    }}
                    aria-hidden
                  />
                  <div className="border border-border bg-surface-2 p-4">
                    <NodeDetail node={n} compact />
                  </div>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}

function NodeDetail({ node, compact = false }: { node: MapNode; compact?: boolean }) {
  const accent = categoryAccent[node.category]
  return (
    <div>
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
        <span
          className="font-pixel text-[9px] uppercase tracking-[0.15em]"
          style={{ color: accentHex[accent] }}
        >
          {node.category}
        </span>
        <span className="text-[10px] font-pixel uppercase tracking-[0.15em] text-muted-foreground">
          {stateLabel[node.state]}
        </span>
      </div>
      <h3 className={cn("mt-2 font-semibold tracking-tight text-foreground", compact ? "text-base" : "text-xl")}>
        {node.label}
      </h3>
      <p className="text-sm text-muted-foreground">
        {node.sub} · {node.date}
      </p>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">{node.detail}</p>
    </div>
  )
}
