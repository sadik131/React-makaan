import React from 'react'
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';


function Slide({text,img,name,role}:{text:string,img:string,name:string,role:string}) {
  return (
    <Swiper
    slidesPerView={1}
    spaceBetween={10}
    pagination={{
      clickable: true,
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
      1024: {
        slidesPerView: 2,
        spaceBetween: 50,
      },
    }}
    modules={[Pagination]}
    className="mySwiper"
  >
    <SwiperSlide>
        <div className="swiper-slide bg-[#effdf5] shadow-lg p-4 rounded-md ">
          <div className="bg-white rounded-md border border-[#00b98e4d] p-6 border-dashed">
            <p className="text-base text-text font-hebbo mb-4">{text}</p>
            <div className="flex">
              <img src={img} className="h-[45px] w-[45px] rounded-md" alt="" />
              <div className="ml-4">
                <h4 className="text-accent mb-1 text-base font-bold font-inter">{name}</h4>
                <h5 className="text-text font-hebbo text-sm">{role}</h5>
              </div>
            </div>
          </div>
        </div>
    </SwiperSlide>
    
  </Swiper>
  )
}

export default Slide