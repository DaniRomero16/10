var routes = require('../routes');
var chai = require('chai');
var chaiHttp = require('chai-http');
var con = require('../database');
var should = chai.should();
chai.use(chaiHttp);

describe('/GET project', () => {
    it('Devuelve todos los proyectos', (done)=> {
      chai.request(routes)
          .get('/proyectos/get')
          .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
            done();
          });
    });
});

describe('/POST project', () => {
    it('Inserta un proyecto', (done) => {
        let proyecto = {
            nombre: "Nuevo proyecto"
        }
        chai.request(routes)
            .post('/proyectos/add')
            .send(proyecto)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('id').be.a('number');
                res.body.should.have.property('nombre').be.a('string');
                done();
            });
    });
    it('Elimina un proyecto', (done) => {
        let sql = `INSERT INTO proyectos (nombre) VALUES ('test')`;
        con.query(sql, function (err, result) {
            let id = { id: result.insertId };
            chai.request(routes)
                .post('/proyectos/delete')
                .send(id)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('affectedRows').eql(1);
                    done();
                });
        });
    });
    it('No elimina un proyecto que no existe', (done) => {
        let proyecto = {
            id: 0
        }
        chai.request(routes)
            .post('/proyectos/delete')
            .send(proyecto)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('affectedRows').eql(0);
                done();
            });
    });
    it('Actualiza un proyecto', (done) => {
        let sql = `INSERT INTO proyectos (nombre) VALUES ('test')`;
        con.query(sql, function (err, result) {
            let proyecto = { id: result.insertId, nombre: 'Update' };
            chai.request(routes)
                .post('/proyectos/update')
                .send(proyecto)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('affectedRows').eql(1);
                    done();
                });
        });
    });
    it('No actualiza un proyecto que no existe', (done) => {
        let proyecto = {
            id: 0,
            nombre:'prueba'
        }
        chai.request(routes)
            .post('/proyectos/update')
            .send(proyecto)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('affectedRows').eql(0);
                done();
            });
    });
});