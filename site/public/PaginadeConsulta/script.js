setInterval(atualizarDashboard, 1000);

dashdash1.style.display = 'flex'
menuleft1.style.display = 'flex'
dashdashtexto.innerHTML = `DASHBOARD DA ALA 1`
dashGeral.style.display = 'flex'
conteudo.style.display = 'none'

var temperatura_setor1 = [];
var temperatura_setor2 = [];
var temperatura_setor3 = [];
var temperatura_setor4 = [];
var temperatura_setor5 = [];
var temperatura_setor6 = [];
var temperatura_setor7 = [];
var temperatura_setor8 = [];
var temperatura_setor9 = [];
var temperatura_setor10 = [];
var temperatura_setor11 = [];
var temperatura_setor12 = [];
var temperatura_setor13 = [];
var temperatura_setor14 = [];
var temperatura_setor15 = [];
var temperatura_setor16 = [];
var temperatura_setor17 = [];
var temperatura_setor18 = [];
var temperatura_setor19 = [];
var temperatura_setor20 = [];
var temperatura_setor21 = [];
var temperatura_setor22 = [];
var temperatura_setor23 = [];
var temperatura_setor24 = [];

var umidade_setor1 = [];
var umidade_setor2 = [];
var umidade_setor3 = [];
var umidade_setor4 = [];
var umidade_setor5 = [];
var umidade_setor6 = [];
var umidade_setor7 = [];
var umidade_setor8 = [];
var umidade_setor9 = [];
var umidade_setor10 = [];
var umidade_setor11 = [];
var umidade_setor12 = [];
var umidade_setor13 = [];
var umidade_setor14 = [];
var umidade_setor15 = [];
var umidade_setor16 = [];
var umidade_setor17 = [];
var umidade_setor18 = [];
var umidade_setor19 = [];
var umidade_setor20 = [];
var umidade_setor21 = [];
var umidade_setor22 = [];
var umidade_setor23 = [];
var umidade_setor24 = [];

var temperaturas_sala1 = [temperatura_setor1, temperatura_setor2, temperatura_setor3, temperatura_setor4, temperatura_setor5, temperatura_setor6]
var umidades_sala1 = [umidade_setor1, umidade_setor2, umidade_setor3, umidade_setor4, umidade_setor5, umidade_setor6]

var temperaturas_sala2 = [temperatura_setor7, temperatura_setor8, temperatura_setor9, temperatura_setor10, temperatura_setor11, temperatura_setor12]
var umidades_sala2 = [umidade_setor7, umidade_setor8, umidade_setor9, umidade_setor10, umidade_setor11, umidade_setor12]

var temperaturas_sala3 = [temperatura_setor13, temperatura_setor14, temperatura_setor15, temperatura_setor16, temperatura_setor17, temperatura_setor18]
var umidades_sala3 = [umidade_setor13, umidade_setor14, umidade_setor15, umidade_setor16, umidade_setor17, umidade_setor18]

var temperaturas_sala4 = [temperatura_setor19, temperatura_setor20, temperatura_setor21, temperatura_setor22, temperatura_setor23, temperatura_setor24]
var umidades_sala4 = [umidade_setor19, umidade_setor20, umidade_setor21, umidade_setor22, umidade_setor23, umidade_setor24]

var temperatura_media_sala1 = [];
var temperatura_media_sala2 = [];
var temperatura_media_sala3 = [];
var temperatura_media_sala4 = [];


var umidade_media_sala1 = [];
var umidade_media_sala2 = [];
var umidade_media_sala3 = [];
var umidade_media_sala4 = [];

var umidade_media_salas = [];
var temperatura_media_salas = [];

var umidade_media_empresa = [];
var temperatura_media_empresa = [];

