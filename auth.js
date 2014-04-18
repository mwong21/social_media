//load environment variables
var dotenv = require('dotenv');
dotenv.load();

var graph = require('fbgraph');
console.log("in auth")


// Add facebook api setup




// code is set
  // we'll send that and get the access token
console.log("made it")
  exports.graph = graph;

/**
* Add your authentication apis here with example like the bottom
*/
/**
//add instagram api setup
var ig = require('instagram-node-lib');
ig.set('client_id', process.env.instagram_client_id);
ig.set('client_secret', process.env.instagram_client_secret);

//export ig as a parameter to be used by other methods that require it.
exports.ig = ig;
**/