import { mkdir, readFile, rm, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { pathToFileURL } from 'node:url'
import { siteBase } from '../site.config.js'

const routes = [`${siteBase}`, `${siteBase}about/`, `${siteBase}places/`]
const headings = { [`${siteBase}`]: 'Come for the river', [`${siteBase}about/`]: 'A living city', [`${siteBase}places/`]: 'Find the places' }
const dist = path.resolve('dist')
const template = await readFile(path.join(dist, 'index.html'), 'utf8')
const { render } = await import(pathToFileURL(path.resolve('.prerender/entry-server.js')).href)
const preloads = `<link rel="preload" as="image" href="${siteBase}images/varanasi-dawn-960.webp" media="(max-width: 767px)" fetchpriority="high">\n    <link rel="preload" as="image" href="${siteBase}images/varanasi-dawn-1600.webp" media="(min-width: 768px)" fetchpriority="high">`

try {
  for (const route of routes) {
    const markup = render(route)
    if (!markup.includes(headings[route])) throw new Error(`Prerendered ${route} is missing its primary heading`)
    const html = template
      .replace('</head>', `    ${preloads}\n  </head>`)
      .replace('<div id="root"></div>', `<div id="root">${markup}</div>`)
    const output = route === siteBase ? path.join(dist, 'index.html') : path.join(dist, route.slice(siteBase.length), 'index.html')
    await mkdir(path.dirname(output), { recursive: true })
    await writeFile(output, html)
  }
} finally {
  await rm(path.resolve('.prerender'), { recursive: true, force: true })
}
