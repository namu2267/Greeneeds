import React from "react";
import Title from "../../components/Title/Title";
import "../Introduce/IntroducePage.scss";

export default function IntroducePage() {
  return (
    <div className="introduceWholeWrapper">
      <div className="introduceTopWrapper">
        <h1>Greeneeds</h1>
        <div className="TopPtagWrapper">
        <p>그리니즈는 환경에 대해 공부합니다.</p>
        <p>
          어려운 정부정책, 탄소중립에 대한 내용들을 학습하여 누구라도 이해하기
          쉬운 말로 설명합니다.
        </p>
        <p>환경에 대해 궁금한게 생기면 언제든지 질문해보세요.</p>
        </div>
      </div>
      <div className="introduceVideoWrapper">
        <Title title="그리니즈(Greeneeds)를 소개해요" />
        <div className="videoWrapper">
          <video controls width="100%">
            <source src="/videos/greeneedsIntrodcue.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        <p>비디오를 클릭해보세요.</p>
        </div>
      </div>
      <div className="introduceContentsWrapper"></div>
    </div>
  );
}
