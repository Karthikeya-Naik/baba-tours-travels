import { useState } from 'react'
import { Phone, MessageCircle, MapPin, Mail, Send, CheckCircle } from 'lucide-react'

const WA_URL = `https://wa.me/918125606446?text=Hi%20Baba%20Tours%2C%20I%20want%20to%20enquire%20about%20vehicle%20hire.`

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', passengers: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleWhatsApp = e => {
    e.preventDefault()
    if (!form.name || !form.phone) return
    const msg = encodeURIComponent(
      `Hi Baba Tours! I want to book a vehicle.\n\nName: ${form.name}\nPhone: ${form.phone}\nPassengers: ${form.passengers || 'Not specified'}\nMessage: ${form.message || 'Please contact me with available options.'}`
    )
    window.open(`https://wa.me/918125606446?text=${msg}`, '_blank')
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="py-20 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-brand-400 text-sm font-semibold tracking-widest uppercase mb-3">Get in Touch</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">Book Your Trip</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Tell us your route, date and group size — we'll get back to you with the best option and price instantly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left: Contact info */}
          <div className="lg:col-span-2 space-y-5">
            <a href="tel:+919396484899"
              className="group flex items-start gap-4 bg-dark-700 border border-white/8 hover:border-brand-500/40 rounded-2xl p-5 transition-all duration-200">
              <div className="w-11 h-11 rounded-xl bg-brand-600/15 border border-brand-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-600/25 transition-colors">
                <Phone size={20} className="text-brand-400" />
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">Call us directly</p>
                <p className="text-white font-bold text-lg">+91 93964 84899</p>
                <p className="text-gray-500 text-xs mt-1">Tap to call instantly</p>
              </div>
            </a>

            <a href={WA_URL} target="_blank" rel="noopener noreferrer"
              className="group flex items-start gap-4 bg-dark-700 border border-white/8 hover:border-green-500/40 rounded-2xl p-5 transition-all duration-200">
              <div className="w-11 h-11 rounded-xl bg-green-700/15 border border-green-600/20 flex items-center justify-center flex-shrink-0 group-hover:bg-green-700/25 transition-colors">
                <MessageCircle size={20} className="text-green-400" />
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">WhatsApp</p>
                <p className="text-white font-bold text-lg">+91 81256 06446</p>
                <p className="text-gray-500 text-xs mt-1">Message us on WhatsApp</p>
              </div>
            </a>

            <div className="flex items-start gap-4 bg-dark-700 border border-white/8 rounded-2xl p-5">
              <div className="w-11 h-11 rounded-xl bg-blue-700/15 border border-blue-600/20 flex items-center justify-center flex-shrink-0">
                <MapPin size={20} className="text-blue-400" />
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">Our Location</p>
                <p className="text-white font-semibold">Vanasthalipuram</p>
                <p className="text-gray-400 text-sm">Hyderabad, Telangana</p>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-dark-700 border border-white/8 rounded-2xl p-5">
              <p className="text-gray-400 text-sm mb-3 font-medium">Availability</p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Mon – Sun</span>
                  <span className="text-white font-medium">6:00 AM – 10:00 PM</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">WhatsApp</span>
                  <span className="text-green-400 font-medium">24/7 Messages</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3 bg-dark-700 border border-white/8 rounded-2xl p-6 sm:p-8">
            <h3 className="font-display font-semibold text-white text-xl mb-6">Send Enquiry via WhatsApp</h3>

            {sent ? (
              <div className="flex flex-col items-center justify-center py-12 gap-4">
                <CheckCircle size={48} className="text-green-400" />
                <p className="text-white font-semibold text-lg">WhatsApp opened!</p>
                <p className="text-gray-400 text-sm text-center">Your message has been prepared. Send it in WhatsApp to connect with us.</p>
              </div>
            ) : (
              <form onSubmit={handleWhatsApp} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-1.5">Your Name *</label>
                    <input
                      type="text" name="name" value={form.name} onChange={handleChange} required
                      placeholder="Full name"
                      className="w-full bg-dark-600 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-brand-500/50 focus:bg-dark-500 transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-1.5">Phone Number *</label>
                    <input
                      type="tel" name="phone" value={form.phone} onChange={handleChange} required
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full bg-dark-600 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-brand-500/50 focus:bg-dark-500 transition-colors text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-1.5">Number of Passengers</label>
                  <select name="passengers" value={form.passengers} onChange={handleChange}
                    className="w-full bg-dark-600 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-500/50 focus:bg-dark-500 transition-colors text-sm">
                    <option value="">Select passengers</option>
                    <option value="1-4">1 – 4 (Sedan / Cab)</option>
                    <option value="5-6">5 – 6 (SUV / Innova)</option>
                    <option value="7-12">7 – 12 (Tempo Traveller)</option>
                    <option value="13-22">13 – 22 (Mini Bus)</option>
                    <option value="23-28">23 – 28 (Mini Bus)</option>
                    <option value="29-40">29 – 40 (Large Bus)</option>
                    <option value="41-50">41 – 50 (Large Bus)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-1.5">Trip Details</label>
                  <textarea
                    name="message" value={form.message} onChange={handleChange} rows={4}
                    placeholder="Where from, where to, date, occasion..."
                    className="w-full bg-dark-600 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-brand-500/50 focus:bg-dark-500 transition-colors text-sm resize-none"
                  />
                </div>

                <button type="submit"
                  className="w-full flex items-center justify-center gap-2 py-4 bg-green-600 hover:bg-green-500 rounded-xl text-white font-semibold text-base transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green-700/30">
                  <MessageCircle size={18} />
                  Send via WhatsApp
                </button>
                <p className="text-center text-xs text-gray-500">
                  This opens WhatsApp with your details pre-filled. Just hit Send!
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Map embed */}
        <div className="mt-10 rounded-2xl overflow-hidden border border-white/8 h-72">
          <iframe
            title="Baba Tours and Travels Location – Vanasthalipuram Hyderabad"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.0!2d78.5339!3d17.3616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zVmFuYXN0aGFsaXB1cmFtLCBIeWRlcmFiYWQ!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
            className="w-full h-full border-0 grayscale invert opacity-80"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}
