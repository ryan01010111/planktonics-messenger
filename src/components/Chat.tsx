import React from "react";

// components
import Header from "./Header";
import ChatWindow from "./ChatWindow";

const Chat = () => {
  return (
    <div id="chat-container">
      <Header />
      <ChatWindow />
      <div id="chat-box"></div>
    </div>
  );
};

export default Chat;
