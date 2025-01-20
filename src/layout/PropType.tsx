import React, { useRef } from 'react'
import { delay, motion, useInView } from 'framer-motion';
import PropType from '../components/PropType'
import { propCat } from '../consts'

function PropListing() {

  const headingRef = useRef(null);
  const isInView = useInView(headingRef, { amount: 0.8 });

  const variants = {
    hidden: { y: 50, opacity: 0 }, // Adjust y value for desired starting position
    visible: { y: 0, opacity: 1 },
    transition: { duration: 0.8, delay: 100 }, // Adjust animation duration
  };

  return (
    <div className='container mx-auto max-w-[1140px] py-12'>
      {/* heading */}
      <motion.div
        ref={headingRef} // Attach ref to the heading
        variants={variants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="text-center max-w-[600px] mx-auto mb-12 px-3 lg:px-0">
        <h1 className="text-[30px] lg:text-[40px] font-bold mb-4 font-inter text-accent"> Property Types</h1>
        <p className="mb-4 font-hebbo text-base text-text">Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut
          dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
      </motion.div>
      {/* cards */}
      <div className="flex flex-wrap">
        {propCat.map((cat, i) => <PropType key={i} index={i} img={cat.img} property={cat.property} type={cat.type} />)}
      </div>
    </div>
  )
}

export default PropListing