// DEPENDENCIES
// =====================================
// Read and set environment variables
require("dotenv").config();

// Import the Twitter NPM package.
var Twitter = require("twitter");

// Import the API keys
var keys = require("./keys");

// Function for running a Twitter Search
var getMyTweets = function() {
    var client = new Twitter(keys.twitter);
  
    var params = {
      screen_name: "testtwi32989092"
    };
    client.get("statuses/user_timeline", params, function(error, tweets, response) {
      if (!error) {
        for (var i = 0; i < tweets.length; i++) {
          console.log(tweets[i].created_at);
          console.log("");
          console.log(tweets[i].text);
        }
      }
    });
  };

  getMyTweets();