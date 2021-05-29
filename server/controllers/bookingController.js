import Booking from '../models/booking.js';

//GET Routes

export const all_bookings = (req,res) => {
  Booking.find()
    .then(result => {
      res.send(result);
    })
    .catch(err =>{
      console.log(err);
    })
}

export const all_bookings_detailed = (req,res) => {
  Booking.find().populate('provider').populate('traveler')
    .then(result => {
      res.send(result);
    })
    .catch(err =>{
      console.log(err);
    })
}

export const specific_booking = (req,res) => {
  Booking.find({_id:req.params.id}).populate('provider').populate('traveler')
    .then(result => {
      res.send(result);
    })
    .catch(err =>{
      console.log(err);
    })
}


//POST Routes

export const create_booking = (req,res,next) => {
  Booking.create(req.body)
  .then((booking) =>{
    console.log('Booking has been added',booking);
    res.statusCode=200;
    res.setHeader('Content-Type', 'application/json');
    res.json(booking);
  },(err)=>next(err))
  .catch((err)=>next(err));
}


//PUT Routes

export const add_service = (req, res, next) => {
  Booking.findOneAndUpdate({_id:req.params.bid},{services:req.params.sid},
    function(error,result){
      if(error){
        return next(error)
      }
      res.json(result)
    })
  
}

export const add_provider = (req, res, next) => {
  Booking.findOneAndUpdate({_id:req.params.bid},{provider:req.params.pid},
    function(error,result){
      if(error){
        return next(error)
      }
      res.json(result)
    })
  
}

export const add_traveler = (req, res, next) => {
  Booking.findOneAndUpdate({_id:req.params.bid},{traveler:req.params.tid},
    function(error,result){
      if(error){
        return next(error)
      }
      res.json(result)
    })
  
}

//DELETE Routes

export const delete_booking = (req, res, next) => {
  Booking.deleteOne({_id:req.params.id},function(error,results){
      if(error){
          return next(error)
      }
      res.json(results);
  })
}









/* app.get('/bookings', async(req, res) => {
    const booking = new bookingModel({ bookingID: "0101010101", userID: "5fdf4af9cac78d0f64568301", providerID: "5fdf4af9cac78d0f64568301"});
   
    try{
       await booking.save();
       res.send("booking inserted");
   
    }catch(error){
    console.log(error); 
    }
   
   
   }); */