import { Star } from 'lucide-react'

const reviews = [
  {
    name: 'Rajesh Kumar',
    role: 'Corporate Manager',
    text: 'Excellent service for our company outings. The buses were clean, comfortable, and the drivers were very professional. Highly recommended!',
    stars: 5,
    initial: 'RK',
  },
  {
    name: 'Priya Sharma',
    role: 'Wedding Planner',
    text: 'Baba Tours made our wedding transportation seamless. All guests reached venues on time with comfortable AC buses. Outstanding coordination!',
    stars: 5,
    initial: 'PS',
  },
  {
    name: 'Dr. Venkatesh',
    role: 'School Principal',
    text: 'Safe and reliable service for our school trips. Parents trust us because we trust Baba Tours. Their safety standards are exceptional.',
    stars: 5,
    initial: 'DV',
  },
  {
    name: 'Anita Reddy',
    role: 'Tourist',
    text: 'Wonderful city tour experience! The driver was knowledgeable about all tourist spots and the vehicle was spotlessly clean. Great value for money.',
    stars: 5,
    initial: 'AR',
  },
  {
    name: 'Vikram Singh',
    role: 'Event Organizer',
    text: 'From small sedans to large buses, they have everything! Professional service and competitive pricing. Our go-to partner for all events.',
    stars: 5,
    initial: 'VS',
  },
  {
    name: 'Meera Patel',
    role: 'HR Manager',
    text: 'Punctual, professional, and pleasant experience every time. Their customer service is top-notch and drivers are courteous and helpful.',
    stars: 5,
    initial: 'MP',
  },
]

const initColors = [
  'bg-brand-600/25 text-brand-300',
  'bg-green-700/25 text-green-300',
  'bg-purple-700/25 text-purple-300',
  'bg-blue-700/25 text-blue-300',
  'bg-yellow-700/25 text-yellow-300',
  'bg-red-700/25 text-red-300',
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-brand-400 text-sm font-semibold tracking-widest uppercase mb-3">Client Stories</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">What Our Clients Say</h2>
          <p className="text-gray-400 max-w-lg mx-auto">Trusted by thousands of happy travellers across Hyderabad and beyond.</p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="bg-dark-700 border border-white/8 rounded-2xl p-6 flex flex-col">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: r.stars }).map((_, j) => (
                  <Star key={j} size={14} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <p className="text-gray-300 text-sm leading-relaxed flex-1 mb-6 italic">"{r.text}"</p>

              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${initColors[i % initColors.length]}`}>
                  {r.initial}
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">{r.name}</p>
                  <p className="text-gray-500 text-xs">{r.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google rating prompt */}
        <div className="mt-10 text-center">
          <p className="text-gray-500 text-sm">Had a great experience?</p>
          <a href="tel:+919396484899"
            className="inline-flex items-center gap-2 mt-3 text-brand-400 hover:text-brand-300 font-medium text-sm transition-colors">
            Tell your friends or call us for your next trip →
          </a>
        </div>
      </div>
    </section>
  )
}
