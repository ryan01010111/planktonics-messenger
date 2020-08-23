import React from "react";

// mui
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Button, Modal } from "@material-ui/core";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      marginTop: 24,
    },
    paper: {
      width: "70%",
      height: "40%",
      position: "absolute",
      top: "30%",
      left: "50%",
      display: "flex",
      flexDirection: "column",
      transform: "translateX(-50%)",
      overflow: "hidden",
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      "& textarea": {
        fontFamily: "Roboto",
        fontSize: "1.2em",
        padding: 4,
      },
    },
  })
);

interface Props {
  open: boolean;
  setClose: () => any;
  editText: string;
  setEditText: (value: string) => any;
  submit: () => void;
}

const EditMessageModal = ({
  open,
  setClose,
  editText,
  setEditText,
  submit,
}: Props) => {
  const classes = useStyles();

  const handleSubmit = () => {
    submit();
    setClose();
  };

  return (
    <Modal open={open} onClose={setClose}>
      <div className={classes.paper}>
        <h2>Edit message</h2>
        <TextareaAutosize
          rowsMin={5}
          value={editText}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEditText(e.target.value)
          }
        />
        <Button
          className={classes.button}
          variant="contained"
          color="secondary"
          onClick={handleSubmit}
        >
          Edit
        </Button>
      </div>
    </Modal>
  );
};

export default EditMessageModal;
