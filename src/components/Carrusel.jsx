import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";

import { Autoplay } from "swiper/modules";

export default function Carrusel() {
  const progressCircle = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
  };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
        grabCursor
      >
        <SwiperSlide>
          <img loading="lazy" src="/5.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img loading="lazy" src="/2.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img loading="lazy" src="/3.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img loading="lazy" src="/4.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img loading="lazy" src="/1.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img loading="lazy" src="/6.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img loading="lazy" src="/7.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img loading="lazy" src="/8.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img loading="lazy" src="/10.jpg" alt="" />
        </SwiperSlide>

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
        </div>
      </Swiper>
    </>
  );
}
