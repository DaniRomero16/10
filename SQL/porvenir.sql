drop database if exists porvenir;
create database porvenir;

use porvenir;

CREATE TABLE identificador (
    idIden varCHAR(3) not null,
    tipo_identificador varchar(25) NOT NULL,
    PRIMARY KEY(idIden)
);

CREATE TABLE sucursal (
    idSucursal INT NOT NULL AUTO_INCREMENT,
    direccion varchar(100) NOT NULL,
    telefono varchar(20) NOT NULL,
    comunidad VARCHAR(25) NOT NULL,
    provincia VARCHAR(20) not null,
    PRIMARY KEY(idSucursal)
);

CREATE TABLE funcionario (
    idFuncionario INT NOT NULL AUTO_INCREMENT,
    fecha_ingreso timestamp NOT NULL default current_timestamp,
    nombre varchar(30) NOT NULL,
    primer_apellido VARCHAR(50) NOT NULL,
    segundo_apellido VARCHAR(50),
    nivel_academico char(3) not null,
    clasificacion char(1) not null,
    sucursal int not null,
    PRIMARY KEY(idFuncionario),
    FOREIGN KEY func_sucursal_fk(sucursal) REFERENCES sucursal(idSucursal)
);

CREATE TABLE cliente (
    idCliente INT NOT NULL AUTO_INCREMENT,
    numIden VARCHAR(9) unique NOT NULL,
    typeIden varCHAR(3) not null,
    nombre VARCHAR(30) not NULL,
    primer_apellido VARCHAR(50) not NULL,
    segundo_apellido VARCHAR(50),
    birthdate date not null,
    fecha_alta timestamp default current_timestamp not null,
    funcionario int not null,
    PRIMARY KEY(idCliente),
    foreign key client_func_fk(funcionario) references funcionario (idFuncionario),
    foreign key client_iden_fk(typeIden) references identificador (idIden)
);

CREATE TABLE expediente (
    idExpediente INT NOT NULL AUTO_INCREMENT,
	info_soporte longtext NOT NULL,
    cliente int not null,
    funcionario int not NULL,
    grado_riesgo char(1) not NULL,
    open_date date not null,
    res_date date not null,
    resolution boolean not null,
    PRIMARY KEY(idExpediente),
    foreign key exp_client_fk(cliente) references cliente (idCliente),
    foreign key exp_func_fk(funcionario) references funcionario (idFuncionario)
);

CREATE TABLE prestamo (
    idPrestamo INT NOT NULL AUTO_INCREMENT,
    expediente int NOT NULL,
    cliente int NOT NULL,
    funcionario int NOT NULL,
    open_date date not null,
    trans_date date not null,
    comments mediumtext null,
    PRIMARY KEY(idPrestamo),
    FOREIGN KEY pres_exp_fk(expediente) REFERENCES expediente(idExpediente),
    FOREIGN KEY pres_client_fk(cliente) REFERENCES cliente(idCliente),
    FOREIGN KEY pres_func_fk(funcionario) REFERENCES funcionario(idFuncionario)
);








