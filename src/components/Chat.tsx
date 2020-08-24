import React, { useState } from "react";
import { useHistory } from "react-router-dom";

// components
import Header from "./Header";
import MainMenu from "./MainMenu";
import ChatWindow from "./ChatWindow";
import ChatBox from "./ChatBox";

const Chat = () => {
  const history = useHistory();
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const logout = () => {
    localStorage.setItem("token", "");
    history.push("/");
  };

  return (
    <div id="chat-container">
      <Header toggleMenu={toggleMenu} />
      <div id="main-window">
        <MainMenu
          mobileOpen={mobileMenuOpen}
          toggleMenu={toggleMenu}
          logout={logout}
        />
        <div id="window-right">
          <ChatWindow />
          <ChatBox />
        </div>
      </div>
    </div>
  );
};

export default Chat;
