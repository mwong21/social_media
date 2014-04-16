//dependencies for each module used
var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars');

var twit = require('twit');
var app = express();

//route files to load
var index = require('./routes/index');

//database setup - uncomment to set up your database
//var mongoose = require('mongoose');
//mongoose.connect(process.env.MONGOHQ_URL || 'mongodb://localhost/DATABASE1);

//Configures the Template engine
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.bodyParser());

//routes
app.get('/', index.view);
app.get('/social', function (req, res) {
  res.render('social');
})
//app.post('/social', social.getSocial);


//set environment ports and start application
app.set('port', process.env.PORT || 3000);
http.createServer(app).listen(app.get('port'), function(){
	console.log('Express server listening on port ' + app.get('port'));
});

// stuff I added
// Load environment variables
var dotenv = require('dotenv');
dotenv.load();

// Add facebook api setup
var graph = require('fbgraph');
//graph.authorize('client_id', process.env.facebook_app_id);
//graph.authorize('client_secret', process.env.facebook_app_secret);

var conf = {
    client_id:      process.env.facebook_app_id
  , client_secret:  process.env.facebook_app_secret
  , scope:          'email, user_about_me, user_birthday, user_location, publish_stream'
  , redirect_uri:   'http://localhost:3000/'
};


console.log(conf.client_id);

// Routes

app.get('/', function(req, res){
  res.render("index", { title: "click link to connect" });
});

app.get('/auth/facebook', function(req, res) {

  // we don't have a code yet
  // so we'll redirect to the oauth dialog
  if (!req.query.code) {
    var authUrl = graph.getOauthUrl({
        "client_id":     conf.client_id
      , "redirect_uri":  conf.redirect_uri
      , "scope":         conf.scope
    });

    if (!req.query.error) { //checks whether a user denied the app facebook login/permissions
      res.redirect(authUrl);
    } else {  //req.query.error == 'access_denied'
      res.send('access denied');
    }
    return;
  }

  // code is set
  // we'll send that and get the access token
  graph.authorize({
      "client_id":      conf.client_id
    , "redirect_uri":   conf.redirect_uri
    , "client_secret":  conf.client_secret
    , "code":           req.query.code
  }, function (err, facebookRes) {
    res.redirect('/UserHasLoggedIn');
  });


});