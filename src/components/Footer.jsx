import React from 'react'
import footerImg from "../assets/footer-img.png"
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
const Footer = () => {
  return (
    <section className='bg-[#F5F5F3] pt-[55px] pb-[59px]'>
      <div className="max-w-container mx-auto">
        <div className="flex flex-wrap">
          {/* Menu Section */}
          <div className="lg:w-[15%] w-1/2 ps-3 pb-3">
            <ul>
              <li className='text-[16px] font-DM font-bold text-[#262626] pb-[15px]'>menu</li>
              <li className='text-[#6D6D6D] font-DM font-normal text-[14px] pb-2'>Home</li>
              <li className='text-[#6D6D6D] font-DM font-normal text-[14px] pb-2'>Shop</li>
              <li className='text-[#6D6D6D] font-DM font-normal text-[14px] pb-2'>About</li>
              <li className='text-[#6D6D6D] font-DM font-normal text-[14px] pb-2'>Contact</li>
              <li className='text-[#6D6D6D] font-DM font-normal text-[14px] pb-2'>Journal</li>
            </ul>
          </div>
          {/* Shop Section */}
          <div className="lg:w-[15%] w-1/2 ps-3 pb-3">
            <ul>
              <li className='text-[16px] font-DM font-bold text-[#262626] pb-[15px]'>shop</li>
              <li className='text-[#6D6D6D] font-DM font-normal text-[14px] pb-2'>Category1</li>
              <li className='text-[#6D6D6D] font-DM font-normal text-[14px] pb-2'>Category2</li>
              <li className='text-[#6D6D6D] font-DM font-normal text-[14px] pb-2'>Category3</li>
              <li className='text-[#6D6D6D] font-DM font-normal text-[14px] pb-2'>Category4</li>
              <li className='text-[#6D6D6D] font-DM font-normal text-[14px] pb-2'>Category5</li>
            </ul>
          </div>
          {/* Help Section */}
          <div className="lg:w-[15%] w-1/2 ps-3 pb-3">
            <ul>
              <li className='text-[16px] font-DM font-bold text-[#262626] pb-[15px]'>Help</li>
              <li className='text-[#6D6D6D] font-DM font-normal text-[14px] pb-2'>Privacy Policy</li>
              <li className='text-[#6D6D6D] font-DM font-normal text-[14px] pb-2'>Terms & Conditions</li>
              <li className='text-[#6D6D6D] font-DM font-normal text-[14px] pb-2'>Special E-shop</li>
              <li className='text-[#6D6D6D] font-DM font-normal text-[14px] pb-2'>Shipping</li>
              <li className='text-[#6D6D6D] font-DM font-normal text-[14px] pb-2'>Secure Payments</li>
            </ul>
          </div>
          {/* Contact Information */}
          <div className="lg:w-[20%] w-1/2 ps-3">
            <h3 className='text-[14px] sm:text-[16px] font-DM font-bold text-[#262626]'>(052) 611-5711</h3>
            <h3 className='text-[14px] sm:text-[16px] font-DM font-bold text-[#262626] pb-[15px]'>company@domain.com</h3>
            <p className='text-[#6D6D6D] font-DM font-normal text-[14px]'>575 Crescent Ave. Quakertown, PA 18951</p>
          </div>
          {/* Footer Image */}
          <div className="lg:w-[30%] w-1/2 ps-3">
            <img className='lg:ps-[130px] ps-0' src={footerImg} alt="Footer" />
          </div>
          {/* Social Media Links */}
          <div className="w-full flex justify-between items-center pt-[65px] ps-3">
            <div className="flex gap-3">
              <FaFacebookF className='text-[#6D6D6D]' />
              <FaLinkedinIn className='text-[#6D6D6D]' />
              <IoLogoInstagram className='text-[#6D6D6D]' />
            </div>
            <div className="text-right">
              <p className='text-[#6D6D6D] font-DM font-normal text-[10px] sm:text-[14px]'>2020 Orebi Minimal eCommerce Figma Template by Adveits</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Footer