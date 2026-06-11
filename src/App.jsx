import Navbar       from './components/Navbar'
import Hero         from './components/Hero'
import Services     from './components/Services'
import Fleet        from './components/Fleet'
import Pricing      from './components/Pricing'
import Gallery      from './components/Gallery'
import Testimonials from './components/Testimonials'
import WhyUs        from './components/WhyUs'
import Contact      from './components/Contact'
import Footer       from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-dark-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Fleet />
        <Pricing />
        <Gallery />
        <Testimonials />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
