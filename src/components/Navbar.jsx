import { useState, useEffect } from 'react'
import { Phone, MessageCircle, Menu, X } from 'lucide-react'

const CALL = '+919396484899'
const WA   = '+918125606446'
const WA_URL = `https://wa.me/${WA}?text=Hi%20Baba%20Tours%2C%20I%20want%20to%20enquire%20about%20vehicle%20hire.`

const links = [
  { href: '#home',      label: 'Home' },
  { href: '#services',  label: 'Services' },
  { href: '#fleet',     label: 'Fleet' },
  { href: '#pricing',   label: 'Pricing' },
  { href: '#gallery',   label: 'Gallery' },
  { href: '#contact',   label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const navClick = (e, href) => {
    e.preventDefault()
    setOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark-800/95 backdrop-blur-md shadow-lg shadow-black/20' : 'bg-transparent'
      }`}>
        {/* Top announcement bar */}
        <div className="bg-brand-600 py-1.5 px-4 text-center text-sm font-medium hidden sm:block">
          <span className="text-white">📞 Call or WhatsApp to Book </span>
          <a href={`tel:${CALL}`} className="text-white font-bold hover:underline">+91 9396484899</a>
          <span className="text-white/70 mx-2">|</span>
          <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="text-white font-bold hover:underline">WhatsApp +91 8125606446</a>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="#home" onClick={e => navClick(e, '#home')} className="flex items-center gap-3 flex-shrink-0">
              <img src="/images/logo.png" alt="Baba Tours and Travels Logo" className="h-10 w-10 object-contain" />
              <div className="leading-tight">
                <p className="font-display font-bold text-white text-base leading-none">BABA</p>
                <p className="font-display font-semibold text-brand-400 text-xs tracking-widest leading-none mt-0.5">TOURS & TRAVELS</p>
              </div>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-6">
              {links.map(l => (
                <a key={l.href} href={l.href} onClick={e => navClick(e, l.href)}
                  className="text-gray-300 hover:text-brand-400 text-sm font-medium transition-colors duration-200">
                  {l.label}
                </a>
              ))}
            </div>

            {/* Desktop CTAs */}
            <div className="hidden md:flex items-center gap-2 ms">
              <a href={`tel:${CALL}`}
                className="flex items-center py-2 px-2 bg-dark-600 hover:bg-dark-500 border border-white/10 rounded-lg text-sm font-medium text-white transition-all duration-200">
                <Phone size={14} className="text-brand-400 me-2" />
                Call Now
              </a>
              <a href={WA_URL} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-2 py-2 bg-green-600 hover:bg-green-500 rounded-lg text-sm font-medium text-white transition-all duration-200">
                <MessageCircle size={14} />
                WhatsApp
              </a>
            </div>

            {/* Mobile menu button */}
            <button onClick={() => setOpen(o => !o)} className="md:hidden p-2 text-gray-300 hover:text-white">
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden bg-dark-800/98 backdrop-blur-md border-t border-white/10 animate-slide-down">
            <div className="px-4 py-4 flex flex-col gap-1">
              {links.map(l => (
                <a key={l.href} href={l.href} onClick={e => navClick(e, l.href)}
                  className="py-3 px-3 rounded-lg text-gray-200 hover:bg-dark-600 hover:text-brand-400 font-medium transition-colors">
                  {l.label}
                </a>
              ))}
              <div className="flex gap-3 mt-4 pt-4 border-t border-white/10">
                <a href={`tel:${CALL}`}
                  className="flex-1 flex items-center justify-center gap-2 py-3 bg-dark-600 border border-white/10 rounded-lg text-sm font-medium text-white">
                  <Phone size={15} className="text-brand-400" /> Call Now
                </a>
                <a href={WA_URL} target="_blank" rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 bg-green-600 rounded-lg text-sm font-medium text-white">
                  <MessageCircle size={15} /> WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Floating WhatsApp button */}
      <a href={WA_URL} target="_blank" rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white px-4 py-3 rounded-full shadow-lg shadow-green-900/40 transition-all duration-200 hover:scale-105">
        <MessageCircle size={20} />
        <span className="text-sm font-semibold">WhatsApp Us</span>
      </a>
    </>
  )
}
