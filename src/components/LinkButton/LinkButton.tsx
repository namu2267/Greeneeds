import React from "react";
import { Link } from "react-router-dom";
import "../LinkButton/LinkButton.scss";

interface LinkButtonProps {
  path: string;
  buttonContent: string;
  buttonImgSrc?: string;
}

export default function LinkButton({
  path,
  buttonContent,
  buttonImgSrc,
}: LinkButtonProps) {
  return (
    <>
      <div className="linkButtonWrapper">
        <button>
          <Link to={path}>
            <img src={buttonImgSrc} alt={buttonImgSrc} />
            <span>{buttonContent}</span>
          </Link>
        </button>
      </div>
    </>
  );
}
