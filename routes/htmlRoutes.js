var db = require("../models");
var path = require("path");
// var axios = require("axios");

module.exports = function(app) {
  // Load home page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/index.html"));
  });

  app.get("/second", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/second.html"));
  });

  app.get("/quiz1", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/quiz1.html"));
  });

  app.get("/results", function(req, res) {
    db.Story.findAll({
      where: { playerName: playerName }
    }).then(function(data) {
      var hbsObject = {
        playerName: data[0].dataValues.playerName,
        house: data[0].dataValues.house,
        characterMatch: data[0].dataValues.characterMatch,
        class: data[0].dataValues.class
      };
      console.log(data);
      console.log(hbsObject);
      res.render("results", hbsObject);
    });
  });
  
  // // Load index page
  // app.get("/", function(req, res) {
  //   db.Story.findAll({}).then(function(dbExamples) {
  //     res.render("index", {
  //       msg: "Welcome!",
  //       examples: dbExamples
  //     });
  //   });
  // });

  // // Load example page and pass in an example by id
  // app.get("/example/:id", function(req, res) {
  //   db.Story.findOne({ where: { id: req.params.id } }).then(function(
  //     dbExample
  //   ) {
  //     res.render("example", {
  //       example: dbExample
  //     });
  //   });
  // });

  // // Render 404 page for any unmatched routes
  // app.get("*", function(req, res) {
  //   res.render("404");
  // });
};
