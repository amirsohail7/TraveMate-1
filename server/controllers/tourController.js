import Tour from "../models/tour.js";

//GET Routes

export const all_tours = (req, res) => {
  Tour.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const all_tours_detailed = (req, res) => {
  Tour.find()
    .populate("provider")
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const specific_tour = (req, res) => {
  Tour.findOne({ _id: req.params.id })
    .populate("provider")
    .populate("photos")
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

//POST ROUTES

export const create_tour = (req, res, next) => {
  Tour.create(req.body)
    .then(
      (tour) => {
        console.log("Tour has been added", tour);
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(tour);
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
};

//PUT ROUTES

export const add_provider = (req, res, next) => {
  Tour.findOneAndUpdate(
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

export const update = (req, res, next) => {
  Tour.findOneAndUpdate(
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

//DELETE ROUTES

export const delete_tour = (req, res, next) => {
  Tour.deleteOne({ _id: req.params.id }, function (error, results) {
    if (error) {
      return next(error);
    }
    res.json(results);
  });
};

/// code below used to be in index.js // adjust here

/* app.get('/tour', async(req, res) => {
  const tour = new tourModel({ tourName: "xyz", tourDest: "hunza", tourDepart: "islamabad", tourCost: "23000"});
 
  try{
     await tour.save();
     res.send("inserted data");
 
  }catch(error){
  console.log(error); 
  }
 
 
 }); */
