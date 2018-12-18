var tareasController = require('./controllers/tareasController');
var app = require('./app');
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart({ uploadDir: './public/img' });
var UsersController = require('./controllers/usersController');

var auth = function (req, res, next) {
    if (req.session.user)
        return next();
    else
        return res.render('log');
};
//rutas
app.get('/', function (req, res) {
    res.render('index');
});

app.get('/home', auth, function (req, res) {
    res.render('index', {
        rol: req.session.user.rol,
        name: req.session.user.user
    });
});

app.post('/users/register', UsersController.registerUser);
app.post('/users/login', UsersController.loginUser);

//insert tareas
app.post('/tareas/add', tareasController.addTarea);

//consultar registros
app.get('/tareas/get', tareasController.getTareas);

//eliminar registros
app.post('/tareas/delete', tareasController.deleteTareas);

//modificar registros
app.post('/tareas/update', tareasController.updateTareas);

app.post('/tareas/addimg', multipartMiddleware, tareasController.addImg);

app.get('/example', tareasController.getTarea);

module.exports = app;
