import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {
  makeup_lipgloss,
  marbix_lip_product1,
  marbix_lip_product2,
  marbix_mascaras,
  marbix_product9,
  marbix_skin3,
  marbix_skin5,
} from "../assets/images";

export default function BeautySlider() {
  return (
    <>
      <Swiper
        slidesPerview={3}
        breakpoints={{
            400: {slidesPerView: 1, spaceBetween: 10},
            600: {slidesPerView: 2, spaceBetween: 20},
            800: {slidesPerView: 3, spaceBetween: 30},
        }}
        loop={true}
        autoplay={{
          delay: 3000,
        }}
        direction="horizontal"
        modules={[Autoplay]}
        className="w-full h-auto"
      >
        <SwiperSlide className="relative flex-shrink-0 w-60 h-60 md:w-80 md:h-80 rounded-full overflow-hidden">
          <img
            src={marbix_product9}
            alt="marbix_product1"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="relative flex-shrink-0 w-60 h-60 md:w-80 md:h-80 rounded-full overflow-hidden">
          <img
            src={marbix_mascaras}
            alt="bag_white"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="relative w-60 h-60 flex-shrink-0 md:w-80 md:h-80 rounded-full overflow-hidden">
          <img
            src={marbix_skin3}
            alt="marbix_face4"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="relative w-60 h-60 md:w-80 md:h-80 flex-shrink-0 rounded-full overflow-hidden">
          <img
            src={marbix_skin5}
            alt="marbix_face5"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="relative w-60 h-60 md:w-80 md:h-80 flex-shrink-0 rounded-full overflow-hidden">
          <img
            src={marbix_lip_product1}
            alt="marbix_face5"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="relative w-60 h-60 md:w-80 md:h-80 flex-shrink-0 rounded-full overflow-hidden">
          <img
            src={makeup_lipgloss}
            alt="marbix_face5"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="relative w-60 h-60 md:w-80 md:h-80 flex-shrink-0 rounded-full overflow-hidden">
          <img
            src={marbix_lip_product2}
            alt="marbix_product11"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
