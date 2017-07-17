

var request = require("request");
var keys = require("./keys.js");
var twitter = require("twitter");
var spotify = require("spotify");
var liriArgument = process.argv[2];


Switch(liriArgument){
	case "movie-this":
	movieThis();
	break;

	case "my-tweets":
	myTweets();
	break;

	case "spotify-this-song":
	songSearch();
	break;

	case "do-what-it-says":
	doWhatitSays;
	break;

};


function movieThis(){
var movieThis = process.argv[3];
if(!movie){
	movie = "";
}
params = movie

// Then run a request to the OMDB API with the movie specified
var queryUrl = "http://www.omdbapi.com/?t=" + The Matrix + "&y=&plot=short&apikey=40e9cece";
console.log(queryUrl);

request(queryUrl, function(error, response, body){

  // If the request is successful
if (!error && response.statusCode === 200) {

    // Parse the body of the site and recover just the imdbRating
    // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
    console.log("Release Year: " + JSON.parse(body).Year);
}

};
});

