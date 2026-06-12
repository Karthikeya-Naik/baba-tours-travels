import { Phone, MessageCircle, MapPin, ChevronDown } from 'lucide-react'

const WA_URL = `https://wa.me/918125606446?text=Hi%20Baba%20Tours%2C%20I%20want%20to%20enquire%20about%20vehicle%20hire.`

const stats = [
  { value: '12-50', label: 'Seater Options' },
  { value: '24/7', label: 'Available' },
  { value: '10+', label: 'Vehicles' },
  { value: 'Hyderabad', label: 'Based' },
]

export default function Hero() {
  const scroll = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/bus_baba_red.webp"
          alt="Baba Tours fleet"
          className="w-full h-full object-cover object-[70%_center] sm:object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900/80 via-dark-900/70 to-dark-900/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-900/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-16 sm:pb-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-brand-600/20 border border-brand-500/30 rounded-full px-3 sm:px-4 py-1.5 text-xs sm:text-sm text-brand-300 font-medium mb-5 sm:mb-6">
            <MapPin size={13} />
            <span>Based in Vanasthalipuram, Hyderabad</span>
          </div>

          {/* Headline */}
          <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white leading-tight mb-3 sm:mb-4">
            Hyderabad's Trusted
            <span className="block text-brand-400">Bus Hire</span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed mb-6 sm:mb-8 max-w-2xl">
            From 12-seater traveller to 50-seater luxury buses for city tours, school trips, weddings, corporate events & outstation travel. Fuel included. Professional drivers. Any destination.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12">
            <a href="tel:+919396484899"
              className="flex items-center justify-center gap-2 sm:gap-3 px-5 sm:px-8 py-3 sm:py-4 bg-brand-600 hover:bg-brand-500 rounded-xl text-white font-semibold text-sm sm:text-base lg:text-lg transition-all duration-200 hover:shadow-lg hover:shadow-brand-600/30 hover:-translate-y-0.5">
              <Phone size={18} />
              Call to Book
            </a>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 sm:gap-3 px-5 sm:px-8 py-3 sm:py-4 bg-green-600 hover:bg-green-500 rounded-xl text-white font-semibold text-sm sm:text-base lg:text-lg transition-all duration-200 hover:shadow-lg hover:shadow-green-600/30 hover:-translate-y-0.5">
              <MessageCircle size={18} />
              WhatsApp Us
            </a>
          </div>

          {/* Quick note */}
          <p className="text-xs sm:text-sm text-gray-400 mb-10 sm:mb-14">
            ✓ Fuel included &nbsp;·&nbsp; ✓ Professional driver &nbsp;·&nbsp; ✓ AC & Non-AC available &nbsp;·&nbsp; ✓ Toll & parking extra
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {stats.map((s, i) => (
              <div key={i} className="bg-dark-700/60 backdrop-blur-sm border border-white/10 rounded-xl px-3 sm:px-4 py-3 sm:py-4 text-center">
                <p className="font-display font-bold text-xl sm:text-2xl text-brand-400">{s.value}</p>
                <p className="text-xs text-gray-400 mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scroll('#services')}
        className="relative z-10 mx-auto mb-6 flex flex-col items-center gap-1 text-gray-500 hover:text-gray-300 transition-colors cursor-pointer animate-bounce">
        <span className="text-xs">Scroll down</span>
        <ChevronDown size={18} />
      </button>
    </section>
  )
}