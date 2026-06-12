import { Phone, MessageCircle, MapPin } from 'lucide-react'
import logo from '../assets/logo.png'

const WA_URL = `https://wa.me/918125606446?text=Hi%20Baba%20Tours%2C%20I%20want%20to%20enquire%20about%20vehicle%20hire.`

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#fleet', label: 'Fleet' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contact', label: 'Contact' },
]

const services = [
  'City Sightseeing',
  'School Field Trips',
  'Wedding & Events',
  'Corporate Travel',
  'Outstation Trips',
  'Airport Transfers',
]

const navClick = (e, href) => {
  e.preventDefault()
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Footer() {
  return (
    <footer className="bg-dark-900 border-t border-white/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-10 sm:mb-12">
          {/* Brand col - Only logo, no text */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <img src={logo} alt="Baba Tours Logo" className="h-10 sm:h-12 md:h-14 w-auto object-contain" />
            </div>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5">
              Hyderabad's trusted bus, tempo and cab hire service. From 12 to 50 seats - for every journey, every occasion.
            </p>
            <div className="space-y-2">
              <a href="tel:+919396484899" className="flex items-center gap-2 text-xs sm:text-sm text-gray-300 hover:text-brand-400 transition-colors">
                <Phone size={12} className="text-brand-400 sm:text-[14px]" />
                +91 93964 84899
              </a>
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs sm:text-sm text-gray-300 hover:text-green-400 transition-colors">
                <MessageCircle size={12} className="text-green-400 sm:text-[14px]" />
                +91 81256 06446 (WhatsApp)
              </a>
              <div className="flex items-start gap-2 text-xs sm:text-sm text-gray-400">
                <MapPin size={12} className="text-blue-400 mt-0.5 flex-shrink-0 sm:text-[14px]" />
                Vanasthalipuram, Hyderabad, Telangana
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="font-semibold text-white text-sm sm:text-base mb-3 sm:mb-4">Quick Links</p>
            <ul className="space-y-1.5 sm:space-y-2">
              {navLinks.map(l => (
                <li key={l.href}>
                  <a href={l.href} onClick={e => navClick(e, l.href)}
                    className="text-xs sm:text-sm text-gray-400 hover:text-brand-400 transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="font-semibold text-white text-sm sm:text-base mb-3 sm:mb-4">Our Services</p>
            <ul className="space-y-1.5 sm:space-y-2">
              {services.map((s, i) => (
                <li key={i} className="text-xs sm:text-sm text-gray-400">{s}</li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <p className="font-semibold text-white text-sm sm:text-base mb-3 sm:mb-4">Book Now</p>
            <p className="text-gray-400 text-xs sm:text-sm mb-4 sm:mb-5">Ready to travel? Contact us for an instant quote and availability.</p>
            <div className="flex flex-col gap-2 sm:gap-3">
              <a href="tel:+919396484899"
                className="flex items-center justify-center gap-2 py-2.5 sm:py-3 bg-brand-600 hover:bg-brand-500 rounded-xl text-white font-semibold text-xs sm:text-sm transition-all duration-200 hover:scale-105">
                <Phone size={13} className="sm:text-[15px]" />
                Call - 93964 84899
              </a>
              <a href={WA_URL} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 sm:py-3 bg-green-600 hover:bg-green-500 rounded-xl text-white font-semibold text-xs sm:text-sm transition-all duration-200 hover:scale-105">
                <MessageCircle size={13} className="sm:text-[15px]" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 pt-5 sm:pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-gray-500 text-[10px] sm:text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Baba Tours and Travels. All rights reserved. Managed by Mr. Pasha.
          </p>
          <p className="text-gray-600 text-[10px] sm:text-xs">
            Vanasthalipuram, Hyderabad, Telangana 500070
          </p>
        </div>
      </div>
    </footer>
  )
}