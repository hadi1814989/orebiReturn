import { RxCross2 } from "react-icons/rx";
import React, { useEffect, useState } from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { productDecrement, productIncrement, productRemove } from "../slice/productSlice";


const Cart = () => {
 
 
    let cartInfo = useSelector((state)=> state.product.cartItem )
    console.log(cartInfo);
    
    let dispatch = useDispatch()
    let handleIncrement = (i)=>{
        dispatch(productIncrement(i))
    }
  
    let handleDecrement =(i)=>{
      dispatch(productDecrement(i))
    }
    let handlePremove = (i)=>{
      dispatch(productRemove(i))
    }
    return (
    <section className=''>
      <div className=" max-w-container mx-auto">
      <span className='font-DM font-normal text-[16px] text-[#767676]  absolute left-[8.2%] sm:left-[4.6%] lg:left-[3.2%] xl:left-[2.2%] top-2'> <MdKeyboardArrowRight />  </span>
      <span className='font-DM font-normal text-[12px] text-[#767676]' >Cart</span>
     <div className="">
      <div className="flex flex-wrap bg-[#f5f7f7] my-2">
        <div className="w-1/4 py-[32px] ps-[20px] font-bold text-[16px]">Product</div>
        <div className="w-1/4 py-[32px] ps-[20px] font-bold text-[16px]">Price</div>
        <div className="w-1/4 py-[32px] ps-[20px] font-bold text-[16px]">Quantity</div>
        <div className="w-1/4 py-[32px] ps-[20px] font-bold text-[16px]">Total</div>
      </div>
      {cartInfo.map((item, i)=>(
    <div className="flex border-2 border-[#f5f7f7] ">
      <div className="w-full flex items-center gap-1 py-[32px] ps-[20px] font-bold text-[16px]">
      <div onClick={()=> handlePremove(i)} className=" font-bold">
      <span><RxCross2 /></span>
      </div>
     
    <div className="flex w-full">
       <div className=" flex w-1/4">
       <span className="w-1/4"><img className="w-4/4" src={item.thumbnail} alt="" /></span>
      <span className="pt-[30px]">{item.titel}</span>
       </div>
      <h2 className="w-1/4 py-[32px] ps-[20px] font-bold text-[16px] pt-[30px]">{item.price}</h2>
      <div className="w-1/4 flex gap-1">
     <div className="inline-block border-2 h-10 mt-5 ">
     <button onClick={()=> handleDecrement(i)}   className=" pt-[5px] ps-[10px] font-bold text-[16px]">-</button>
      <span className="py-[0px] ps-[20px] font-bold text-[16px]  pt-[30px]">{item.qun}</span>
      <button onClick={()=> handleIncrement(i)}  className="pt-[5px] px-[10px] font-bold text-[16px]">+</button>
     </div>
      </div>
      <div className="w-1/4 py-[32px] ps-[20px] font-bold text-[16px]  pt-[30px]">{(item.price * item.qun.toFixed(2))}</div>
    </div>
    </div>
    </div>
      ))}
   
   </div>
    </div>
  </section>
  
    )
  }
  
  export default Cart