          // Twitter stuff
var dotenv = require('dotenv');
dotenv.load();
var Twit = require('twit')
var twitData = require('../public/data/twit.json');

var T = new Twit({
    consumer_key:         process.env.twitter_api_key
  , consumer_secret:      process.env.twitter_api_secret
  , access_token:         process.env.twitter_access_token
  , access_token_secret:  process.env.twitter_access_token_secret
})


exports.view = function(req, res) {

	//T.get(oauth/request_token);
//
//  filter the twitter public stream by the word 'mango'.
//

var newArr = [];

var stream = T.stream('statuses/filter', { track: 'San Diego'});
var length = 5; // user defined length

/*stream.on('tweet', function (tweet) {

var textArr = [];  // Text array

//for(var i = 0; i < length; i++) {

    //console.log(tweet.text);
    //twitData.object.push(tweet);

    //console.log(textArr.length)

    res.render('twitter', {name: tweet.text})

//}
})*/


          res.render('twitter', {name: "hello" })



/*twitData.object.push(T.get('search/tweets', { q: 'banana since:2011-11-11', count: 10 }, function(err, reply) {
  //  ...
}));



console.log("This is T");
console.log(T);

console.log(newArr.length)

data = [];
    //data = {names:}
    console.log("in twitter")*/




    //res.render('twitter', twitData);

}
