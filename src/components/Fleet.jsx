import { Users, Fuel, UserCheck, Phone, MessageCircle, Wifi, Music, Wind, Armchair, MapPin, Clock } from 'lucide-react'

const WA_URL = `https://wa.me/918125606446?text=Hi%20Baba%20Tours%2C%20I%20want%20to%20enquire%20about%20vehicle%20hire.`

const vehicles = [
  {
    name: '50 Seater Bus',
    seats: 50,
    type: 'Large Bus',
    img: '/images/bus_white_50.webp',
    interiorImg: '/images/bus_interior_blue1.webp',
    desc: 'Spacious AC/Non-AC luxury bus ideal for large groups - school outings, corporate events, pilgrimages.',
    features: ['Push-back seats', 'Music system', 'Wide windows', 'Luggage space'],
    popular: true,
  },
  {
    name: '40 Seater Bus',
    seats: 40,
    type: 'Large Bus',
    img: '/images/bus_investment.webp',
    interiorImg: '/images/bus_interior_blue2.webp',
    desc: 'Comfortable AC bus for groups of up to 40. Great for weddings, college trips and corporate outings.',
    features: ['Reclining seats', 'AC available', 'Large windows', 'Luggage rack'],
    popular: false,
  },
  {
    name: '28 Seater Bus',
    seats: 28,
    type: 'Mini Bus',
    img: '/images/bus_royal_rider.webp',
    interiorImg: '/images/bus_interior_1.webp',
    desc: 'Versatile mini bus for medium groups. Perfect for family outings, small corporate teams or school trips.',
    features: ['Comfortable seats', 'Good visibility', 'Flexible routes', 'Fuel included'],
    popular: true,
  },
  {
    name: '22 Seater Bus',
    seats: 22,
    type: 'Mini Bus',
    img: '/images/bus_white_icbl.webp',
    interiorImg: '/images/bus_interior_2.webp',
    desc: 'Ideal for smaller groups - family celebrations, picnics and office day-outs.',
    features: ['Comfortable seating', 'AC available', 'Safe & reliable', 'Experienced driver'],
    popular: false,
  },
  {
    name: '12 Seater Tempo',
    seats: 12,
    type: 'Tempo Traveller',
    img: '/images/tempo_front.webp',
    interiorImg: null,
    desc: 'The popular Tempo Traveller - perfect for small families, friend groups and small office trips.',
    features: ['AC / Non-AC', 'Push-back seats', 'Music system', 'Comfortable ride'],
    popular: false,
  },
]

const featureIconMap = {
  'Push-back seats': Armchair,
  'Music system': Music,
  'Wide windows': Wind,
  'Luggage space': MapPin,
  'Reclining seats': Armchair,
  'AC available': Wind,
  'Large windows': Wind,
  'Luggage rack': MapPin,
  'Comfortable seats': Armchair,
  'Good visibility': Wind,
  'Flexible routes': Clock,
  'Fuel included': Fuel,
  'Comfortable seating': Armchair,
  'Safe & reliable': UserCheck,
  'Experienced driver': UserCheck,
  'AC / Non-AC': Wind,
  'Comfortable ride': Armchair,
}

