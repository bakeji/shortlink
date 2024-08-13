 import Products from '@/components/landing page/products'
import Header from '../components/landing page/header'
 import HeroSection from '../components/landing page/heroSection'
// import Features from '@/components/landing page/features'
import Benefits from '@/components/landing page/benefit'
import Newsletter from '@/components/landing page/newsletter'
import Footer from '@/components/landing page/footer'
 export default function LadingPage(){
  return(
    <div className="land-pg">
      <div className="section">
      <Header />
        <HeroSection />
        <Products />
        <Benefits />
        <Newsletter />
      </div>
      <Footer />
    </div>
  )
 }