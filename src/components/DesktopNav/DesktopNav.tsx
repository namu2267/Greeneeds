import React from "react";
import userIcon from "../../assets/svg/icon-user.svg";
import "../DesktopNav/DesktopNav.scss";
import { Link } from "react-router-dom";

export default function DesktopNav() {
  return (
    <>
      <nav>
        <div className="navWrapper">
          <div className="navTop">
            <Link to="/">
              <img src="/favicon.ico" alt="go to home" className="logoLeaf" />
            </Link>
            <img src={userIcon} alt="user page" className="iconUser" />
          </div>
          <div className="navBottom">
            <div className="navTitle">
              <Link to={"/chat"}>그리니즈에게 상담하기</Link>
              <Link to={"/introduce"}>그리니즈 소개</Link>
              <Link to={"/sustainability"}>지속가능성</Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
