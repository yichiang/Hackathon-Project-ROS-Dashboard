
'use strict'

var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');

var port = process.env.PORT||3000;

var app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname));

app.get('/', function(req,res){
	res.send('index.html');
})


app.listen(port, function() {
    console.log( 'listening on port ' + port);

});
