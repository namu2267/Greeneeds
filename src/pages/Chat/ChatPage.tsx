import React from "react";
import "../Chat/ChatPage.scss";
import greeneedsLogo from "../../assets/image/logo-greeneeds-face-button-3d.png";
import ChatButton from "../../components/ChatButton/ChatButton";

export default function ChatPage() {
  return (
    <div className="pageWrapper">
      <div className="chatWrapper">
        <div className="chatTop">
          <img
            src={greeneedsLogo}
            alt="그리니즈 챗봇 로고"
            className="chatImg"
          />
          <p className="ChatIntro">
            안녕하세요. “지구를 지키는” 챗봇(Chatbot) 그리니즈예요. 환경에
            관련된 것은 무엇이든 물어보세요.
          </p>
        </div>
        <div className="chatMiddle">
          <ChatButton chatTitle="💰탄소중립 실천포인트" />
          <ChatButton chatTitle="🚘 탄소중립포인트 자동차" />
          <ChatButton chatTitle="⚡️ 친환경 보일러 지원금" />
          <ChatButton chatTitle="🤰임산부 친환경 농산물꾸러미" />
        </div>
        <div className="chatInputWrapper">
          <textarea
            placeholder="그리니즈에게 궁금한 것을 물어보세요."
            className="chatTextarea"
            autoFocus
          />
        </div>
      </div>
    </div>
  );
}
