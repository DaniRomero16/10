var con = require('../database');
var fs = require('fs');

var controller = {
    addTarea: function (req, res) {
        let sql = `INSERT INTO tarea (nombre) VALUES ('${req.body.nombre}')`;
        con.query(sql, function (err, result) {
            if (err) {
                console.log(err);
                return res.send(err);
            } else {
                let tarea = {
                    id: result.insertId,
                    nombre: req.body.nombre,
                    estado: req.body.estado
                }
                return res.send(tarea);
            }
        });
    },
    getTareas: function (req, res) {
        let sql = 'SELECT * from tarea';
        con.query(sql, function (err, result) {
            if (err) {
                return res.send(err);
            } else {
                return res.send(result);
            }
        });
    },
    deleteTareas: function (req, res) {
        let sql = `delete from tarea where id=${req.body.id}`;
        con.query(sql, function (err, result) {
            if (err) {
                return res.send(err);
            } else {
                return res.send(result);
            }
        });
    },
    updateTareas: function (req, res) {
        let sql = `update tarea set estado='${req.body.estado}' where id=${req.body.id}`;
        con.query(sql, function (err, result) {
            if (err) {
                return res.send(err);
            } else {
                let tarea = {
                    nombre: req.body.nombre,
                    result: result
                }
                return res.send(tarea);
            }
        });
    },
    addImg: function (req, res) {
        let oldPath = req.files.foto.path;
        let newPath = './public/img/' + req.files.foto.originalFilename;
        let todb = '../img/' + req.files.foto.originalFilename;
        fs.rename(oldPath, newPath, function (err) {

        });
        let sql = `INSERT INTO tarea (nombre, foto) VALUES ('${req.body.nombre}','${todb}')`;
        con.query(sql, function (err, result) {
            if (err) {
                return res.send(err);
            } else {
                let tarea = {
                    id: result.insertId,
                    nombre: req.body.nombre,
                    foto: todb
                }
                return res.send(tarea);
            }
        });

    },
    getTarea: function (req, res) {
        let sql = `SELECT * from tarea where id=${req.query.id}`;
        con.query(sql, function (err, result) {
            if (err) {
                return res.send(err);
            } else {
                return res.render('example', {
                    resultado: result
                });
            }
        })
    }
}

module.exports = controller;