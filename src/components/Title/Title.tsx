import React from "react";
import "../Title/Title.scss";

export default function Title({
  title,
  titleImgSrc,
}: {
  title?: string;
  titleImgSrc?: string;
}) {
  return (
    <div>
      {titleImgSrc ? (
        // titleImgSrc가 존재하는 경우
        <div className="titleImgWrapper">
          <img src={titleImgSrc} alt="" />
          <h1>{title}</h1>
        </div>
      ) : (
        // titleImgSrc가 존재하지 않는 경우
        <div className="titleWrapper">
          <h1>{title}</h1>
        </div>
      )}
    </div>
  );
}
