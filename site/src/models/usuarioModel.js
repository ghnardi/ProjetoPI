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
        SELECT * FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(nome, email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO usuario (nome, email, senha, fkEmpresa) VALUES ('${nome}', '${email}', '${senha}', 1);
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

        console.log("Executando as instruções SQL...");
        var selects = [];

        selects.push(database.executar(instrucao1));
        selects.push(database.executar(instrucao2));
        selects.push(database.executar(instrucao3));
        selects.push(database.executar(instrucao4));
        selects.push(database.executar(instrucao5));
        selects.push(database.executar(instrucao6));

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


module.exports = {
    entrar,
    cadastrar,
    listar,
    atualizarGrafico,
    verificaremail,
    insertregistro,
    verificarAdmin
};