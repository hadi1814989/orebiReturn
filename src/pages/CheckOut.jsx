import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import StripeCheckout from 'react-stripe-checkout';

const CheckOut = () => {
  let cartInfo = useSelector((state)=> state.product.cartItem )
  let {totalPrice , totalQuentity} = cartInfo.reduce((acc , item)=>{
    acc.totalPrice += item.price * item.qun
    acc.totalQuentity += item.qun
    return acc 
  },{totalPrice : 0 , totalQuentity : 0})
  const onToken = (token) => {
    fetch('/save-stripe-token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(token),
    })
      .then(response => response.json())
      .then(data => {
        alert(`We are in business, ${data.email}`);
      })
      .catch(error => {
        console.error('Error:', error);
        alert('Payment failed. Please try again.');
      });
  };

  return (
   <section>
    <div className="max-w-container mx-auto">
    <h2 className='font-DM font-bold pt-5 text-[49px] text-[#262626]'>Checkout</h2>
   <div className=" items relative pb-[130px]">
   <span className='font-DM font-normal text-[12px] text-[#767676] pe-[14px]'>Home</span>
    <span className='font-DM font-normal text-[16px] text-[#767676]  absolute left-[8.2%] sm:left-[4.6%] lg:left-[3.2%] xl:left-[2.2%] top-2'> <MdKeyboardArrowRight />  </span>
    <span className='font-DM font-normal text-[12px] text-[#767676]' >Checkout</span>
   </div>
   <div className=" text-[39px] font-bold font-DM pb-8">
    <h2>Billing Details</h2>
   </div>
<form>
    <div class="grid gap-6 mb-6 md:grid-cols-2">
        <div>
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name*</label>
            <input type="text" id="first_name" className="bg-white border-b focus:outline-none border-b-[#f0f0f0] text-[#767676]   w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white " placeholder="First name" required />
        </div>
        <div>
            <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name*</label>
            <input type="text" id="last_name"  className="bg-white border-b focus:outline-none border-b-[#f0f0f0] text-[#767676]   w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "  placeholder="Last name" required />
        </div>
    </div>
    <div class="mb-6">
        <label for="Company Name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Companye Name (optional)</label>
        <input type="text" id="first_name"  className="bg-white border-b focus:outline-none border-b-[#f0f0f0] text-[#767676]   w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "  placeholder="Company Name" required/>
    </div>
         <div className="w-[100%] pt-8">
                  <h4 className='text-[14px] font-DMs font-medium text-sm  text-gray-900'>Country</h4>
                  <select className='border-b w-full py-2 focus:outline-none  '>
                      <option value=""  className="text-gray-400">Please select</option>
                      <option value="Bangladesh">Bangladesh</option>
                      <option value="Canada">Canada</option>
                      <option value="UK">UK</option>
                      <option value="USA">USA</option>
                      <option value="Other">Other</option>
                  </select>
              </div>
     
    <div class="mb-6">
        <label for="Street Address *" class="block mt-4 mb-2 text-sm font-medium text-gray-900 dark:text-white">Street Address *</label>
        <input type="text" id="first_name"  className="bg-white border-b focus:outline-none border-b-[#f0f0f0] text-[#767676]   w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "  placeholder="House number and street name" required />
        <input type="text" id="first_name"  className="bg-white border-b focus:outline-none border-b-[#f0f0f0] text-[#767676]   w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "  placeholder="Apartment, suite, unit etc. (optional)" required />
    </div> 
    <div class="mb-6">
        <label for="Town/City *" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Town/City *</label>
        <input type="text" id="Town/City *"  className="bg-white border-b focus:outline-none border-b-[#f0f0f0] text-[#767676]   w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "  placeholder="Town/City *" required/>
    </div> 
    <div class="mb-6">
        <label for="County (optional)" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">County (optional)</label>
        <input type="text" id="first_name" className="bg-white border-b focus:outline-none border-b-[#f0f0f0] text-[#767676]   w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white " placeholder="County" required/>
    </div> 
    <div class="mb-6">
        <label for="Post Code *" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Post Code *</label>
        <input type="password" id="first_name"  className="bg-white border-b focus:outline-none border-b-[#f0f0f0] text-[#767676]   w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "  placeholder="Post Code" required/>
    </div> 
    <div class="mb-6 w-full">
        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email Address *</label>
        <input type="email" id="email"  className="bg-white border-b focus:outline-none border-b-[#f0f0f0] text-[#767676]   w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "  placeholder="Email" required />
    </div> 
</form>
<div className=" w-[30%] pb-9">
    <h2 className=" font-DM font-bold text-[39px] pb-3 capitalize">Your Order</h2>
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
   </div>
  <div className="mb-9">
  <StripeCheckout
          token={onToken}
          stripeKey="your_publishable_stripe_key_here"
          amount={totalPrice * 100} // Amount in cents
          currency="USD"
        />
  </div>
    </div>
   </section>
  )
}

export default CheckOut