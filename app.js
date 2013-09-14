
/**
 * Module dependencies.
 */

var express = require('express');
var stylus = require('stylus');
var routes = require(__dirname + '/routes');
var investments = require(__dirname + '/routes/investments');
var about = require(__dirname + '/routes/about');
var http = require('http');
var path = require('path');
var app = express();

/**
 * Other Variables
 */
 var oneDay = 86400000;

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.compress());
app.use(stylus.middleware({
	src: __dirname + '/resources',
	dest: __dirname + '/public',
	compile: function (str, path){
		return stylus(str)
		.set('compress', true);
	}
}));
app.use(app.router);

// Mark the public directory as a static dir
// app.use(express.static(__dirname + '/public', { maxAge: oneDay }));
app.use(express.static(__dirname + '/public'));
app.use('/investments', express.static(__dirname + '/public'));
app.use('/about', express.static(__dirname + '/public'));
app.use('/team', express.static(__dirname + '/public'));


app.use(express.responseTime());
app.use(function (req, res) {
	res.status(400);
	res.send("404");
});

//ROUTING
//All Environments

app.get('/', routes.index);

//Investments
app.get('/investments/german-residential', investments.germanResidential);
app.get('/investments/student-housing', investments.studentHousing);
app.get('/investments/commercial', investments.commercial);

//About Us
app.get('/about/history', about.history);
app.get('/about/investment-themes', about.investmentThemes);
app.get('/about/expertise', about.expertise);
app.get('/about/record', about.record);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

