var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
const PORT = 3000;
var app = express();

//middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//------------
//configuracion de archivos
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/public/views');
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');
//------------
//sesiones
app.use(session({
    secret:'cadena aleatoria',
    resave:true,
    saveUninitialized:true,
    cookie: {
        maxAge: 2 * 24 * 60 * 60 * 1000
    }
}));
//-------------
//creacion del servidor
app.listen(PORT, () =>{
    console.log('Servidor corriendo correctamente');
});

module.exports = app;