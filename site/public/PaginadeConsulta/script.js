setInterval(atualizarDashboard, 1000);

dashdash1.style.display = 'flex'
dashdash2.style.display = 'none'
dashdash3.style.display = 'none'
dashdash4.style.display = 'none'
menuleft1.style.display = 'flex'
menuleft2.style.display = 'flex'
menuleft3.style.display = 'flex'
menuleft4.style.display = 'flex'
dashdashtexto.innerHTML = `DASHBOARD DA ALA 1`
dashGeral.style.display = 'flex'
conteudo.style.display = 'none'

var temperatura_media_setores = []
var umidade_media_setores = []
var temperatura_media_sala = [];
var umidade_media_sala = [];

var temperatura_setor1 = [];
var temperatura_setor2 = [];
var temperatura_setor3 = [];
var temperatura_setor4 = [];
var temperatura_setor5 = [];
var temperatura_setor6 = [];

var umidade_setor1 = [];
var umidade_setor2 = [];
var umidade_setor3 = [];
var umidade_setor4 = [];
var umidade_setor5 = [];
var umidade_setor6 = [];

var temperaturas = [temperatura_setor1, temperatura_setor2, temperatura_setor3, temperatura_setor4, temperatura_setor5, temperatura_setor6]
var umidades = [umidade_setor1, umidade_setor2, umidade_setor3, umidade_setor4, umidade_setor5, umidade_setor6]

function insertregistro() {
    var min2 = 40;
    var max2 = 60;
    var valor_aleatorio = Math.random() * (max2 - min2 + 1) + min2

    var min3 = 50;
    var max3 = 90;
    var valor_aleatorio2 = Math.random() * (max3 - min3 + 1) + min3

    var min = 1;
    var max = 6;
    var intervalo = max - min + 1;
    var valor_aleatorio_sensor_quebrado = Math.random() * intervalo + min
    var valor_aleatorio_fkSensor = parseInt(valor_aleatorio_sensor_quebrado);

    fetch("/usuarios/insertregistro", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            valor_aleatorioServer: valor_aleatorio,
            valor_aleatorioServer2: valor_aleatorio2,
            valor_aleatorio_fkSensorServer: valor_aleatorio_fkSensor
        })
    })

        .then(function (resposta) {
            console.log("ESTOU INSERTANDO DADOS FICTICIOS!")

            if (resposta.ok) {
                console.log(resposta);
            } else {

                console.log("Houve um erro ao dar insert ficticios");

                resposta.text().then(texto => {
                    console.error(texto);
                });
            }

        }).catch(function (erro) {
            console.log(erro);
        })

    return false;

}


