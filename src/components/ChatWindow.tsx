import React, { useContext, useState, useEffect, useRef } from "react";

// mui
import { makeStyles } from "@material-ui/core/styles";

// components
import { MessageContext } from "./contexts/MessageContext";
import Message from "./Message";
import EditMessageModal from "./EditMessageModal";

const useStyles = makeStyles({
  chatWindow: {
    height: "100%",
    padding: 12,
    overflowY: "scroll",
    "&::-webkit-scrollbar": {
      width: 12,
      backgroundColor: "none",
    },
    "&::-webkit-scrollbar-track": {
      backgroundColor: "#333",
      borderRadius: 8,
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#999",
      borderRadius: 8,
    },
    "&::-webkit-scrollbar-corner": {
      display: "none",
    },
  },
});

interface MessageInterface {
  id: string;
  user: string;
  message: string;
  time: Date;
}

const ChatWindow = () => {
  const context = useContext(MessageContext);
  const messages = context.getMessages();
  const [editModalOpen, setEditModalOpen] = useState<boolean>(false);
  const [editText, setEditText] = useState<string>("");
  const [messageToEdit, setMessageToEdit] = useState<MessageInterface | null>(
    null
  );
  const windowBottomRef:
    | string
    | ((instance: HTMLDivElement | null) => void)
    | React.RefObject<HTMLDivElement>
    | null
    | undefined = useRef(null);

  useEffect(() => {
    windowBottomRef.current.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleEditMessage = (msg: MessageInterface) => {
    setMessageToEdit(msg);
    setEditText(msg.message);
    setEditModalOpen(true);
  };

  const submitMessageEdit = () => {
    const msg = messageToEdit;
    msg.message = editText;
    context.updateMessage(msg);
  };

  const classes = useStyles();

  return (
    <div id="chat-window" className={classes.chatWindow}>
      {messages.map((msg: MessageInterface) => (
        <Message key={msg.id} message={msg} openEditModal={handleEditMessage} />
      ))}
      <div ref={windowBottomRef}></div>
      <EditMessageModal
        open={editModalOpen}
        setClose={() => setEditModalOpen(false)}
        editText={editText}
        setEditText={setEditText}
        submit={submitMessageEdit}
      />
    </div>
  );
};

export default ChatWindow;
