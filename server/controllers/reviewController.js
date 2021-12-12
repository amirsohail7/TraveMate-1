import Review from "../models/review.js";

//GET Routes

export const all_reviews = (req, res) => {
  Review.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const all_reviews_detailed = (req, res) => {
  Review.find()
    .populate("author")
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const specific_reviews = (req, res) => {
  Review.find({ _id: req.params.id })
    .populate("author")
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

//POST ROUTES

export const create_review = (req, res, next) => {
  Review.create(req.body)
    .then(
      (review) => {
        console.log("Review has been added", review);
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(review);
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
};

//PUT ROUTES

export const add_provider = (req, res, next) => {
  Review.findOneAndUpdate(
    { _id: req.params.tid },
    { provider: req.params.pid },
    function (error, result) {
      if (error) {
        return next(error);
      }
      res.json(result);
    }
  );
};

//DELETE ROUTES

export const delete_review = (req, res, next) => {
  Review.deleteOne({ _id: req.params.id }, function (error, results) {
    if (error) {
      return next(error);
    }
    res.json(results);
  });
};
