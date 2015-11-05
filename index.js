var express = require('express')
var app = express()
var path = require('path');

var temperatura=require("./temperature.js");

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
var expressLayouts = require('express-ejs-layouts');
app.set('layout', 'layout');
app.use(express.static('.'));
app.use(expressLayouts);
app.set('port', (process.env.PORT || 8080));
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/', function(req, res){
	res.render('index');
});
app.post('/', function(req, res){

	  var temp =  new temperatura();
		temp.inicializa(req.body.ini_temp)
		var result = temp.calc();
		res.render('res', {respuesta: result});

});

app.listen(app.get('port'), function() {
console.log("Node app is running at localhost:" + app.get('port'));
});
