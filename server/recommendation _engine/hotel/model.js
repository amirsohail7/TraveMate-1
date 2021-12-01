import { loadLayersModel, range, fill, tensor } from '@tensorflow/tfjs-node';
import hotels, { length } from "../web_hotel_data.json";

/* import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
server\recommendation _engine\hotel\model.js
new URL('file:///C:\Users\amirs\Desktop\TraveMate-1\server\recommendation_engine\hotel\hotel_engine\model.json').pathname;
fileURLToPath('file:///C:\Users\amirs\Desktop\TraveMate-1\server\recommendation_engine\hotel\hotel_engine\model.json'); */

async function loadModel() {
    console.log('Loading Model...')
    model = await loadLayersModel("file://./hotel_engine/model.json", false);
    console.log('Model Loaded Successfull')
    // model.summary()
}

const hotel_arr = range(0, length)
const hotel_len = length


export async function recommend(userId) {
    let user = fill([hotel_len], Number(userId))
    let hotel_in_js_array = hotel_arr.arraySync()
    await loadModel()
    console.log(`Recommending for User: ${userId}`)
    pred_tensor = await model.predict([hotel_arr, user]).reshape([10000])
    pred = pred_tensor.arraySync()
    
    let recommendations = []
    for (let i = 0; i < 6; i++) {
        max = pred_tensor.argMax().arraySync()
        recommendations.push(hotels[max]) //Push hotel with highest prediction probability
        pred.splice(max, 1)    //drop from array
        pred_tensor = tensor(pred) //create a new tensor
    }
    
    return recommendations


}