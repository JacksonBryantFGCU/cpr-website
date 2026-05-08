import Header from './components/Header'
import Hero from './components/Hero'
import EkgDivider from './components/EkgDivider'
import Stats from './components/Stats'
import About from './components/About'
import WhatYoullLearn from './components/WhatYoullLearn'
import Pricing from './components/Pricing'
import Register from './components/Register'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-paper">
      <Header />
      <main>
        <Hero />
        <EkgDivider />
        <Stats />
        <About />
        <WhatYoullLearn />
        <Pricing />
        <Register />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
