import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import App from './App'

export function render(url) {
  return renderToStaticMarkup(<StaticRouter location={url}><App /></StaticRouter>)
}
