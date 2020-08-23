import React, { useContext } from "react";

// mui
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

// components
import { MessageContext } from "./contexts/MessageContext";

const useStyles = makeStyles({
  root: {
    position: "absolute",
    bottom: 0,
    right: 10,
    opacity: 0,
    transition: "0.4s opacity ease",
  },
});

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

const MessageOptions = ({ message, openEditModal }: Props) => {
  const context = useContext(MessageContext);

  const classes = useStyles();

  return (
    <div className={classes.root + " message-options"}>
      <IconButton
        aria-label="delete"
        onClick={() => context.deleteMessage(message.id)}
      >
        <DeleteIcon />
      </IconButton>
      <IconButton aria-label="edit" onClick={() => openEditModal(message)}>
        <EditIcon />
      </IconButton>
    </div>
  );
};

export default MessageOptions;
