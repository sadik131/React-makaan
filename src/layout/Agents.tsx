import React from 'react'
import { team } from '../consts'
import Member from '../components/Member'

function Agents() {
  return (
    <section className="max-w-[1140px] mx-auto container py-12">
     {/* heding  */}
    <div className="heding__text text-center max-w-[600px] px-3 lg:px-0 mx-auto mb-12">
      <h1 className="text-[30px] lg:text-[40px] font-bold mb-4 font-inter text-accent">Property Agents</h1>
      <p className="mb-4 font-hebbo text-base text-text">Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut
        dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
    </div>

     {/* our members  */}
    <div className="card__animation flex flex-col lg:flex-row flex-wrap">
      {team.map((user,index)=><Member key={index} img={user.img} name={user.name} role={user.role} />)}
    </div>
  </section>
  )
}

export default Agents