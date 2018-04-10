// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the freelancer posts
  app.get("/api/freelancers", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    db.Freelancer.findAll({
    }).then(function(result) {
      res.json(result);
    });
  });

  // POST route for creating new freelance post
  app.post("/api/freelancers", function(req, res) {
    db.Freelancer.create(
        body.req
    )
    .then(function(result) {
        res.json(result);
    });
});

  // DELETE route for deleting posts
  // app.delete("/api/freelancers/:id", function(req, res) {
  //   db.Post.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(function(dbPost) {
  //     res.json(dbPost);
  //   });
  // });

  // PUT route for updating posts
  // app.put("/api/freelancers", function(req, res) {
  //   db.Post.update(
  //     req.body,
  //     {
  //       where: {
  //         id: req.body.id
  //       }
  //     }).then(function(dbPost) {
  //     res.json(dbPost);
  //   });
  // });
};

//add in get routes for each category for sort
//add in get/post routs for tentative messaging system
