const tf = require('@tensorflow/tfjs-node')
const attractions = require("../web_attraction_data.json")



async function loadModel() {
    console.log('Loading Model...')
    model = await tf.loadLayersModel("file://./recommendation_engine/attraction_engine/model.json", false);
    console.log('Model Loaded Successfull')
    // model.summary()
}

const attraction_arr = tf.range(0, attractions.length)
const attraction_len = attractions.length


exports.recommend = async function recommend(userId) {
    let user = tf.fill([attraction_len], Number(userId))
    let attraction_in_js_array = attraction_arr.arraySync()
    await loadModel()
    console.log(`Recommending for User: ${userId}`)
    pred_tensor = await model.predict([attraction_arr, user]).reshape([10000])
    pred = pred_tensor.arraySync()
    
    let recommendations = []
    for (let i = 0; i < 6; i++) {
        max = pred_tensor.argMax().arraySync()
        recommendations.push(attractions[max]) //Push attraction with highest prediction probability
        pred.splice(max, 1)    //drop from array
        pred_tensor = tf.tensor(pred) //create a new tensor
    }
    
    return recommendations


}