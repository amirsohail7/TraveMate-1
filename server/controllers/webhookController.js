import { WebhookClient } from 'dialogflow-fulfillment';
import dialogflow from "dialogflow";

/* use this function to create custom webhook */
const _agent = new WebhookClient({request: request, response: response});
    function Welcome(agent) {
      agent.add(`salam to my agent!`);
    }
    let intents = new Map();
    intents.set("admin",Welcome)
    _agent.handleRequest(intents);