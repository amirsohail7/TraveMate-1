import { recommend } from "../recommendation _engine/hotel/model.js";

export const recHotel = async (req, res) => {
  let userId = req.params.userId;
  try {
    if (Number(userId) > 53424 || Number(userId) < 0) {
      res.send("User Id cannot be greater than 53,424 or less than 0!");
    } else {
      let recs = await recommend(userId);
      res.send(recs);
    }
  } catch (err) {
    console.log(err);
  }
};
