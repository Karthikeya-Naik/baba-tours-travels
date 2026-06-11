import { Building2, GraduationCap, Heart, Briefcase, Route, MapPin } from 'lucide-react'

const services = [
  {
    icon: MapPin,
    title: 'City Sightseeing',
    desc: 'Explore Hyderabad — Charminar, Ramoji Film City, Golkonda Fort, Hussain Sagar and more. Flexible timings, knowledgeable drivers.',
    tags: ['Flexible timing', 'All attractions', 'City pickups'],
  },
  {
    icon: GraduationCap,
    title: 'School & College Trips',
    desc: 'Safe, reliable transportation for educational institutions. Experienced drivers, well-maintained vehicles, affordable group rates.',
    tags: ['Safety first', 'Affordable rates', 'Parent-approved'],
  },
  {
    icon: Heart,
    title: 'Weddings & Events',
    desc: 'Make your special day perfect. Fleet management for guests, bridal party and ceremonial travel.',
    tags: ['Punctual', 'Large fleet'],
  },
  {
    icon: Briefcase,
    title: 'Corporate Travel',
    desc: 'Premium transportation for business meetings, conferences and corporate events. On-time, professional and comfortable.',
    tags: ['Professional drivers', 'On-time', 'Premium comfort'],
  },
  {
    icon: Route,
    title: 'Outstation Trips',
    desc: 'Long-distance travel from Hyderabad to any destination. 300 km/day [00:00-11:59] included. Comfortable vehicles with fuel.',
    tags: ['Fuel included', 'Any destination', '300 km/day'],
  },
  {
    icon: Building2,
    title: 'Airport & Station',
    desc: 'Reliable airport and railway station pickups and drops across Hyderabad. Early morning, late night — we are always on time.',
    tags: ['24/7 available', 'All terminals', 'On time'],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-brand-400 text-sm font-semibold tracking-widest uppercase mb-3">What We Offer</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">Our Services</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Comprehensive transportation solutions for every occasion — from a quick city ride to a multi-day outstation trip.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Icon = s.icon
            return (
              <div key={i}
                className="group bg-dark-700 border border-white/8 rounded-2xl p-6 hover:border-brand-500/40 hover:bg-dark-600 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-brand-600/15 border border-brand-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-600/25 transition-colors">
                    <Icon size={20} className="text-brand-400" />
                  </div>
                  <h3 className="font-display font-semibold text-white text-lg">{s.title}</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{s.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((t, j) => (
                    <span key={j} className="text-xs text-brand-300 bg-brand-600/10 border border-brand-500/20 px-2.5 py-1 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
