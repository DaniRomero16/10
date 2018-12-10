var tareasController = require('./controllers/tareasController');
var app = require('./app');
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart({ uploadDir: './public/img' });


//rutas
app.get('/', function (req, res) {
    res.render('index');
});

//insert tareas
app.post('/tareas/add', tareasController.addTarea);

//consultar registros
app.get('/tareas/get', tareasController.getTareas);

//eliminar registros
app.post('/tareas/delete', tareasController.deleteTareas);

//modificar registros
app.post('/tareas/update', tareasController.updateTareas);

app.post('/tareas/addimg', multipartMiddleware, tareasController.addImg);

module.exports = app;
