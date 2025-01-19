import React from 'react'
import { FaCheck } from 'react-icons/fa'
import { list } from '../consts'

function FindProperty() {

  return (
    <div> <section className="max-w-[1140px] mx-auto container py-12">
      <div className="flex flex-col lg:flex-row">
        {/* left side  */}
        <div
          className="relative lg:w-1/2 p-12 overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-primary before:skew-x-[20deg] before:h-full before:w-full before:-left-1/2 before:-z-10">
          <img src="img/about.jpg" className="w-full h-full object-cover" alt="About" />
        </div>

        {/* right side  */}
        <div className="lg:w-1/2 px-6 pt-12">
          <h1 className="text-accent text-[30px] lg:text-[40px] font-bold font-inter mb-6 leading-[1.2]">#1 Place To Find The
            Perfect
            Property</h1>
          <p className="text-text mb-6 font-hebbo">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam
            amet diam et
            eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>

          {/* check  */}
          <ul className="text-text font-hebbo">
            {/* 1st  */}
            {list.map((text, i) => <li key={i} className="mb-4 flex items-center text-base">
              <span className='text-primary mr-4'><FaCheck /></span>
              <p>{text.text}</p>
            </li>)}
            <button className="mt-4 bg-primary font-hebbo px-12 py-4 rounded-md text-white">Read More</button>
          </ul>
        </div>
      </div>
    </section></div>
  )
}

export default FindProperty