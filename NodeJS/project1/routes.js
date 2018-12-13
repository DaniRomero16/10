var app = require('./app');
var con = require('./database');
var ProjectController = require('./controllers/projectController');
var UsersController = require('./controllers/usersController');

//rutas
app.get('/',function(req, res){
    res.render('index');
});
var auth = function (req, res, next) {
    if (req.session.user)
        return next();
    else
        return res.sendStatus(404);
};
app.get('/home', auth, function(req, res){
    res.render('home', {
        email: req.session.user.email
    });
});

//insert proyectos
app.post('/proyectos/add',ProjectController.addProject);

app.post('/users/register', UsersController.registerUser);

app.post('/users/login', UsersController.loginUser);

app.get('/logout', UsersController.logoutUser);

//consultar registros
app.get('/proyectos/get', function(req, res){
    let sql = 'SELECT * from proyectos';
    con.query(sql, function(err, result){
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
});

//eliminar registros
app.post('/proyectos/delete', function(req, res){
    let sql = `delete from proyectos where id=${req.body.id}`;
    con.query(sql, function(err, result){
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
});

//modificar registros
app.post('/proyectos/update', function(req, res){
    let sql = `update proyectos set nombre='${req.body.name}' where id=${req.body.id}`;
    con.query(sql, function(err, result){
        if (err) {
            res.send(err);
        } else {
            let proyecto = {
                nombre: req.body.name
            }
            res.send(proyecto);
        }
    });
});

module.exports = app;