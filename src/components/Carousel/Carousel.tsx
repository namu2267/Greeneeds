import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import CarouselContiner from "../Carousel/CarouselContiner";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/scrollbar";
import "../Carousel/Carousel.scss";
import { Navigation } from "swiper/modules";
import cycle from "../../assets/gif/Girl Cycling in autumn.gif";
import shopping from "../../assets/gif/Woman Shopping Online.gif";

export default function Carousel() {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="swiperContainer"
        slidesPerView={1}
        loop={true}
        speed={400}
        autoplay={{ delay: 3000 }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <CarouselContiner title="타이틀" gif={cycle} contents="콘텐츠" />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselContiner
            title="타이틀"
            gif={shopping}
            contents="콘텐츠"
            imgClassName="shoppingImg"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
