import React from 'react'

function Contect() {
  return (
    <section className="max-w-[1140px] mx-auto container py-12">
     {/* contect card  */}
    <div className="container mx-auto">
      <div className="bg-[#EFFDF5] p-6 rounded-md">
        <div
          className="bg-white py-6 border border-[#00b98e4d] border-dashed flex flex-col lg:flex-row rounded-md justify-center">
           {/* right  */}
          <div className="lg:w-1/2 px-6">
            <img src="img/call-to-action.jpg" className="rounded-md object-cover" alt="" />
          </div>
           {/* left  */}
          <div className="lg:w-1/2 px-6 mt-12">
            <h1 className="text-[30px] lg:text-[40px] text-accent font-inter mb-4 font-bold leading-[1.2]">Contact With Our
              Certified Agent
            </h1>
            <p className="text-base mb-6 font-hebbo text-text">Eirmod sed ipsum dolor sit rebum magna erat. Tempor lorem
              kasd vero ipsum sit sit diam justo sed vero dolor duo.</p>
            <button className="bg-primary font-hebbo text-white py-4 px-6 mr-2 rounded-md"><i className="fa-solid fa-phone"></i>
              Make A call</button>
            <button className="bg-accent font-hebbo text-white py-4 px-6 mr-2 rounded-md"><i
                className="fa-solid fa-calendar-days"></i> Get Appoinment</button>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Contect