import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
import 'swiper/css/effect-fade';
import { Pagination, Navigation, Autoplay, EffectFade } from "swiper/modules";

function Carrusel() {
  const images = [
    "/1.jpg",
    "/2.jpg",
    "/3.jpg",
    "/4.jpg",
    "/5.jpg",
    "/6.jpg",
    "/7.jpg",
    "/8.jpg",
    "/10.jpg",
    "/11.jpg",
  ];

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        effect="fade"
        centeredSlides
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay, EffectFade]}
        className="mySwiper"
      >
        {images.map((image, i) => (
          <SwiperSlide key={i}>
            <img src={image} alt="" className="w-full h-150 object-cover rounded-lg"/>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Carrusel;
