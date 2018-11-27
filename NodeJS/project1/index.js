
var mysql = require('mysql');
var app = require('./app');
var port = 3000;
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database:"portfolio"
});
  
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

app.listen(port, () =>{
    console.log('Servidor corriendo correctamente');
});