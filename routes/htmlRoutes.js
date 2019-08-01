var db = require("../models");
var path = require("path");

var api = require("../api/api");
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

  var hbsObject = {};
  app.post("/results", function(req, res) {
    db.Story.findAll({
      where: { playerName: req.body.playerName }
    }).then(function(data) {
      hbsObject = {
        playerName: data[0].dataValues.playerName,
        house: data[0].dataValues.house,
        characterMatch: data[0].dataValues.characterMatch,
        class: data[0].dataValues.class
      };
      console.log("DATA");
      console.log(data);
      console.log(hbsObject);
      // res.status(204).end();
    });
  });

  app.get("/results", function(req, res) {
    console.log(hbsObject);
    res.render("results", hbsObject);
  });

  app.get("/pause", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/pause.html"));
  });
  // app.get("/spells", function(req, res) {
  //   res.sendFile(api)
  // });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
