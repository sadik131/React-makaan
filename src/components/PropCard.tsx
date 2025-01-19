import React from 'react'
import { PropCardProps } from '..'
import { FaLocationDot } from 'react-icons/fa6'
import { FaBath, FaBed, FaRulerCombined } from 'react-icons/fa'

function PropCard({ data }: PropCardProps) {
    return (
        <div className="px-3 mt-6 w-full lg:w-1/3">
            <div className="shadow-lg rounded-md">
                {/* card head  */}
                <div className="w-full relative">
                    <img src={data.img} className="rounded-t-md w-full" alt="" />
                    <span className="absolute top-0 m-6 py-1 px-4 font-hebbo bg-primary text-white rounded-md">For Sell</span>
                    <span
                        className="absolute bottom-0 mx-6 py-1 px-4 font-hebbo text-primary bg-white rounded-t-md">Appartment</span>
                </div>
                {/* card body  */}
                <div className="px-6 pt-6 font-inter">
                    <h4 className="text-primary text-xl mb-4 font-bold">${data.price}</h4>
                    <h4 className="text-accent text-xl mb-2 font-bold">{data.title}</h4>
                    <p className="text-text flex items-center mb-4">
                        <span className='text-primary mr-2'><FaLocationDot /></span>{data.location}</p>
                </div>
                {/* card footer  */}
                <div className="flex text-sm border-t border-[#00b98e4d] border-dashed text-text">
                    <span
                        className="w-1/3 flex items-center font-hebbo justify-center py-2 border-r border-[#00b98e4d] border-dashed"><span className='text-primary mr-2'><FaRulerCombined /> </span>
                        {data.facility.size} Sqft</span>
                    <span
                        className="w-1/3 flex items-center font-hebbo justify-center py-2 border-r border-[#00b98e4d] border-dashed"><span className='text-primary mr-2'><FaBath /></span>
                        {data.facility.bed} bed</span>
                    <span className="w-1/3 flex items-center font-hebbo justify-center py-2  border-[#00b98e4d] border-dashed"><span className='text-primary mr-2'><FaBed /></span>
                        {data.facility.bath}bath</span>
                </div>
            </div>
        </div>
    )
}

export default PropCard