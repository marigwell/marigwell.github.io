export type Accent = "cyan" | "blue" | "amber" | "magenta"

// Raw hex values, kept in sync with the tokens in globals.css.
export const accentHex: Record<Accent, string> = {
  cyan: "#35e0d8",
  blue: "#4d7cff",
  amber: "#ffb020",
  magenta: "#ff4d9d",
}

// Tailwind text color classes bound to the theme tokens.
export const accentText: Record<Accent, string> = {
  cyan: "text-cyan",
  blue: "text-blue",
  amber: "text-amber",
  magenta: "text-magenta",
}

export const accentBorder: Record<Accent, string> = {
  cyan: "border-cyan",
  blue: "border-blue",
  amber: "border-amber",
  magenta: "border-magenta",
}
