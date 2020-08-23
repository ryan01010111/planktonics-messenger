import React from "react";

// components
import { MessageProvider } from "./contexts/MessageContext";
import Header from "./Header";
import ChatWindow from "./ChatWindow";
import ChatBox from "./ChatBox";

const Chat = () => {
  return (
    <div id="chat-container">
      <MessageProvider>
        <Header />
        <ChatWindow />
        <ChatBox />
      </MessageProvider>
    </div>
  );
};

export default Chat;
