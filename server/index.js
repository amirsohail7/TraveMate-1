import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
/* import tourRoutes from './routes/tourRoutes.js';
import userRoutes from './routes/userRoutes.js'; */
import tourModel from './models/tour.js';


const app = express();

app.use(bodyParser.json({limit: "30mb" , extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb" , extended: true}));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://Hadikk:developattravemate123@cluster0.bira6.mongodb.net/travemate?retryWrites=true&w=majority';
const PORT = process.env.PORT || 3040;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true} )
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) =>console.log(error.message));

mongoose.set('useFindAndModify', false); 

app.get('/', async(req, res) => {
   const tour = new tourModel({ tourName: "xyz", tourDest: "hunza", tourDepart: "islamabad", tourCost: "23000"});
  
   try{
      await tour.save();
      res.send("inserted data");
  
   }catch(error){
   console.log(error); 
   }
  
  
  });
 /* app.use('/tours', tourRoutes);
 app.use('/users',userRoutes); */
 
  
  // 404 page
  app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
  });