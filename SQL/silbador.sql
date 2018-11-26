drop database if exists silbador;
create database silbador;

use silbador;


CREATE TABLE usuario (
    handle varchar (20) not null primary key,
    nombre varchar(50) NOT NULL,
    primer_apellido VARCHAR(50) not NULL,
    segundo_apellido VARCHAR(50),
    email VARCHAR(50) not NULL,
    password VARCHAR(50) not NULL
);

CREATE TABLE silbido (
	silbID  INT NOT NULL AUTO_INCREMENT,
    handleUser varchar (20) NOT NULL ,
    fecha timestamp NOT NULL default current_timestamp,
    contenido varchar (160) not null,
    PRIMARY KEY(silbID),
    FOREIGN KEY silb_Usuario_fk(handleUser) REFERENCES usuario(handle)
);

CREATE TABLE seguir (
    seguidor varchar (20) NOT NULL ,
    seguido varchar (20) NOT NULL ,
    PRIMARY KEY(seguidor, seguido),
    foreign key seguidor_fk(seguidor) references usuario(handle),
    foreign key seguido_fk(seguido) references usuario(handle)
);

CREATE TABLE mencion (
    mencionado varchar (20) not null,
	silbido INT NOT NULL,
    PRIMARY KEY(mencionado, silbido),
    foreign key mencionado_fk(mencionado) references usuario(handle),
    foreign key men_silb_fk(silbido) references silbido (silbID)
);

CREATE TABLE topic (
    hashtag varchar (160) not null,
	silbido INT NOT NULL,
    PRIMARY KEY(hashtag, silbido),
    foreign key topic_silb_fk(silbido) references silbido (silbID)
);









