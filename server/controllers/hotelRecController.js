import model from '../recommendation _engine/hotel/model.js'

  export const hotel_rec= (req, res) => {
    let userId = req.query.userId
    if (Number(userId) > 53424 || Number(userId) < 0) {
        res.send("User Id cannot be greater than 53,424 or less than 0!")
    } else {
        recs = model.recommend(userId)
            .then((recs) => {
                res.render("index", { recommendations: recs, forUser: true })
            })
    }
}
/* import Hotel from '../models/hotel.js';
export const hotel_rec= (req, res) => {
    Hotel.find()
    .then(result => {
      res.send(result);
    })
    .catch(err =>{
      console.log(err);
    })
} */