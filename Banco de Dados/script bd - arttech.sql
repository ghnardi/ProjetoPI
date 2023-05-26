create database arttech;
use arttech;

create table empresa (
idEmpresa int primary key auto_increment,
nome varchar (50),
cnpj char (14),
email varchar(50),
cep char(9)
);

create user 'arttech'@'10.18.32.239' identified by 'sptech';
grant all privileges on arttech.registro to 'arttech'@'10.18.32.239';

select * from usuario;
create table usuario (
idUsuario int auto_increment,
nome varchar(45),
email varchar(45),
senha varchar(45),
fkEmpresa int,
fkAdmin int,
constraint fkAdmin foreign key (fkAdmin) references usuario(idUsuario),
constraint fkEmpresa foreign key (fkEmpresa) references empresa(idEmpresa),
primary key (idUsuario, fkEmpresa)
)auto_increment = 100;

create table localInstalacao (
idLocal int auto_increment,
nome varchar(45),
fkEmpresa int,
constraint fkLocalEmp foreign key (fkEmpresa) references empresa(idEmpresa),
primary key (idLocal, fkEmpresa)
);


create table sensores (
idSensor int primary key auto_increment,
modelo varchar (45),
fkLocais int,
constraint fkSensorLocal foreign key (fkLocais) references localInstalacao(idLocal)
);


create table registro (
idRegistro int auto_increment,
dataHora datetime,
umidade float,
temperatura float,
fkSensor int,
constraint fkRegistroSensor foreign key (fkSensor) references sensores(idSensor),
primary key (idRegistro, fkSensor)
);
select * from registro;


select umidade, temperatura, dataHora from registro where fkSensor = 1 order by idRegistro desc limit 6;
insert into registro(umidade, temperatura, dataHora, fkSensor) values
	(90,10, now(), 1),
    (52,0, now(), 1),
    (11,70, now(), 1),
    (16,90, now(),1 ),
    (99,20, now(), 1),
    (10,50, now(), 1);


-- INSERINDO EMPRESAS
insert into empresa values 
(null,'museu1','12345678912345','museu1@sptech.school', '09581-310'),
(null,'museu2','12345678912345','museu1@sptech.school', '09581-310'),
(null,'museu3','12345678912345','museu1@sptech.school', '09581-310');

select * from empresa;
-- INSERINDO USUARIOS

-- USUARIO ADM
insert into usuario values 
(null,'Matheus', 'matheus.santiago@sptech.school', '@12345678', 2, null);
-- USUARIO COMUM
insert into usuario values 
(null,'Douglas', 'douglas.queiroz@sptech.school', '@12345678', 1, 100),
(null,'Thiago','thiago.garcia@sptech.school' ,'@12345678',2, 100),
(null,'Lucas', 'lucas.flima@sptech.school', '21102002', 3, 100);

select * from usuario;

-- INSERINDO ALAS
insert into localInstalacao values 
(null, 'ala1', 3),
(null, 'ala2', 3),
(null, 'ala3', 3),
(null, 'ala4', 3),
(null, 'ala1', 1),
(null, 'ala2', 1),
(null, 'ala3', 1),
(null, 'ala1', 2),
(null, 'ala2', 2);
select * from localInstalacao;

-- INSERINDO SENSOR
select * from registro;
insert into sensores values 
(null, 'DHT11',1),
(null, 'DHT11',1),
(null, 'DHT11',1),
(null, 'DHT11',2),
(null, 'DHT11',2),
(null, 'DHT11',3),
(null, 'DHT11',4),
(null, 'DHT11',4),
(null, 'DHT11',4),
(null, 'DHT11',5),
(null, 'DHT11',6),
(null, 'DHT11',7),
(null, 'DHT11',8),
(null, 'DHT11',9);
select * from sensores;

-- INSERINDO REGISTROS

insert into registro values 
(null, '2023-03-20', 48.3, 20.52, 1),
(null, '2023-10-20', 41.3, 21.05, 1),
(null, '2023-11-10', 43.7, 20.15, 1),
(null, '2023-09-10', 48.7, 19.75, 1),
(null, '2023-12-10', 41.7, 20.25, 1),
(null, '2023-01-10', 42.7, 20.3, 1),
(null, '2023-02-10', 41.9, 21.1, 2),
(null, '2023-02-10', 42.9, 20.22, 2),
(null, '2023-03-10', 48.7, 19.85, 2),
(null, '2023-04-10', 41.7, 20.8, 2),
(null, '2023-03-10', 43.2, 21.15, 2),
(null, '2023-02-10', 48.4, 22.15, 2),
(null, '2023-05-10', 42.1, 19.25, 3),
(null, '2023-11-10', 43.7, 20.15, 3),
(null, '2023-01-10', 45.85, 23.15, 3),
(null, '2023-01-10', 43.5, 29.1, 3),
(null, '2023-01-10', 41.5, 25.1, 3),
(null, '2023-07-10', 47.72, 20.15, 3),
(null, '2023-07-10', 42.2, 26.2, 4),
(null, '2023-07-10', 43.1, 21.54, 4),
(null, '2023-07-10', 47.5, 20.1, 4),
(null, '2023-07-10', 41.5, 20.5, 4),
(null, '2023-07-10', 48.1, 23.5, 4),
(null, '2023-07-10', 41, 29.1, 4),
(null, '2023-07-10', 47, 29, 5),
(null, '2023-07-10', 40, 22, 5),
(null, '2023-07-10', 41, 21, 5),
(null, '2023-07-10', 43, 23, 5),
(null, '2023-07-10', 45, 20, 5),
(null, '2023-07-10', 41, 21.5, 5),
(null, '2023-07-10', 47, 21, 6),
(null, '2023-07-10', 42, 28, 6),
(null, '2023-07-10', 41, 23, 6),
(null, '2023-07-10', 47, 24, 6),
(null, '2023-07-10', 43, 22, 6),
(null, '2023-07-10', 44, 25, 6);


-- SELECTs 

select usuario.*, empresa.nome 
	from usuario join empresa 
		on usuario.fkEmpresa = empresa.idEmpresa;


select * 
	from usuario join usuario as adm
		on usuario.fkAdmin = adm.idUsuario;
        
        
select sensores.idSensor, registro.*
	from sensores join registro
		on sensores.idSensor = registro.idRegistro;
        
select sensores.idSensor, registro.*
	from sensores join registro
		on sensores.idSensor = registro.idRegistro
			where dataHora = '2023-02-10';
            
select sensores.idSensor, localInstalacao.nome, empresa.nome
	from sensores join localInstalacao 
		on localInstalacao.idLocal = sensores.fkLocais
			join empresa
				on localInstalacao.fkEmpresa = empresa.idEmpresa;