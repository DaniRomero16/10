var con = require('../database');

proyectosModel = require('../models/proyectosModel');

var controller = {

    // addProject: function (req, res) {
    //     let sql = `INSERT INTO proyectos (nombre) VALUES ('${req.body.nombre}')`;
    //     con.query(sql, function (err, result) {
    //         if (err) {
    //            return res.send(err);
    //         }
    //         else {
    //             let proyecto = {
    //                 id: result.insertId,
    //                 nombre: req.body.nombre
    //             }
    //             return  res.send(proyecto);
    //         }
    //     });
    // },
    addProjectMongo: (req, res) => {
        proyecto = new proyectosModel();
        proyecto.nombre = req.body.name;
        proyecto.save((err, result) => {
            if (err) {
                return res.send(err);
            } else {
                let proyecto = {
                    id:result._id,
                    nombre:result.nombre
                }
                return res.status(200).send(proyecto)
            }
        })
    },
    getProjects: (req, res) => {
        proyectosModel.find({}, (err, result) => {
            if (err) {
                res.send(err)
            } else {
                res.status(200).send(result);
            }

        })
    },
    deleteProjects: function (req, res) {
        let projectId = req.body.id;
        proyectosModel.findByIdAndDelete(projectId, (err, result) => {
            if (err) {
                res.send(err)
            } else {
                res.status(200).send(result);
            }
        })
    },
    updateProject: function (req, res) {
        let projectId = req.body.id;
        let update = {
            nombre: req.body.name
        }
        proyectosModel.findByIdAndUpdate(projectId, update, (err, result) => {
            if (err) {
                res.send(err)
            } else {
                res.status(200).send(result);
            }
        })
    }

};

module.exports = controller;