function insertregistro() {
    var min2 = 40;
    var max2 = 60;
    var valor_aleatorio = Math.random() * (max2 - min2 + 1) + min2

    var min3 = 15;
    var max3 = 25;
    var valor_aleatorio2 = Math.random() * (max3 - min3 + 1) + min3

    var min = 1;
    var max = 6;
    var intervalo = max - min + 1;
    var valor_aleatorio_sensor_quebrado = Math.random() * intervalo + min
    var valor_aleatorio_fkSensor = parseInt(valor_aleatorio_sensor_quebrado);

    var min4 = 1;
    var max4 = 4;
    var valor_aleatorio_local_quebrado = Math.random() * (max4 - min4 + 1) + min;
    var valor_aleatorio_fkLocal = parseInt(valor_aleatorio_local_quebrado);

    if (valor_aleatorio_fkLocal == 2) {
        valor_aleatorio *= 1.05;
        valor_aleatorio2 *= 1.05;
        valor_aleatorio_fkSensor = valor_aleatorio_fkSensor + 6
    } else if (valor_aleatorio_fkLocal == 3) {
        valor_aleatorio *= 0.95;
        valor_aleatorio2 *= 0.95;
        valor_aleatorio_fkSensor = valor_aleatorio_fkSensor + 12
    } else if (valor_aleatorio_fkLocal == 4) {
        valor_aleatorio *= 1.1;
        valor_aleatorio2 *= 1.1;
        valor_aleatorio_fkSensor = valor_aleatorio_fkSensor + 18
    }

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
                                console.log(temperatura_setor6)
                            } else if (fkSensor === 6) {
                                if (temperatura_setor6.length >= 6) {
                                    temperatura_setor6.shift();
                                    umidade_setor6.shift();
                                }
                                temperatura_setor6.push(temperatura);
                                umidade_setor6.push(umidade);
                            } else if (fkSensor === 7) {
                                if (temperatura_setor7.length >= 6) {
                                    temperatura_setor7.shift();
                                    umidade_setor7.shift();
                                }
                                temperatura_setor7.push(temperatura);
                                umidade_setor7.push(umidade);
                            } else if (fkSensor === 8) {
                                if (temperatura_setor8.length >= 6) {
                                    temperatura_setor8.shift();
                                    umidade_setor8.shift();
                                }
                                temperatura_setor8.push(temperatura);
                                umidade_setor8.push(umidade);
                            } else if (fkSensor === 9) {
                                if (temperatura_setor9.length >= 6) {
                                    temperatura_setor9.shift();
                                    umidade_setor9.shift();
                                }
                                temperatura_setor9.push(temperatura);
                                umidade_setor9.push(umidade);
                            } else if (fkSensor === 10) {
                                if (temperatura_setor10.length >= 6) {
                                    temperatura_setor10.shift();
                                    umidade_setor10.shift();
                                }
                                temperatura_setor10.push(temperatura);
                                umidade_setor10.push(umidade);
                            } else if (fkSensor === 11) {
                                if (temperatura_setor11.length >= 6) {
                                    temperatura_setor11.shift();
                                    umidade_setor11.shift();
                                }
                                temperatura_setor11.push(temperatura);
                                umidade_setor11.push(umidade);
                            } else if (fkSensor === 12) {
                                if (temperatura_setor12.length >= 6) {
                                    temperatura_setor12.shift();
                                    umidade_setor12.shift();
                                }
                                temperatura_setor12.push(temperatura);
                                umidade_setor12.push(umidade);
                            } else if (fkSensor === 13) {
                                if (temperatura_setor13.length >= 6) {
                                    temperatura_setor13.shift();
                                    umidade_setor13.shift();
                                }
                                temperatura_setor13.push(temperatura);
                                umidade_setor13.push(umidade);
                            } else if (fkSensor === 14) {
                                if (temperatura_setor14.length >= 6) {
                                    temperatura_setor14.shift();
                                    umidade_setor14.shift();
                                }
                                temperatura_setor14.push(temperatura);
                                umidade_setor14.push(umidade);
                            } else if (fkSensor === 15) {
                                if (temperatura_setor15.length >= 6) {
                                    temperatura_setor15.shift();
                                    umidade_setor15.shift();
                                }
                                temperatura_setor15.push(temperatura);
                                umidade_setor15.push(umidade);
                            } else if (fkSensor === 16) {
                                if (temperatura_setor16.length >= 6) {
                                    temperatura_setor16.shift();
                                    umidade_setor16.shift();
                                }
                                temperatura_setor16.push(temperatura);
                                umidade_setor16.push(umidade);
                            } else if (fkSensor === 17) {
                                if (temperatura_setor17.length >= 6) {
                                    temperatura_setor17.shift();
                                    umidade_setor17.shift();
                                }
                                temperatura_setor17.push(temperatura);
                                umidade_setor17.push(umidade);
                            } else if (fkSensor === 18) {
                                if (temperatura_setor18.length >= 6) {
                                    temperatura_setor18.shift();
                                    umidade_setor18.shift();
                                }
                                temperatura_setor18.push(temperatura);
                                umidade_setor18.push(umidade);
                            } else if (fkSensor === 19) {
                                if (temperatura_setor19.length >= 6) {
                                    temperatura_setor19.shift();
                                    umidade_setor19.shift();
                                }
                                temperatura_setor19.push(temperatura);
                                umidade_setor19.push(umidade);
                            } else if (fkSensor === 20) {
                                if (temperatura_setor20.length >= 6) {
                                    temperatura_setor20.shift();
                                    umidade_setor20.shift();
                                }
                                temperatura_setor20.push(temperatura);
                                umidade_setor20.push(umidade);
                            } else if (fkSensor === 21) {
                                if (temperatura_setor21.length >= 6) {
                                    temperatura_setor21.shift();
                                    umidade_setor21.shift();
                                }
                                temperatura_setor21.push(temperatura);
                                umidade_setor21.push(umidade);
                            } else if (fkSensor === 22) {
                                if (temperatura_setor22.length >= 6) {
                                    temperatura_setor22.shift();
                                    umidade_setor22.shift();
                                }
                                temperatura_setor22.push(temperatura);
                                umidade_setor22.push(umidade);
                            } else if (fkSensor === 23) {
                                if (temperatura_setor23.length >= 6) {
                                    temperatura_setor23.shift();
                                    umidade_setor23.shift();
                                }
                                temperatura_setor23.push(temperatura);
                                umidade_setor23.push(umidade);
                            } else if (fkSensor === 24) {
                                if (temperatura_setor24.length >= 6) {
                                    temperatura_setor24.shift();
                                    umidade_setor24.shift();
                                }
                                temperatura_setor24.push(temperatura);
                                umidade_setor24.push(umidade);
                            }
                        });
                    });

                    calcularMedias()


                    atualizarDadosGeraisDashboard()

                    validacao_cores_cards()

                    atualizarDadosDashboardsLocalizadas()

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

