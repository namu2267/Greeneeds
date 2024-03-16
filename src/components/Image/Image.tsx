import React from "react";
import "../Image/Image.scss";

interface ImageProps {
  imgBackgroundSrc?: string;
  imgSrc?: string;
  alt?: string;
  imgClassName?: string;
}

export default function Image({
  imgBackgroundSrc,
  imgSrc,
  alt,
  imgClassName,
}: ImageProps) {
  return imgBackgroundSrc ? (
    <div className="desImgWrapper">
      <div
        className="imgBackground"
        style={{ backgroundImage: `url(${imgBackgroundSrc})` }}
      >
        <img src={imgSrc} alt={alt} className={imgClassName} />
      </div>
    </div>
  ) : (
    <div className="desImgWrapper">
      <img src={imgSrc} alt={alt} className={imgClassName} />
    </div>
  );
}
