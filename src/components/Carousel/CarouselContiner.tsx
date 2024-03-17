import React from "react";

interface CarouselProps {
  img?: any;
  title: string;
  content: string;
  imgClassName?: string;
}

export default function CarouselContiner({
  img,
  title,
  content,
  imgClassName,
}: CarouselProps) {
  return (
    <>
      <div className="sliderWrapper">
        <img src={img} alt="캐러셀 이미지" className={imgClassName} />
        <div className="swiperContents">
          <h1>{title}</h1>
          <p>{content}</p>
        </div>
      </div>
    </>
  );
}
