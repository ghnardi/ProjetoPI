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
(null,'Guilherme', 'guilherme.queiroz@sptech.school', '@12345678',2, 100),
(null,'Lucas', 'lucas.queiroz@sptech.school', '@12345678', 3, 100);

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
(null, '2023-10-20', 46.3, 21.05, 1),
(null, '2023-11-10', 44.7, 20.15, 2),
(null, '2023-09-10', 45.7, 19.75, 3),
(null, '2023-12-10', 46.7, 20.25, 4),
(null, '2023-01-10', 47.7, 20.3, 5),
(null, '2023-02-10', 44.9, 21.1, 5),
(null, '2023-02-10', 47.9, 20.22, 6),
(null, '2023-03-10', 48.7, 19.85, 7),
(null, '2023-04-10', 45.7, 20.8, 8),
(null, '2023-03-10', 49.2, 21.15, 9),
(null, '2023-02-10', 44.4, 22.15, 10),
(null, '2023-05-10', 44.1, 19.25, 11),
(null, '2023-11-10', 43.7, 20.15, 12),
(null, '2023-01-10', 47.85, 23.15, 13),
(null, '2023-07-10', 45.72, 20.15, 14);


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