"use client"

/**
 * A handcrafted pixel-art scene: a small "engineering world" of discipline
 * towers wired to a central workstation by glowing data paths. Purely
 * decorative (aria-hidden); all motion is CSS so it honors reduced-motion.
 */

const stars = [
  { x: 12, y: 14, d: "0s" },
  { x: 34, y: 8, d: "1.1s" },
  { x: 58, y: 20, d: "2.2s" },
  { x: 92, y: 10, d: "0.6s" },
  { x: 120, y: 16, d: "1.7s" },
  { x: 150, y: 12, d: "2.6s" },
  { x: 176, y: 22, d: "0.9s" },
  { x: 22, y: 30, d: "1.9s" },
  { x: 188, y: 40, d: "0.4s" },
  { x: 8, y: 46, d: "2.4s" },
]

// discipline towers: x (left), width, height, top-node color, id
const towers = [
  { x: 26, w: 20, h: 42, color: "#4d7cff", rows: 4 },
  { x: 52, w: 16, h: 62, color: "#35e0d8", rows: 6 },
  { x: 118, w: 18, h: 54, color: "#ff4d9d", rows: 5 },
  { x: 142, w: 22, h: 38, color: "#ffb020", rows: 4 },
]

const groundY = 118
const svgW = 200
const svgH = 150

function Windows({ x, w, h, color }: { x: number; w: number; h: number; color: string }) {
  const top = groundY - h
  const cells: { cx: number; cy: number; lit: boolean; blink: boolean }[] = []
  const cols = Math.max(2, Math.floor((w - 6) / 5))
  const rows = Math.max(2, Math.floor((h - 8) / 6))
  let i = 0
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      i++
      const lit = i % 3 !== 0
      cells.push({
        cx: x + 4 + c * 5,
        cy: top + 6 + r * 6,
        lit,
        blink: i % 7 === 0,
      })
    }
  }
  return (
    <>
      {cells.map((cell, idx) => (
        <rect
          key={idx}
          x={cell.cx}
          y={cell.cy}
          width={3}
          height={3}
          fill={cell.lit ? color : "#0c1220"}
          opacity={cell.lit ? 0.9 : 1}
          className={cell.lit && cell.blink ? "animate-blink" : undefined}
          style={cell.blink ? { animationDelay: `${(idx % 5) * 0.4}s` } : undefined}
        />
      ))}
    </>
  )
}

export function HeroArt() {
  return (
    <div className="scanlines relative w-full overflow-hidden border border-border bg-surface">
      <svg
        viewBox={`0 0 ${svgW} ${svgH}`}
        className="pixelated block h-full w-full"
        shapeRendering="crispEdges"
        role="img"
        aria-label="Pixel-art illustration of connected engineering towers wired to a workstation"
      >
        <defs>
          <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0a0e1a" />
            <stop offset="55%" stopColor="#161230" />
            <stop offset="100%" stopColor="#2a1636" />
          </linearGradient>
        </defs>

        {/* sky */}
        <rect x="0" y="0" width={svgW} height={groundY} fill="url(#sky)" />

        {/* stars */}
        {stars.map((s, i) => (
          <rect
            key={i}
            x={s.x}
            y={s.y}
            width={2}
            height={2}
            fill="#d7deea"
            className="animate-blink"
            style={{ animationDelay: s.d }}
          />
        ))}

        {/* moon (pixel disc) */}
        <g fill="#e7e2c8" className="animate-float-slow">
          <rect x="150" y="24" width="16" height="4" />
          <rect x="146" y="28" width="24" height="4" />
          <rect x="146" y="32" width="24" height="4" />
          <rect x="150" y="36" width="16" height="4" />
          <rect x="156" y="28" width="4" height="4" fill="#cfc9a8" />
          <rect x="162" y="32" width="4" height="4" fill="#cfc9a8" />
        </g>

        {/* data paths (stepped pixel lines from tower tops to workstation) */}
        <g stroke="#2c3a55" strokeWidth="1" fill="none">
          <polyline points="36,74 36,96 100,96" />
          <polyline points="60,54 60,90 100,90" />
          <polyline points="127,62 127,90 100,90" />
          <polyline points="153,78 153,96 100,96" />
        </g>

        {/* moving data signals */}
        <g>
          <rect x="0" y="0" width="3" height="3" fill="#35e0d8">
            <animate
              attributeName="opacity"
              values="0;1;1;0"
              dur="2.6s"
              repeatCount="indefinite"
            />
            <animateMotion dur="2.6s" repeatCount="indefinite" path="M60,54 L60,90 L100,90" />
          </rect>
          <rect x="0" y="0" width="3" height="3" fill="#ff4d9d">
            <animate attributeName="opacity" values="0;1;1;0" dur="3.2s" repeatCount="indefinite" />
            <animateMotion dur="3.2s" repeatCount="indefinite" path="M127,62 L127,90 L100,90" />
          </rect>
          <rect x="0" y="0" width="3" height="3" fill="#4d7cff">
            <animate attributeName="opacity" values="0;1;1;0" dur="3.8s" repeatCount="indefinite" />
            <animateMotion dur="3.8s" repeatCount="indefinite" path="M36,74 L36,96 L100,96" />
          </rect>
        </g>

        {/* ground */}
        <rect x="0" y={groundY} width={svgW} height={svgH - groundY} fill="#0b1020" />
        <rect x="0" y={groundY} width={svgW} height="1" fill="#2c3a55" />

        {/* towers */}
        {towers.map((t, i) => {
          const top = groundY - t.h
          return (
            <g key={i}>
              <rect x={t.x} y={top} width={t.w} height={t.h} fill="#121826" stroke="#1e2739" />
              <Windows x={t.x} w={t.w} h={t.h} color={t.color} />
              {/* glowing top node */}
              <rect
                x={t.x + t.w / 2 - 2}
                y={top - 6}
                width={4}
                height={4}
                fill={t.color}
                className="animate-pulse-node"
                style={{ color: t.color }}
              />
              <rect x={t.x + t.w / 2 - 0.5} y={top - 2} width={1} height={2} fill={t.color} />
            </g>
          )
        })}

        {/* central workstation */}
        <g>
          <rect x="88" y="86" width="24" height="18" fill="#0d111b" stroke="#2c3a55" />
          <rect x="90" y="88" width="20" height="12" fill="#0a1f1e" />
          {/* code lines on screen */}
          <rect x="92" y="90" width="10" height="1.5" fill="#35e0d8" />
          <rect x="92" y="93" width="14" height="1.5" fill="#4d7cff" />
          <rect x="92" y="96" width="7" height="1.5" fill="#ffb020" />
          {/* blinking cursor */}
          <rect x="100" y="96" width="2" height="1.5" fill="#35e0d8" className="animate-blink" />
          {/* stand */}
          <rect x="98" y="104" width="4" height="3" fill="#2c3a55" />
          <rect x="94" y="107" width="12" height="2" fill="#2c3a55" />
        </g>

        {/* small server rack near workstation */}
        <g>
          <rect x="74" y="94" width="10" height="14" fill="#121826" stroke="#1e2739" />
          <rect x="76" y="97" width="6" height="1.5" fill="#35e0d8" className="animate-blink" />
          <rect x="76" y="100" width="6" height="1.5" fill="#4d7cff" />
          <rect x="76" y="103" width="6" height="1.5" fill="#35e0d8" className="animate-blink" style={{ animationDelay: "1.2s" }} />
        </g>
      </svg>
    </div>
  )
}
