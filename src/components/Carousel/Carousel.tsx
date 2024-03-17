import React, { useEffect, useState } from "react";
import { supabase } from "../../utils/supabase";
import { Swiper, SwiperSlide } from "swiper/react";
import CarouselContiner from "../Carousel/CarouselContiner";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/scrollbar";
import "../Carousel/Carousel.scss";
import { Navigation } from "swiper/modules";
import cycle from "../../assets/gif/Girl Cycling in autumn.gif";
import shopping from "../../assets/gif/Woman Shopping Online.gif";

interface CarouselItem {
  id: string;
  title: string;
  content: string;
  created_at: string;
  img: string;
  imgClassName?: string;
}

export default function Carousel() {
  const [carouselData, setCarouselData] = useState<CarouselItem[]>([]);

  useEffect(() => {
    const fetchCarouselData = async () => {
      const { data, error } = await supabase.from("carousel").select("*");
      if (error) {
        throw error;
      }
      console.log(data);
      setCarouselData(data);
    };

    fetchCarouselData();
  }, []);

  const getImageByName = (imgName: string): string => {
    switch (imgName) {
      case "cycle":
        return cycle;
      case "shopping":
        return shopping;

      default:
        return imgName;
    }
  };

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
        {carouselData.map((item: CarouselItem) => (
          <SwiperSlide key={item.id}>
            <CarouselContiner
              title={item.title}
              content={item.content}
              img={getImageByName(item.img)}
              imgClassName={item.imgClassName}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
