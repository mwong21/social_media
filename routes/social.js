          // Twitter stuff
var dotenv = require('dotenv');
dotenv.load();
var Twit = require('twit')

var T = new Twit({
    consumer_key:         process.env.twitter_api_key
  , consumer_secret:      process.env.twitter_api_secret
  , access_token:         process.env.twitter_access_token
  , access_token_secret:  process.env.twitter_access_token_secret
})

console.log(T);

exports.view = function(req, res) {
//
//  filter the twitter public stream by the word 'mango'.
//
/*
stream.on('tweet', function (tweet) {
  console.log(tweet)
})    */


    console.log("in social")
    res.render('social');

}