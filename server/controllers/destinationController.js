import Destination from '../models/destination.js';

//GET Routes

export const all_destinations = (req,res) => {
  Destination.find()
    .then(result => {
      res.send(result);
    })
    .catch(err =>{
      console.log(err);
    })
}

export const specific_destination = (req,res) => {
  Destination.find({_id:req.params.id})
    .then(result => {
      res.send(result);
    })
    .catch(err =>{
      console.log(err);
    })
}



//POST Routes

export const create_destination = (req,res,next) => {
  Destination.create(req.body)
  .then((destination) =>{
    console.log('Destination has been added',destination);
    res.statusCode=200;
    res.setHeader('Content-Type', 'application/json');
    res.json(destination);
  },(err)=>next(err))
  .catch((err)=>next(err));
}


//PUT Routes

//Delete Routes

export const delete_destination = (req, res, next) => {
  Destination.deleteOne({_id:req.params.id},function(error,results){
      if(error){
          return next(error)
      }
      res.json(results);
  })
}











/* app.get('/destination', async(req, res) => {
    const destination = new destinationModel({ destName: "Hunza", destLocation: "gilgit"});
   
    try{
       await destination.save();
       res.send("destination added");
   
    }catch(error){
    console.log(error); 
    }
   
   
   });
   */