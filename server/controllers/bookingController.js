import Booking from "../models/booking.js";

//GET Routes

export const all_bookings = (req, res) => {
  Booking.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const all_bookings_detailed = (req, res) => {
  Booking.find()
    .populate("provider")
    .populate("traveler")
    .populate("service")
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const specific_booking = (req, res) => {
  Booking.findOne({ _id: req.params.id })
    .populate("provider")
    .populate("traveler")
    .populate("service")
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const services_bookings = (req, res) => {
  Booking.find({ provider: req.params.pid })
    .populate("provider")
    .populate("traveler")
    .populate("service")
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const traveler_bookings = (req, res) => {
  Booking.find({ traveler: req.params.tid })
    .populate("provider")
    .populate("traveler")
    .populate("service")
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

//POST Routes

export const create_booking = (req, res, next) => {
  Booking.create(req.body)
    .then(
      (booking) => {
        console.log("Booking has been added", booking);
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(booking);
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
};

//PUT Routes

export const update = (req, res, next) => {
  Booking.findOneAndUpdate(
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

export const delete_booking = (req, res, next) => {
  Booking.deleteOne({ _id: req.params.id }, function (error, results) {
    if (error) {
      return next(error);
    }
    res.json(results);
  });
};
