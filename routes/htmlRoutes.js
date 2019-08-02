var db = require("../models");
var path = require("path");

// var api = require("../public/js/api");
var axios = require("axios");

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

  app.get("/quiz2", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/quiz2.html"));
  });

  var hbsObject = {};
  app.post("/results", function(req, res) {
    db.Story.findAll({
      // where: { playerName: req.body.playerName }
      limit: 1,
      where: {
        playerName: req.body.playerName
      },
      order: [["createdAt", "DESC"]]
    })
      .then(function(data) {
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
      })
      .catch(function(error) {
        console.log(error);
      });
  });

  app.get("/results", function(req, res) {
    console.log(hbsObject);

    var randomSpell = {};
    var queryURL =
      "https://www.potterapi.com/v1/spells?key=" + process.env.POTTER_KEY;
    axios
      .get(queryURL)
      .then(function(response) {
        // console.log(response.data);
        randomSpell =
          response.data[Math.floor(Math.random() * response.data.length)];
        // console.log(response.data[Math.floor(Math.random() * response.data.length)]);
        // console.log(JSON.stringify(response.data.hits[0], null, 2));
        console.log(JSON.stringify(randomSpell));
        console.log(randomSpell.spell);
        console.log(randomSpell.type);
        console.log(randomSpell.effect);

        // var spellDiv = $("<div>");
        // spellDiv.addClass("spell-div");
        // var p1 = $("<p>").html(randomSpell.spell);

        // spellDiv.append(p1);

        // $("#api-spell").append(spellDiv);

        // console.log(spellDiv);
        // res.render("results", { hbsObject: hbsObject, randomSpell: randomSpell });
        res.render("results", { hbsObject, randomSpell });
      })
      .catch(function(error) {
        console.log(error);
      });
    // res.render("results", hbsObject);
    // res.render("results", { hbsObject: hbsObject, randomSpell: randomSpell });
  });

  app.get("/pause", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/pause.html"));
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    // res.render("404");
    res.sendFile(path.join(__dirname, "../public/html/index.html"));
  });
};
