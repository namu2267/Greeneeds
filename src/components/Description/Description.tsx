import React from "react";
import LinkButton from "../LinkButton/LinkButton";
import "../Description/Description.scss";
import Title from "../Title/Title";
import Image from "../Image/Image";

interface DescriptionlProps {
  title?: string;
  titleImgSrc?: string;
  imgBackgroundSrc?: string;
  imgSrc?: string;
  alt?: string;
  content?: string;
  imgClassName?: string;
  path: string;
  buttonContent: string;
  buttonImgSrc?: string;
}

export default function Description({
  title,
  titleImgSrc,
  imgBackgroundSrc,
  imgSrc,
  alt,
  imgClassName,
  content,
  path,
  buttonContent,
  buttonImgSrc,
}: DescriptionlProps) {
  return (
    <>
      <div className="descriptionWrapper">
        <Title title={title} titleImgSrc={titleImgSrc} />
        <div className="descriptionBottom">
          <Image
            imgBackgroundSrc={imgBackgroundSrc}
            imgSrc={imgSrc}
            alt={alt}
            imgClassName={imgClassName}
          />
          <pre>{content}</pre>
          <LinkButton
            path={path}
            buttonContent={buttonContent}
            buttonImgSrc={buttonImgSrc}
          />
        </div>
      </div>
    </>
  );
}
