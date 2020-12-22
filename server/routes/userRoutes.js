const router = require('express').Router();
const User = require('../models/user.models');
const {signAccessToken} = require('../helpers/jwtHelper')


router.route('/sign-up').post(async(req,res) => {
   const firstname = req.body.userFName;
   const lastname = req.body.userLName;
   const phone = req.body.userPhone;
   const emailid = req.body.serEmail;
   const CNIC = req.body.userCNIC;
   const username = req.body.accUserName;
   const password = req.body.userPass;
 
   
   const newUser = new User({
       firstname,
       lastname,
       phone,
       emailid,
       CNIC,
       username,
       password
       
       
   }); 
   newUser.save()
   .then(()=> res.json('User Added to database!'))
   .catch(error =>{res.status(400).json('Error: '+error)});
});

router.route('/sign-in').post(async(req,res)=>{
    const username = req.body.accUserName;
    const password = req.body.userPass;
    User.findOne({username, password}, (err,user)=>{
       if(err){
           console.log(err)
       }
       if(!user){
           return res.send('User name or password incorrect')
       }
       return res.status(200).send("User Signed In")
   })
});
module.exports = router;