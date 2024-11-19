import React from 'react'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import banImg from "../assets/banner.jpg"
import { Link } from 'react-router-dom';
const Banner = () => {
  const settings = {
    dots: true,
    arrows:false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: dots => (
      <div 
        style={{
          padding: "10px",
          position: "absolute",
          left: "50px",
          top:"50%",
          transform:"translateY(-50%)",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div className="cus"
        style={{
          width: "30px",
          color: "transparent",
          borderRight: "3px #fff solid",
          padding: "10px 0px"
        }}
      >
        0{i + 1}
      </div>
    )
  };
  return (
   <section className='bg-[#fff] h-[22px] sm:h-[250px]  lg:h-[645px] '>
      <Slider {...settings}>
        {/* <div className="bg-back-img bg-cover bg-no-repeat bg-center pt-[167px] pb-[182px]">
          <h2 className='pb-[33px] font-DM font-bold text-[44px] sm:text-[49px] leading-[64px] pl-[64px] sm:pl-[120px]'>Final Offer</h2>
          <p className='font-DM text-[#6D6D6D] text-[16px] pb-[49px] pl-[120px]'>Up to <b className='font-DM font-bold text-[28px] sm:text-[40px] text-[#262626]'>50%</b> sale for all furniture items!</p>
          <button>
            <a href="#" className='ms-[71px] sm:ms-[120px] py-[16px] px-[58px] border-2 border-black hover:bg-black hover:text-white duration-300'>Shop Now</a>
          </button>
        </div> */}
        <div className="">
        <Link to='/shop'><img className='mx-auto' src={banImg} alt="" /></Link>
        </div>
        {/* <div className="bg-back-img bg-cover bg-no-repeat bg-center pt-[167px] pb-[182px]">
          <h2 className='pb-[33px] font-DM font-bold text-[49px] leading-[64px] pl-[120px]'>Final Offer</h2>
          <p className='font-DM text-[#6D6D6D] text-[16px] pb-[49px] pl-[120px]'>Up to <b className='font-DM font-bold text-[40px] text-[#262626]'>50%</b> sale for all furniture items!</p>
          <button>
            <a href="#" className='ms-[120px] py-[16px] px-[58px] border-2 border-black hover:bg-black hover:text-white duration-300'>Shop Now</a>
          </button>
        </div> */}
        <div className="">
        <Link to='/shop'><img className='mx-auto' src={banImg} alt="" /></Link>
        </div>
        {/* <div className="bg-back-img bg-cover bg-no-repeat bg-center pt-[167px] pb-[182px]">
          <h2 className='pb-[33px] font-DM font-bold text-[49px] leading-[64px] pl-[120px]'>Final Offer</h2>
          <p className='font-DM text-[#6D6D6D] text-[16px] pb-[49px] pl-[120px]'>Up to <b className='font-DM font-bold text-[40px] text-[#262626]'>50%</b> sale for all furniture items!</p>
          <button>
            <a href="#" className='ms-[120px] py-[16px] px-[58px] border-2 border-black hover:bg-black hover:text-white duration-300'>Shop Now</a>
          </button>
        </div> */}
        <div className="">
        <Link to='/shop'><img className='mx-auto' src={banImg} alt="" /></Link>
        </div>
        {/* <div className="bg-back-img bg-cover bg-no-repeat bg-center pt-[167px] pb-[182px]">
          <h2 className='pb-[33px] font-DM font-bold text-[49px] leading-[64px] pl-[120px]'>Final Offer</h2>
          <p className='font-DM text-[#6D6D6D] text-[16px] pb-[49px] pl-[120px]'>Up to <b className='font-DM font-bold text-[40px] text-[#262626]'>50%</b> sale for all furniture items!</p>
          <button>
            <a href="#" className='ms-[120px] py-[16px] px-[58px] border-2 border-black hover:bg-black hover:text-white duration-300'>Shop Now</a>
          </button>
        </div> */}
        <div className="">
        <Link to='/shop'><img className='mx-auto' src={banImg} alt="" /></Link>
        </div>
      </Slider>
   </section>
  )
}
export default Banner