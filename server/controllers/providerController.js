import Provider from '../models/provider.js';

//GET routes

export const all_providers = (req,res) => {
  Provider.find()
    .then(result => {
      res.send(result);
    })
    .catch(err =>{
      console.log(err);
    })
}


export const all_providers_detailed = (req,res) => {
  Provider.find().populate('services')
    .then(result => {
      res.send(result);
    })
    .catch(err =>{
      console.log(err);
    })
}

export const specific_provider = (req,res) => {
  Provider.find({_id:req.params.id}).populate('services')
    .then(result => {
      res.send(result);
    })
    .catch(err =>{
      console.log(err);
    })
}

//POST Routes

export const create_provider = (req,res,next) => {
  Provider.create(req.body)
  .then((provider) =>{
    console.log('Provider has been added',provider);
    res.statusCode=200;
    res.setHeader('Content-Type', 'application/json');
    res.json(provider);
  },(err)=>next(err))
  .catch((err)=>next(err));
}

//PUT Routes

export const add_service = (req, res, next) => {
  Provider.findOneAndUpdate({_id:req.params.pid},{
    "$push":{
        "services":req.params.sid
    }
  },{new:true,upsert:false},
    function(error,result){
      if(error){
        return next(error)
      }
      res.json(result)
    })
  
}

//DELETE Routes

export const delete_provider = (req, res, next) => {
  Provider.deleteOne({_id:req.params.id},function(error,results){
      if(error){
          return next(error)
      }
      res.json(results);
  })
}