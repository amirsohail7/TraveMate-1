import Hotel from "../models/hotel.js";

//GET Routes

export const all_hotels = (req, res) => {
  Hotel.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const count_hotels=async (req,res)=>{
try {
  const total= await Hotel.count();
  res.status(200).json(total);
} catch (err) {
  res.status(500).json(err);
}
}

export const all_hotels_detailed = (req, res) => {
  Hotel.find()
    .populate("provider")
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const specific_hotel = (req, res) => {
  Hotel.findOne({ _id: req.params.id })
    .populate("provider")
    .populate("reviews")
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

//POST Routes

export const create_hotel = (req, res, next) => {
  Hotel.create(req.body)
    .then(
      (hotel) => {
        console.log("Hotel has been added", hotel);
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(hotel);
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
};

//PUT Routes

export const add_review = (req, res, next) => {
  Hotel.findOneAndUpdate(
    { _id: req.params.sid },
    { $addToSet: { reviews: [req.params.rid] } },
    function (error, result) {
      if (error) {
        return next(error);
      }
      res.json(result);
    }
  );
};

export const update = (req, res, next) => {
  Hotel.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: false, upsert: false },
    function (error, result) {
      if (error) {
        return next(error);
      }
      res.json(result);
    }
  );
};

//DELETE Routes

export const delete_hotel = (req, res, next) => {
  Hotel.deleteOne({ _id: req.params.id }, function (error, results) {
    if (error) {
      return next(error);
    }
    res.json(results);
  });
};
