import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
marbix_face1,
marbix_face3,
marbix_face4,
marbix_face5,
} from "../assets/images";

export default function HeroSlider() {
  return (
    <>
      <Swiper
        slidesPerview={1}
        loop={true}
        autoplay={{
          delay: 3000,
        }}
        direction="horizontal"
        modules={[Autoplay]}
        className="w-40 h-40 md:w-60 md:h-60"
      >
        <SwiperSlide className="relative w-40 h-40 md:w-60 md:h-60 rounded-full overflow-hidden">
          <img
            src={marbix_face1}
            alt="bag_flowerbag"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="relative w-40 h-40 md:w-60 md:h-60 rounded-full overflow-hidden">
          <img
            src={marbix_face3}
            alt="bag_white"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="relative w-40 h-40 md:w-60 md:h-60 rounded-full overflow-hidden">
          <img
            src={marbix_face4}
            alt="marbix_face4"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="relative w-40 h-40 md:w-60 md:h-60 rounded-full overflow-hidden">
          <img
            src={marbix_face5}
            alt="marbix_face5"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
