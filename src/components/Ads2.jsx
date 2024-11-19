import React from 'react'
import adsImage from "../assets/Ads2-img.png";
import { Link } from 'react-router-dom';
const Ads2 = () => {
  return (
 <section className='mb-[128px]'>
<Link to='/shop'> <img className='mx-auto' src={adsImage} alt="" /></Link>
 </section>
  )
}
export default Ads2