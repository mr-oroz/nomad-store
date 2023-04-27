import React from 'react';
import './swiper-scroll.scss';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css/scrollbar";

const SwiperSroll = ({data, setActive}) => {

  const breakpoints = {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 480px
    640: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  }
  return (
    <Swiper
      loop={true}
      modules={[Autoplay]}
      className="mySwiper"
      breakpoints={breakpoints}
      spaceBetween={10}
      slidesPerView={3}
      autoplay={{ delay: 5000 }}
    >
      {
        data.map(item => {
          return <SwiperSlide>
            <img
              onClick={() => setActive(item.id)}
              key={item.id}
              src={item.img}
              alt="" />
          </SwiperSlide>
        })
      }
    </Swiper>
  );
};

export default SwiperSroll;