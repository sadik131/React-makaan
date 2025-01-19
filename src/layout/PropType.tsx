import React from 'react'
import PropType from '../components/PropType'
import { propCat } from '../consts'

function PropListing() {
  return (
    <div className='container mx-auto max-w-[1140px]'>
      {/* heading */}
      <div className="text-center max-w-[600px] mx-auto mb-12 px-3 lg:px-0">
        <h1 className="text-[30px] lg:text-[40px] font-bold mb-4 font-inter text-accent"> Property Types</h1>
        <p className="mb-4 font-hebbo text-base text-text">Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut
          dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
      </div>
      {/* cards */}
      <div className="flex flex-wrap">
        {propCat.map((cat, i) => <PropType key={i} img={cat.img} property={cat.property} type={cat.type} />)}
      </div>
    </div>
  )
}

export default PropListing