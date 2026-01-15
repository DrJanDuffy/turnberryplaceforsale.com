/**
 * Optimize a small set of heavyweight images under `public/` without breaking old URLs.
 *
 * Because `/images/turnberry/*` is served with `Cache-Control: immutable`,
 * we generate NEW optimized files (new URLs) and then update code references,
 * while keeping the original files for backwards compatibility.
 *
 * Usage:
 *   yarn asset:optimize
 */

const fs = require("fs")
const path = require("path")

const sharp = require("sharp")

const ROOT = process.cwd()
const INPUT_DIR = path.join(ROOT, "public", "images", "turnberry")
const OUTPUT_DIR = path.join(INPUT_DIR, "optimized")

const targets = [
  {
    in: "Turnberry-Place-May-21-2010.jpeg",
    out: "Turnberry-Place-May-21-2010.optimized.jpg",
    maxWidth: 1600,
    quality: 80,
  },
  {
    in: "StirlingClub_CigarBar_View1.jpg",
    out: "StirlingClub_CigarBar_View1.optimized.jpg",
    maxWidth: 1600,
    quality: 80,
  },
]

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })
}

async function optimizeOne(t) {
  const inPath = path.join(INPUT_DIR, t.in)
  const outPath = path.join(OUTPUT_DIR, t.out)

  if (!fs.existsSync(inPath)) {
    throw new Error(`Missing input: ${inPath}`)
  }

  const img = sharp(inPath, { failOnError: false })
  const meta = await img.metadata()

  const width = meta.width || t.maxWidth
  const resizeWidth = Math.min(width, t.maxWidth)

  await img
    .rotate() // respect EXIF orientation
    .resize({ width: resizeWidth, withoutEnlargement: true })
    .jpeg({
      quality: t.quality,
      progressive: true,
      mozjpeg: true,
    })
    .toFile(outPath)

  const inBytes = fs.statSync(inPath).size
  const outBytes = fs.statSync(outPath).size
  const pct = Math.round((1 - outBytes / inBytes) * 100)

  console.log(
    `${t.in} -> optimized/${t.out} | ${Math.round(inBytes / 1024)}KB -> ${Math.round(
      outBytes / 1024
    )}KB (${pct}% smaller)`
  )
}

async function main() {
  ensureDir(OUTPUT_DIR)
  for (const t of targets) {
    // eslint-disable-next-line no-await-in-loop
    await optimizeOne(t)
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})

