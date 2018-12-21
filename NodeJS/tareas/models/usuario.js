var mongoose = require('../database');
var Schema = mongoose.Schema;

var usuarioSchema = Schema({
    nombre: String,
    password: String,
    email: String,
    rol:{ type: String, default: 'invitado' }
})
module.exports = mongoose.model('usuario', usuarioSchema);