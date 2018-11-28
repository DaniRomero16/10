drop database if exists portfolio;
CREATE DATABASE IF NOT EXISTS portfolio;

use portfolio;

DROP table IF EXISTS proyectos;

CREATE TABLE proyectos (
   id      INT             NOT NULL AUTO_INCREMENT,
   nombre           VARCHAR(45) default null,
    descripcion      VARCHAR(100) default null,
    categoria        VARCHAR(45) default null,
    lenguaje         VARCHAR(45) default null,
   año              VARCHAR(45) default null,
   PRIMARY KEY (id)
);