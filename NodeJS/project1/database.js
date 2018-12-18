// var mysql = require('mysql');
var mongoose = require('mongoose');

// var con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database:"portfolio"
// });
  
// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
// });


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/portfolio', { useNewUrlParser: true })
    .then(() => {
        console.log('La conexión a MongoDB ha sido realizada correctamente')
    })
    .catch(err => console.log(err));

module.exports = mongoose;

// module.exports = con;