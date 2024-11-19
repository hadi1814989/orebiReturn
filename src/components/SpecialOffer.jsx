import React, { useContext } from 'react'
import Arrivals from './Arrivals'
import { ApiData } from './ContextApi';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { HiArrowLongLeft } from "react-icons/hi2";
import { HiArrowLongRight } from "react-icons/hi2";
function SampleNextArrow({ onClick }) {
 
  
   
  return (
    <div onClick={onClick} className='w-[40px] h-[40px] rounded-full bg-white shadow-sm flex items-center justify-center absolute right-[4rem] bottom-[52%] translateY-[-50%]'>
      <HiArrowLongRight />
       </div>
  );
}
function SamplePrevArrow({  onClick }) {
 
  return (
    <div onClick={onClick} className='w-[40px] h-[40px] rounded-full bg-white shadow-sm flex items-center justify-center absolute left-[1rem] top-[40%] z-10 translateY-[-50%] '>
      <HiArrowLongLeft />
      </div>
  );
}
const SpecialOffer = () => {
  let {info , loading} = useContext(ApiData)
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4, // Default is 4 slides
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow onClick={() => alert('Next Arrow Clicked')} />,  
    prevArrow: <SamplePrevArrow onClick={() => alert('Prev Arrow Clicked')} />,
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section>
    <div className="max-w-container mx-auto ">
    <h2 className='font-DM text-[39px] font-bold pb-[48px] sm:ms-0 ms-4'>Special Offers</h2>
    {loading ? ( <h2 className='text-[40px] font-DM text-center'>loading.....</h2>) :
       ( <Slider {...settings}> 
        {info.map((item) => (
            <Link to='/shop' ><Arrivals item={item}/></Link>
        ))}
       
       </Slider>
       )}
   </div>
  </section>
  )
}
export default SpecialOffer