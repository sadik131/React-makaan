import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';


const Hero = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row items-center">
      {/* Left Section */}
      <div className="lg:w-1/2 p-12">
        <h1 className="text-[33px] lg:text-5xl mb-6 font-inter text-accent font-extrabold">
          Find A <span className="text-primary">Perfect Home</span> To Live With Your Family
        </h1>
        <p className="text-base font-hebbo pb-2 text-text mb-6">
          Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.
        </p>
        <button className="py-4 px-12 bg-primary rounded-md font-hebbo text-base text-white">Get Started</button>
      </div>

      {/* Right Section (Carousel) */}
      <div className="hero__right lg:w-1/2 relative w-full">
        <Swiper navigation={true} loop={true} autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
          modules={[Navigation, Autoplay]} className="mySwiper">
          <SwiperSlide>
            <img src="img/carousel-1.jpg" alt="Slide 1" className="w-full object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="img/carousel-1.jpg" alt="Slide 3" className="w-full object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="img/carousel-2.jpg" alt="Slide 2" className="w-full object-cover" />
          </SwiperSlide>
        </Swiper>

      </div>
    </section>
  );
};

export default Hero;
