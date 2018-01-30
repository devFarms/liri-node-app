require("dotenv").config();

var sayWhat = function(hearThis, runThis){
    if (hearThis === "my-tweets"){
        console.log("Run the twitter function.")
    } else if (hearThis === "spotify"){
        console.log("Run Spotify function.")
    }
    else if (hearThis === "movie title"){
        console.log("Run OMDB API call.")
    }
    else {
        console.log("Please try again.");
    }
}

var heyLiri = function(argTwo, argThree) {
    sayWhat(argTwo, argThree);
  };

heyLiri(process.argv[2], process.argv[3]);