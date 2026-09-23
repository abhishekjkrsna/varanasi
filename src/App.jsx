import { useState } from 'react'
import { Link, NavLink, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Places from './pages/Places'
import { siteBase } from '../site.config'

const linkClass=({isActive})=>`transition ${isActive?'text-saffron':'hover:text-saffron'}`
export default function App(){
  const [menuOpen,setMenuOpen]=useState(false)
  const imageBase = `${siteBase}images/`
  return <div className="min-h-screen" style={{ '--hero-desktop': `url(${imageBase}varanasi-dawn-1600.webp)`, '--hero-mobile': `url(${imageBase}varanasi-dawn-960.webp)` }}><header className="bg-ink text-white"><div className="mx-auto flex h-[74px] max-w-7xl items-center justify-between px-6 md:px-10"><Link to="/" className="flex items-center gap-2 font-mono text-xs tracking-[.2em]"><span className="font-display text-2xl">ॐ</span> VARANASI</Link><nav className="hidden items-center gap-8 text-sm md:flex"><NavLink className={linkClass} to="/about">About the city</NavLink><NavLink className={linkClass} to="/places">Places to visit</NavLink><Link className="rounded-full border border-white/35 px-4 py-2 text-xs hover:border-saffron" to="/places">Plan a day →</Link></nav><button onClick={()=>setMenuOpen(v=>!v)} className="text-xl md:hidden" aria-label="Toggle navigation">{menuOpen?'×':'☰'}</button></div>{menuOpen&&<nav className="animate-enter border-t border-white/10 px-6 py-5 md:hidden"><div className="flex flex-col gap-4 text-sm"><NavLink onClick={()=>setMenuOpen(false)} to="/about">About the city</NavLink><NavLink onClick={()=>setMenuOpen(false)} to="/places">Places to visit</NavLink></div></nav>}</header><Routes><Route path="/" element={<Home/>}/><Route path="/about" element={<About/>}/><Route path="/places" element={<Places/>}/><Route path="*" element={<Home/>}/></Routes><footer className="bg-ink px-6 py-9 text-white md:px-10"><div className="mx-auto flex max-w-7xl flex-col gap-5 md:flex-row md:items-center md:justify-between"><Link to="/" className="flex items-center gap-2 font-mono text-xs tracking-[.2em]"><span className="font-display text-2xl">ॐ</span> VARANASI</Link><p className="font-mono text-[10px] tracking-wider text-stone-400">A GUIDE FOR SLOW TRAVELLERS · 2026</p><Link className="text-sm text-saffron" to="/places">Build an itinerary →</Link></div></footer></div>
}
