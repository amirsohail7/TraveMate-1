import React, { useEffect } from "react";
import Axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { saveMessage } from "../_actions/message_actions";
import Message from "./Sections/Message";
import Card from "@mui/material/Card";
import CardTemp from "./Sections/Card";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";

function Chatbot() {
  const dispatch = useDispatch();
  const messagesFromRedux = useSelector((state) => state.message.messages);

  useEffect(() => {
    eventQuery("WelcomeToTraveMate");
  }, []);

  const textQuery = async (text) => {
    //  First  Need to  take care of the message I sent
    let conversation = {
      who: "user",
      content: {
        text: {
          text: text,
        },
      },
    };

    dispatch(saveMessage(conversation));
    console.log("text I sent", conversation);

    // We need to take care of the message Chatbot sent
    const textQueryVariables = {
      text,
    };
    try {
      //I will send request to the textQuery ROUTE
      const response = await Axios.post(
        "http://localhost:3040/api/dialogflow/textQuery",
        textQueryVariables
      );

      for (let content of response.data.fulfillmentMessages) {
        conversation = {
          who: "bot",
          content: content,
        };
        console.log(conversation);

        dispatch(saveMessage(conversation));
      }
    } catch (error) {
      conversation = {
        who: "bot",
        content: {
          text: {
            text: " Error just occured, please check the problem",
          },
        },
      };
      console.log(conversation);
      dispatch(saveMessage(conversation));
    }
  };

  const eventQuery = async (event) => {
    // We need to take care of the message Chatbot sent
    const eventQueryVariables = {
      event,
    };
    try {
      //I will send request to the textQuery ROUTE
      const response = await Axios.post(
        "http://localhost:3040/api/dialogflow/eventQuery",
        eventQueryVariables
      );
      for (let content of response.data.fulfillmentMessages) {
        let conversation = {
          who: "bot",
          content: content,
        };

        dispatch(saveMessage(conversation));
      }
    } catch (error) {
      let conversation = {
        who: "bot",
        content: {
          text: {
            text: " Error just occured, please check the problem",
          },
        },
      };
      dispatch(saveMessage(conversation));
    }
  };

  const keyPressHanlder = (e) => {
    if (e.key === "Enter") {
      if (!e.target.value) {
        return alert("you need to type somthing first");
      }

      //we will send request to text query route
      textQuery(e.target.value);

      e.target.value = "";
    }
  };

  const renderCards = (cards) => {
    return cards.map((card, i) => (
      <CardTemp key={i} cardInfo={card.structValue} />
    ));
  };

  const renderOneMessage = (message, i) => {
    console.log("message", message);

    // we need to give some condition here to separate message kinds

    // template for normal text
    if (message.content && message.content.text && message.content.text.text) {
      return (
        <Message key={i} who={message.who} text={message.content.text.text} />
      );
    } else if (message.content && message.content.payload.fields.card) {
      const AvatarSrc =
        message.who === "bot" ? (
          <SmartToyOutlinedIcon fontSize="large" />
        ) : (
          <Avatar />
        );

      return (
        <List>
          <ListItem /* style={{ padding: "1rem" }} */>
            <ListItemAvatar>{AvatarSrc}</ListItemAvatar>
            <ListItemText>{message.who}</ListItemText>
            <ListItemText>
              {renderCards(
                message.content.payload.fields.card.listValue.values
              )}
            </ListItemText>
          </ListItem>
        </List>
      );
    }

    // template for card message
  };

  const renderMessage = (returnedMessages) => {
    if (returnedMessages) {
      return returnedMessages.map((message, i) => {
        return renderOneMessage(message, i);
      });
    } else {
      return null;
    }
  };

  return (
    <Card variant="outlined" sx={{ minWidth: 275 }}>
      <List style={{ height:580, width: "80%", overflow: "auto" }}>
        {renderMessage(messagesFromRedux)}
      </List>
      <TextField
        id="outlined-basic"
        label="Send a message..."
        variant="outlined"
        placeholder="Send a message..."
        onKeyPress={keyPressHanlder}
        type="text"
        sx={{ width: "100%" }}
      />
    </Card>
  );
}

export default Chatbot;
