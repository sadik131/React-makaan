import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

function Member({name,img,role}:{name:string,img:string,role:string}) {
  return (
    <div className="lg:w-1/4 px-3 mt-6">
        <div className="shadow-lg rounded-md">
           {/* img  */}
          <div className="relative">
            <img className="rounded-t-md" src={img} alt="" />
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex">
              <a href="*"
                className="bg-white hover:bg-primary hover:text-white text-primary flex items-center justify-center mx-1 w-9 h-9 shadow-sm rounded-full"><FaFacebookF /></a>
              <a href="*"
                className="bg-white hover:bg-primary hover:text-white text-primary flex items-center justify-center mx-1 w-9 h-9 shadow-sm rounded-full"><FaTwitter /></a>
              <a href="*"
                className="bg-white hover:bg-primary hover:text-white text-primary flex items-center justify-center mx-1 w-9 h-9 shadow-sm rounded-full"><FaInstagram /></a>
            </div>
          </div>
           {/* body  */}
          <div className="text-center mt-4 p-6">
            <h3 className="text-xl text-accent font-inter font-bold">{name}</h3>
            <h3 className="text-base text-text font-hebbo">{role}</h3>
          </div>
        </div>

      </div>
  )
}

export default Member