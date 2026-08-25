"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { profile } from "@/lib/portfolio-data"

const links = [
  { label: "Home", href: "#home" },
  { label: "Journey", href: "#journey" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Community", href: "#community" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
]

export function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors",
        scrolled ? "border-border bg-background/90 backdrop-blur" : "border-transparent bg-transparent",
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a href="#home" className="group flex items-center gap-2.5" aria-label="Jimwell Marigmen — home">
          <span className="grid h-7 w-7 place-items-center border border-cyan bg-surface-2 text-cyan">
            <span className="font-pixel text-[10px]">JM</span>
          </span>
          <span className="font-pixel text-[10px] uppercase tracking-[0.15em] text-foreground">
            marigwell
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="border border-transparent px-2.5 py-1.5 text-xs font-medium uppercase tracking-wide text-muted-foreground transition-colors hover:border-border hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <a
            href={profile.resume}
            download
            className="inline-flex items-center gap-2 border border-cyan bg-cyan px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-primary-foreground transition-colors hover:bg-transparent hover:text-cyan"
          >
            Résumé
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center gap-2 border border-border px-3 py-1.5 text-xs font-pixel uppercase tracking-[0.15em] text-foreground lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-border bg-background lg:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-4 py-2 sm:px-6">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border/60 py-3 text-sm uppercase tracking-wide text-muted-foreground hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={profile.resume}
                download
                onClick={() => setOpen(false)}
                className="mt-3 mb-2 inline-flex items-center gap-2 border border-cyan bg-cyan px-3 py-2 text-xs font-semibold uppercase tracking-wide text-primary-foreground"
              >
                Download Résumé
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
