import { useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const images = [
  { src: '/images/bus_baba_red.webp',     alt: 'Baba Tours 50 Seater Red Bus',           label: 'Baba Bus — 50 Seater',       cat: 'Buses' },
  { src: '/images/bus_white_50.webp',     alt: 'Large white 50 seater bus',               label: 'Large White Bus — 50 Seater', cat: 'Buses' },
  { src: '/images/bus_dreamline.webp',    alt: 'Red & white Dreamline bus exterior',      label: 'Dreamline Bus',               cat: 'Buses' },
  { src: '/images/bus_royal_rider.webp',  alt: 'Royal Rider 22 seater bus',               label: 'Royal Rider Bus — 22 Seater', cat: 'Buses' },
  { src: '/images/bus_white_icbl.webp',   alt: 'ICBL white mini bus',                     label: 'Mini Bus — 22 Seater',        cat: 'Buses' },
  { src: '/images/bus_investment.webp',   alt: 'White bus with travel quote',             label: 'Coach Bus — 40 Seater',       cat: 'Buses' },
  { src: '/images/bus_front_white.webp',  alt: 'White bus front view',                    label: 'Bus Front View',              cat: 'Buses' },
  { src: '/images/tempo_front.webp',      alt: 'White Tempo Traveller 12 seater',         label: 'Tempo Traveller — 12 Seater', cat: 'Tempo' },
  { src: '/images/bus_interior_blue1.webp', alt: 'Bus interior blue seats',               label: 'Spacious Interior',           cat: 'Interiors' },
  { src: '/images/bus_interior_blue2.webp', alt: 'Bus interior comfortable seating',      label: 'Comfortable Seating',         cat: 'Interiors' },
  { src: '/images/bus_interior_1.webp',   alt: 'Bus interior white headrest seats',       label: 'Premium Seating',             cat: 'Interiors' },
  { src: '/images/bus_interior_2.webp',   alt: 'Coach interior white push back seats',    label: 'Coach Interior',              cat: 'Interiors' },
]

const cats = ['All', 'Buses', 'Tempo', 'Interiors']

export default function Gallery() {
  const [filter, setFilter] = useState('All')
  const [lightbox, setLightbox] = useState(null)

  const filtered = filter === 'All' ? images : images.filter(i => i.cat === filter)

  const prev = () => {
    const idx = filtered.findIndex(i => i.src === lightbox.src)
    setLightbox(filtered[(idx - 1 + filtered.length) % filtered.length])
  }
  const next = () => {
    const idx = filtered.findIndex(i => i.src === lightbox.src)
    setLightbox(filtered[(idx + 1) % filtered.length])
  }

  return (
    <section id="gallery" className="py-20 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-brand-400 text-sm font-semibold tracking-widest uppercase mb-3">Our Fleet</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">Gallery</h2>
          <p className="text-gray-400 max-w-lg mx-auto">Real photos of our vehicles — what you see is what you get.</p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {cats.map(c => (
            <button key={c} onClick={() => setFilter(c)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                filter === c
                  ? 'bg-brand-600 text-white'
                  : 'bg-dark-700 text-gray-400 hover:bg-dark-600 hover:text-white border border-white/8'
              }`}>
              {c}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {filtered.map((img, i) => (
            <button key={i} onClick={() => setLightbox(img)}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-dark-700 border border-white/6 hover:border-brand-500/40 transition-all duration-300">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-dark-900/0 group-hover:bg-dark-900/40 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-xs font-medium">{img.label}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}>
          <button onClick={e => { e.stopPropagation(); prev() }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-dark-700/80 hover:bg-dark-600 rounded-full flex items-center justify-center text-white">
            <ChevronLeft size={20} />
          </button>

          <div className="relative max-w-4xl max-h-[85vh] w-full" onClick={e => e.stopPropagation()}>
            <img src={lightbox.src} alt={lightbox.alt} className="w-full h-full object-contain rounded-xl max-h-[80vh]" />
            <p className="text-center text-white text-sm mt-3 font-medium">{lightbox.label}</p>
          </div>

          <button onClick={e => { e.stopPropagation(); next() }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-dark-700/80 hover:bg-dark-600 rounded-full flex items-center justify-center text-white">
            <ChevronRight size={20} />
          </button>

          <button onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 w-9 h-9 bg-dark-700/80 hover:bg-dark-600 rounded-full flex items-center justify-center text-white">
            <X size={18} />
          </button>
        </div>
      )}
    </section>
  )
}
