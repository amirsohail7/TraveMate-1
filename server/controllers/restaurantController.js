import Restaurant from "../models/restaurant.js";

//GET Routes

export const restaurant_get = (req, res) => {
  //res.send('you just called the get request');
  Restaurant.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const restaurant_get_detailed = (req, res) => {
  Restaurant.find()
    .populate("provider")
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const specific_restaurant = (req, res) => {
  Restaurant.findOne({ _id: req.params.id })
    .populate("provider")
    .populate("reviews")
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const top_restaurants = (req, res) => {
  Restaurant.find(
    {
      $and: [{ address: { $regex: req.params.city } }, { rating: "5.0" }],
    },
    (err, docs) => {
      if (err) {
        console.log(err);
      } else {
        res.send(docs);
      }
    }
  );
};

//POST Routes

export const restaurant_create = (req, res) => {
  Restaurant.create(req.body)
    .then(
      (restaurant) => {
        console.log("Restaurant has been added", restaurant);
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(restaurant);
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
};

//PUT Routes

export const add_review = (req, res, next) => {
  Restaurant.findOneAndUpdate(
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
  Restaurant.findOneAndUpdate(
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

export const delete_restaurant = (req, res, next) => {
  Restaurant.deleteOne({ _id: req.params.id }, function (error, results) {
    if (error) {
      return next(error);
    }
    res.json(results);
  });
};
