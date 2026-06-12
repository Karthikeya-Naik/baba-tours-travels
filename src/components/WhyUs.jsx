import { ShieldCheck, Clock, Fuel, Users, MapPin, Headphones } from 'lucide-react'

const reasons = [
  {
    icon: ShieldCheck,
    title: 'Safety First',
    desc: 'Well-maintained vehicles with regular servicing. Experienced, verified drivers committed to your safety.',
  },
  {
    icon: Clock,
    title: 'Always On Time',
    desc: 'We understand the value of your time. Punctual pickups and drop-offs for every booking, guaranteed.',
  },
  {
    icon: Fuel,
    title: 'Fuel Inclusive',
    desc: 'No hidden fuel costs. All per-km pricing includes fuel - you only pay toll and parking separately.',
  },
  {
    icon: Users,
    title: 'Any Group Size',
    desc: 'From 12-seater Tempo to 50-seater luxury bus, we have the perfect vehicle for your group size.',
  },
  {
    icon: MapPin,
    title: 'Any Destination',
    desc: 'City rides, outstation trips, Hyderabad to Vijayawada, Tirupati and beyond - any route, any time.',
  },
  {
    icon: Headphones,
    title: 'Responsive Support',
    desc: 'Call or WhatsApp any time. Our team responds fast and ensures your trip is planned perfectly.',
  },
]

export default function WhyUs() {
  return (
    <section className="py-16 sm:py-20 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* Left text */}
          <div className="lg:w-80 flex-shrink-0">
            <p className="text-brand-400 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-2 sm:mb-3">Why Choose Us</p>
            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-white mb-3 sm:mb-4">The Baba Tours Difference</h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-5 sm:mb-6">
              Hyderabad locals have trusted us for years for school trips, weddings, corporate events and outstation travel. Here's why.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-300">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-brand-500" />
                Based in Vanasthalipuram, Hyderabad
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-300">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-brand-500" />
                Managed by Mr. Pasha - personally oversees every booking
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-300">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-brand-500" />
                AC & Non-AC fleet for every budget
              </div>
            </div>
          </div>

          {/* Right grid */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {reasons.map((r, i) => {
              const Icon = r.icon
              return (
                <div key={i} className="flex gap-3 sm:gap-4 bg-dark-700 border border-white/8 rounded-xl p-4 sm:p-5 hover:border-brand-500/30 transition-all duration-300 hover:-translate-y-0.5">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-brand-600/15 border border-brand-500/20 flex items-center justify-center flex-shrink-0">
                    <Icon size={16} className="text-brand-400 sm:text-[18px]" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-sm sm:text-base mb-1">{r.title}</h3>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{r.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}