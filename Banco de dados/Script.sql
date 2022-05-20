CREATE USER if not exists 'choosehair'@'localhost' IDENTIFIED BY 'senac2022';
GRANT ALL PRIVILEGES ON choosehair. * TO 'choosehair'@'localhost';
FLUSH PRIVILEGES;

create database if not exists choosehair;

use choosehair;

CREATE TABLE cliente (
    id_cli Integer AUTO_INCREMENT PRIMARY KEY,
    nome varchar(50),
    cpf varchar(13),
    email varchar(50),
    senha varchar(8),
    genero varchar(10)
);

CREATE TABLE cabeleireiro (
    id_cabe Integer AUTO_INCREMENT PRIMARY KEY,
    nome varchar(50),
    cpf varchar(13),
    e_mail varchar(50),
    senha varchar(8),
    horarioatend varchar(50),
    logradouro varchar(50),
    numero integer,
    bairro varchar(50),
    cidade varchar(50),
    foto longblob,
    telefone varchar(10)
);

CREATE TABLE cabelo (
    id_cab Integer AUTO_INCREMENT PRIMARY KEY,
    descricao varchar(50),
    foto longblob,
    tamanho varchar(10)
);

CREATE TABLE agendamento (
    id_agend Integer AUTO_INCREMENT PRIMARY KEY,
    horario time,
    dt_agendada date,
    confirmado boolean,
    fk_id_cli_agend integer,
    fk_id_cabe_agend integer,
	FOREIGN KEY (fk_id_cli_agend) REFERENCES cliente (id_cli),
    FOREIGN KEY (fk_id_cabe_agend) REFERENCES cabeleireiro (id_cabe)
);

CREATE TABLE cabelo_profi (
    fk_id_cab_pro integer,
    fk_id_cabe_cab_pro integer,
    FOREIGN KEY (fk_id_cab_pro) REFERENCES cabelo (id_cab),
	FOREIGN KEY (fk_id_cabe_cab_pro) REFERENCES cabeleireiro (id_cabe)
);
