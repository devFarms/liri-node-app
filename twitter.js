// Not sure what this does? 
require("dotenv").config();

// Get the Twitter package.
var Twitter = require("twitter");

// Get the API Keys
var keys = require("./keys");

// Function - Twitter Search
var tweetTweet = function() {
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

module.exports = tweetTweet;