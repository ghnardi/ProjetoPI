var database = require("../database/config")

function listar() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM usuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function entrar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT * FROM usuario WHERE email = '${email}' AND senha = sha2('${senha}', 256);
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(nome, email, senha, fkEmpresa, fkAdmin) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha, fkEmpresa, fkAdmin);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO usuario (nome, email, senha, fkEmpresa, fkAdmin) VALUES ('${nome}', '${email}', sha2('${senha}', 256), '${fkEmpresa}', '${fkAdmin}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function insertregistro(valor_aleatorio, valor_aleatorio2, valor_aleatorio_fkSensor) {

    var instrucao = `
        INSERT INTO registro (umidade, temperatura, dataHora, fkSensor) VALUES ('${valor_aleatorio}', '${valor_aleatorio2}', now(), ${valor_aleatorio_fkSensor});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function verificaremail(email) {
    var instrucao = `SELECT * FROM usuario WHERE email = '${email}'`;
    console.log("Executando verificação de e-mail: \n" + instrucao);
    return database.executar(instrucao);
}



function atualizarGrafico(limite_linhas) {




    return new Promise(function (resolve, reject) {
        var instrucao1 = `SELECT umidade, temperatura, dataHora, fkSensor FROM registro WHERE fkSensor = 1 ORDER BY idRegistro DESC LIMIT ${limite_linhas};`;
        var instrucao2 = `SELECT umidade, temperatura, dataHora, fkSensor FROM registro WHERE fkSensor = 2 ORDER BY idRegistro DESC LIMIT ${limite_linhas};`;
        var instrucao3 = `SELECT umidade, temperatura, dataHora, fkSensor FROM registro WHERE fkSensor = 3 ORDER BY idRegistro DESC LIMIT ${limite_linhas};`;
        var instrucao4 = `SELECT umidade, temperatura, dataHora, fkSensor FROM registro WHERE fkSensor = 4 ORDER BY idRegistro DESC LIMIT ${limite_linhas};`;
        var instrucao5 = `SELECT umidade, temperatura, dataHora, fkSensor FROM registro WHERE fkSensor = 5 ORDER BY idRegistro DESC LIMIT ${limite_linhas};`;
        var instrucao6 = `SELECT umidade, temperatura, dataHora, fkSensor FROM registro WHERE fkSensor = 6 ORDER BY idRegistro DESC LIMIT ${limite_linhas};`;
        var instrucao7 = `SELECT umidade, temperatura, dataHora, fkSensor FROM registro WHERE fkSensor = 7 ORDER BY idRegistro DESC LIMIT ${limite_linhas};`;
        var instrucao8 = `SELECT umidade, temperatura, dataHora, fkSensor FROM registro WHERE fkSensor = 8 ORDER BY idRegistro DESC LIMIT ${limite_linhas};`;
        var instrucao9 = `SELECT umidade, temperatura, dataHora, fkSensor FROM registro WHERE fkSensor = 9 ORDER BY idRegistro DESC LIMIT ${limite_linhas};`;
        var instrucao10 = `SELECT umidade, temperatura, dataHora, fkSensor FROM registro WHERE fkSensor = 10 ORDER BY idRegistro DESC LIMIT ${limite_linhas};`;
        var instrucao11 = `SELECT umidade, temperatura, dataHora, fkSensor FROM registro WHERE fkSensor = 11 ORDER BY idRegistro DESC LIMIT ${limite_linhas};`;
        var instrucao12 = `SELECT umidade, temperatura, dataHora, fkSensor FROM registro WHERE fkSensor = 12 ORDER BY idRegistro DESC LIMIT ${limite_linhas};`;
        var instrucao13 = `SELECT umidade, temperatura, dataHora, fkSensor FROM registro WHERE fkSensor = 13 ORDER BY idRegistro DESC LIMIT ${limite_linhas};`;
        var instrucao14 = `SELECT umidade, temperatura, dataHora, fkSensor FROM registro WHERE fkSensor = 14 ORDER BY idRegistro DESC LIMIT ${limite_linhas};`;
        var instrucao15 = `SELECT umidade, temperatura, dataHora, fkSensor FROM registro WHERE fkSensor = 15 ORDER BY idRegistro DESC LIMIT ${limite_linhas};`;
        var instrucao16 = `SELECT umidade, temperatura, dataHora, fkSensor FROM registro WHERE fkSensor = 16 ORDER BY idRegistro DESC LIMIT ${limite_linhas};`;
        var instrucao17 = `SELECT umidade, temperatura, dataHora, fkSensor FROM registro WHERE fkSensor = 17 ORDER BY idRegistro DESC LIMIT ${limite_linhas};`;
        var instrucao18 = `SELECT umidade, temperatura, dataHora, fkSensor FROM registro WHERE fkSensor = 18 ORDER BY idRegistro DESC LIMIT ${limite_linhas};`;
        var instrucao19 = `SELECT umidade, temperatura, dataHora, fkSensor FROM registro WHERE fkSensor = 19 ORDER BY idRegistro DESC LIMIT ${limite_linhas};`;
        var instrucao20 = `SELECT umidade, temperatura, dataHora, fkSensor FROM registro WHERE fkSensor = 20 ORDER BY idRegistro DESC LIMIT ${limite_linhas};`;
        var instrucao21 = `SELECT umidade, temperatura, dataHora, fkSensor FROM registro WHERE fkSensor = 21 ORDER BY idRegistro DESC LIMIT ${limite_linhas};`;
        var instrucao22 = `SELECT umidade, temperatura, dataHora, fkSensor FROM registro WHERE fkSensor = 22 ORDER BY idRegistro DESC LIMIT ${limite_linhas};`;
        var instrucao23 = `SELECT umidade, temperatura, dataHora, fkSensor FROM registro WHERE fkSensor = 23 ORDER BY idRegistro DESC LIMIT ${limite_linhas};`;
        var instrucao24 = `SELECT umidade, temperatura, dataHora, fkSensor FROM registro WHERE fkSensor = 24 ORDER BY idRegistro DESC LIMIT ${limite_linhas};`;

        console.log("Executando as instruções SQL...");
        var selects = [];

        selects.push(database.executar(instrucao1));
        selects.push(database.executar(instrucao2));
        selects.push(database.executar(instrucao3));
        selects.push(database.executar(instrucao4));
        selects.push(database.executar(instrucao5));
        selects.push(database.executar(instrucao6));
        selects.push(database.executar(instrucao7 ));
        selects.push(database.executar(instrucao8 ));
        selects.push(database.executar(instrucao9 ));
        selects.push(database.executar(instrucao10));
        selects.push(database.executar(instrucao11));
        selects.push(database.executar(instrucao12));
        selects.push(database.executar(instrucao13));
        selects.push(database.executar(instrucao14));
        selects.push(database.executar(instrucao15));
        selects.push(database.executar(instrucao16));
        selects.push(database.executar(instrucao17));
        selects.push(database.executar(instrucao18));
        selects.push(database.executar(instrucao19));
        selects.push(database.executar(instrucao20));
        selects.push(database.executar(instrucao21));
        selects.push(database.executar(instrucao22));
        selects.push(database.executar(instrucao23));
        selects.push(database.executar(instrucao24));

        Promise.all(selects)
            .then(function (res) {
                resolve(res);
            })
            .catch(function (error) {
                reject(error);
            });
    });
}

function verificarAdmin(id) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", id)
    var instrucao = `
    select * from usuario where idUsuario = ${id};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function atualizarDashboard(limite_linhas) {




    return new Promise(function (resolve, reject) {
        var instrucao1 = `SELECT umidade, temperatura, dataHora, fkSensor FROM registro WHERE fkSensor = 1 ORDER BY idRegistro DESC LIMIT ${limite_linhas};`;
        var instrucao2 = `SELECT umidade, temperatura, dataHora, fkSensor FROM registro WHERE fkSensor = 2 ORDER BY idRegistro DESC LIMIT ${limite_linhas};`;
        var instrucao3 = `SELECT umidade, temperatura, dataHora, fkSensor FROM registro WHERE fkSensor = 3 ORDER BY idRegistro DESC LIMIT ${limite_linhas};`;
        var instrucao4 = `SELECT umidade, temperatura, dataHora, fkSensor FROM registro WHERE fkSensor = 4 ORDER BY idRegistro DESC LIMIT ${limite_linhas};`;
        var instrucao5 = `SELECT umidade, temperatura, dataHora, fkSensor FROM registro WHERE fkSensor = 5 ORDER BY idRegistro DESC LIMIT ${limite_linhas};`;
        var instrucao6 = `SELECT umidade, temperatura, dataHora, fkSensor FROM registro WHERE fkSensor = 6 ORDER BY idRegistro DESC LIMIT ${limite_linhas};`;
        var instrucao7 = `SELECT umidade, temperatura, dataHora, fkSensor FROM registro WHERE fkSensor = 7 ORDER BY idRegistro DESC LIMIT ${limite_linhas};`;
        var instrucao8 = `SELECT umidade, temperatura, dataHora, fkSensor FROM registro WHERE fkSensor = 8 ORDER BY idRegistro DESC LIMIT ${limite_linhas};`;
        var instrucao9 = `SELECT umidade, temperatura, dataHora, fkSensor FROM registro WHERE fkSensor = 9 ORDER BY idRegistro DESC LIMIT ${limite_linhas};`;
        var instrucao10 = `SELECT umidade, temperatura, dataHora, fkSensor FROM registro WHERE fkSensor = 10 ORDER BY idRegistro DESC LIMIT ${limite_linhas};`;
        var instrucao11 = `SELECT umidade, temperatura, dataHora, fkSensor FROM registro WHERE fkSensor = 11 ORDER BY idRegistro DESC LIMIT ${limite_linhas};`;
        var instrucao12 = `SELECT umidade, temperatura, dataHora, fkSensor FROM registro WHERE fkSensor = 12 ORDER BY idRegistro DESC LIMIT ${limite_linhas};`;
        var instrucao13 = `SELECT umidade, temperatura, dataHora, fkSensor FROM registro WHERE fkSensor = 13 ORDER BY idRegistro DESC LIMIT ${limite_linhas};`;
        var instrucao14 = `SELECT umidade, temperatura, dataHora, fkSensor FROM registro WHERE fkSensor = 14 ORDER BY idRegistro DESC LIMIT ${limite_linhas};`;
        var instrucao15 = `SELECT umidade, temperatura, dataHora, fkSensor FROM registro WHERE fkSensor = 15 ORDER BY idRegistro DESC LIMIT ${limite_linhas};`;
        var instrucao16 = `SELECT umidade, temperatura, dataHora, fkSensor FROM registro WHERE fkSensor = 16 ORDER BY idRegistro DESC LIMIT ${limite_linhas};`;
        var instrucao17 = `SELECT umidade, temperatura, dataHora, fkSensor FROM registro WHERE fkSensor = 17 ORDER BY idRegistro DESC LIMIT ${limite_linhas};`;
        var instrucao18 = `SELECT umidade, temperatura, dataHora, fkSensor FROM registro WHERE fkSensor = 18 ORDER BY idRegistro DESC LIMIT ${limite_linhas};`;
        var instrucao19 = `SELECT umidade, temperatura, dataHora, fkSensor FROM registro WHERE fkSensor = 19 ORDER BY idRegistro DESC LIMIT ${limite_linhas};`;
        var instrucao20 = `SELECT umidade, temperatura, dataHora, fkSensor FROM registro WHERE fkSensor = 20 ORDER BY idRegistro DESC LIMIT ${limite_linhas};`;
        var instrucao21 = `SELECT umidade, temperatura, dataHora, fkSensor FROM registro WHERE fkSensor = 21 ORDER BY idRegistro DESC LIMIT ${limite_linhas};`;
        var instrucao22 = `SELECT umidade, temperatura, dataHora, fkSensor FROM registro WHERE fkSensor = 22 ORDER BY idRegistro DESC LIMIT ${limite_linhas};`;
        var instrucao23 = `SELECT umidade, temperatura, dataHora, fkSensor FROM registro WHERE fkSensor = 23 ORDER BY idRegistro DESC LIMIT ${limite_linhas};`;
        var instrucao24 = `SELECT umidade, temperatura, dataHora, fkSensor FROM registro WHERE fkSensor = 24 ORDER BY idRegistro DESC LIMIT ${limite_linhas};`;

        console.log("Executando as instruções SQL...");
        var selects = [];

        selects.push(database.executar(instrucao1));
        selects.push(database.executar(instrucao2));
        selects.push(database.executar(instrucao3));
        selects.push(database.executar(instrucao4));
        selects.push(database.executar(instrucao5));
        selects.push(database.executar(instrucao6));
        selects.push(database.executar(instrucao7 ));
        selects.push(database.executar(instrucao8 ));
        selects.push(database.executar(instrucao9 ));
        selects.push(database.executar(instrucao10));
        selects.push(database.executar(instrucao11));
        selects.push(database.executar(instrucao12));
        selects.push(database.executar(instrucao13));
        selects.push(database.executar(instrucao14));
        selects.push(database.executar(instrucao15));
        selects.push(database.executar(instrucao16));
        selects.push(database.executar(instrucao17));
        selects.push(database.executar(instrucao18));
        selects.push(database.executar(instrucao19));
        selects.push(database.executar(instrucao20));
        selects.push(database.executar(instrucao21));
        selects.push(database.executar(instrucao22));
        selects.push(database.executar(instrucao23));
        selects.push(database.executar(instrucao24));

        Promise.all(selects)
            .then(function (res) {
                resolve(res);
            })
            .catch(function (error) {
                reject(error);
            });
    });
}

function atualizarDados(email, nome, data, id) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, nome, data, id)
    var instrucao = `
    UPDATE usuario SET email = '${email}', nome = '${nome}', dtNasc = '${data}' WHERE idUsuario = ${id}; ;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function verificarsenha(senha, id) {
    var instrucao = `SELECT * FROM usuario WHERE senha = sha2('${senha}', 256) AND idUsuario = ${id}`;
    console.log("Executando verificação de senha: \n" + instrucao);
    return database.executar(instrucao);
  }

function atualizarSenha(senha, id) {
    var instrucao = `update usuario set senha = sha2('${senha}', 256) where idUsuario = ${id};`;
    console.log("Executando alteração de senha: \n" + instrucao);
    return database.executar(instrucao);
  }

module.exports = {
    entrar,
    cadastrar,
    listar,
    atualizarGrafico,
    verificaremail,
    insertregistro,
    verificarAdmin,
    atualizarDashboard,
    atualizarDados,
    verificarsenha,
    atualizarSenha
};