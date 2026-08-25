import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import type { NodeState } from "@/lib/portfolio-data"
import type { Accent } from "@/lib/accent"

/* A small pixel-style tech tag */
export function PixelTag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center border border-border bg-surface-2 px-2 py-1 text-[11px] leading-none tracking-wide text-muted-foreground">
      {children}
    </span>
  )
}

/* Section eyebrow label in the pixel font */
export function Eyebrow({ children, accent = "cyan" }: { children: ReactNode; accent?: Accent }) {
  const color = {
    cyan: "text-cyan",
    blue: "text-blue",
    amber: "text-amber",
    magenta: "text-magenta",
  }[accent]
  return (
    <span className={cn("font-pixel text-[10px] uppercase tracking-[0.2em]", color)}>{children}</span>
  )
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  intro,
  accent = "cyan",
}: {
  id?: string
  eyebrow: string
  title: string
  intro?: string
  accent?: Accent
}) {
  return (
    <header id={id} className="mb-10 scroll-mt-24">
      <div className="flex items-center gap-3">
        <span
          className={cn("inline-block h-3 w-3", {
            "bg-cyan": accent === "cyan",
            "bg-blue": accent === "blue",
            "bg-amber": accent === "amber",
            "bg-magenta": accent === "magenta",
          })}
          aria-hidden
        />
        <Eyebrow accent={accent}>{eyebrow}</Eyebrow>
      </div>
      <h2 className="mt-4 text-pretty text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      {intro ? <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">{intro}</p> : null}
    </header>
  )
}

const dotColor: Record<NodeState, string> = {
  complete: "bg-blue",
  current: "bg-cyan",
  exploring: "bg-amber",
}

/* State indicator: solid (complete), pulsing (current), hollow (exploring) */
export function StateDot({ state, className }: { state: NodeState; className?: string }) {
  if (state === "exploring") {
    return (
      <span
        className={cn("inline-block h-3 w-3 border border-amber bg-transparent", className)}
        aria-hidden
      />
    )
  }
  return (
    <span
      className={cn(
        "inline-block h-3 w-3",
        dotColor[state],
        state === "current" && "animate-pulse-node text-cyan",
        className,
      )}
      aria-hidden
    />
  )
}

export function PixelPanel({ children, accent = "cyan", className }: { children: ReactNode; accent?: Accent; className?: string }) {
  const border = { cyan: "border-cyan/35", blue: "border-blue/35", amber: "border-amber/35", magenta: "border-magenta/35" }[accent]
  return <div className={cn("border bg-surface-1 shadow-pixel", border, className)}>{children}</div>
}

export function StateBadge({ state, label }: { state: NodeState; label: string }) {
  const styles: Record<NodeState, string> = {
    complete: "border-blue/50 text-blue",
    current: "border-cyan/50 text-cyan",
    exploring: "border-amber/50 text-amber",
  }
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 border px-2 py-1 text-[10px] font-pixel uppercase tracking-[0.15em]",
        styles[state],
      )}
    >
      <StateDot state={state} className="h-2 w-2" />
      {label}
    </span>
  )
}
