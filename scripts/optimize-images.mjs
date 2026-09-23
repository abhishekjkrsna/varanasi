import { mkdir, stat } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const source = path.resolve('assets/varanasi-dawn.png')
const destination = path.resolve('public/images')
const variants = [
  { width: 960, name: 'varanasi-dawn-960.webp' },
  { width: 1600, name: 'varanasi-dawn-1600.webp' },
]

await mkdir(destination, { recursive: true })
await Promise.all(variants.map(({ width, name }) =>
  sharp(source).resize({ width, withoutEnlargement: true }).webp({ quality: 82, effort: 5 }).toFile(path.join(destination, name)),
))

for (const { name } of variants) {
  const file = await stat(path.join(destination, name))
  console.log(`${name}: ${(file.size / 1024).toFixed(0)} KB`)
}
