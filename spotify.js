require("dotenv").config();
var log = require('./log');

var Spotify = require("node-spotify-api");

var keys = require("./keys");

var spotify = new Spotify(keys.spotify);

function getArtistNames(artists) {
    return artists.map(function(artist) {
        return artist.name;
    }).join(', ')
}

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