function atualizarDashboard() {

    insertregistro();

    fetch("/usuarios/atualizarDashboard", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then(function (resposta) {
            console.log("ESTOU RECEBENDO DADOS PARA A DASHBOARD!");

            if (resposta.ok) {
                console.log(resposta);
                resposta.json().then((resposta) => {
                    resposta.reverse();

                    resposta.forEach((sensor) => {
                        sensor.forEach((objeto) => {
                            const { fkSensor, temperatura, umidade } = objeto;


                            if (fkSensor === 1) {
                                if (temperatura_setor1.length >= 6) {
                                    temperatura_setor1.shift();
                                    umidade_setor1.shift();
                                }
                                temperatura_setor1.push(temperatura);
                                umidade_setor1.push(umidade);
                            } else if (fkSensor === 2) {
                                if (temperatura_setor2.length >= 6) {
                                    temperatura_setor2.shift();
                                    umidade_setor2.shift();
                                }
                                temperatura_setor2.push(temperatura);
                                umidade_setor2.push(umidade);
                            } else if (fkSensor === 3) {
                                if (temperatura_setor3.length >= 6) {
                                    temperatura_setor3.shift();
                                    umidade_setor3.shift();
                                }
                                temperatura_setor3.push(temperatura);
                                umidade_setor3.push(umidade);
                            } else if (fkSensor === 4) {
                                if (temperatura_setor4.length >= 6) {
                                    temperatura_setor4.shift();
                                    umidade_setor4.shift();
                                }
                                temperatura_setor4.push(temperatura);
                                umidade_setor4.push(umidade);
                            } else if (fkSensor === 5) {
                                if (temperatura_setor5.length >= 6) {
                                    temperatura_setor5.shift();
                                    umidade_setor5.shift();
                                }
                                temperatura_setor5.push(temperatura);
                                umidade_setor5.push(umidade);
                            } else if (fkSensor === 6) {
                                if (temperatura_setor6.length >= 6) {
                                    temperatura_setor6.shift();
                                    umidade_setor6.shift();
                                }
                                temperatura_setor6.push(temperatura);
                                umidade_setor6.push(umidade);
                            }
                        });
                    });

                    temperatura_media_setores = [mediaArray(temperaturas[0]), mediaArray(temperaturas[1]), mediaArray(temperaturas[2]), mediaArray(temperaturas[3]), mediaArray(temperaturas[4]), mediaArray(temperaturas[5])];

                    umidade_media_setores = [mediaArray(umidades[0]), mediaArray(umidades[1]), mediaArray(umidades[2]), mediaArray(umidades[3]), mediaArray(umidades[4]), mediaArray(umidades[5])];

                    umidade_media_sala = mediaArray(umidade_media_setores)
                    temperatura_media_sala = mediaArray(temperatura_media_setores)

                    console.log(umidade_media_sala, temperatura_media_sala)

                    const dadosGeraisTemperatura = document.getElementById("dadosGeraisTemperatura");

                    dadosGeraisTemperatura.innerHTML = `${temperatura_media_sala.toFixed(1)}ºC`

                    const dadosGeraisUmidade = document.getElementById("dadosGeraisUmidade");

                    dadosGeraisUmidade.innerHTML = `${umidade_media_sala.toFixed(1)}%`

                    validacao_cores_cards()

                    console.log(resposta);

                });
            } else {
                console.log("Houve um erro ao tentar atualizar a dashboard!");

                resposta.text().then((texto) => {
                    console.error(texto);
                });
            }
        })
        .catch(function (erro) {
            console.log(erro);
        });

    return false;
}

function mediaArray(vetor) {
    let soma = 0;
    for (let i = 0; i < vetor.length; i++) {
        soma += vetor[i];
    }
    return soma / vetor.length;
}


var topoDashInfo = document.getElementsByClassName("todoDashInfo")

function validacao_cores_cards() {

    var umidade_media_critica = umidade_media_sala < 45 || umidade_media_sala > 55;
    var temperatura_media_critica = temperatura_media_sala < 18 || temperatura_media_sala > 22;
    var umidade_media_alerta = umidade_media_sala < 46.2 || umidade_media_sala > 52.6;
    var temperatura_media_alerta = temperatura_media_sala < 18.47 || temperatura_media_sala > 20.6;



    var cor_marrom_escuro = "#2F220A";
    var cor_marrom_claro = "#493510"
    var cor_vermelho_escuro = "#972648";
    var cor_vermelho_claro = "#FF004D";
    var cor_amarelo_escuro = "#FFB800";
    var cor_amarelo_claro = "#FFD700";
    var cor_branco = "#FFFFFF"

    if (temperatura_media_critica) {
        topoDashInfo.style.backgroundColor = cor_vermelho_escuro
        headertexto3.style.color = cor_branco

        terceirobloco.style.backgroundColor = cor_vermelho_claro
        headerinfotexto3.style.color = cor_branco;
        headerinfosetor3.style.color = cor_branco;

        headericon5.style.display = "flex"
        headericon6.style.display = "flex"
    } else if (temperatura_media_alerta) {
        headerinfo_terceirobloco.style.backgroundColor = cor_amarelo_escuro
        headertexto3.style.color = cor_branco

        terceirobloco.style.backgroundColor = cor_amarelo_claro
        headerinfotexto3.style.color = cor_branco;
        headerinfosetor3.style.color = cor_branco;

        headericon5.style.display = "flex"
        headericon6.style.display = "flex"
    } else {
        headerinfo_terceirobloco.style.backgroundColor = cor_marrom_escuro
        headertexto3.style.color = cor_marrom_claro

        terceirobloco.style.backgroundColor = cor_marrom_claro
        headerinfotexto3.style.color = cor_marrom_escuro;
        headerinfosetor3.style.color = cor_marrom_escuro;

        headericon5.style.display = "none"
        headericon6.style.display = "none"
    }

    if (umidade_media_critica) {
        headerinfo_quartobloco.style.backgroundColor = cor_vermelho_escuro
        headertexto4.style.color = cor_branco

        quartobloco.style.backgroundColor = cor_vermelho_claro
        headerinfotexto4.style.color = cor_branco;
        headerinfosetor4.style.color = cor_branco;

        headericon7.style.display = "flex"
        headericon8.style.display = "flex"
    } else if (umidade_media_alerta) {
        headerinfo_quartobloco.style.backgroundColor = cor_amarelo_escuro
        headertexto4.style.color = cor_branco

        quartobloco.style.backgroundColor = cor_amarelo_claro
        headerinfotexto4.style.color = cor_branco;
        headerinfosetor4.style.color = cor_branco;

        headericon7.style.display = "flex"
        headericon8.style.display = "flex"
    } else {
        headerinfo_quartobloco.style.backgroundColor = cor_marrom_escuro
        headertexto4.style.color = cor_marrom_claro

        quartobloco.style.backgroundColor = cor_marrom_claro
        headerinfotexto4.style.color = cor_marrom_escuro;
        headerinfosetor4.style.color = cor_marrom_escuro;

        headericon7.style.display = "none"
        headericon8.style.display = "none"
    }
}




function mostrarDashLocalizada() {

    if (dashGeral.style.display == 'flex') {
        dashGeral.style.display = 'none'
        conteudo.style.display = 'flex'
    } else {
        dashGeral.style.display = 'flex'
        conteudo.style.display = 'none'
    }
}


function clickMenuLeft() {
    if (menuleft1.style.display == "flex") {
        menuleft1.style.display = 'none'
        menuleft2.style.display = 'none'
        menuleft3.style.display = 'none'
        menuleft4.style.display = 'none'
        iconmenuleft.style.transform = 'rotate(360deg)'
    } else {
        menuleft1.style.display = 'flex'
        menuleft2.style.display = 'flex'
        menuleft3.style.display = 'flex'
        menuleft4.style.display = 'flex'
        iconmenuleft.style.transform = 'rotate(180deg)'
    }
}

function clickMenu() {
    if (menumenu.style.display == "flex") {
        menumenu.style.display = 'none'
        iconmenumenu.innerHTML = 'menu'
    } else {
        menumenu.style.display = "flex"
        iconmenumenu.innerHTML = "close"
    }
}

function clickBloco1() {
    if (dashdash1.style.display == 'none') {
        menuleft2.style.backgroundColor = '#2E2109'
        menuleft3.style.backgroundColor = '#2E2109'
        menuleft4.style.backgroundColor = '#2E2109'

        dashdash2.style.display = 'none'
        dashdash3.style.display = 'none'
        dashdash4.style.display = 'none'
        dashdash1.style.display = 'flex'

        menuleft1.style.backgroundColor = '#775201'
        dashdashtexto.innerHTML = `DASHBOARD DA ALA 1`
    } else if (dashdash2.style.display == 'none' && dashdash3.style.display == 'none' && dashdash4.style.display == 'none' && dashdash1.style.display == 'flex') {
    }

}

function clickBloco2() {

    if (dashdash2.style.display == 'none') {
        menuleft1.style.backgroundColor = '#2E2109'
        menuleft3.style.backgroundColor = '#2E2109'
        menuleft4.style.backgroundColor = '#2E2109'
        menuleft2.style.backgroundColor = '#775201'

        dashdash1.style.display = 'none'
        dashdash3.style.display = 'none'
        dashdash4.style.display = 'none'
        dashdash2.style.display = 'flex'
        dashdashtexto.innerHTML = `DASHBOARD DA ALA 2`

    } else if (dashdash2.style.display == 'flex' && dashdash3.style.display == 'none' && dashdash4.style.display == 'none' && dashdash1.style.display == 'none') {
    }

}

function clickBloco3() {

    if (dashdash3.style.display == 'none') {
        menuleft1.style.backgroundColor = '#2E2109'
        menuleft2.style.backgroundColor = '#2E2109'
        menuleft4.style.backgroundColor = '#2E2109'
        dashdash1.style.display = 'none'
        dashdash2.style.display = 'none'
        dashdash4.style.display = 'none'
        dashdash3.style.display = 'flex'
        menuleft3.style.backgroundColor = '#775201'
        dashdashtexto.innerHTML = `DASHBOARD DA ALA 3`
    } else if (dashdash2.style.display == 'none' && dashdash3.style.display == 'flex' && dashdash4.style.display == 'none' && dashdash1.style.display == 'none') {
    }

}

function clickBloco4() {
    if (dashdash4.style.display == 'none') {
        menuleft1.style.backgroundColor = '#2E2109'
        menuleft2.style.backgroundColor = '#2E2109'
        menuleft3.style.backgroundColor = '#2E2109'
        dashdash1.style.display = 'none'
        dashdash2.style.display = 'none'
        dashdash3.style.display = 'none'
        dashdash4.style.display = 'flex'
        menuleft4.style.backgroundColor = '#775201'
        dashdashtexto.innerHTML = `DASHBOARD DA ALA 4`
    } else if (dashdash2.style.display == 'none' && dashdash3.style.display == 'none' && dashdash4.style.display == 'flex' && dashdash1.style.display == 'none') {
    }

}

function clickPerfil() {
    if (subsub.style.display == 'flex') {
        subsub.style.display = 'none'
    } else {
        subsub.style.display = 'flex'
    }


}


function dashboardIcon() {
    window.location.href = "./dashs/chart.html"
}

function gerenciarconta() {
    window.location.href = "../PaginaGerenciarConta/gerenciar.html"
}

function logout() {
    window.location.href = "../PáginaInicial/home.html"
}

function home() {
    window.location.href = "../PáginaInicial/home.html"
}

function cadastrar() {
    window.location.href = "../PáginaCadastro/cadastro.html"
}