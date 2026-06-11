import { Check, Phone, MessageCircle, Info } from 'lucide-react'

const WA_URL = `https://wa.me/918125606446?text=Hi%20Baba%20Tours%2C%20I%20want%20to%20enquire%20about%20pricing.`

const plans = [
  { seats: 50, type: 'Large Bus',        popular: true  },
  { seats: 40, type: 'Large Bus',        popular: false },
  { seats: 28, type: 'Mini Bus',         popular: true  },
  { seats: 22, type: 'Mini Bus',         popular: false },
  { seats: 12, type: 'Tempo Traveller',  popular: false },
  { seats: 6,  type: 'SUV / Innova',     popular: false },
  { seats: 4,  type: 'Sedan / Cab',      popular: false },
]

const included = [
  'Fuel charges',
  'Professional driver',
  'Comfort amenities',
]

const amenities = [
  { label: 'Premium comfort seats with legroom' },
  { label: 'High-quality music system & Bluetooth' },
  { label: 'Planned scenic & refreshment stops' },
  { label: 'Entertainment on request (long trips)' },
  { label: 'WiFi available (select vehicles)' },
  { label: 'AC & Non-AC options available' },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-brand-400 text-sm font-semibold tracking-widest uppercase mb-3">Transparent Pricing</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">Simple, Honest Rates</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Pricing is calculated per km based on your route and vehicle. Call or WhatsApp with your trip details for an instant quote — no hidden fees.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-12">
          {plans.map((p, i) => (
            <div key={i} className={`relative bg-dark-700 rounded-2xl border overflow-hidden ${
              p.popular ? 'border-brand-500/60' : 'border-white/8'
            }`}>
              {p.popular && (
                <div className="bg-brand-600 text-white text-xs font-semibold text-center py-1.5 tracking-wide">
                  MOST POPULAR
                </div>
              )}
              <div className="p-5">
                <div className="mb-4">
                  <h3 className="font-display font-bold text-white text-2xl">{p.seats} <span className="text-lg">Seater</span></h3>
                  <p className="text-gray-500 text-sm">{p.type}</p>
                </div>

                <div className="bg-brand-600/10 border border-brand-500/20 rounded-xl px-4 py-3 mb-4 text-center">
                  <p className="text-brand-300 text-sm font-medium">Price on enquiry</p>
                  <p className="text-gray-500 text-xs mt-0.5">Based on km · Call to confirm</p>
                </div>

                <ul className="space-y-2 mb-5">
                  {included.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-300">
                      <Check size={14} className="text-green-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-2">
                  <a href="tel:+919396484899"
                    className="flex-1 flex items-center justify-center gap-1.5 py-2.5 bg-brand-600 hover:bg-brand-500 rounded-lg text-xs font-semibold text-white transition-colors">
                    <Phone size={12} /> Call
                  </a>
                  <a href={WA_URL} target="_blank" rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 py-2.5 bg-green-600 hover:bg-green-500 rounded-lg text-xs font-semibold text-white transition-colors">
                    <MessageCircle size={12} /> WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing note */}
        <div className="bg-dark-700/50 border border-yellow-500/20 rounded-xl p-4 flex gap-3 mb-12">
          <Info size={18} className="text-yellow-400 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-gray-300">
            <span className="text-yellow-400 font-semibold">Note: </span>
            Toll charges, parking fees and state border taxes are <strong className="text-white">not</strong> included and are to be borne by the customer. Maximum 300 km per day for outstation trips; extra km is charged additionally.
          </p>
        </div>

        {/* Amenities */}
        <div className="bg-dark-700 border border-white/8 rounded-2xl p-6 sm:p-8">
          <h3 className="font-display font-semibold text-white text-xl mb-6 text-center">Amenities Included with Every Trip</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {amenities.map((a, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-brand-600/20 border border-brand-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check size={12} className="text-brand-400" />
                </div>
                <p className="text-gray-300 text-sm">{a.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
