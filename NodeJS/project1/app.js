var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({extended:false}));

app.use(bodyParser.json());

app.get('/prueba', function(request,response){
    response.status(200).send(
        '<h1>Página de dfgj</h1>'
    )
});
module.exports = app;

