import tour from './models/tour.js';

const tour_index = (req, res) => {
  tour.find().sort({ createdAt: -1 })
    .then(result => {
      res.render('index', { tours: result, title: 'All tours' });
    })
    .catch(err => {
      console.log(err);
    });
}

const tour_details = (req, res) => {
  const id = req.params.id;
  tour.findById(id)
    .then(result => {
      res.render('details', { tour: result, title: 'tour Details' });
    })
    .catch(err => {
      console.log(err);
      res.render('404', { title: 'tour not found' });
    });
}


const tour_create_get = (req, res) => {
  res.render('create', { title: 'Create a new tour' });
}

const tour_create_post = (req, res) => {
  const tour = new tour(req.body);
  tour.save()
    .then(result => {
      res.redirect('/tours');
    })
    .catch(err => {
      console.log(err);
    });
}

const tour_delete = (req, res) => {
  const id = req.params.id;
  tour.findByIdAndDelete(id)
    .then(result => {
      res.json({ redirect: '/tours' });
    })
    .catch(err => {
      console.log(err);
    });
}

module.exports = {
  tour_index, 
  tour_details, 
  tour_create_get, 
  tour_create_post, 
  tour_delete
}





/// code below used to be in index.js // adjust here

/* app.get('/tour', async(req, res) => {
  const tour = new tourModel({ tourName: "xyz", tourDest: "hunza", tourDepart: "islamabad", tourCost: "23000"});
 
  try{
     await tour.save();
     res.send("inserted data");
 
  }catch(error){
  console.log(error); 
  }
 
 
 }); */