function calcularMedias() {
    temperatura_media_sala1 = [mediaArray(temperaturas_sala1[0]), mediaArray(temperaturas_sala1[1]), mediaArray(temperaturas_sala1[2]), mediaArray(temperaturas_sala1[3]), mediaArray(temperaturas_sala1[4]), mediaArray(temperaturas_sala1[5])];

    umidade_media_sala1 = [mediaArray(umidades_sala1[0]), mediaArray(umidades_sala1[1]), mediaArray(umidades_sala1[2]), mediaArray(umidades_sala1[3]), mediaArray(umidades_sala1[4]), mediaArray(umidades_sala1[5])];

    temperatura_media_sala2 = [mediaArray(temperaturas_sala2[0]), mediaArray(temperaturas_sala2[1]), mediaArray(temperaturas_sala2[2]), mediaArray(temperaturas_sala2[3]), mediaArray(temperaturas_sala2[4]), mediaArray(temperaturas_sala2[5])];

    umidade_media_sala2 = [mediaArray(umidades_sala2[0]), mediaArray(umidades_sala2[1]), mediaArray(umidades_sala2[2]), mediaArray(umidades_sala2[3]), mediaArray(umidades_sala2[4]), mediaArray(umidades_sala2[5])];

    temperatura_media_sala3 = [mediaArray(temperaturas_sala3[0]), mediaArray(temperaturas_sala3[1]), mediaArray(temperaturas_sala3[2]), mediaArray(temperaturas_sala3[3]), mediaArray(temperaturas_sala3[4]), mediaArray(temperaturas_sala3[5])];

    umidade_media_sala3 = [mediaArray(umidades_sala3[0]), mediaArray(umidades_sala3[1]), mediaArray(umidades_sala3[2]), mediaArray(umidades_sala3[3]), mediaArray(umidades_sala3[4]), mediaArray(umidades_sala3[5])];

    temperatura_media_sala4 = [mediaArray(temperaturas_sala4[0]), mediaArray(temperaturas_sala4[1]), mediaArray(temperaturas_sala4[2]), mediaArray(temperaturas_sala4[3]), mediaArray(temperaturas_sala4[4]), mediaArray(temperaturas_sala4[5])];

    umidade_media_sala4 = [mediaArray(umidades_sala4[0]), mediaArray(umidades_sala4[1]), mediaArray(umidades_sala4[2]), mediaArray(umidades_sala4[3]), mediaArray(umidades_sala4[4]), mediaArray(umidades_sala4[5])];



    temperatura_media_salas = [mediaArray(temperatura_media_sala1), mediaArray(temperatura_media_sala2), mediaArray(temperatura_media_sala3), mediaArray(temperatura_media_sala4)]

    umidade_media_salas = [mediaArray(umidade_media_sala1), mediaArray(umidade_media_sala2), mediaArray(umidade_media_sala3), mediaArray(umidade_media_sala4)]


    umidade_media_empresa = mediaArray(umidade_media_salas)
    temperatura_media_empresa = mediaArray(temperatura_media_salas)
}

function atualizarDadosGeraisDashboard() {
    var dadosGeraisTemperatura = document.getElementById("dadosGeraisTemperatura");

    dadosGeraisTemperatura.innerHTML = `${temperatura_media_empresa.toFixed(1)}ºC`

    var dadosGeraisUmidade = document.getElementById("dadosGeraisUmidade");

    dadosGeraisUmidade.innerHTML = `${umidade_media_empresa.toFixed(1)}%`
}

var media_ultima_temperatura_sala1 = 0;
var media_ultima_temperatura_sala2 = 0;
var media_ultima_temperatura_sala3 = 0;
var media_ultima_temperatura_sala4 = 0;

