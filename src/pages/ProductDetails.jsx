import React, {  useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { MdKeyboardArrowRight } from "react-icons/md";
import { Rate } from 'antd';
import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
const ProductDetails = () => {
    let [show , setShow] = useState(false)
    let [show1 , setShow1] = useState(false)
    let productId = useParams()
    let [singleProduct , setSingleProduct] = useState({})
    let getSingleProduct = () => {
      axios.get(`https://dummyjson.com/products/${productId.id}`).then((response)=>{
        setSingleProduct(response.data);
      
     })
    }
    useEffect(()=> {
      getSingleProduct();
    },[])
    
    let clintRating = Array.from({length : 5} , (_, index)=> {
      let number = index + 0.5
      return singleProduct.rating > index + 1 ?   <FaStar />  : singleProduct.rating > number ? <FaRegStarHalfStroke /> :  <FaRegStar />
    })
    let discount = singleProduct.price * singleProduct.discountPercentage / 100
    let newPrice = singleProduct.price - discount
    
  return (
 <section>
  <div className="max-w-container mx-auto">
  <div className=" items relative pb-0 xl:pb-[130px]">
   <span className='font-DM font-normal text-[12px] text-[#767676] pe-[14px]'>Home</span>
    <span className='font-DM font-normal text-[16px] text-[#767676]  absolute left-[8.2%] sm:left-[4.6%] lg:left-[3.2%] xl:left-[2.2%] top-2'> <MdKeyboardArrowRight />  </span>
    <span className='font-DM font-normal text-[12px] text-[#767676]' >  Products</span>
   </div>
   <div className="flex flex-wrap justify-between">
    <div className="w-[49%] pt-9">
    {singleProduct.thumbnail ? (
  singleProduct.images.map((item) => ( 
    <img className=" xl:w-[720px] xl:h-[720px]  sm:w-[400px] sm:h-[400px]" src={item} alt={singleProduct.title} />
  ))
) : (
  <p className=' text-center font-DM font-bold text-[30px]'>Loading image...</p>
)}
          </div>
   <div className="w-1/2"></div>
   </div>
   <h2 className='font-DM font-bold text-[49px] text-[#262626]'>Products</h2>
   <div className="flex text-[#FFD881] items-center ">
    {clintRating}
    <span className='font-DM font-normal text-[14px] text-[#767676] ms-16'>1 Review</span>
   </div>
   <div className="flex items-center pt-[24px] border-b-2 border-b-[#d8d8d8] w-full sm:w-[49%] pb-3">
    <span className='font-DM font-normal text-[14px] text-[#767676] '><del>{singleProduct.price}</del></span>
    <span className='font-DM font-bold text-[20px] text-[#262626] ms-6'>${newPrice.toFixed(2)}</span>
   </div>
   <h2 className='font-DM font-bold py-4 border-b-2 border-b-[#d8d8d8] w-full sm:w-[49%]'>Stocks&nbsp;: &nbsp;{singleProduct.stock}</h2>
   <div className="flex my-5 pb-[24px] border-b-2 border-b-[#d8d8d8] w-full sm:w-[49%] ">
     <button className='px-[40px] py-[16px] text-[10px] border-2 border-[#000] me-3 hover:bg-black hover:text-white duration-300'>Add to Wish List</button>
     <button className='px-[40px] py-[16px] text-[10px] border-2 border-[#000] me-3 hover:bg-black hover:text-white duration-300'>Add to Cart</button>
   </div>
   <div className="flex justify-between w-full lg:w-[49%] items-center pb-6 border-b-2 border-b-[#d8d8d8] cursor-pointer" onClick={()=> setShow(!show)}>
    <h2>Commant</h2>
   {show ? (<span className='text-[30px] font-normal'>-</span>) : (<span className='text-[30px] font-normal'>+</span>)}
   </div>
   {show && (
     <p className='font-DM font-normal text-[14px] text-[#767676] w-full lg:w-[49%] pt-6 '>{singleProduct.description}
</p>
   )}
   <div className="flex justify-between w-full lg:w-[49%] items-center py-6 border-b-2 border-b-[#d8d8d8] cursor-pointer" onClick={()=> setShow1(!show1)}>
    <h2>Commant</h2>
    {show1 ? (<span className='text-[30px] font-normal'>-</span>) : (<span className='text-[30px] font-normal'>+</span>)}
   </div>
   {show1 && (
     <p className='font-DM font-normal text-[14px] text-[#767676] w-full lg:w-[49%] pt-6 '>{singleProduct.description}
</p>
   )}
  <div className="py-8 mb-8  border-b-2 border-b-#d8d8d8[#767676]">
    <div className="">
      {singleProduct && <Rate disabled value={singleProduct.rating} /> }
    </div>
    <div className=" text-[#767676] text-[14px] pt-2">
      {singleProduct.description}
    </div>
  </div>
  </div>
 </section>
  )
}
export default ProductDetails 