function VehicleCard({ v }) {
  const hasImg = v.img && !v.noPhoto

  return (
    <div className={`group bg-dark-700 border rounded-2xl overflow-hidden hover:border-brand-500/40 transition-all duration-300 flex flex-col h-full hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-900/20 ${
      v.popular ? 'border-brand-500/50' : 'border-white/8'
    }`}>
      {/* Image section with popular badge overlay */}
      <div className="relative h-44 sm:h-48 bg-dark-600 overflow-hidden flex-shrink-0">
        {hasImg ? (
          <img
            src={v.img}
            alt={v.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-gray-500">
            <Users size={36} className="mb-2 text-gray-600" />
            <span className="text-sm">{v.seats} Seater</span>
          </div>
        )}
        
        {/* Type badge - bottom left */}
        <div className="absolute bottom-3 left-3">
          <span className="bg-dark-900/80 backdrop-blur-sm text-xs font-medium text-gray-300 px-2.5 py-1 rounded-full border border-white/10">
            {v.type}
          </span>
        </div>

        {/* Popular badge - top right corner overlay */}
        {v.popular && (
          <div className="absolute top-3 right-3">
            <span className="bg-gradient-to-r from-brand-600 to-brand-500 text-white text-[10px] sm:text-xs font-semibold px-2.5 py-1 rounded-full shadow-lg flex items-center gap-1">
              <span>⭐</span> Most Popular
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="font-display font-semibold text-white text-base sm:text-lg group-hover:text-brand-400 transition-colors">
            {v.name}
          </h3>
          <div className="flex items-center gap-1.5 bg-brand-600/15 border border-brand-500/25 rounded-lg px-2 py-0.5 sm:px-2.5 sm:py-1 flex-shrink-0">
            <Users size={12} className="text-brand-400 sm:text-[13px]" />
            <span className="text-brand-300 text-xs sm:text-sm font-semibold">{v.seats}</span>
          </div>
        </div>

        <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
          {v.desc}
        </p>

        {/* Features with icons */}
        <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-5">
          {v.features.map((f, i) => {
            const Icon = featureIconMap[f] || Users
            return (
              <li key={i} className="flex items-center gap-2 text-[10px] sm:text-xs text-gray-400">
                <Icon size={10} className="text-brand-400 flex-shrink-0 sm:text-[11px]" />
                <span className="break-words leading-tight">{f}</span>
              </li>
            )
          })}
        </ul>

        {/* Includes note */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[10px] sm:text-xs text-gray-500 mb-3 sm:mb-4 pt-3 border-t border-white/6">
          <div className="flex items-center gap-1 bg-green-900/20 px-2 py-0.5 rounded-full">
            <Fuel size={11} className="text-green-500" /> 
            <span>Fuel included</span>
          </div>
          <div className="flex items-center gap-1 bg-blue-900/20 px-2 py-0.5 rounded-full">
            <UserCheck size={11} className="text-blue-500" /> 
            <span>Driver included</span>
          </div>
        </div>

        {/* Book CTA */}
        <div className="flex gap-2 mt-auto">
          <a href="tel:+919396484899"
            className="flex-1 flex items-center justify-center gap-1.5 py-2 sm:py-2.5 bg-brand-600 hover:bg-brand-500 rounded-lg text-xs sm:text-sm font-semibold text-white transition-all duration-200 hover:scale-105">
            <Phone size={12} /> Call Now
          </a>
          <a href={WA_URL} target="_blank" rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 py-2 sm:py-2.5 bg-green-600 hover:bg-green-500 rounded-lg text-xs sm:text-sm font-semibold text-white transition-all duration-200 hover:scale-105">
            <MessageCircle size={12} /> WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Fleet() {
  return (
    <section id="fleet" className="py-16 sm:py-20 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-brand-400 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-2 sm:mb-3">Our Vehicles</p>
          <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-white mb-3 sm:mb-4">Choose Your Fleet</h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto px-4">
            Every vehicle includes a professional driver and fuel. Seating counts exclude the driver's seat.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
          {vehicles.map((v, i) => (
            <VehicleCard key={i} v={v} />
          ))}
        </div>

        {/* Pricing note */}
        <div className="mt-10 sm:mt-12 bg-gradient-to-r from-dark-700 to-dark-800 border border-white/8 rounded-2xl p-5 sm:p-6 md:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 text-center">
            <div className="hover:scale-105 transition-transform duration-200">
              <div className="text-brand-400 font-bold text-base sm:text-lg mb-1">Fuel Included</div>
              <p className="text-xs sm:text-sm text-gray-400">Fuel costs are part of the per-km price. No surprises.</p>
            </div>
            <div className="hover:scale-105 transition-transform duration-200">
              <div className="text-brand-400 font-bold text-base sm:text-lg mb-1">300 km / Day (12 AM - 11:59 AM)</div>
              <p className="text-xs sm:text-sm text-gray-400">Daily limit for outstation. Extra km charged at actuals.</p>
            </div>
            <div className="hover:scale-105 transition-transform duration-200">
              <div className="text-brand-400 font-bold text-base sm:text-lg mb-1">Toll & Parking Extra</div>
              <p className="text-xs sm:text-sm text-gray-400">Toll, parking and border taxes are paid by the customer.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}