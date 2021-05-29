import Traveler from '../models/traveler.js';

//GET Routes
export const all_travelers = (req,res) => {
  Traveler.find()
    .then(result => {
      res.send(result);
    })
    .catch(err =>{
      console.log(err);
    })
}

export const specific_traveler = (req,res) => {
  Traveler.find({_id:req.params.id})
    .then(result => {
      res.send(result);
    })
    .catch(err =>{
      console.log(err);
    })
}


//POST Routes
export const create_traveler = (req,res,next) => {
  Traveler.create(req.body)
  .then((traveler) =>{
    console.log('Traveler has been added',traveler);
    res.statusCode=200;
    res.setHeader('Content-Type', 'application/json');
    res.json(traveler);
  },(err)=>next(err))
  .catch((err)=>next(err));
}

//PUT Routes

//DELETE Routes

export const delete_traveler = (req, res, next) => {
  Traveler.deleteOne({_id:req.params.id},function(error,results){
      if(error){
          return next(error)
      }
      res.json(results);
  })
}
















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