import Traveler from "../models/traveler.js";

//GET Routes
export const all_travelers = async (req, res) => {
  const query = req.query.new;
  try {
    const travelers = query
      ? await Traveler.find().sort({ _id: -1 }).limit(5)
      : await Traveler.find();
    res.status(200).json(travelers);
  } catch (err) {
    res.status(500).json(err);
  }
  /* Traveler.find()
    .then(result => {
      res.send(result);
    })
    .catch(err =>{
      console.log(err);
    }) */
};

export const specific_traveler = (req, res) => {
  Traveler.find({ _id: req.params.id })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

//GET Traveler STATS
export const traveler_stats = async (req, res) => {
  /* const today = new Date();
  const latYear = today.setFullYear(today.setFullYear() - 1); */

  try {
    const data = await Traveler.aggregate([
      {
        $project: {
          month: { $month: "$createdAt" },
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        },
      },
    ]);
    /* console.log(data); */
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
};

//POST Routes
export const create_traveler = (req, res, next) => {
  Traveler.create(req.body)
    .then(
      (traveler) => {
        console.log("Traveler has been added", traveler);
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(traveler);
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
};

//PUT Routes

//DELETE Routes

export const delete_traveler = (req, res, next) => {
  Traveler.deleteOne({ _id: req.params.id }, function (error, results) {
    if (error) {
      return next(error);
    }
    res.json(results);
  });
};

/* import userModel from './models/user.js';

app.get('/user', async(req, res) => {
    const user = new userModel({ userFName: "Amir", userLName: "Sohail", userPhone: "03123456789", userEmail: "amir.chitrali@gmail.com", userCNIC: "12345678910111", accUserName: "Devv", userPass: "devv123"});
   
    try{
       await user.save();
       res.send("user inserted data");
   
    }catch(error){
    console.log(error); 
    }
   
   
   }); */
