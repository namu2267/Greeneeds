import React from "react";
interface CarouselProps {
  gif: any;
  title: string;
  contents: string;
  imgClassName?: string;
}

export default function CarouselContiner({
  gif,
  title,
  contents,
  imgClassName,
}: CarouselProps) {
  return (
    <>
      <div className="sliderWrapper">
        <img src={gif} alt={gif} className={imgClassName} />
        <div className="swiperContents">
          <h1>{title}</h1>
          <p>{contents}</p>
        </div>
      </div>
    </>
  );
}
