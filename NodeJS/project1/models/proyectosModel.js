var mongoose = require('../database');
var Schema = mongoose.Schema;

var proyectosSchema = Schema({
    nombre: String,
    descripcion: String
});
module.exports = mongoose.model('proyectos', proyectosSchema);