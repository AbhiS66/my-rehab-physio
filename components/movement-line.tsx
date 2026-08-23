import { cn } from "@/lib/utils"

/**
 * The site's one visual signature: a single continuous hairline stroke that reads
 * like a stretching figure / spine curve. Rendered in terracotta at low opacity —
 * a whisper of texture, never a full illustration.
 */
export function MovementLine({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 240"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className={cn("pointer-events-none select-none", className)}
    >
      <path
        d="M58 206 C 58 160, 108 148, 152 170 C 194 190, 234 190, 264 162 C 274 152, 274 130, 262 124 C 244 114, 228 130, 234 148 C 238 162, 254 168, 264 158 C 280 144, 278 118, 264 106 C 248 92, 226 102, 226 122 C 226 138, 238 148, 252 144 C 266 140, 272 124, 264 114 C 258 104, 244 104, 240 116"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  )
}