import Package from '../models/package.js';

//GET Routes

export const all_packages = (req,res) => {
  Package.find()
    .then(result => {
      res.send(result);
    })
    .catch(err =>{
      console.log(err);
    })
}

export const all_packages_detailed = (req,res) => {
  Package.find().populate('provider').populate('services')
    .then(result => {
      res.send(result);
    })
    .catch(err =>{
      console.log(err);
    })
}

export const specific_package = (req,res) => {
  Package.find({_id:req.params.id}).populate('provider').populate('services')
    .then(result => {
      res.send(result);
    })
    .catch(err =>{
      console.log(err);
    })
}



//POST Routes

export const create_package = (req,res,next) => {
  Package.create(req.body)
  .then((packages) =>{
    console.log('Package has been added',packages);
    res.statusCode=200;
    res.setHeader('Content-Type', 'application/json');
    res.json(packages);
  },(err)=>next(err))
  .catch((err)=>next(err));
}


//PUT Routes
export const add_provider = (req, res, next) => {
  Package.findOneAndUpdate({_id:req.params.pkid},{provider:req.params.pid},
    function(error,result){
      if(error){
        return next(error)
      }
      res.json(result)
    })
  
}


export const add_service = (req, res, next) => {
  Package.findOneAndUpdate({_id:req.params.pkid},{
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

export const delete_package = (req, res, next) => {
  Package.deleteOne({_id:req.params.id},function(error,results){
      if(error){
          return next(error)
      }
      res.json(results);
  })
}