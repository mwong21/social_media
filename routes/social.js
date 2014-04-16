var facebook = require('../public/data/facebook.json');

exports.view = function(req, res) {


  FB.api('/me', function(response) {
      console.log('Good to see you, ' + response.name + '.');
             console.log('Good to see you, ' + response.email + '.');
             console.log('Good to see you, ' + response.id + '.');
             console.log(response);
             testing(response);
console.log("TESTING");
             response.name;


    facebook.push(response.name);

    });


	res.render('social', facebook);
}