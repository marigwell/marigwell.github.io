import { Code2, Link2 } from "lucide-react"
import { HeroArt } from "@/components/hero-art"
import { profile } from "@/lib/portfolio-data"
import { Eyebrow } from "@/components/pixel"

export function Hero() {
  return (
    <section id="home" className="scroll-mt-24 border-b border-border">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-16 pt-28 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:pb-24 lg:pt-32">
        {/* left */}
        <div>
          <Eyebrow accent="cyan">Backend · AI · Systems · Creative</Eyebrow>
          <h1 className="mt-4 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-3 font-pixel text-[11px] uppercase leading-relaxed tracking-[0.15em] text-cyan">
            {profile.title}
          </p>
          <p className="mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            {profile.intro}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="Open marigwell GitHub profile" className="inline-flex items-center gap-2 border border-border-bright bg-surface-2 px-4 py-2.5 text-sm font-semibold uppercase tracking-wide text-foreground transition-colors hover:border-cyan hover:text-cyan">
              <Code2 className="h-4 w-4" aria-hidden /> GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="Open Jimwell Marigmen LinkedIn profile" className="inline-flex items-center gap-2 border border-border-bright bg-surface-2 px-4 py-2.5 text-sm font-semibold uppercase tracking-wide text-foreground transition-colors hover:border-cyan hover:text-cyan">
              <Link2 className="h-4 w-4" aria-hidden /> LinkedIn
            </a>
          </div>
        </div>

        {/* right */}
        <div className="relative">
          <div className="animate-float-slow">
            <HeroArt />
          </div>
          <p className="mt-3 text-center font-pixel text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
            A world of systems, still under construction
          </p>
        </div>
      </div>
    </section>
  )
}
