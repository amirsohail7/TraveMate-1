import mongoose from "mongoose";

const chatbotSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },
    name:{
      type:String,
    },
  },
  { collection: "chatbot" }
);
const chatbot = mongoose.model("chatbot", chatbotSchema);
export default chatbot;
