
var express = require('express')
  ,  app = express()
	, http = require('http').Server(app)
	, path = require('path');

var request = require('request');

var expressSession = require("express-session");
var bodyParser = require('body-parser');
var mongoStore = require("connect-mongo")(expressSession);
//var mongoSessionConnectURL = "mongodb://localhost:27017/bitcoin";   //Change this if needed ................................//
var home=require('./routes/home');

// app.use(expressSession({
// 	secret: 'fjklowjafnkvnap',
//     resave: false,
//     saveUninitialized: false,
// 	duration: 30 * 60 * 1000,
// 	activeDuration: 5 * 60 * 1000,
// 	store: new mongoStore({
// 		url: mongoSessionConnectURL
// 	})
// }));


app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

//All GET methods...........................//
app.get('/', function(req, res){
	res.render('index', {});
});
app.post('/', function(req, res){
	res.render('index', {});
});

app.get('/getAPIData',function(req, res){
  request('http://www.google.com/', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(body) // Show the HTML for the Google homepage.
    }else{
      console.log(error);
    }

  });
});

app.get('/viewChart', function(req, res){
  res.render('chart');
});
app.get('/fetchLiveTransaction',function(req, res){

});

http.listen(app.get('port'), function(){
	console.log('BitCoin Analytics Node-Server listening on port ' + app.get('port'));
});
