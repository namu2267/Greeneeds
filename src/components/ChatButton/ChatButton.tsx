import React from "react";
import "../ChatButton/ChatButton.scss";

interface ChatButtonProps {
  chatTitle?: string;
}

export default function ChatButton({ chatTitle }: ChatButtonProps) {
  return (
    <div className="chatTitleWrapper">
      <button className="chatButton">{chatTitle}</button>
    </div>
  );
}
