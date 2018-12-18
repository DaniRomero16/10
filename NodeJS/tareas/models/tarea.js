var mongoose = require('../database');
var Schema = mongoose.Schema;

var tareaSchema = Schema({
    nombre: String,
    estado: { type: String, default: 'pendiente' },
    foto: String
})
module.exports = mongoose.model('tarea', tareaSchema);