import React, { useContext, useEffect, useRef } from "react";

// mui
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

// components
import { MessageContext } from "./contexts/MessageContext";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    chatWindow: {
      height: "100%",
      padding: 12,
      overflowY: "scroll",
    },
    msgTop: {
      display: "flex",
      justifyContent: "space-between",
      color: theme.palette.secondary.main,
      fontSize: "0.8em",
    },
    paper: {
      margin: "12px 0",
      padding: "12px 24px",
      backgroundColor: theme.palette.primary.dark,
    },
  })
);

interface Message {
  id: string;
  user: string;
  message: string;
  time: Date;
}

const ChatWindow = () => {
  const context = useContext(MessageContext);
  const messages = context.getMessages().work;
  const windowBottomRef:
    | string
    | ((instance: HTMLDivElement | null) => void)
    | React.RefObject<HTMLDivElement>
    | null
    | undefined = useRef(null);

  useEffect(() => {
    windowBottomRef.current.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const classes = useStyles();

  return (
    <div id="chat-window" className={classes.chatWindow}>
      {messages.map((msg: Message) => {
        return (
          <Paper className={classes.paper} key={msg.id} square>
            <div className={classes.msgTop}>
              <span>{msg.user}</span>
              <span>{msg.time.toLocaleTimeString()}</span>
            </div>
            <p>{msg.message}</p>
          </Paper>
        );
      })}
      <div ref={windowBottomRef}></div>
    </div>
  );
};

export default ChatWindow;
