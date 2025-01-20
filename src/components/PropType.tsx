import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

function PropType({ img, type, property, index }: { img: string, type: string, property: number, index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 }); 

  return (
    <motion.div
      ref={ref} 
      key={index} 
      initial={{ opacity: 0, y: 50 }} 
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} 
      transition={{ duration: 0.5 }} 
      className="lg:w-1/4 w-full px-3"
    >
      <div className="rounded-md group transition-all duration-300 bg-[#EFFDF5] mt-6">
        <div className="p-4">
          <div className="border border-[#00b98e4d] border-dashed group-hover:bg-primary bg-white rounded-md p-6 flex flex-col items-center">
            <div className="primary-border bg-white p-4 rounded-full mb-4">
              <img src={img} alt="" />
            </div>
            <h4 className="font-inter text-base group-hover:text-white text-accent mb-2 font-bold">{type}</h4>
            <h4 className="font-hebbo text-primary group-hover:text-white text-base">{property} Property</h4>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default PropType;