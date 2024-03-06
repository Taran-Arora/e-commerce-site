import React from 'react'
import  { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

import { Pagination } from 'swiper/modules';
// import firstSlide from '../../Assets/Images/first-slide.jpeg'

const Third = () => {
  return (
    <div className='third-section'>
        <div className='coustom_container'>
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          0: {
              slidesPerView: 1,
              spaceBetween: 20,
          },
          576: {
              slidesPerView: 2,
              spaceBetween: 5,
          },
          768: {
              slidesPerView: 2,
              spaceBetween: 5,
          },

          992: {
              slidesPerView: 2,
              spaceBetween: 20,
          },

          1200: {
              slidesPerView: 2,
              spaceBetween: 30,
          },
          1300: {
              slidesPerView: 3,
              spaceBetween: 30,
          },

          
      }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide> 
            <div className='first-slide'>
                <h3>Fresh & Healthy <br/>Organic Fruits</h3>
                <p><span>20%</span>Off On First Order</p>
                <button>Shop Now</button>
            </div>
        </SwiperSlide>
        <SwiperSlide> 
            <div className='second-slide'>
                <h3>Fresh & Healthy <br/>Organic Fruits</h3>
                <p><span>20%</span>Off On First Order</p>
                <button>Shop Now</button>
            </div>
        </SwiperSlide>
        <SwiperSlide> 
            <div className='third-slide'>
                <h3>Fresh & Healthy <br/>Organic Fruits</h3>
                <p><span>20%</span>Off On First Order</p>
                <button>Shop Now</button>
            </div>
        </SwiperSlide>
        <SwiperSlide> 
            <div className='first-slide'>
                <h3>Fresh & Healthy <br/>Organic Fruits</h3>
                <p><span>20%</span>Off On First Order</p>
                <button>Shop Now</button>
            </div>
        </SwiperSlide>
         
      </Swiper>
        </div>

    </div>
  )
}

export default Third