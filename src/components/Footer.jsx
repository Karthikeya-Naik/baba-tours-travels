import { Phone, MessageCircle, MapPin, Mail } from 'lucide-react'

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand col */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src="/images/logo.png" alt="Baba Tours Logo" className="h-10 w-10 object-contain" />
              <div>
                <p className="font-display font-bold text-white text-base leading-none">BABA</p>
                <p className="font-display font-semibold text-brand-400 text-xs tracking-widest mt-0.5">TOURS & TRAVELS</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Hyderabad's trusted bus, tempo and cab hire service. From 4 to 50 seats — for every journey, every occasion.
            </p>
            <div className="space-y-2">
              <a href="tel:+919396484899" className="flex items-center gap-2 text-sm text-gray-300 hover:text-brand-400 transition-colors">
                <Phone size={14} className="text-brand-400" />
                +91 93964 84899
              </a>
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-300 hover:text-green-400 transition-colors">
                <MessageCircle size={14} className="text-green-400" />
                +91 81256 06446 (WhatsApp)
              </a>
              <div className="flex items-start gap-2 text-sm text-gray-400">
                <MapPin size={14} className="text-blue-400 mt-0.5 flex-shrink-0" />
                Vanasthalipuram, Hyderabad, Telangana
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="font-semibold text-white mb-4">Quick Links</p>
            <ul className="space-y-2">
              {navLinks.map(l => (
                <li key={l.href}>
                  <a href={l.href} onClick={e => navClick(e, l.href)}
                    className="text-sm text-gray-400 hover:text-brand-400 transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="font-semibold text-white mb-4">Our Services</p>
            <ul className="space-y-2">
              {services.map((s, i) => (
                <li key={i} className="text-sm text-gray-400">{s}</li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <p className="font-semibold text-white mb-4">Book Now</p>
            <p className="text-gray-400 text-sm mb-5">Ready to travel? Contact us for an instant quote and availability.</p>
            <div className="flex flex-col gap-3">
              <a href="tel:+919396484899"
                className="flex items-center justify-center gap-2 py-3 bg-brand-600 hover:bg-brand-500 rounded-xl text-white font-semibold text-sm transition-colors">
                <Phone size={15} />
                Call — 93964 84899
              </a>
              <a href={WA_URL} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 bg-green-600 hover:bg-green-500 rounded-xl text-white font-semibold text-sm transition-colors">
                <MessageCircle size={15} />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Baba Tours and Travels. All rights reserved. Managed by Mr. Pasha.
          </p>
          <p className="text-gray-600 text-xs">
            Vanasthalipuram, Hyderabad, Telangana 500070
          </p>
        </div>
      </div>
    </footer>
  )
}
