import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Dialog from "@mui/material/Dialog";
import Chatbot from "./Chatbot/Chatbot";
import ChatBubbleRoundedIcon from "@mui/icons-material/ChatBubbleRounded";
import IconButton from "@mui/material/IconButton";

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog onClose={handleClose} open={open} sx={{left: '58%',bottom:'10%'}}>
      <List>
        <Chatbot />
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default function SimpleDialogDemo() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <br />
      <Button
        variant="contained"
        size="large"
        color="error"
        onClick={handleClickOpen}
        sx={{
          borderRadius: 28,
          position: "fixed",
          zIndex: "tooltip",
          left: "90%",
        }}
      >
        <ChatBubbleRoundedIcon />
      </Button>
      {/* <IconButton color="primary" onClick={handleClickOpen}><ChatBubbleRoundedIcon size="large"/></IconButton> */}
      <SimpleDialog open={open} onClose={handleClose} />
    </div>
  );
}
