import arr1 from "../assets/arrimg1.png"
import arr2 from "../assets/arrimg2.png"
import arr3 from "../assets/arrimg3.png"
import arr4 from "../assets/arrimg4.png"
import { FaHeart } from "react-icons/fa";
import 'animate.css';
import { FaCartShopping } from "react-icons/fa6";
import { DiGitCompare } from "react-icons/di";
const Arrivals = ({item}) => {
  return (
   <section id='arrivals'>
    <div className="max-w-container mx-autolg:block">
    {/* <Slider {...settings}> */}
        <div className=' relative group sm:ms-0 ms-4'>
        <img className='w-[90%]' src={item.thumbnail} alt="" />
  <div className="absolute left-0 bottom-[70px] bg-white shadow-md w-[90%] h-0 group-hover:h-[40%] text-right pr-5 transition-all duration-300">
    <p className='hidden group-hover:block pt-5 animate__fadeInDown'>Add to Wish List &nbsp; &nbsp;   <FaHeart className='inline-block' /> </p>
    <p className='lg:py-2 xl:py-[21px] py-[21px] hidden group-hover:block animate__fadeInDown'>Compare &nbsp; &nbsp;  <DiGitCompare className='inline-block' /> </p>
       <h2 className='hidden group-hover:block animate__fadeInDown'>Add to Cart &nbsp; &nbsp; <FaCartShopping className='inline-block' /> </h2>
  </div>
          <div className=" absolute left-3 top-5">
            <a href="#" className='font-DM font-bold text-[14px] text-black py-[8px] px-[30px] border-2 border-black hover:bg-black  hover:text-white duration-300'>New</a>
          </div>
          <div className=" relative lg:pt-2 xl:pt-0">
            <h4 className='pb-[15px] pt-2 font-bold font-DM lg:text-[10px] xl:text-[16px] text-[16px]'>{item.title}</h4>
            <p className='text-[#767676] font-DM text-[16px] font-normal lg:text-[11px] xl:text-[16px]'>{item.brand}</p>
            <div className=" absolute right-10 top-2 lg:top-4 xl:top-2 text-[#767676] font-DM font-normal lg:text-[12px] xl:text-[16px]">
                <span>${item.price}</span>
            </div>
          </div>
        </div>
        {/* </Slider> */}
      </div>
      </section>
  )
}
export default Arrivals