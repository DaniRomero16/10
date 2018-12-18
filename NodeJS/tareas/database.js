var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/tareas', { useNewUrlParser: true })
    .then(() => {
        console.log('La conexión a MongoDB ha sido realizada correctamente')
    })
    .catch(err => console.log(err));

module.exports = mongoose;