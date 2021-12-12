import React from "react";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined";
import ListItemText from "@mui/material/ListItemText";

function Message(props) {
  const AvatarSrc = props.who === "bot" ? <SmartToyOutlinedIcon fontSize="large"/> : <Avatar />;

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem>
        <ListItemAvatar>{AvatarSrc}</ListItemAvatar>

        <ListItemText>{props.text}</ListItemText>
      </ListItem>
    </List>
  );
}

export default Message;
