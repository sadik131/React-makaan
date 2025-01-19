import React from 'react'

function PropType({ img, type, property }:{img:string, type:string, property:number}) {
  return (
    <div className="lg:w-1/4 w-full px-3">
      <div className="rounded-md group transition-all duration-300 bg-[#EFFDF5] mt-6">
        <div className="p-4">
          <div className="primary-border group-hover:bg-primary bg-white rounded-md p-6 flex flex-col items-center">
            <div className="primary-border bg-white p-4 rounded-full mb-4">
              <img src={img} alt="" />
            </div>
            <h4 className="font-inter text-base group-hover:text-white text-accent mb-2 font-bold">{type}</h4>
            <h4 className="font-hebbo text-primary group-hover:text-white text-base">{property} Property</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PropType