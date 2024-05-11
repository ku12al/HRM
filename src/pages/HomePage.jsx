import React from 'react'
import Navbar from '../components/Navbar'
import Slide from '../components/Slides'
import Categories from '../components/Categories'
import Listings from '../components/Listings'
import Footer from "../components/Footer"
function HomePage() {
  return (
   <>
   <Navbar/>
   <Slide/>
   <Categories/>
   <Listings/>
   <Footer />
   </>

  )
}

export default HomePage