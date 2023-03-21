create database Museu;

use Museu;

create table usuario (
idusuario int primary key auto_increment,
nome char (14),
email varchar (50),
senha varchar (15)
);

create table empresa(
idEmpresa int primary key auto_increment,
nome varchar (50),
cnpj char (14),
email varchar (50)
);

create table sensor (
idSensor int primary key auto_increment,
nomeSensor varchar (30),
localSensor varchar(30)
);

create table dados (
idDado int primary key auto_increment,
temperatura double,
umidade double,
dtHora datetime default current_timestamp);

insert into usuario(nome,email,senha) values
	('João','Joao@email.com','1234567'),
	('Pedro','pedroConde@email.com','4567io'),
	('Maria','mariaFarma@email.com','45678909'),
	('Julia','julia@email.com','456789');

insert into empresa (nome,cnpj, email) values
	('Museu Ipiranga','12345678901234','Ipiranga@email.com'),
	('Masp','10101010101010','Masp@email.com'),
	('Museu AfroBrasileiro','20202020202020','afroBrasileiro@email.com'),
	('Pinacoteca','30303030303030','pinacoteca@email.com');
    
insert into sensor (nomeSensor, localSensor) values
	('Dht_11','Sala 10 Masp'),
	('Dht_11','Sala 3 Ipiranga'),
	('Dht_11','sala 21 Pinacoteca'),
	('Dht_11','Sala 2 Museu AfroBrasileiro');

insert into dados(temperatura,umidade) values
	('20.00','55.21'),
	('21.00','61.13'),
	('22.00','77.18'),
	('23.0','61.12');
    
select * from usuario;

select * from sensor;

select * from empresa;

select nome from usuario
	where idUsuario = 3;
    
select email from empresa
	where nome = 'Masp';
    
select temperatura from dados
	where temperatura < '21.3';
    
