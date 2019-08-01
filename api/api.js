console.log("Hello");

require("dotenv").config();
var axios = require("axios");

var queryURL =
  "https://www.potterapi.com/v1/spells?key=" + process.env.POTTER_KEY;
console.log(queryURL);

// Perfoming an AJAX GET request to our queryURL
axios.get(queryURL).then(function(response) {
  // console.log(response.data);
  var randomSpell =
    response.data[Math.floor(Math.random() * response.data.length)];
  // console.log(response.data[Math.floor(Math.random() * response.data.length)]);
  // console.log(JSON.stringify(response.data.hits[0], null, 2));
  console.log(randomSpell);
  console.log(randomSpell.spell);
  console.log(randomSpell.type);
  console.log(randomSpell.effect);
});
