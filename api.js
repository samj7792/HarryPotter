var axios = require("axios");

// var ingredient = $("#keyword").val().trim();
var queryURL = "https://api.edamam.com/search?q=" + ":ingredient" + "&app_id=" + process.env.EDAMAM_ID + "&app_key=" + process.env.EDAMAM_KEY;

// Perfoming an AJAX GET request to our queryURL
axios.get(queryURL)
.then(function(response) {
    // console.log(response);
    console.log(JSON.stringify(response.data.hits[0], null, 2));
});