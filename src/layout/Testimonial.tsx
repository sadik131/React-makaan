import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { slider } from '../consts';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export default function App() {
  return (
    <>
      <div className='contaienr mx-auto max-w-[1140px] relative px-16'>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
          }}
          // navigation={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          {slider.map((slide, i) => <SwiperSlide>
            <div className="swiper-slide bg-[#effdf5] shadow-lg p-4 rounded-md ">
              <div className="bg-white rounded-md border border-[#00b98e4d] p-6 border-dashed">
                <p className="text-base text-text font-hebbo mb-4">{slide.text}</p>
                <div className="flex">
                  <img src={slide.img} className="h-[45px] w-[45px] rounded-md" alt="" />
                  <div className="ml-4">
                    <h4 className="text-accent mb-1 text-base font-bold font-inter">{slide.name}</h4>
                    <h5 className="text-text font-hebbo text-sm">{slide.role}</h5>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>)}
          <div className="swiper-button-next-test text-white bg-primary"><FaArrowRight /></div>
          <div className="swiper-button-prev-test text-white bg-primary"><FaArrowLeft /></div>
        </Swiper>
      </div>
    </>
  );
}
