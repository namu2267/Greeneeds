import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import Description from "../../components/Description/Description";
import greeneedsBody from "../../assets/image/img-greendneeds-body-skyblue.png";
import greeneedsSimpleWhite from "../../assets/image/logo-greeneeds-simple-white.png";
import "../Main/MainPage.scss";
import greeneedsSimpleBlack from "../../assets/image/logo-greeneeds-simple-black.png";
import lihgtBg from "../../assets/gif/Loading.gif";
import greeneedsStudy from "../../assets/image/logo-greeneeds-baby-study.png";
import chatbotUse from "../../assets/image/chatbot_useImg.png";
import IconArcage from "../../assets/image/icon-arcade.png";

export default function MainPage() {
  return (
    <div>
      <Carousel />
      <Description
        title="그리니즈와 함께, 환경을 지켜나가요"
        imgSrc={greeneedsBody}
        imgClassName="desImg"
        path="/chat"
        content="그리니즈는(Greeneeds)는 지구를 지키는 챗봇이에요. 환경과 관련된건 무엇이든 물어보세요. 그리니즈와 함께라면, ‘환경지키기’ 더 이상 어려운 일이 아니랍니다."
        buttonContent="그리니즈에게 질문하러가기"
        buttonImgSrc={greeneedsSimpleWhite}
      />

      <Description
        title="그리니즈를 소개해요"
        titleImgSrc={greeneedsSimpleBlack}
        imgBackgroundSrc={lihgtBg}
        imgSrc={greeneedsStudy}
        imgClassName="desImg"
        path="/introduce"
        content="그리니즈는 환경오염을 막으려고 지구에 왔어요. 환경을 살리기위해 우리들 대신,밤낮없이 공부하고 있어요."
        buttonContent="그리니즈 더 알아보기"
        buttonImgSrc={greeneedsSimpleWhite}
      />

      <Description
        title="챗봇 사용법이 궁금해요"
        titleImgSrc={IconArcage}
        imgSrc={chatbotUse}
        imgClassName="desImg"
        path="/chat"
        content="그리니즈는(Greeneeds)는 지구를 지키는 챗봇이에요. 환경과 관련된건 무엇이든 물어보세요. 그리니즈와 함께라면, ‘환경지키기’ 더 이상 어려운 일이 아니랍니다."
        buttonContent="챗봇 사용법 알아보기"
        buttonImgSrc={greeneedsSimpleWhite}
      />
    </div>
  );
}
