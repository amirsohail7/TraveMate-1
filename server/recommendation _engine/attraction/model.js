import { createRequire } from "module";
const require = createRequire(import.meta.url);
const tf = require("@tensorflow/tfjs-node");
const attractions = require("../web_attraction_data.json");

let model;

async function loadModel() {
  console.log("Loading Model...");
  model = await tf.loadLayersModel(
    "http://localhost:3040/uploads/attraction_engine/model.json",
    false
  );
  console.log("Model Loaded Successfull");
  // model.summary()
}

const attraction_arr = tf.range(0, attractions.length);
const attraction_len = attractions.length;
/* console.log(hotel_arr) */

export async function recommend(userId) {
  let pred_tensor;
  let user = tf.fill([attraction_len], Number(userId));
  /* let hotel_in_js_array = hotel_arr.arraySync(); */
  await loadModel();
  console.log(`Recommending for User: ${userId}`);
  pred_tensor = await model.predict([attraction_arr, user]).reshape([218]);
  /* console.log(userId); */
  let pred = pred_tensor.arraySync();
  let recommendations = [];
  for (let i = 0; i < 3; i++) {
    let max = pred_tensor.argMax().arraySync();
    recommendations.push(attractions[max]); //Push hotel with highest prediction probability
    pred.splice(max, 1); //drop from array
    pred_tensor = tf.tensor(pred); //create a new tensor
  }
  /* console.log(tf.memory()); */
  return recommendations;
}
