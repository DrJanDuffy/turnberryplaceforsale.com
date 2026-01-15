/**
 * Asset audit for `public/`
 *
 * Goals:
 * - Flag duplicate "(1)" files (common when downloading assets)
 * - Flag filenames with spaces (harder to reference safely)
 * - Flag very large assets (Core Web Vitals risk)
 *
 * Usage:
 *   node scripts/asset-audit.js
 */

const fs = require("fs")
const path = require("path")

const ROOT = process.cwd()
const PUBLIC_DIR = path.join(ROOT, "public")

const IMAGE_EXTS = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif", ".svg", ".gif", ".ico"])
const VIDEO_EXTS = new Set([".mp4", ".webm", ".mov"])

function walk(dir) {
  const out = []
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name)
    if (entry.isDirectory()) out.push(...walk(p))
    else out.push(p)
  }
  return out
}

function bytesToMB(bytes) {
  return Math.round((bytes / 1024 / 1024) * 100) / 100
}

function rel(p) {
  return p.replace(ROOT, "").replaceAll("\\", "/")
}

function main() {
  if (!fs.existsSync(PUBLIC_DIR)) {
    console.error("Missing public/ directory:", PUBLIC_DIR)
    process.exit(1)
  }

  const files = walk(PUBLIC_DIR)
  const assets = files
    .map((abs) => {
      const ext = path.extname(abs).toLowerCase()
      const isAsset = IMAGE_EXTS.has(ext) || VIDEO_EXTS.has(ext)
      if (!isAsset) return null
      const stat = fs.statSync(abs)
      return {
        abs,
        ext,
        bytes: stat.size,
        name: path.basename(abs),
      }
    })
    .filter(Boolean)

  const withSpaces = assets.filter((a) => /\s/.test(a.name))
  const duplicates1 = assets.filter((a) => /\s\(\d+\)\./.test(a.name))

  // Large asset thresholds (tuned for real estate images)
  const largeImages = assets
    .filter((a) => IMAGE_EXTS.has(a.ext))
    .filter((a) => a.bytes >= 900 * 1024) // 0.9MB+
    .sort((a, b) => b.bytes - a.bytes)

  console.log("=== public/ asset audit ===")
  console.log("Total assets:", assets.length)

  console.log("\n-- Filenames with spaces --")
  if (!withSpaces.length) console.log("OK")
  else withSpaces.forEach((a) => console.log(`${bytesToMB(a.bytes)}MB  ${rel(a.abs)}`))

  console.log("\n-- Duplicate-style filenames like \"(1)\" --")
  if (!duplicates1.length) console.log("OK")
  else duplicates1.forEach((a) => console.log(`${bytesToMB(a.bytes)}MB  ${rel(a.abs)}`))

  console.log("\n-- Large images (>= 0.9MB) --")
  if (!largeImages.length) console.log("OK")
  else largeImages.slice(0, 50).forEach((a) => console.log(`${bytesToMB(a.bytes)}MB  ${rel(a.abs)}`))

  console.log("\nTip: we can safely rename space-heavy files once we update all references.")
}

main()

