import React from 'react'
import ads1 from "../assets/ads-img1.jpg"
import ads2 from "../assets/ads-img-2.jpg"
import ads3 from "../assets/ads-img-3.jpg"
import "slick-carousel/slick/slick.css";

const Ads = () => {
   
  return (
   <section className='mt-[140px] mb-[128px]'>
    <div className="max-w-container mx-auto flex">
        <div className="w-[49%]">
     
                        <div className=' relative'>
                            <img className='w-full lg:h-[596px] h-[300px]' src={ads2} alt="Slide 1" />
                          
                        </div>
                       
        </div>
        <div className="w-[49%]">
                <div className="">
               
                        <div>
                        <img className='w-full lg:h-[283px] h-[131px] mb-[38px]  lg:mb-[30px]' src={ads1} alt="" />
                 
                        </div>
                  
       
         </div>
            <div className="">
         
                        <div>
                        <img className='w-full lg:h-[283px] h-[131px]' src={ads3} alt="" />
                                    
                        </div>
                      
      
            </div>
        </div>
    </div>
   </section>
  )
}
export default Ads