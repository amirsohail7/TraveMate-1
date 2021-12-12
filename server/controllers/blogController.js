import Blog from "../models/blog.js";

//GET Routes

export const all_blogs = (req, res) => {
  Blog.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const all_blogs_detailed = (req, res) => {
  Blog.find()
    .populate("author")
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const specific_blog = (req, res) => {
  Blog.findOne({ _id: req.params.id })
    .populate("author")
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

//POST ROUTES

export const create_blog = (req, res, next) => {
  Blog.create(req.body)
    .then(
      (blog) => {
        console.log("Blog has been added", blog);
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(blog);
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
};

//PUT ROUTES

export const add_comments = (req, res, next) => {
  Blog.findOneAndUpdate(
    { _id: req.params.id },
    {$push: {comments:[req.body]}},
    function (error, result) {
      if (error) {
        return next(error);
      }
      res.json(result);
    }
  );
};

//DELETE ROUTES

export const delete_blog = (req, res, next) => {
  Blog.deleteOne({ _id: req.params.id }, function (error, results) {
    if (error) {
      return next(error);
    }
    res.json(results);
  });
};
