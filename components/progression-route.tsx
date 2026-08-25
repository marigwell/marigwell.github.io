import { progression } from "@/lib/portfolio-data"
import { cn } from "@/lib/utils"

const dot: Record<string, string> = {
  cyan: "bg-cyan text-cyan",
  blue: "bg-blue text-blue",
  amber: "bg-amber text-amber",
  magenta: "bg-magenta text-magenta",
}

export function ProgressionRoute() {
  return (
    <section aria-label="Professional progression" className="border-b border-border bg-surface/40">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <p className="font-pixel text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          The route so far
        </p>

        {/* horizontal route on desktop, vertical on mobile */}
        <ol className="mt-8 grid gap-y-8 md:grid-cols-5 md:gap-x-4">
          {progression.map((stage, i) => (
            <li key={stage.label} className="relative flex gap-4 md:block">
              {/* connector */}
              <div className="flex flex-col items-center md:mb-4 md:flex-row">
                <span className={cn("h-3 w-3 shrink-0", dot[stage.accent])} aria-hidden />
                <span
                  className={cn(
                    "mt-1 w-px flex-1 bg-border md:mt-0 md:ml-2 md:h-px md:w-full",
                    i === progression.length - 1 && "md:hidden",
                  )}
                  aria-hidden
                />
              </div>
              <div className="pb-2 md:pb-0">
                <h3 className="text-sm font-semibold tracking-tight text-foreground">{stage.label}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{stage.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
