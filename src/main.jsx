import React from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './styles.css'
import { siteBase } from '../site.config'

const app = <React.StrictMode><BrowserRouter basename={siteBase}><App /></BrowserRouter></React.StrictMode>
const container = document.getElementById('root')

if (container.hasChildNodes()) hydrateRoot(container, app)
else createRoot(container).render(app)
