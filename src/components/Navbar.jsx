import { useState, useEffect } from 'react'
import { Phone, MessageCircle, Menu, X } from 'lucide-react'
import logo from '../assets/logo.png'

const CALL = '+919396484899'
const WA = '+918125606446'

const WA_URL = `https://wa.me/${WA}?text=Hi%20Baba%20Tours%2C%20I%20want%20to%20enquire%20about%20vehicle%20hire.`

const links = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#fleet', label: 'Fleet' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navClick = (e, href) => {
    e.preventDefault()
    setOpen(false)

    const el = document.querySelector(href)

    if (el) {
      el.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-dark-800/95 backdrop-blur-md shadow-lg shadow-black/20'
            : 'bg-transparent'
        }`}
      >
        {/* Top Bar - with phone icon */}
        <div className="hidden sm:block bg-brand-600 py-2 px-4 text-center text-xs sm:text-sm font-medium">
          <div className="flex items-center justify-center gap-3 sm:gap-4">
            <a
              href={`tel:${CALL}`}
              className="flex items-center gap-1.5 text-white transition-colors duration-200 hover:brightness-110"
            >
              <Phone size={13} className="text-white" />
              <span>+91 9396484899</span>
            </a>
            <span className="text-white/50">|</span>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-white transition-colors duration-200 hover:brightness-110"
            >
              <MessageCircle size={13} className="text-white" />
              <span>WhatsApp +91 8125606446</span>
            </a>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">

            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => navClick(e, '#home')}
              className="flex items-center flex-shrink-0"
            >
              <img
                src={logo}
                alt="Baba Tours & Travels"
                className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto"
              />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-7">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => navClick(e, link.href)}
                  className="text-gray-300 hover:text-brand-400 text-sm font-medium transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`tel:${CALL}`}
                className="flex items-center px-3 xl:px-4 py-2 bg-dark-600 hover:bg-dark-500 border border-white/10 rounded-lg text-sm font-medium text-white transition-all duration-200 hover:scale-105"
              >
                <Phone
                  size={14}
                  className="text-brand-400 mr-1.5 xl:mr-2"
                />
                Call Now
              </a>

              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 xl:gap-2 px-3 xl:px-4 py-2 bg-green-600 hover:bg-green-500 rounded-lg text-sm font-medium text-white transition-all duration-200 hover:scale-105"
              >
                <MessageCircle size={14} />
                WhatsApp
              </a>
            </div>

            {/* Menu Button */}
            <button
              onClick={() => setOpen((prev) => !prev)}
              className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile / Tablet Menu */}
        {open && (
          <div className="lg:hidden bg-dark-800/98 backdrop-blur-md border-t border-white/10 animate-slide-down">
            <div className="px-4 py-4 flex flex-col gap-1">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => navClick(e, link.href)}
                  className="py-3 px-3 rounded-lg text-gray-200 hover:bg-dark-600 hover:text-brand-400 font-medium transition-colors"
                >
                  {link.label}
                </a>
              ))}

              <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-2">
                {/* Call button in mobile menu */}
                <a
                  href={`tel:${CALL}`}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-dark-600 hover:bg-brand-600 border border-white/10 rounded-lg text-sm font-medium text-white transition-all duration-200"
                >
                  <Phone size={15} className="text-brand-400" />
                  Call Now
                </a>

                {/* WhatsApp button in mobile menu */}
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 bg-green-600 hover:bg-green-500 rounded-lg text-sm font-medium text-white transition-all duration-200"
                >
                  <MessageCircle size={15} />
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Floating WhatsApp */}
      <a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white px-3 sm:px-4 py-2.5 sm:py-3 rounded-full shadow-lg shadow-green-900/40 transition-all duration-200 hover:scale-105"
      >
        <MessageCircle size={18} className="sm:text-[20px]" />
        <span className="hidden sm:inline text-xs sm:text-sm font-semibold">
          WhatsApp Us
        </span>
      </a>
    </>
  )
}