var media_ultima_umidade_sala1 = 0;
var media_ultima_umidade_sala2 = 0;
var media_ultima_umidade_sala3 = 0;
var media_ultima_umidade_sala4 = 0;


function calcularMediasUltimoRegistro() {
    media_ultima_temperatura_sala1 = 0
    media_ultima_temperatura_sala2 = 0;
    media_ultima_temperatura_sala3 = 0;
    media_ultima_temperatura_sala4 = 0;

    media_ultima_umidade_sala1 = 0;
    media_ultima_umidade_sala2 = 0;
    media_ultima_umidade_sala3 = 0;
    media_ultima_umidade_sala4 = 0;

    for (i = 0; i < temperaturas_sala1[0].length; i++) {
        media_ultima_temperatura_sala1 += temperaturas_sala1[i][5] / 6;
        media_ultima_temperatura_sala2 += temperaturas_sala2[i][5] / 6
        media_ultima_temperatura_sala3 += temperaturas_sala3[i][5] / 6
        media_ultima_temperatura_sala4 += temperaturas_sala4[i][5] / 6

        media_ultima_umidade_sala1 += umidades_sala1[i][5] / 6;
        media_ultima_umidade_sala2 += umidades_sala2[i][5] / 6
        media_ultima_umidade_sala3 += umidades_sala3[i][5] / 6
        media_ultima_umidade_sala4 += umidades_sala4[i][5] / 6
    }
    console.log(media_ultima_temperatura_sala1)
}

var dadosGeraisTemperatura = document.getElementById("dadosGeraisTemperatura")
var dadosGeraisUmidade = document.getElementById("dadosGeraisUmidade")
const topoDashInfo = document.getElementById("topoDashInfo");
const titulotopo = document.getElementById("titulotopo");
const topoDashInfo2 = document.getElementById("topoDashInfo2");
const titulotopo2 = document.getElementById("titulotopo2");

const dashinfoicon1 = document.getElementById("dashinfoicon1")
const dashinfoicon2 = document.getElementById("dashinfoicon2")

const dashinfoGeral = document.getElementById("dashinfoGeral")
const dashinfoGeral2 = document.getElementById("dashinfoGeral2")


const blocoDash = document.getElementById("blocoDash")
const blocoDash2 = document.getElementById("blocoDash2")

function validacao_cores_cards() {

    var umidade_media_critica = umidade_media_empresa < 45 || umidade_media_empresa > 55;
    var temperatura_media_critica = temperatura_media_empresa < 18 || temperatura_media_empresa > 22;
    var umidade_media_alerta = umidade_media_empresa < 46.2 || umidade_media_empresa > 52.6;
    var temperatura_media_alerta = temperatura_media_empresa < 18.47 || temperatura_media_empresa > 20.6;



    var cor_marrom_escuro = "#2F220A";
    var cor_marrom_claro = "#493510"
    var cor_vermelho_escuro = "#972648";
    var cor_vermelho_claro = "#FF004D";
    var cor_amarelo_escuro = "#FFB800";
    var cor_amarelo_claro = "#FFD700";
    var cor_branco = "#FFFFFF"

    if (temperatura_media_critica) {
        topoDashInfo.style.backgroundColor = cor_vermelho_escuro
        titulotopo.style.color = cor_branco

        blocoDash.style.backgroundColor = cor_vermelho_claro
        dashinfoGeral.style.backgroundColor = cor_vermelho_claro
        dashinfoicon1.style.color = cor_branco

        dadosGeraisTemperatura.style.color = cor_branco

        dashinfoicon1.style.display = "flex";
    } else if (temperatura_media_alerta) {
        topoDashInfo.style.backgroundColor = cor_amarelo_escuro
        titulotopo.style.color = cor_branco

        blocoDash.style.backgroundColor = cor_amarelo_claro
        dashinfoGeral.style.backgroundColor = cor_amarelo_claro
        dashinfoicon1.style.color = cor_branco

        dadosGeraisTemperatura.style.color = cor_branco

        dashinfoicon1.style.display = "flex";
    } else {
        topoDashInfo.style.backgroundColor = cor_marrom_escuro
        titulotopo.style.color = cor_branco

        blocoDash.style.backgroundColor = cor_marrom_claro
        dashinfoGeral.style.backgroundColor = cor_marrom_claro
        dashinfoicon1.style.color = cor_branco

        dadosGeraisTemperatura.style.color = cor_branco

        dashinfoicon1.style.display = "none";
    }

    if (umidade_media_critica) {
        topoDashInfo2.style.backgroundColor = cor_vermelho_escuro
        titulotopo2.style.color = cor_branco

        blocoDash2.style.backgroundColor = cor_vermelho_claro
        dashinfoGeral2.style.backgroundColor = cor_vermelho_claro
        dashinfoicon2.style.color = cor_branco

        dadosGeraisUmidade.style.color = cor_branco

        dashinfoicon2.style.display = "flex";
    } else if (umidade_media_alerta) {
        topoDashInfo2.style.backgroundColor = cor_amarelo_escuro
        titulotopo2.style.color = cor_branco

        blocoDash2.style.backgroundColor = cor_amarelo_claro
        dashinfoGeral2.style.backgroundColor = cor_amarelo_claro
        dashinfoicon2.style.color = cor_branco

        dadosGeraisUmidade.style.color = cor_branco

        dashinfoicon2.style.display = "flex";
    } else {
        topoDashInfo2.style.backgroundColor = cor_marrom_escuro
        titulotopo2.style.color = cor_branco

        blocoDash2.style.backgroundColor = cor_marrom_claro
        dashinfoGeral2.style.backgroundColor = cor_marrom_claro
        dashinfoicon2.style.color = cor_branco

        dadosGeraisUmidade.style.color = cor_branco

        dashinfoicon2.style.display = "none";
    }
}


