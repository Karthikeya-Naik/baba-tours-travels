import { Phone, MessageCircle, MapPin, ChevronDown } from 'lucide-react'

const WA_URL =
  'https://wa.me/918125606446?text=Hi%20Baba%20Tours%2C%20I%20want%20to%20enquire%20about%20vehicle%20hire.'

const stats = [
  { value: '12–50', label: 'Seater Options' },
  { value: '24/7', label: 'Available' },
  { value: '10+', label: 'Vehicles' },
  { value: 'Hyderabad', label: 'Based' },
]

export default function Hero() {
  const scroll = (href) => {
    const el = document.querySelector(href)

    if (el) {
      el.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/bus_baba_red.webp"
          alt="Baba Tours fleet"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-dark-900/80 via-dark-900/70 to-dark-900/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-900/70 via-dark-900/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Side */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-brand-600/20 border border-brand-500/30 rounded-full px-4 py-2 text-xs sm:text-sm text-brand-300 font-medium mb-6">
              <MapPin size={14} />
              <span>Based in Vanasthalipuram, Hyderabad</span>
            </div>

            {/* Heading */}
            <h1 className="font-display font-bold text-white leading-tight mb-5 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              Hyderabad&apos;s Trusted
              <span className="block text-brand-400">
                Bus Hire
              </span>
            </h1>

            {/* Description */}
            <p className="text-gray-300 leading-relaxed mb-8 max-w-2xl text-base sm:text-lg md:text-xl">
              From 12-seater travellers to 50-seater luxury buses for city
              tours, school trips, weddings, corporate events and outstation
              travel. Fuel included. Professional drivers. Any destination.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-10">
              <a
                href="tel:+919396484899"
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-6 sm:px-8 py-4 bg-brand-600 hover:bg-brand-500 rounded-xl text-white font-semibold text-base sm:text-lg transition-all duration-300 hover:shadow-lg hover:shadow-brand-600/30 hover:-translate-y-1"
              >
                <Phone size={20} />
                Call 9396484899
              </a>

              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-6 sm:px-8 py-4 bg-green-600 hover:bg-green-500 rounded-xl text-white font-semibold text-base sm:text-lg transition-all duration-300 hover:shadow-lg hover:shadow-green-600/30 hover:-translate-y-1"
              >
                <MessageCircle size={20} />
                WhatsApp Us
              </a>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-2 sm:gap-4 text-sm text-gray-400">
              <span>✓ Fuel Included</span>
              <span>✓ Professional Driver</span>
              <span>✓ AC & Non-AC Available</span>
              <span>✓ Toll & Parking Extra</span>
            </div>
          </div>

          {/* Right Side Stats */}
          <div className="grid grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0 lg:ml-auto w-full">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-dark-700/60 backdrop-blur-sm border border-white/10 rounded-2xl px-5 py-8 text-center hover:border-brand-500/30 transition-all duration-300"
              >
                <p className="font-display font-bold text-brand-400 text-2xl sm:text-3xl">
                  {stat.value}
                </p>

                <p className="text-sm text-gray-400 mt-2">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scroll('#services')}
        className="relative z-10 mx-auto mb-6 flex flex-col items-center gap-1 text-gray-400 hover:text-white transition-colors animate-bounce"
      >
        <span className="text-xs">Scroll Down</span>
        <ChevronDown size={18} />
      </button>
    </section>
  )
}