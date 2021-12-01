const tf = require('@tensorflow/tfjs-node')
const restaurants = require("../web_restaurant_data.json")



async function loadModel() {
    console.log('Loading Model...')
    model = await tf.loadLayersModel("file://./recommendation_engine/restaurant_engine/model.json", false);
    console.log('Model Loaded Successfull')
    // model.summary()
}

const restaurant_arr = tf.range(0, restaurants.length)
const restaurant_len = restaurants.length


exports.recommend = async function recommend(userId) {
    let user = tf.fill([restaurant_len], Number(userId))
    let restaurant_in_js_array = restaurant_arr.arraySync()
    await loadModel()
    console.log(`Recommending for User: ${userId}`)
    pred_tensor = await model.predict([restaurant_arr, user]).reshape([10000])
    pred = pred_tensor.arraySync()
    
    let recommendations = []
    for (let i = 0; i < 6; i++) {
        max = pred_tensor.argMax().arraySync()
        recommendations.push(restaurants[max]) //Push restaurant with highest prediction probability
        pred.splice(max, 1)    //drop from array
        pred_tensor = tf.tensor(pred) //create a new tensor
    }
    
    return recommendations


}