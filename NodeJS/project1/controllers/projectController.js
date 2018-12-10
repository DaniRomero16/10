var con = require('../database');

var controller = {

    addProject: function (req, res) {
        let sql = `INSERT INTO proyectos (nombre) VALUES ('${req.body.name}')`;
        con.query(sql, function (err, result) {
            if (err) {
               return res.send(err);
            }
            else {
                let proyecto = {
                    id: result.insertId,
                    nombre: req.body.name
                }
                return  res.send(proyecto);
            }
        });
    }

};

module.exports = controller;