import React from 'react'
import Hero from '../sections/hero/Hero'
import Projects from '../sections/projects/Projects'
import Contact from '../sections/contact/Contact'
import Footer from '../sections/footer/Footer'
import Header from '../sections/header/Header'

const LandingPageLayout = () => {
  return (
    <div className="">
      <Header />
      <div className="bg-[f1f1f1] p-8 md:px-20">
        <Hero />
        <Projects />
      </div>
      <Contact />

      <Footer />
    </div>

  )
}

export default LandingPageLayout
