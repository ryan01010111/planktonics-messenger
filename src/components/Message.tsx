import React from "react";

// mui
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

// components
import MessageOptions from "./MessageOptions";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    msgTop: {
      display: "flex",
      justifyContent: "space-between",
      color: theme.palette.secondary.main,
      fontSize: "0.8em",
    },
    paper: {
      position: "relative",
      margin: "12px 0",
      padding: "12px 24px",
      backgroundColor: theme.palette.primary.dark,
      "&:hover > .message-options": {
        opacity: 1,
      },
    },
  })
);

interface MessageInterface {
  id: string;
  user: string;
  message: string;
  time: Date;
}

interface Props {
  message: MessageInterface;
  openEditModal: (msg: MessageInterface) => void;
}

const Message = ({ message, openEditModal }: Props) => {
  const username = localStorage.getItem("username");

  const classes = useStyles();

  return (
    <Paper className={classes.paper} square>
      <div className={classes.msgTop}>
        <span>{message.user}</span>
        <span>{message.time.toLocaleTimeString()}</span>
      </div>
      <p>{message.message}</p>
      {message.user === username && (
        <MessageOptions message={message} openEditModal={openEditModal} />
      )}
    </Paper>
  );
};

export default Message;
