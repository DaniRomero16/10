var express = require('express');
const PORT = 3000;
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
//------------
//configuracion de archivos
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/public/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
//------------
//creacion del servidor
server.listen(PORT, () =>{
    console.log('Servidor corriendo correctamente');
});

var mensajes = [{
    id:1,
    text:'Hola, bienvenido al maravilloso chat de Codespace',
    nickname:'Dani - Bot'
}];

io.on('connection', function (socket) {
    console.log('Te has conectado desde la ip: ' + socket.handshake.address);
    socket.emit('mensajes', mensajes);
    socket.on('add-message', function (mensaje) {
        mensajes.push(mensaje)
        io.sockets.emit('mensajes', mensajes)
    })
});








module.exports = app;