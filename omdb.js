var axios = require("axios");

function movieInfo(args) {

    var whatSayYou = process.argv;

    var movieTitle = "";

    for (var i = 2; i < whatSayYou.length; i++) {
        if (i > 2 && i < whatSayYou.length) {
            movieTitle = movieTitle + "+" + whatSayYou[i];
        } else {
            movieTitle += whatSayYou[i];
        }
    }

    var omdbUrl = "http://www.omdbapi.com/?apikey=trilogy&t=" + movieTitle + "&plot=short";

    // Make a request for a user with a given ID
    axios.get(omdbUrl)
        .then(function(response) {
            console.log("Movie title: " + response.data.Title); // Title of the movie.
            console.log("Released: " + response.data.Year); // Year the movie came out.
            console.log("IMDB Rating: " + response.data.imdbRating); // IMDB Rating of the movie.
            console.log("Rotten Tomatoes rating: " + response.data.Ratings[1].Value); // Rotten Tomatoes Rating of the movie.
            console.log("Country: " + response.data.Country); // Country where the movie was produced.
            console.log("Language: " + response.data.Language); // Language of the movie.
            console.log("Summary: " + response.data.Plot); // Plot of the movie.
            console.log("Cast: " + response.data.Actors); // Actors in the movie.
        })
        .catch(function(error) {
            console.log(error);
        });
}

module.exports = movieInfo;