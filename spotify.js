// DEPENDENCIES
// =====================================
// Read and set environment variables
require("dotenv").config();
var log = require('./log');

// Import the node-spotify-api NPM package.
var Spotify = require("node-spotify-api");

// Import the API keys
var keys = require("./keys");

// Initialize the spotify API client using our client id and secret
var spotify = new Spotify(keys.spotify);


// FUNCTIONS
// =====================================
function getArtistNames(artists) {
    return artists.map(function(artist) {
        return artist.name;
    }).join(', ')
}

// Function for running a Spotify search
var listenSpotify = function(args) {

    var songName = "";

    for (var i = 3; i < args.length; i++) {
        if (i > 3 && i < args.length) {
            songName = songName + "+" + args[i];
        } else {
            songName += args[i];
        }
    }

    if (songName === undefined) {
        songName = "What's my age again";
    }

    spotify.search({
            type: "track",
            query: songName
        },
        function(err, data) {
            if (err) {
                console.log("Error occurred: " + err);
                return;
            }

            var songs = data.tracks.items;
            for (var i = 0; i < songs.length; i++) {
                console.log(i);
                console.log("artist(s): " + getArtistNames(songs[i].artists));
                log("artist(s): " + getArtistNames(songs[i].artists));
                console.log("song name: " + songs[i].name);
                log("song name: " + songs[i].name);
                console.log("preview song: " + songs[i].preview_url);
                log("preview song: " + songs[i].preview_url);
                console.log("album: " + songs[i].album.name);
                log("album: " + songs[i].album.name);
                console.log("-----------------------------------");
                log("-----------------------------------");
            }
        }
    );
};

module.exports = listenSpotify;