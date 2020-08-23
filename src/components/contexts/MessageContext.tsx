import React, { createContext, useReducer, useState } from "react";
import MessageReducer from "./MessageReducer";

const initialState: object = {
  work: [
    {
      id: 1,
      user: "koi",
      message: "hello there",
      time: new Date(),
    },
    {
      id: 2,
      user: "lox",
      message: "foo bar",
      time: new Date(),
    },
    {
      id: 3,
      user: "glo",
      message: "bye bye",
      time: new Date(),
    },
  ],
  casual: [
    {
      id: 1,
      user: "koi",
      message: "hello there",
      time: new Date(),
    },
    {
      id: 2,
      user: "lox",
      message: "foo bar",
      time: new Date(),
    },
    {
      id: 3,
      user: "glo",
      message: "bye bye",
      time: new Date(),
    },
  ],
};

export const MessageContext = createContext();

export const MessageProvider = ({ children }) => {
  const [currentChannel, setCurrentChannel] = useState<string>("work");
  const [state, dispatch] = useReducer(MessageReducer, initialState);

  const getMessages = () => state;

  const addMessage = (channel: string, msg: object) => {
    dispatch({ channel, type: "ADD_MESSAGE", payload: msg });
  };

  return (
    <MessageContext.Provider
      value={{ currentChannel, setCurrentChannel, getMessages, addMessage }}
    >
      {children}
    </MessageContext.Provider>
  );
};
