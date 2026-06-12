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
    stars: 4.5,
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
    stars: 4.5,
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
  {
    name: 'Suresh Reddy',
    role: 'Business Owner',
    text: 'Hired a 28 seater for our staff picnic. Bus was on time, clean, and driver was very professional. Will definitely book again.',
    stars: 5,
    initial: 'SR',
  },
  {
    name: 'Lakshmi Priya',
    role: 'Family Traveler',
    text: 'Took a tempo traveller for our family trip to Tirupati. Comfortable ride, good AC, and reasonable price. Highly recommend!',
    stars: 4.5,
    initial: 'LP',
  },
  {
    name: 'Ravi Teja',
    role: 'Event Coordinator',
    text: 'Good fleet of vehicles. Booked 2 buses for a wedding. Everything went smoothly. Keep up the good work.',
    stars: 4,
    initial: 'RT',
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

// Helper component to render stars with half-star support
function StarRating({ rating }) {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 !== 0
  const emptyStars = 5 - Math.ceil(rating)

  return (
    <div className="flex gap-0.5 sm:gap-1">
      {/* Full stars */}
      {Array.from({ length: fullStars }).map((_, i) => (
        <Star key={`full-${i}`} size={12} className="text-yellow-400 fill-yellow-400 sm:text-[14px]" />
      ))}
      
      {/* Half star */}
      {hasHalfStar && (
        <div className="relative">
          <Star size={12} className="text-yellow-400 sm:text-[14px]" />
          <div className="absolute inset-0 overflow-hidden w-1/2">
            <Star size={12} className="text-yellow-400 fill-yellow-400 sm:text-[14px]" />
          </div>
        </div>
      )}
      
      {/* Empty stars */}
      {Array.from({ length: emptyStars }).map((_, i) => (
        <Star key={`empty-${i}`} size={12} className="text-gray-600 sm:text-[14px]" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-20 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-brand-400 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-2 sm:mb-3">Client Stories</p>
          <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-white mb-3 sm:mb-4">What Our Clients Say</h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-lg mx-auto px-4">Trusted by thousands of happy travellers across Hyderabad and beyond.</p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="bg-dark-700 border border-white/8 rounded-2xl p-5 sm:p-6 flex flex-col h-full hover:border-brand-500/30 transition-all duration-300">
              {/* Stars */}
              <div className="mb-3 sm:mb-4">
                <StarRating rating={r.stars} />
              </div>

              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed flex-1 mb-5 sm:mb-6 italic line-clamp-4">"{r.text}"</p>

              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold flex-shrink-0 ${initColors[i % initColors.length]}`}>
                  {r.initial}
                </div>
                <div>
                  <p className="text-white text-sm sm:text-base font-semibold">{r.name}</p>
                  <p className="text-gray-500 text-[10px] sm:text-xs">{r.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-10 sm:mt-12 text-center">
          <p className="text-gray-500 text-xs sm:text-sm">Had a great experience?</p>
          <a href="tel:+919396484899"
            className="inline-flex items-center gap-2 mt-2 sm:mt-3 text-brand-400 hover:text-brand-300 font-medium text-xs sm:text-sm transition-colors">
            Tell your friends or call us for your next trip →
          </a>
        </div>
      </div>
    </section>
  )
}