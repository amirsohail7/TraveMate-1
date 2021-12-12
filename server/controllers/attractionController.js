import Attraction from "../models/attraction.js";

//GET Routes

export const all_attractions = (req, res) => {
  Attraction.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const all_attractions_detailed = (req, res) => {
  Attraction.find()
    .populate("provider")
    .populate("reviews")
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const specific_attraction = (req, res) => {
  Attraction.findOne({ _id: req.params.id })
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

export const create_attraction = (req, res, next) => {
  Attraction.create(req.body)
    .then(
      (attraction) => {
        console.log("Attraction has been added", attraction);
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(attraction);
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
};

//PUT Routes

export const add_review = (req, res, next) => {
  Attraction.findOneAndUpdate(
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
  Attraction.findOneAndUpdate(
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

export const delete_attraction = (req, res, next) => {
  Attraction.deleteOne({ _id: req.params.id }, function (error, results) {
    if (error) {
      return next(error);
    }
    res.json(results);
  });
};
