import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

// mui
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import SendIcon from "@material-ui/icons/Send";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";

// components
import { MessageContext } from "./contexts/MessageContext";
import Picker from "emoji-picker-react";

const useStyles = makeStyles({
  chatBox: {
    height: 80,
    padding: 12,
    backgroundColor: "#555",
  },
  emojiBtn: {
    position: "absolute",
    bottom: "50%",
    right: 54,
    transform: "translateY(50%)",
  },
  form: {
    position: "relative",
    "&, .MuiFormControl-root, .MuiInputBase-root ": {
      height: "100%",
    },
    "& .MuiInputBase-input": {
      height: "100%",
      fontSize: "1.2em",
      margin: "0 100px 0 24px",
    },
  },
  sendBtn: {
    position: "absolute",
    bottom: "50%",
    right: 0,
    transform: "translateY(50%)",
  },
});

interface Message {
  id: string;
  user: string;
  message: string;
  time: Date;
}

const ChatBox = () => {
  const context = useContext(MessageContext);
  const username = localStorage.getItem("username") || "";
  const [messageText, setMessageText] = useState<string>("");
  const [openEmojiPicker, setOpenEmojiPicker] = useState<boolean>(false);
  const [chosenEmoji, setChosenEmoji] = useState<string | null>(null);

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
  };

  const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (messageText) {
      const newMessage: Message = {
        id: uuidv4(),
        user: username,
        message: messageText,
        time: new Date(),
      };
      context.addMessage(newMessage);
      setMessageText("");
    }
  };

  const classes = useStyles();

  return (
    <div className={classes.chatBox}>
      <form
        className={classes.form}
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => sendMessage(e)}
      >
        <TextField
          fullWidth
          placeholder="type..."
          value={messageText}
          onChange={(e: React.FormEvent<HTMLFormElement>) =>
            setMessageText(e.target.value)
          }
        />
        <IconButton className={classes.sendBtn} type="submit">
          <SendIcon />
        </IconButton>
        <IconButton
          className={classes.emojiBtn}
          type="button"
          onClick={() => setOpenEmojiPicker(!openEmojiPicker)}
        >
          <InsertEmoticonIcon />
        </IconButton>
        {openEmojiPicker && (
          <Picker disableSearchBar onEmojiClick={onEmojiClick} />
        )}
      </form>
    </div>
  );
};

export default ChatBox;
