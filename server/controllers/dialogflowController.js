import dialogflow from "dialogflow";
import Feedback from "../models/feedback.js";


const projectId = "travemate-bot-test";
const sessionId = "bot-session";
const languageCode = "en-US";

const sessionClient = new dialogflow.SessionsClient();
const sessionPath = sessionClient.sessionPath(projectId, sessionId);

export const textQuery = async (req, res, next) => {
  
  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        // The query to send to the dialogflow agent
        /* text: chatbot.create(req.body) */
        text: req.body.text,
        // The language used by the client (en-US)
        languageCode: languageCode,
      },
    },
  };
  const responses = await sessionClient.detectIntent(request);
  console.log("Detected intent");
  const result = responses[0].queryResult;
  console.log(`  Query: ${result.queryText}`);
  console.log(`  Response: ${result.fulfillmentText}`);

  res.send(result);
};

export const eventQuery = async (req, res, next) => {
  const request = {
    session: sessionPath,
    queryInput: {
      event: {
        // The query to send to the dialogflow agent
        name: req.body.event,
        // The language used by the client (en-US)
        languageCode: languageCode,
      },
    },
  };
  const responses = await sessionClient.detectIntent(request);
  console.log("Detected intent");
  const result = responses[0].queryResult;
  console.log(`  Query: ${result.queryText}`);
  console.log(`  Response: ${result.fulfillmentText}`);

  res.send(result);
};



/*export const serviceFetch = (req, res) => {
  Restaurant.find(
    {
      $and: [{ address: { $regex: req.params.city } }, { rating: "5.0" }],
    },
    (err, docs) => {
      if (err) {
        console.log(err);
      } else {
        return res.json({
          speech: docs.name,
          displayText: docs.name,
          source: 'team info'
      });
      }
    }
  );
}; */
