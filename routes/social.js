var facebook = require('../public/data/facebook.json');


console.log("in js")
exports.view = function(req, res) {
  var data;
console.log("in view")

// Load environment variables
var dotenv = require('dotenv');
dotenv.load();

// Add facebook api setup
//var graph = require('fbgraph');
var auth = require('../auth');
var graph = auth.graph;
//graph.authorize('client_id', process.env.facebook_app_id);
//graph.authorize('client_secret', process.env.facebook_app_secret);

var conf = {
    client_id:      process.env.facebook_app_id
  , client_secret:  process.env.facebook_app_secret
  , scope:          'email, user_about_me, user_birthday, user_location, publish_stream'
  , redirect_uri:   'http://localhost:3000/'
};




 fbAsyncInit = function(data) {
  FB.init({
    appId      : 608436179247204,
    status     : true, // check login status
    cookie     : true, // enable cookies to allow the server to access the session
    xfbml      : true  // parse XFBML
  });

  // Here we subscribe to the auth.authResponseChange JavaScript event. This event is fired
  // for any authentication related change, such as login, logout or session refresh. This means that
  // whenever someone who was previously logged out tries to log in again, the correct case below 
  // will be handled. 
  FB.Event.subscribe('auth.authResponseChange', function(response) {
    // Here we specify what we do with the response anytime this event occurs. 
     console.log("IN HERE")
    if (response.status === 'connected') {
      // The response object is returned with a status field that lets the app know the current
      // login status of the person. In this case, we're handling the situation where they 
      // have logged in to the app.

      testAPI();





    } else if (response.status === 'not_authorized') {
      // In this case, the person is logged into Facebook, but not into the app, so we call
      // FB.login() to prompt them to do so. 
      // In real-life usage, you wouldn't want to immediately prompt someone to login 
      // like this, for two reasons:
      // (1) JavaScript created popup windows are blocked by most browsers unless they 
      // result from direct interaction from people using the app (such as a mouse click)
      // (2) it is a bad experience to be continually prompted to login upon page load.
      FB.login();
    } else {
      // In this case, the person is not logged into Facebook, so we call the login() 
      // function to prompt them to do so. Note that at this stage there is no indication
      // of whether they are logged into the app. If they aren't then they'll see the Login
      // dialog right after they log in to Facebook. 
      // The same caveats as above apply to the FB.login() call here.
      FB.login();
    }
  });
  };



  // Here we run a very simple test of the Graph API after login is successful. 
  // This testAPI() function is only called in those cases. 

  // added



  function testAPI() {

    loggedin = true;
    console.log('Welcome!  Fetching your information.... ');


    FB.api('/me', function(response) {
      console.log('Good to see you, okieiekei' + response.name + '.');
             console.log('Good to see you, ' + response.email + '.');
             console.log('Good to see you, ' + response.id + '.');
             console.log(response);
             testing(response);
console.log("TESTING");
             response.name;

console.log("response IS " + response);

//data = {object: response};

facebook.push(response);


    });



  }

  function testing(response) {
  console.log("here we are" + response);
  console.log(response);


  FB.api('/'+response.id, function(response2) {
      console.log(response2);
      console.log(response2.birthday);

    });

  }




   
graph.get("/me", function(err, res) {
    //Store user data after stringfying it
    var data = JSON.stringify(res);
    //Log returned data
    console.log("whoo, here I am " + data);
    });

	//res.render('social', facebook);
  res.render('social', facebook);
}