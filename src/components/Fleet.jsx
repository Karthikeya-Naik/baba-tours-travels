import { Users, Fuel, UserCheck, Phone, MessageCircle } from 'lucide-react'

const WA_URL = `https://wa.me/918125606446?text=Hi%20Baba%20Tours%2C%20I%20want%20to%20enquire%20about%20vehicle%20hire.`

const vehicles = [
  {
    name: '50 Seater Bus',
    seats: 50,
    type: 'Large Bus',
    img: '/images/bus_white_50.webp',
    interiorImg: '/images/bus_interior_blue1.webp',
    desc: 'Spacious AC/Non-AC luxury bus ideal for large groups — school outings, corporate events, pilgrimages.',
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
    img: '/images/bus_dreamline.webp',
    interiorImg: '/images/bus_interior_1.webp',
    desc: 'Versatile mini bus for medium groups. Perfect for family outings, small corporate teams or school trips.',
    features: ['Comfortable seats', 'Good visibility', 'Flexible routes', 'Fuel included'],
    popular: true,
  },
  {
    name: '22 Seater Bus',
    seats: 22,
    type: 'Mini Bus',
    img: '/images/bus_royal_rider.webp',
    interiorImg: '/images/bus_interior_2.webp',
    desc: 'Ideal for smaller groups — family celebrations, picnics and office day-outs.',
    features: ['Comfortable seating', 'AC available', 'Safe & reliable', 'Experienced driver'],
    popular: false,
  },
  {
    name: '12 Seater Tempo',
    seats: 12,
    type: 'Tempo Traveller',
    img: '/images/tempo_front.webp',
    interiorImg: null,
    desc: 'The popular Tempo Traveller — perfect for small families, friend groups and small office trips.',
    features: ['AC / Non-AC', 'Push-back seats', 'Music system', 'Comfortable ride'],
    popular: false,
  },
  {
    name: '6 Seater SUV',
    seats: 6,
    type: 'SUV / Cab',
    img: '/images/bus_front_white.webp',
    interiorImg: null,
    desc: 'Innova, Ertiga or equivalent for small groups — airport drops, local travel, family outings.',
    features: ['Premium comfort', 'AC', 'Ample luggage', 'Professional driver'],
    popular: false,
    noPhoto: true,
  },
  {
    name: '4 Seater Cab',
    seats: 4,
    type: 'Sedan / Cab',
    img: null,
    interiorImg: null,
    desc: 'Reliable sedan for individuals or small groups. City travel, airport pickups and outstation trips.',
    features: ['Comfortable ride', 'AC', 'Metered / package', 'On-time'],
    popular: false,
    noPhoto: true,
  },
]

function VehicleCard({ v }) {
  const hasImg = v.img && !v.noPhoto

  return (
    <div className={`group bg-dark-700 border rounded-2xl overflow-hidden hover:border-brand-500/40 transition-all duration-300 flex flex-col ${
      v.popular ? 'border-brand-500/50' : 'border-white/8'
    }`}>
      {/* Popular badge */}
      {v.popular && (
        <div className="bg-brand-600 text-white text-xs font-semibold text-center py-1.5 tracking-wide">
          ★ MOST POPULAR
        </div>
      )}

      {/* Image */}
      <div className="relative h-44 bg-dark-600 overflow-hidden flex-shrink-0">
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
        <div className="absolute top-3 left-3">
          <span className="bg-dark-900/80 backdrop-blur-sm text-xs font-medium text-gray-300 px-2.5 py-1 rounded-full border border-white/10">
            {v.type}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="font-display font-semibold text-white text-lg">{v.name}</h3>
          <div className="flex items-center gap-1.5 bg-brand-600/15 border border-brand-500/25 rounded-lg px-2.5 py-1 flex-shrink-0">
            <Users size={13} className="text-brand-400" />
            <span className="text-brand-300 text-sm font-semibold">{v.seats}</span>
          </div>
        </div>

        <p className="text-gray-400 text-sm leading-relaxed mb-4">{v.desc}</p>

        {/* Features */}
        <ul className="grid grid-cols-2 gap-1.5 mb-5">
          {v.features.map((f, i) => (
            <li key={i} className="flex items-center gap-1.5 text-xs text-gray-400">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0" />
              {f}
            </li>
          ))}
        </ul>

        {/* Includes note */}
        <div className="flex items-center gap-3 text-xs text-gray-500 mb-4 pt-3 border-t border-white/6">
          <div className="flex items-center gap-1"><Fuel size={12} className="text-green-500" /> Fuel included</div>
          <div className="flex items-center gap-1"><UserCheck size={12} className="text-green-500" /> Driver included</div>
        </div>

        {/* Book CTA */}
        <div className="flex gap-2 mt-auto">
          <a href="tel:+919396484899"
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 bg-brand-600 hover:bg-brand-500 rounded-lg text-sm font-semibold text-white transition-colors">
            <Phone size={13} /> Call
          </a>
          <a href={WA_URL} target="_blank" rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 bg-green-600 hover:bg-green-500 rounded-lg text-sm font-semibold text-white transition-colors">
            <MessageCircle size={13} /> WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Fleet() {
  return (
    <section id="fleet" className="py-20 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-brand-400 text-sm font-semibold tracking-widest uppercase mb-3">Our Vehicles</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">Choose Your Fleet</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Every vehicle includes a professional driver and fuel. Seating counts exclude the driver's seat.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {vehicles.map((v, i) => (
            <VehicleCard key={i} v={v} />
          ))}
        </div>

        {/* Pricing note */}
        <div className="mt-10 bg-dark-700 border border-white/8 rounded-2xl p-6 sm:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-brand-400 font-bold text-lg mb-1">Fuel Included</div>
              <p className="text-sm text-gray-400">Fuel costs are part of the per-km price. No surprises.</p>
            </div>
            <div>
              <div className="text-brand-400 font-bold text-lg mb-1">300 km / Day</div>
              <p className="text-sm text-gray-400">Daily limit for outstation. Extra km charged at actuals.</p>
            </div>
            <div>
              <div className="text-brand-400 font-bold text-lg mb-1">Toll, Parking Extra</div>
              <p className="text-sm text-gray-400">Toll, parking and border taxes are paid by the customer.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
