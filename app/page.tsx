 "use client"
 import Products from '@/components/landing page/products'
import Header from '../components/landing page/header'
 import HeroSection from '../components/landing page/heroSection'
// import Features from '@/components/landing page/features'
import Benefits from '@/components/landing page/benefit'
import Newsletter from '@/components/landing page/newsletter'
import Footer from '@/components/landing page/footer'
import SideNav from '@/components/landing page/sidenav'
import { useState } from 'react'
import { PageContext } from '@/context/landPg'

 export default function LadingPage(){
  const [show, setShow] = useState(false)

  return(
    <PageContext.Provider value ={{show, setShow}}>
    <div className="land-pg">
      <div className="section">
      <Header />
      <SideNav />
        <HeroSection />
        <Products />
        <Benefits />
        <Newsletter />
      </div>
      <Footer />
    </div>
    </PageContext.Provider>
  )
 }