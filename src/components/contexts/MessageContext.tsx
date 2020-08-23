import React, { createContext, useReducer, useState } from "react";
import MessageReducer from "./MessageReducer";
import { workMessages, casualMessages } from "./demoMessages";

const initialState: object = {
  work: workMessages,
  casual: casualMessages,
};

interface Message {
  id: string;
  user: string;
  message: string;
  time: Date;
}

export const MessageContext = createContext();

export const MessageProvider = ({ children }) => {
  const [currentChannel, setCurrentChannel] = useState<string>("work");
  const [state, dispatch] = useReducer(MessageReducer, initialState);

  // actions
  const getMessages = () => state[currentChannel];

  const addMessage = (msg: Message) => {
    dispatch({ channel: currentChannel, type: "ADD_MESSAGE", payload: msg });
  };

  const deleteMessage = (id: string) => {
    dispatch({ channel: currentChannel, type: "DELETE_MESSAGE", payload: id });
  };

  const updateMessage = (msg: Message) => {
    const { id, message } = msg;
    dispatch({
      channel: currentChannel,
      type: "UPDATE_MESSAGE",
      payload: {
        id,
        message,
      },
    });
  };

  return (
    <MessageContext.Provider
      value={{
        currentChannel,
        setCurrentChannel,
        getMessages,
        addMessage,
        deleteMessage,
        updateMessage,
      }}
    >
      {children}
    </MessageContext.Provider>
  );
};