const dashinfobloquinho1 = document.getElementById("dashinfobloquinho1");
const dashinfobloquinho2 = document.getElementById("dashinfobloquinho2");
const dashinfobloquinho3 = document.getElementById("dashinfobloquinho3");
const dashinfobloquinho4 = document.getElementById("dashinfobloquinho4");
const dashinfobloquinho5 = document.getElementById("dashinfobloquinho5");
const dashinfobloquinho6 = document.getElementById("dashinfobloquinho6");
const dashinfobloquinho7 = document.getElementById("dashinfobloquinho7");
const dashinfobloquinho8 = document.getElementById("dashinfobloquinho8");
const dashinfobloquinho9 = document.getElementById("dashinfobloquinho9");
const dashinfobloquinho10 = document.getElementById("dashinfobloquinho10");
const dashinfobloquinho11 = document.getElementById("dashinfobloquinho11");
const dashinfobloquinho12 = document.getElementById("dashinfobloquinho12");
const dashinfobloquinho13 = document.getElementById("dashinfobloquinho13");
const dashinfobloquinho14 = document.getElementById("dashinfobloquinho14");
const dashinfobloquinho15 = document.getElementById("dashinfobloquinho15");
const dashinfobloquinho16 = document.getElementById("dashinfobloquinho16");

const dashicon1 = document.getElementById("dashicon1");
const dashicon2 = document.getElementById("dashicon2");
const dashicon3 = document.getElementById("dashicon3");
const dashicon4 = document.getElementById("dashicon4");
const dashicon5 = document.getElementById("dashicon5");
const dashicon6 = document.getElementById("dashicon6");
const dashicon7 = document.getElementById("dashicon7");
const dashicon8 = document.getElementById("dashicon8");
const dashicon9 = document.getElementById("dashicon9");
const dashicon10 = document.getElementById("dashicon10");
const dashicon11 = document.getElementById("dashicon11");
const dashicon12 = document.getElementById("dashicon12");
const dashicon13 = document.getElementById("dashicon13");
const dashicon14 = document.getElementById("dashicon14");
const dashicon15 = document.getElementById("dashicon15");
const dashicon16 = document.getElementById("dashicon16");

const dashinfotexto1 = document.getElementById("dashinfotexto1");
const dashinfotexto2 = document.getElementById("dashinfotexto2");
const dashinfotexto3 = document.getElementById("dashinfotexto3");
const dashinfotexto4 = document.getElementById("dashinfotexto4");
const dashinfotexto5 = document.getElementById("dashinfotexto5");
const dashinfotexto6 = document.getElementById("dashinfotexto6");
const dashinfotexto7 = document.getElementById("dashinfotexto7");
const dashinfotexto8 = document.getElementById("dashinfotexto8");
const dashinfotexto9 = document.getElementById("dashinfotexto9");
const dashinfotexto10 = document.getElementById("dashinfotexto10");
const dashinfotexto11 = document.getElementById("dashinfotexto11");
const dashinfotexto12 = document.getElementById("dashinfotexto12");
const dashinfotexto13 = document.getElementById("dashinfotexto13");
const dashinfotexto14 = document.getElementById("dashinfotexto14");
const dashinfotexto15 = document.getElementById("dashinfotexto15");
const dashinfotexto16 = document.getElementById("dashinfotexto16");


