import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { location, property } from '../consts';
import { opacityY} from '../motion';

const Search = () => {

  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.8 });

  return (
    <motion.section
      ref={ref}
      variants={opacityY}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="bg-primary p-[35px] mb-[48px]">
      <div className="container max-w-[1140px] mx-auto text-text flex flex-col lg:flex-row font-hebbo">
        {/* 1st input */}
        <div className="px-1 mt-2 lg:w-1/3">
          <input
            type="text"
            className="w-full rounded-md px-3 py-4 placeholder:text-text focus:outline-none"
            placeholder="Search Keyword"
          />
        </div>

        {/* 2nd input */}
        <div className="relative px-1 mt-2 lg:w-1/3">
          <select className="appearance-none w-full rounded-md px-3 py-4 focus:outline-none">
            {property.map((item, i) => <option key={i} value="">{item.name}</option>)}
          </select>
          <i className="fa-solid fa-angle-down absolute top-1/2 right-4 transform -translate-y-1/2"></i>
        </div>

        {/* 3rd input */}
        <div className="relative px-1 mt-2 lg:w-1/3">
          <select className="appearance-none w-full rounded-md px-3 py-4 focus:outline-none">
            {location.map((item, i) => <option key={i} value="">{item.name}</option>)}
          </select>
          <i className="fa-solid fa-angle-down absolute top-1/2 right-4 transform -translate-y-1/2"></i>
        </div>

        <button className="bg-accent text-white py-4 px-3 mt-2 lg:px-1 lg:w-1/6 rounded-md">
          Search
        </button>
      </div>
    </motion.section>
  );
};

export default Search;
