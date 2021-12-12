import Admin from '../models/admin.js';

//GET Routes
export const all_admins = (req,res) => {
  Admin.find()
    .then(result => {
      res.send(result);
    })
    .catch(err =>{
      console.log(err);
    })
}

export const specific_admin = (req,res) => {
  Admin.findOne({_id:req.params.id})
    .then(result => {
      res.send(result);
    })
    .catch(err =>{
      console.log(err);
    })
}


//POST Routes
export const create_admin = (req,res,next) => {
  Admin.create(req.body)
  .then((admin) =>{
    console.log('Admin has been added',admin);
    res.statusCode=200;
    res.setHeader('Content-Type', 'application/json');
    res.json(admin);
  },(err)=>next(err))
  .catch((err)=>next(err));
}

//PUT Routes

//DELETE Routes

export const delete_admin = (req, res, next) => {
  Admin.deleteOne({_id:req.params.id},function(error,results){
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