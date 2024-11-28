import { RxCross2 } from "react-icons/rx";
import React, { useEffect, useState } from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { productDecrement, productIncrement, productRemove } from "../slice/productSlice";
import { Link } from "react-router-dom";


const Cart = () => {
 
    let [show , setShow] = useState(false)
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
      if(cartInfo.length < 2){
          setShow(true)
      }
    }
    let {totalPrice , totalQuentity} = cartInfo.reduce((acc , item)=>{
      acc.totalPrice += item.price * item.qun
      acc.totalQuentity += item.qun
      return acc 
    },{totalPrice : 0 , totalQuentity : 0})
   
    
    return (
    <section className=''>
      <div className=" max-w-container mx-auto">
      <h2 className='font-DM font-bold pt-5 text-[49px] text-[#262626]'>Cart</h2>
   <div className=" items relative pb-[130px]">
   <span className='font-DM font-normal text-[12px] text-[#767676] pe-[14px]'>Home</span>
    <span className='font-DM font-normal text-[16px] text-[#767676]  absolute left-[8.2%] sm:left-[4.6%] lg:left-[3.2%] xl:left-[2.2%] top-2'> <MdKeyboardArrowRight />  </span>
    <span className='font-DM font-normal text-[12px] text-[#767676]' >  Cart</span>
   </div>
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
     
      <button onClick={()=> handleIncrement(i)}  className="pt-[5px] px-[10px] font-bold text-[16px]"disabled={item.qun >= item.stock}>+</button>
     </div>
      </div>
      <div className="w-1/4 py-[32px] ps-[20px] font-bold text-[16px]  pt-[30px]">{(item.price * item.qun.toFixed(2))}</div>
    </div>
    </div>
    </div>
      ))}
   <div className=" text-center text-[18px] font-bold py-5" style={{ display: show ? 'block' : 'none' }}>No product</div>
   <div className=" w-[30%] ms-auto">
    <h2 className="text-end font-DM font-bold text-[20px] capitalize">Cart totals</h2>
    <div class="flex flex-col">
  <div class="-m-1.5 overflow-x-auto">
    <div class="p-1.5 min-w-full inline-block align-middle">
      <div class="overflow-hidden">
        <table class="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th scope="col" class="px-6 py-3 text-start text-xs font-bold text-gray-500 capitalize">Subtotal</th>
              <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">{totalPrice.toFixed(2)}</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <tr class="hover:bg-gray-100">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-800">Quantity</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{totalQuentity}</td>
            </tr>
          </tbody>
          <tbody class="divide-y divide-gray-200">
            <tr class="hover:bg-gray-100">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-800">Total</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 font-bold">{totalPrice.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
<div className="text-right pb-[140px]">
<Link to="/checkout">
<button  className='px-[40px] py-[16px] text-[10px] border-2 border-[#000] me-3 hover:bg-black hover:text-white duration-300  '>Proceed to Checkout</button>
</Link>
</div>
   </div>
   </div>
    </div>
  </section>
  
    )
  }
  
  export default Cart
  