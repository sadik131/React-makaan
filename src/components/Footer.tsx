import React from 'react'
import { FaAngleRight, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaTwitter } from 'react-icons/fa'
import { IoLocationSharp } from 'react-icons/io5'

function Footer() {
  return (
    <footer className="bg-accent text-white pt-12 mt-12">
      <div className="container max-w-[1140px] mx-auto ">
        <div className="flex flex-col md:flex-row">
          <div className="mt-12 lg:w-1/4 px-6">
            <h3 className="text-xl font-bold font-inter mb-6 text-white">Get In Touch</h3>
            <ul className="text-[#FFFFFF80] font-hebbo">
              <li className="mb-2 flex items-center"><span className='mr-4'><IoLocationSharp /></span>123 Street, New York, USA</li>
              <li className="mb-2 flex items-center"><span className='mr-4'><FaPhoneAlt /></span> +012 345 67890</li>
              <li className="mb-2 flex items-center"><span className='mr-4'><FaEnvelope /></span> info@example.com</li>
            </ul>
            <div className="pt-2 flex">
              <a href="" className="h-[35px] w-[35px] border border-[#EFFDF5] rounded-full flex items-center justify-center">
                <FaFacebookF />
              </a>
              <a href=""
                className="h-[35px] w-[35px] border border-[#EFFDF5] ml-[5px] rounded-full flex items-center justify-center">
                <FaTwitter />
              </a>
              <a href=""
                className="h-[35px] w-[35px] border border-[#EFFDF5] ml-[5px] rounded-full flex items-center justify-center">
                <FaInstagram />
              </a>
              <a href=""
                className="h-[35px] w-[35px] border border-[#EFFDF5] ml-[5px] rounded-full flex items-center justify-center">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          <div className="mt-12 lg:w-1/4 px-6">
            <h3 className="text-xl font-bold font-inter mb-6 text-white">Quick Links</h3>
            <ul className="text-[#FFFFFF80] font-hebbo">
              <li className="flex mb-[5px]"><span className="fa-solid fa-angle-right mr-[10px]"><FaAngleRight /></span><a href="#">About Us</a></li>
              <li className="flex mb-[5px]"><span className="fa-solid fa-angle-right mr-[10px]"><FaAngleRight /></span><a href="#">Contact Us</a></li>
              <li className="flex mb-[5px]"><span className="fa-solid fa-angle-right mr-[10px]"><FaAngleRight /></span><a href="#">Our Services</a></li>
              <li className="flex mb-[5px]"><span className="fa-solid fa-angle-right mr-[10px]"><FaAngleRight /></span><a href="#">Privacy Policy</a></li>
              <li className="flex mb-[5px]"><span className="fa-solid fa-angle-right mr-[10px]"><FaAngleRight /></span><a href="#">Terms & Condition</a></li>
            </ul>
          </div>

          <div className="mt-12 w-full lg:w-1/4 px-6">
            <h3 className="text-xl font-bold font-inter mb-6 text-white">Photo Gallery</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-[#EFFDF5] p-1 rounded-md">
                <img src="img/property-1.jpg" alt="Image 1" className="rounded-md" />
              </div>
              <div className="bg-[#EFFDF5] p-1 rounded-md">
                <img src="img/property-2.jpg" alt="Image 2" className="rounded-md" />
              </div>
              <div className="bg-[#EFFDF5] p-1 rounded-md">
                <img src="img/property-3.jpg" alt="Image 3" className="rounded-md" />
              </div>
              <div className="bg-[#EFFDF5] p-1 rounded-md">
                <img src="img/property-4.jpg" alt="Image 4" className="rounded-md" />
              </div>
              <div className="bg-[#EFFDF5] p-1 rounded-md">
                <img src="img/property-5.jpg" alt="Image 5" className="rounded-md" />
              </div>
              <div className="bg-[#EFFDF5] p-1 rounded-md">
                <img src="img/property-6.jpg" alt="Image 6" className="rounded-md" />
              </div>
            </div>
          </div>

          <div className="mt-12 lg:w-1/4 px-6">
            <h3 className="text-xl font-bold font-inter mb-6 text-white">Newsletter</h3>
            <p className="text-base font-hebbo text-[#FFFFFF80]">Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
            <div className="mt-4 flex relative">
              <input type="email" placeholder="Your email"
                className="focus:outline-none border px-6 rounded-md bg-transparent py-4 border-[#ffffff80] w-full lg:max-w-[400px]" />
                <button className="bg-primary text-white rounded-md px-3 py-2 absolute right-0 mt-2 mr-3">Signup</button>
            </div>
          </div>
        </div>
        <div
          className="mt-8 border-t text-[#ffffff80] border-[#ffffff1a] font-hebbo py-[25px] flex flex-col lg:flex-row justify-between">
          <p className="px-3 text-[15px] lg:mb-0 mb-4">&copy; <span
            className="text-white relative after:content-[''] after:block after:w-full after:h-[1px] after:bg-[#effdf5] after:absolute after:left-0 after:bottom-0">Your
            Site Name</span>, All Rights Reserved. Designed By <span
              className="text-white relative after:content-[''] after:block after:w-full after:h-[1px] after:bg-[#effdf5] after:absolute after:left-0 after:bottom-0">HTML
              Codex</span></p>
          <ul className="px-3 flex justify-center text-white font-hebbo">
            <li className="mr-[15px] pr-[15px] border-r border-[#ffffff1a]">Home</li>
            <li className="mr-[15px] pr-[15px] border-r border-[#ffffff1a]">Cookies</li>
            <li className="mr-[15px] pr-[15px] border-r border-[#ffffff1a]">Help</li>
            <li className="mr-[15px] pr-[15px]">FAQs</li>
          </ul>
        </div>
      </div>

    </footer>
  )
}

export default Footer