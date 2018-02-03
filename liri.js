require("dotenv").config();
var fs = require("fs");
var tweetTweet = require('./twitter');
// var movieInfo = require('./omdb');
var listenSpotify = require('./spotify');

var sayWhat = function(hearThis, runThis){
    if (hearThis === "my-tweets"){
        tweetTweet();
    } else if (hearThis === "spotify"){
         listenSpotify(process.argv)
    } else if (hearThis === "movie title"){
          // movieInfo(process.argv);
         console.log("Run OMDB API call.")
    // } else if (hearThis === "random") {
    //     var text = fs.readFileSync('./random.txt').toString();
    } else {
        console.log("Please try again.");
    }
}

var heyLiri = function(argTwo, argThree) {
    sayWhat(argTwo, argThree);
  };

heyLiri(process.argv[2], process.argv[3]);