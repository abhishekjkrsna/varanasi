import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import App from './App'
import { siteBase } from '../site.config'

export function render(url) {
  return renderToStaticMarkup(<StaticRouter basename={siteBase} location={url}><App /></StaticRouter>)
}
