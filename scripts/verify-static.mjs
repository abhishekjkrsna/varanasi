import { readdir, readFile, stat } from 'node:fs/promises'
import path from 'node:path'

const expectations = [['index.html', 'Come for the river'], ['about/index.html', 'A living city'], ['places/index.html', 'Find the places']]
for (const [file, heading] of expectations) {
  const html = await readFile(path.join('dist', file), 'utf8')
  if (!html.includes(heading)) throw new Error(`${file} does not contain prerendered page content`)
  if (html.includes('<div id="root"></div>')) throw new Error(`${file} has an empty application root`)
}

const images = await readdir(path.join('dist', 'images'))
if (images.some(image => image.endsWith('.png'))) throw new Error('The source PNG was copied into the runtime output')
for (const image of ['varanasi-dawn-960.webp', 'varanasi-dawn-1600.webp']) {
  const file = await stat(path.join('dist', 'images', image))
  console.log(`${image}: ${(file.size / 1024).toFixed(0)} KB`)
}
console.log('Static routes verified: /, /about, /places')
