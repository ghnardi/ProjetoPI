var usuarioModel = require("../models/usuarioModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA usuarioController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listar(req, res) {
    usuarioModel.listar()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function entrar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.entrar(email, senha)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    if (resultado.length == 1) {
                        console.log(resultado);
                        res.json(resultado[0]);
                    } else if (resultado.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var fkAdmin = req.body.fkAdminServer
    var fkEmpresa = req.body.fkEmpresaServer
    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nome, email, senha, fkEmpresa, fkAdmin)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function verificaremail(req, res) {
    var email = req.body.emailServer;

    if (email == undefined) {
        res.status(400).send("O email está indefinido!");
    } else {
        usuarioModel
            .verificaremail(email)
            .then(function (resultado) {
                if (resultado.length > 0) {
                    res.json({ emailCadastrado: true });
                } else {
                    res.json({ emailCadastrado: false });
                }
            })
            .catch(function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao verificar o email! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            });
    }
}

function verificarsenha(req, res) {
    var senha = req.body.senha_atualServer;
    var id = req.body.idServer

    if (senha == undefined) {
        res.status(400).send("A senha está indefinida!");
    } else {
        usuarioModel
            .verificarsenha(senha, id)
            .then(function (resultado) {
                if (resultado.length > 0) {
                    res.json({ senhaExiste: true });
                } else {
                    res.json({ senhaExiste: false });
                }
            })
            .catch(function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao verificar a senha! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            });
    }
}

function atualizarsenha(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var senha_nova = req.body.senhaNovaServer;
    var idUsuario = req.body.idServer;

    // Faça as validações dos valores
    if (senha_nova == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (idUsuario == undefined) {
        res.status(400).send("Usuário não logado! ID não encontrado!");
    } else {
        usuarioModel.atualizarSenha(senha_nova, idUsuario)
            .then(function (resultado) {
                if (resultado.length > 0) {
                    res.json({ atualizacao_senha_enviada: true });
                } else {
                    res.json({ atualizacao_senha_enviada: false });
                }
            })
            .catch(function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar a atualização da senha. Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            });
    }
}

function atualizarGrafico(req, res) {

    // var fkSensor = req.body.fkSensorServer;
    const limite_linhas = 6;
    usuarioModel.atualizarGrafico(limite_linhas)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao atualizar o gráfico! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function atualizarDashboard(req, res) {

    // var fkSensor = req.body.fkSensorServer;
    const limite_linhas = 6;
    usuarioModel.atualizarDashboard(limite_linhas)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao atualizar a dashboard! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function insertregistro(req, res) {

    var valor_aleatorio = req.body.valor_aleatorioServer;
    var valor_aleatorio2 = req.body.valor_aleatorioServer2;
    var valor_aleatorio_fkSensor = req.body.valor_aleatorio_fkSensorServer;

    usuarioModel.insertregistro(valor_aleatorio, valor_aleatorio2, valor_aleatorio_fkSensor)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao dar insert ficticio na tabela! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function verificarAdmin(req, res) {
    var id = req.body.idServer
    if (id == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else {

        usuarioModel.verificarAdmin(id)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String
                    if (resultado.length > 0) {
                        console.log(resultado);
                        res.json(resultado[0]);
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function atualizarDados(req, res) {
    // Recebe as inputs aqui postas no JS da pagina de Login
    var nome = req.body.nomeServer
    var email = req.body.emailServer;
    var data = req.body.dataServer
    var id = req.body.idServer
    if (email == undefined || nome == undefined || id == undefined || data == undefined) {
        res.status(400).send("Seus dados estão indefinido!");
    } else {

        usuarioModel.atualizarDados(email, nome, data, id)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String
                    console.log(resultado);
                    res.json(resultado[0]);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}


function atualizarLocal(req, res) {

    var fkEmpresa = req.body.fkEmpresaServer;

    usuarioModel.atualizarLocal(fkEmpresa)
        .then(
            function (resultado) {
                console.log(`\nResultados encontrados: ${resultado.length}`);
                console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                if (resultado.length > 0) {
                    console.log(resultado);
                    res.json(resultado);
                } else if (resultado.length == 0) {
                    res.status(403).send("Não existe o local");
                }
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao receber o local para atualizar a dashboard! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

module.exports = {
    entrar,
    cadastrar,
    listar,
    testar,
    verificaremail,
    atualizarGrafico,
    insertregistro,
    atualizarDashboard,
    verificarAdmin,
    atualizarDados,
    verificarsenha,
    atualizarsenha,
    atualizarLocal
}