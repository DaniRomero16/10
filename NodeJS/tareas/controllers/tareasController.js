var fs = require('fs');
tareaModel = require('../models/tarea');

var controller = {
    addTarea: (req, res) => {
        tarea = new tareaModel();
        tarea.nombre = req.body.name;
        tarea.save((err, result) => {
            if (err) {
                return res.send(err);
            } else {
                return res.status(200).send(result)
            }
        })
    },
    getTareas: (req, res) => {
        tareaModel.find({}, (err, result) => {
            if (err) {
                res.send(err)
            } else {
                res.status(200).send(result);
            }

        })
    },
    deleteTareas: function (req, res) {
        tareaModel.findByIdAndDelete(req.body.id, (err, result) => {
            if (err) {
                res.send(err)
            } else {
                res.status(200).send(result);
            }
        })
    },
    updateTareas: function (req, res) {
            let update = {
                estado: req.body.estado
            }
            tareaModel.findByIdAndUpdate(req.body.id, update, (err, result) => {
                if (err) {
                    res.send(err)
                } else {
                    res.status(200).send(result);
                }
            })
        },
    addImg: function (req, res) {
        let oldPath = req.files.foto.path;
        let newPath = './public/img/' + req.files.foto.originalFilename;
        let todb = '../img/' + req.files.foto.originalFilename;
        fs.rename(oldPath, newPath, function (err) {

        });
        tarea = new tareaModel();
        tarea.nombre = req.body.name;
        tarea.foto = todb;
        tarea.save((err, result) => {
            if (err) {
                return res.send(err);
            } else {
                return res.status(200).send(result)
            }
        })

    },
    getTarea: function (req, res) {
        tareaModel.findById(req.query.id, function (err, result) {
            if (err) {
                return res.send(err);
            } else {
                return res.render('example', {
                    resultado: result
                });
            }
        });
        
    }
}

module.exports = controller;