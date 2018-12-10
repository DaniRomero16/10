var app = require('./app');
var ProjectController = require('./controllers/projectController');

//rutas
app.get('/',function(req, res){
    res.render('index');
});

//insert proyectos
app.post('/proyectos/add',ProjectController.addProject);

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