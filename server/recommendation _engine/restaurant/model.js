import { createRequire } from "module";
const require = createRequire(import.meta.url);
const tf = require("@tensorflow/tfjs-node");
const restaurants = require("../web_restaurant_data.json");

let model;

async function loadModel() {
  console.log("Loading Model...");
  model = await tf.loadLayersModel(
    "http://localhost:3040/uploads/restaurant_engine/model.json",
    false
  );
  console.log("Model Loaded Successfull");
  // model.summary()
}

const restaurant_arr = tf.range(0, restaurants.length);
const restaurant_len = restaurants.length;
/* console.log(hotel_arr) */

export async function recommend(userId) {
  let pred_tensor;
  let user = tf.fill([restaurant_len], Number(userId));
  /* let hotel_in_js_array = hotel_arr.arraySync(); */
  await loadModel();
  console.log(`Recommending for User: ${userId}`);
  pred_tensor = await model.predict([restaurant_arr, user]).reshape([317]);
  /* console.log(userId); */
  let pred = pred_tensor.arraySync();
  let recommendations = [];
  for (let i = 0; i < 6; i++) {
    let max = pred_tensor.argMax().arraySync();
    recommendations.push(restaurants[max]); //Push restaurants with highest prediction probability
    pred.splice(max, 1); //drop from array
    pred_tensor = tf.tensor(pred); //create a new tensor
  }
  /* console.log(tf.memory()); */
  return recommendations;
}
