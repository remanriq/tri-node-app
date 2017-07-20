
var fs = require("fs");
var request = require("request");
var keys = require("./keys.js");
var twitter = require("twitter");
var spotify = require("spotify");
var liriArgument = process.argv[2];

console.log(process.argv);


 switch(liriArgument){

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

default: 
	console.log("invalid argument");
};
	
function movieThis(){
var movieName = process.argv[3];



console.log(movieName);

// Then run a request to the OMDB API with the movie specified
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=40e9cece";

// This line is just to help us debug against the actual URL.
console.log(queryUrl);

request(queryUrl, function(error, response, body) { 
	console.log(JSON.parse(body, null, 2));

  // If the request is successful
  if (!error && response.statusCode === 200) {

    // Parse the body of the site and recover just the imdbRating
    // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
    console.log("Release Year: " + JSON.parse(body).Year);
  }

});


};
 

 

function myTweets(){
var myTweets = process.argv[3]; 

// var client = new Twitter({
//   consumer_key: '',
//   consumer_secret: '',
//   access_token_key: '',
//   access_token_secret: ''
// });



console.log(myTweets);

var params = {screen_name: 'rosalitalokita'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});
};


// var myTweets = new twitter;

// for (var i = 2; i < liriArgument.length; i++) {
// 	if 
// }
// };

// function spotifyThis(){



// var spotify = new spotify-this-song;

// for (var i = 2; i < liriArgument.length; i++){
// 	if 
// }
// };




 



