import React from 'react'
import Banner from '../components/Banner'
import Ads from '../components/Ads'
import BestSeller from '../components/BestSeller'
import Ads2 from '../components/Ads2'
import SpecialOffer from '../components/SpecialOffer'
import NewArrivals from '../components/NewArrivals'
const Home = () => {
  return (
   <>
   
   <Banner />
   <Ads />
   {/* <Arrivals /> */}
   <NewArrivals />
   <BestSeller />
   <Ads2 />
   <SpecialOffer />
   </>
  )
}
export default Home