function atualizarDadosDashboardsLocalizadas() {
    calcularMediasUltimoRegistro()

    dashinfobloquinho1.innerHTML = `${media_ultima_temperatura_sala1.toFixed(1)}ºC`
        dashinfobloquinho2.innerHTML = `${media_ultima_umidade_sala1.toFixed(1)}%`
        dashinfobloquinho3.innerHTML = `${mediaArray(temperatura_media_sala1).toFixed(1)}ºC`
        dashinfobloquinho4.innerHTML = `${mediaArray(umidade_media_sala1).toFixed(1)}%`

        dashinfobloquinho5.innerHTML = `${media_ultima_temperatura_sala2.toFixed(1)}ºC`
        dashinfobloquinho6.innerHTML = `${media_ultima_umidade_sala2.toFixed(1)}%`
        dashinfobloquinho7.innerHTML = `${mediaArray(temperatura_media_sala2).toFixed(1)}ºC`
        dashinfobloquinho8.innerHTML = `${mediaArray(umidade_media_sala2).toFixed(1)}%`


        dashinfobloquinho9.innerHTML = `${media_ultima_temperatura_sala3.toFixed(1)}ºC`
        dashinfobloquinho10.innerHTML = `${media_ultima_umidade_sala3.toFixed(1)}%`
        dashinfobloquinho11.innerHTML = `${mediaArray(temperatura_media_sala3).toFixed(1)}ºC`
        dashinfobloquinho12.innerHTML = `${mediaArray(umidade_media_sala3).toFixed(1)}%`


        dashinfobloquinho13.innerHTML = `${media_ultima_temperatura_sala4.toFixed(1)}ºC`
        dashinfobloquinho14.innerHTML = `${media_ultima_umidade_sala4.toFixed(1)}%`
        dashinfobloquinho15.innerHTML = `${mediaArray(temperatura_media_sala4).toFixed(1)}ºC`
        dashinfobloquinho16.innerHTML = `${mediaArray(umidade_media_sala4).toFixed(1)}%`

    for (var i = 0; i < temperaturas_sala1.length; i++) {
        var cor_verde = "#6eb47d"
        var cor_marrom_claro = "#c6b082"


        /* SALA 1*/
        /* MEDIA ULTIMOS REGISTROS */
        if (media_ultima_temperatura_sala1 < 18 || media_ultima_temperatura_sala1 > 22) {
            dashinfobloquinho1.style.color = "red"

            dashicon1.style.color = "red"
            dashinfotexto1.style.color = "red"
            dashicon1.style.display = "flex"
        } else if (media_ultima_temperatura_sala1 < 18.47 || media_ultima_temperatura_sala1 > 20.6) {
            dashinfobloquinho1.style.color = "yellow"

            dashicon1.style.color = "yellow"
            dashinfotexto1.style.color = "yellow"
            dashicon1.style.display = "flex"
        } else {
            dashinfobloquinho1.style.color = cor_verde

            dashinfotexto1.style.color = cor_marrom_claro
            dashicon1.style.display = "none"
        }

        if (media_ultima_umidade_sala1 < 45 || media_ultima_umidade_sala1 > 55) {
            dashinfobloquinho2.style.color = "red"

            dashicon2.style.color = "red"
            dashinfotexto2.style.color = "red"
            dashicon2.style.display = "flex"
        } else if (media_ultima_umidade_sala1 < 46.2 || media_ultima_umidade_sala1 > 52.6) {
            dashinfobloquinho2.style.color = "yellow"

            dashicon2.style.color = "yellow"
            dashinfotexto2.style.color = "yellow"
            dashicon2.style.display = "flex"
        } else {
            dashinfobloquinho2.style.color = cor_verde

            dashinfotexto2.style.color = cor_marrom_claro
            dashicon2.style.display = "none"
        }

        /* MEDIA DA SALA */
        if (mediaArray(temperatura_media_sala1) < 18 || mediaArray(temperatura_media_sala1) > 22) {
            dashinfobloquinho3.style.color = "red"

            dashicon3.style.color = "red"
            dashinfotexto3.style.color = "red"
            dashicon3.style.display = "flex"
        } else if (mediaArray(temperatura_media_sala1) < 18.47 || mediaArray(temperatura_media_sala1) > 20.6) {
            dashinfobloquinho3.style.color = "yellow"

            dashicon3.style.color = "yellow"
            dashinfotexto3.style.color = "yellow"
            dashicon3.style.display = "flex"
        } else {
            dashinfobloquinho3.style.color = cor_verde

            dashinfotexto3.style.color = cor_marrom_claro
            dashicon3.style.display = "none"
        }

        if (mediaArray(umidade_media_sala1) < 45 || mediaArray(umidade_media_sala1) > 55) {
            dashinfobloquinho4.style.color = "red"

            dashicon4.style.color = "red"
            dashinfotexto4.style.color = "red"
            dashicon4.style.display = "flex"
        } else if (mediaArray(umidade_media_sala1) < 46.2 || mediaArray(umidade_media_sala1) > 52.6) {
            dashinfobloquinho4.style.color = "yellow"

            dashicon4.style.color = "yellow"
            dashinfotexto4.style.color = "yellow"
            dashicon4.style.display = "flex"
        } else {
            dashinfobloquinho4.style.color = cor_verde

            dashinfotexto4.style.color = cor_marrom_claro
            dashicon4.style.display = "none"
        }

        /* SALA 2*/
        if (media_ultima_temperatura_sala2 < 18 || media_ultima_temperatura_sala2 > 22) {
            dashinfobloquinho5.style.color = "red"

            dashicon5.style.color = "red"
            dashinfotexto5.style.color = "red"
            dashicon5.style.display = "flex"
        } else if (media_ultima_temperatura_sala2 < 18.47 || media_ultima_temperatura_sala2 > 20.6) {
            dashinfobloquinho5.style.color = "yellow"

            dashicon5.style.color = "yellow"
            dashinfotexto5.style.color = "yellow"
            dashicon5.style.display = "flex"
        } else {
            dashinfobloquinho5.style.color = cor_verde

            dashinfotexto5.style.color = cor_marrom_claro
            dashicon5.style.display = "none"
        }

        if (media_ultima_umidade_sala2 < 45 || media_ultima_umidade_sala2 > 55) {
            dashinfobloquinho6.style.color = "red"

            dashicon6.style.color = "red"
            dashinfotexto6.style.color = "red"
            dashicon6.style.display = "flex"
        } else if (media_ultima_umidade_sala2 < 46.2 || media_ultima_umidade_sala2 > 52.6) {
            dashinfobloquinho6.style.color = "yellow"

            dashicon6.style.color = "yellow"
            dashinfotexto6.style.color = "yellow"
            dashicon6.style.display = "flex"
        } else {
            dashinfobloquinho6.style.color = cor_verde

            dashinfotexto6.style.color = cor_marrom_claro
            dashicon6.style.display = "none"
        }

        /* MEDIA DA SALA */
        if (mediaArray(temperatura_media_sala2) < 18 || mediaArray(temperatura_media_sala2) > 22) {
            dashinfobloquinho7.style.color = "red"

            dashicon7.style.color = "red"
            dashinfotexto7.style.color = "red"
            dashicon7.style.display = "flex"
        } else if (mediaArray(temperatura_media_sala2) < 18.47 || mediaArray(temperatura_media_sala2) > 20.6) {
            dashinfobloquinho7.style.color = "yellow"

            dashicon7.style.color = "yellow"
            dashinfotexto7.style.color = "yellow"
            dashicon7.style.display = "flex"
        } else {
            dashinfobloquinho7.style.color = cor_verde

            dashinfotexto7.style.color = cor_marrom_claro
            dashicon7.style.display = "none"
        }

        if (mediaArray(umidade_media_sala2) < 45 || mediaArray(umidade_media_sala2) > 55) {
            dashinfobloquinho8.style.color = "red"

            dashicon8.style.color = "red"
            dashinfotexto8.style.color = "red"
            dashicon8.style.display = "flex"
        } else if (mediaArray(umidade_media_sala2) < 46.2 || mediaArray(umidade_media_sala2) > 52.6) {
            dashinfobloquinho8.style.color = "yellow"

            dashicon8.style.color = "yellow"
            dashinfotexto8.style.color = "yellow"
            dashicon8.style.display = "flex"
        } else {
            dashinfobloquinho8.style.color = cor_verde

            dashinfotexto8.style.color = cor_marrom_claro
            dashicon8.style.display = "none"
        }

        /* SALA 3*/
        if (media_ultima_temperatura_sala3 < 18 || media_ultima_temperatura_sala3 > 22) {
            dashinfobloquinho9.style.color = "red"

            dashicon9.style.color = "red"
            dashinfotexto9.style.color = "red"
            dashicon9.style.display = "flex"
        } else if (media_ultima_temperatura_sala3 < 18.47 || media_ultima_temperatura_sala3 > 20.6) {
            dashinfobloquinho9.style.color = "yellow"

            dashicon9.style.color = "yellow"
            dashinfotexto9.style.color = "yellow"
            dashicon9.style.display = "flex"
        } else {
            dashinfobloquinho9.style.color = cor_verde

            dashinfotexto9.style.color = cor_marrom_claro
            dashicon9.style.display = "none"
        }

        if (media_ultima_umidade_sala3 < 45 || media_ultima_umidade_sala3 > 55) {
            dashinfobloquinho10.style.color = "red"

            dashicon10.style.color = "red"
            dashinfotexto10.style.color = "red"
            dashicon10.style.display = "flex"
        } else if (media_ultima_umidade_sala3 < 46.2 || media_ultima_umidade_sala3 > 52.6) {
            dashinfobloquinho10.style.color = "yellow"

            dashicon10.style.color = "yellow"
            dashinfotexto10.style.color = "yellow"
            dashicon10.style.display = "flex"
        } else {
            dashinfobloquinho10.style.color = cor_verde

            dashinfotexto10.style.color = cor_marrom_claro
            dashicon10.style.display = "none"
        }

        /* MEDIA DA SALA */
        if (mediaArray(temperatura_media_sala3) < 18 || mediaArray(temperatura_media_sala3) > 22) {
            dashinfobloquinho11.style.color = "red"

            dashicon11.style.color = "red"
            dashinfotexto11.style.color = "red"
            dashicon11.style.display = "flex"
        } else if (mediaArray(temperatura_media_sala3) < 18.47 || mediaArray(temperatura_media_sala3) > 20.6) {
            dashinfobloquinho11.style.color = "yellow"

            dashicon11.style.color = "yellow"
            dashinfotexto11.style.color = "yellow"
            dashicon11.style.display = "flex"
        } else {
            dashinfobloquinho11.style.color = cor_verde

            dashinfotexto11.style.color = cor_marrom_claro
            dashicon11.style.display = "none"
        }

        if (mediaArray(umidade_media_sala3) < 45 || mediaArray(umidade_media_sala3) > 55) {
            dashinfobloquinho12.style.color = "red"

            dashicon12.style.color = "red"
            dashinfotexto12.style.color = "red"
            dashicon12.style.display = "flex"
        } else if (mediaArray(umidade_media_sala3) < 46.2 || mediaArray(umidade_media_sala3) > 52.6) {
            dashinfobloquinho12.style.color = "yellow"

            dashicon12.style.color = "yellow"
            dashinfotexto12.style.color = "yellow"
            dashicon12.style.display = "flex"
        } else {
            dashinfobloquinho12.style.color = cor_verde

            dashinfotexto12.style.color = cor_marrom_claro
            dashicon12.style.display = "none"
        }

        /* SALA 4*/
        if (media_ultima_temperatura_sala4 < 18 || media_ultima_temperatura_sala4 > 22) {
            dashinfobloquinho13.style.color = "red"

            dashicon13.style.color = "red"
            dashinfotexto13.style.color = "red"
            dashicon13.style.display = "flex"
        } else if (media_ultima_temperatura_sala4 < 18.47 || media_ultima_temperatura_sala4 > 20.6) {
            dashinfobloquinho13.style.color = "yellow"

            dashicon13.style.color = "yellow"
            dashinfotexto13.style.color = "yellow"
            dashicon13.style.display = "flex"
        } else {
            dashinfobloquinho13.style.color = cor_verde

            dashinfotexto13.style.color = cor_marrom_claro
            dashicon13.style.display = "none"
        }

        if (media_ultima_umidade_sala4 < 45 || media_ultima_umidade_sala4 > 55) {
            dashinfobloquinho14.style.color = "red"

            dashicon14.style.color = "red"
            dashinfotexto14.style.color = "red"
            dashicon14.style.display = "flex"
        } else if (media_ultima_umidade_sala4 < 46.2 || media_ultima_umidade_sala4 > 52.6) {
            dashinfobloquinho14.style.color = "yellow"

            dashicon14.style.color = "yellow"
            dashinfotexto14.style.color = "yellow"
            dashicon14.style.display = "flex"
        } else {
            dashinfobloquinho14.style.color = cor_verde

            dashinfotexto14.style.color = cor_marrom_claro
            dashicon14.style.display = "none"
        }

        /* MEDIA DA SALA */
        if (mediaArray(temperatura_media_sala4) < 18 || mediaArray(temperatura_media_sala4) > 22) {
            dashinfobloquinho15.style.color = "red"

            dashicon15.style.color = "red"
            dashinfotexto15.style.color = "red"
            dashicon15.style.display = "flex"
        } else if (mediaArray(temperatura_media_sala4) < 18.47 || mediaArray(temperatura_media_sala4) > 20.6) {
            dashinfobloquinho15.style.color = "yellow"

            dashicon15.style.color = "yellow"
            dashinfotexto15.style.color = "yellow"
            dashicon15.style.display = "flex"
        } else {
            dashinfobloquinho15.style.color = cor_verde

            dashinfotexto15.style.color = cor_marrom_claro
            dashicon15.style.display = "none"
        }

        if (mediaArray(umidade_media_sala4) < 45 || mediaArray(umidade_media_sala4) > 55) {
            dashinfobloquinho16.style.color = "red"

            dashicon16.style.color = "red"
            dashinfotexto16.style.color = "red"
            dashicon16.style.display = "flex"
        } else if (mediaArray(umidade_media_sala4) < 46.2 || mediaArray(umidade_media_sala4) > 52.6) {
            dashinfobloquinho16.style.color = "yellow"

            dashicon16.style.color = "yellow"
            dashinfotexto16.style.color = "yellow"
            dashicon16.style.display = "flex"
        } else {
            dashinfobloquinho16.style.color = cor_verde

            dashinfotexto16.style.color = cor_marrom_claro
            dashicon16.style.display = "none"
        }
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