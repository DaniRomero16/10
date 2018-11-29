var con = require('./database');
var app = require('./app');

//rutas
app.get('/',function(req, res){
    res.render('index');
});

//insert proyectos
app.post('/proyectos/add',function(req,res){
    let sql = `INSERT INTO proyectos (nombre, descripcion, categoria, lenguaje, año) VALUES ('${req.body.name}', '${req.body.descripcion}', '${req.body.category}', '${req.body.language}', '${req.body.date}')`;
    con.query(sql, function(err, result){
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            let proyecto = {
                id: result.insertId,
                nombre: req.body.name,
                descripcion: req.body.descripcion,
                categoria: req.body.category,
                lenguaje: req.body.language,
                anyo: req.body.date
            }
            res.send(proyecto);
        }
    });
});

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
module.exports = con;