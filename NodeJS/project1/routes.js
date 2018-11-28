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

module.exports = app;
module.exports = con;