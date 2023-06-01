setInterval(atualizarGrafico, 1000)
  

function clickPerfil() {
    if (subsub.style.display == 'flex') {
        subsub.style.display = 'none'
    } else {
        subsub.style.display = 'flex'
    }
}


function dashboard() {
    window.location.href = "../consulta.html"
}

function clickVoltar() {
    window.location.href = "../consulta.html"
}

function gerenciarconta() {
    window.location.href = '../../PaginaGerenciarConta/gerenciar.html'
}

function logout() {
    window.location.href = "../../PáginaInicial/home.html"
}

function home() {
    window.location.href = "../../PáginaInicial/home.html"
}

function cadastrar() {
    window.location.href = "../PáginaCadastro/cadastro.html"
}

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
        valor_aleatorio *= 1.2;
        valor_aleatorio2 *= 1.2;
        valor_aleatorio_fkSensor = valor_aleatorio_fkSensor + 6
    } else if (valor_aleatorio_fkLocal == 3) {
        valor_aleatorio *= 0.8;
        valor_aleatorio2 *= 0.8;
        valor_aleatorio_fkSensor = valor_aleatorio_fkSensor + 12
    } else if (valor_aleatorio_fkLocal == 4 ){
        valor_aleatorio *= 2;
        valor_aleatorio2 *= 2;
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

function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }
  
  const grafico_selecionado = getQueryParam("parametro")

  var soma_sala = 0;
  if (grafico_selecionado == 1) {
    soma_sala = 0;
  } else if (grafico_selecionado == 2){
    soma_sala = 6
  } else if (grafico_selecionado == 3){
    soma_sala = 12
  } else if (grafico_selecionado == 4) {
    soma_sala = 18
  }

function atualizarGrafico() {

    insertregistro();

    fetch("/usuarios/atualizarGrafico", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then(function (resposta) {
            console.log("ESTOU NO THEN DO Ellie()!");

            if (resposta.ok) {
                console.log(resposta);
                resposta.json().then((resposta) => {
                    resposta.reverse();

                    resposta.forEach((sensor) => {
                        sensor.forEach((objeto) => {
                            const { fkSensor, temperatura, dataHora, umidade } = objeto;

                            const hora = dataHora.substring(11, 13);    // Extrai a hora da dataHora
                            const minuto = dataHora.substring(14, 16);  // Extrai o minuto da dataHora
                            const segundo = dataHora.substring(17, 19); // Extrai o segundo da dataHora

                            if (fkSensor == 1 + soma_sala) {
                                if (temperatura_setor1.length >= 6) {
                                    temperatura_setor1.shift();
                                    umidade_setor1.shift();
                                    dataHora_setor1.shift();
                                }
                                temperatura_setor1.push(temperatura);
                                umidade_setor1.push(umidade);
                                dataHora_setor1.push(`${hora}:${minuto}:${segundo}`)
                            } else if (fkSensor == 2 + soma_sala) {
                                if (temperatura_setor2.length >= 6) {
                                    temperatura_setor2.shift();
                                    umidade_setor2.shift();
                                    dataHora_setor2.shift();
                                }
                                temperatura_setor2.push(temperatura);
                                umidade_setor2.push(umidade);
                                dataHora_setor2.push(`${hora}:${minuto}:${segundo}`)
                            } else if (fkSensor == 3 + soma_sala) {
                                if (temperatura_setor3.length >= 6) {
                                    temperatura_setor3.shift();
                                    umidade_setor3.shift();
                                    dataHora_setor3.shift();
                                }
                                temperatura_setor3.push(temperatura);
                                umidade_setor3.push(umidade);
                                dataHora_setor3.push(`${hora}:${minuto}:${segundo}`)
                            } else if (fkSensor == 4 + soma_sala) {
                                if (temperatura_setor4.length >= 6) {
                                    temperatura_setor4.shift();
                                    umidade_setor4.shift();
                                    dataHora_setor4.shift();
                                }
                                temperatura_setor4.push(temperatura);
                                umidade_setor4.push(umidade);
                                dataHora_setor4.push(`${hora}:${minuto}:${segundo}`)
                            } else if (fkSensor == 5 + soma_sala) {
                                if (temperatura_setor5.length >= 6) {
                                    temperatura_setor5.shift();
                                    umidade_setor5.shift();
                                    dataHora_setor5.shift();
                                }
                                temperatura_setor5.push(temperatura);
                                umidade_setor5.push(umidade);
                                dataHora_setor5.push(`${hora}:${minuto}:${segundo}`)
                            } else if (fkSensor == 6 + soma_sala) {
                                if (temperatura_setor6.length >= 6) {
                                    temperatura_setor6.shift();
                                    umidade_setor6.shift();
                                    dataHora_setor6.shift();
                                }
                                temperatura_setor6.push(temperatura);
                                umidade_setor6.push(umidade);
                                dataHora_setor6.push(`${hora}:${minuto}:${segundo}`)
                            }
                        });
                    });

                    temperatura_grafico_barra = [mediaArray(temperaturas[0]), mediaArray(temperaturas[1]), mediaArray(temperaturas[2]), mediaArray(temperaturas[3]), mediaArray(temperaturas[4]), mediaArray(temperaturas[5])];

                    umidade_grafico_barra = [mediaArray(umidades[0]), mediaArray(umidades[1]), mediaArray(umidades[2]), mediaArray(umidades[3]), mediaArray(umidades[4]), mediaArray(umidades[5])];

                    data_grafico_barra.datasets[0].data = temperatura_grafico_barra;

                    data_grafico_barra.datasets[1].data = umidade_grafico_barra;

                    grafico_barra.update();
                    console.log(resposta);

                });
            } else {
                console.log("Houve um erro ao tentar enviar o grafico dados!");

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

// Defina a função plotarGrafico
function plotarGrafico(n) {
    temperatura_setor1.reverse();
    umidade_setor1.reverse();
    temperatura_setor2.reverse();
    umidade_setor2.reverse();
    temperatura_setor3.reverse();
    umidade_setor3.reverse();
    temperatura_setor4.reverse();
    umidade_setor4.reverse();
    temperatura_setor5.reverse();
    umidade_setor5.reverse();
    temperatura_setor6.reverse();
    umidade_setor6.reverse();
    dataHora_setor1.reverse();
    dataHora_setor2.reverse();
    dataHora_setor3.reverse();
    dataHora_setor4.reverse();
    dataHora_setor5.reverse();
    dataHora_setor6.reverse();

    data_setor.datasets[0].data = temperaturas[n].slice(0, 6);
    data_setor.datasets[1].data = umidades[n].slice(0, 6);
    data_setor.labels = dataHora[n].slice(0, 6);

    grafico_linha_setor.update();

    umidades[n].shift();
    temperaturas[n].shift();
    dataHora[n].shift();

    headerinfotexto.innerHTML = `${umidades[n][4].toFixed(1)}%`;
    headerinfotexto2.innerHTML = `${temperaturas[n][4].toFixed(1)}ºC`;
    headerinfotexto3.innerHTML = `${mediaArray(temperaturas[n]).toFixed(1)}ºC`;
    headerinfotexto4.innerHTML = `${mediaArray(umidades[n]).toFixed(1)}%`;

    validacao_cores_cards(n);
}

const intervalo = 2000; // Intervalo de 5 segundos

// Variável para armazenar o valor de n
var valorN = 0;

// Função para executar o plotarGrafico indefinidamente
function executarPlotarGrafico() {
    // Chame a função plotarGrafico com o valor de valorN
    plotarGrafico(valorN);
}

// Agende a próxima execução após o intervalo de tempo
setInterval(function () {
    executarPlotarGrafico();
}, intervalo);





const setor_linha = document.getElementById('grafico_setor');

// A CONSTANTE ABAIXO RECEBERÁ FUTURAMENTE OS VALORES DO ARDUÍNO, ATUALMENTE SÃO VALORES MANUAIS PARA DEMOSNTRAÇÃO.
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

var dataHora_setor1 = [];
var dataHora_setor2 = [];
var dataHora_setor3 = [];
var dataHora_setor4 = [];
var dataHora_setor5 = [];
var dataHora_setor6 = [];



var temperaturas = [temperatura_setor1, temperatura_setor2, temperatura_setor3, temperatura_setor4, temperatura_setor5, temperatura_setor6]
var umidades = [umidade_setor1, umidade_setor2, umidade_setor3, umidade_setor4, umidade_setor5, umidade_setor6]
var dataHora = [dataHora_setor1, dataHora_setor2, dataHora_setor3, dataHora_setor4, dataHora_setor5, dataHora_setor6]





const data_setor = {
    labels: dataHora[0],
    datasets: [
        {
            label: 'Temperatura',
            data: temperaturas[0],
            backgroundColor: 'red',
            borderColor: 'red',
            borderWidth: 2
        },
        {
            label: 'Umidade',
            data: umidades[0],
            backgroundColor: 'blue',
            borderColor: 'blue',
            borderWidth: 2
        }
    ]
};

// A CONSTANTE ABAIXO GUARDA OS VALORES DA TEMPERATURA E UMIDADE EM FORMATO DE VETOR, SERÁ "TRANSFORMADO" EM NÚMERO MAIS ADIANTE.
// RECEBE OS DADOS DO SETOR 6, DENTRO DO DATASETS, ACHA (FIND) NO DATASET.LABEL DA TEMPERATURA OU DA UMIDADE.

const config_setor = {
    type: 'line',
    data: data_setor,
    options: {
        maintainAspectRatio: false,
        scales: {
            y: {
                ticks: {
                    beginAtZero: true,
                    color: '#2E2109;',
                    font: {
                        size: 18,
                        family: 'Montserrat Ace',
                        weight: 500
                    }
                },
            },
            x: {
                ticks: {
                    color: '#2E2109;',
                    font: {
                        size: 18,
                        family: 'Montserrat Ace',
                        weight: 500
                    }
                }
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'SETOR 1',
                font: {
                    size: 18,
                    color: 'black',
                    family: 'Montserrat Ace',
                    weight: 800
                }

            },
            legend: {
                labels: {
                    font: {
                        size: 18,
                        family: 'Montserrat Ace',
                        weight: 500
                    }
                }
            }
        }
    }
};

const grafico_linha_setor = new Chart(setor_linha, config_setor);

/* GRAFICO BARRA */

const grafico_barra_canva = document.getElementById('graficobarra');

const labels_barra = [
    'Setor 1',
    'Setor 2',
    'Setor 3',
    'Setor 4',
    'Setor 5',
    'Setor 6',
];

// USANDO A MÉDIA QUE OBTIVEMOS COM OS GRÁFICOS DE LINHA, ALIMENTAMOS OS VALORES DO GRÁFICO DE BARRAS.

function mediaArray(vetor) {
    let soma = 0;
    for (let i = 0; i < vetor.length; i++) {
        soma += vetor[i];
    }
    return soma / vetor.length;
}

var temperatura_grafico_barra = []
var umidade_grafico_barra = []

const data_grafico_barra = {
    labels: labels_barra,
    datasets: [{
        label: 'Temperatura',
        backgroundColor: 'rgba(255, 99, 132, 1)',
        borderColor: 'rgba(255, 99, 132, 1)',
        data: temperatura_grafico_barra,
    }, {
        label: 'Umidade',
        backgroundColor: '#1d8d8e',
        borderColor: '#1d8d8e',
        data: umidade_grafico_barra,
    }
    ]
};

const config_grafico_barra = {
    type: 'bar',
    data: data_grafico_barra,
    options: {
        maintainAspectRatio: false,
        scales: {
            y: {
                ticks: {
                    beginAtZero: true,
                    color: '#2E2109;',
                    font: {
                        size: 18,
                        family: 'Montserrat Ace',
                        weight: 500
                    }
                },
            },
            x: {
                ticks: {
                    color: '#2E2109;',
                    font: {
                        size: 18,
                        family: 'Montserrat Ace',
                        weight: 500
                    }
                }
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'SALA 12345',
                font: {
                    size: 18,
                    color: 'black',
                    family: 'Montserrat Ace',
                    weight: 800
                }
            },
            legend: {
                labels: {
                    font: {
                        size: 18,
                        family: 'Montserrat Ace',
                        weight: 500
                    }
                }
            }
        },

        onClick: function (events, elements) {

            if (elements.length > 0) {
                // Constante para receber a posição na qual será efetuado o click.
                const index = elements[0].index;
                var titulo_grafico = "";

                switch (index) {
                    case 0:
                        executarPlotarGrafico(0)
                        atualizarTextoTitulo("SETOR 1")
                        valorN = 0;
                        console.log("CLIQUEI NO GRÁFICO AO LADO PARCAAAA")
                        headerinfosetor.innerHTML = "SETOR 1";
                        headerinfosetor2.innerHTML = "SETOR 1";
                        headerinfosetor3.innerHTML = "SETOR 1";
                        headerinfosetor4.innerHTML = "SETOR 1";
                        break;
                    case 1:
                        executarPlotarGrafico(1)
                        atualizarTextoTitulo("SETOR 2")
                        valorN = 1;
                        headerinfosetor.innerHTML = "SETOR 2";
                        headerinfosetor2.innerHTML = "SETOR 2";
                        headerinfosetor3.innerHTML = "SETOR 2";
                        headerinfosetor4.innerHTML = "SETOR 2";
                        console.log("CLIQUEI NO GRÁFICO AO LADO PARCAAAA")
                        break;
                    case 2:
                        executarPlotarGrafico(2)
                        atualizarTextoTitulo("SETOR 3")
                        valorN = 2;
                        headerinfosetor.innerHTML = "SETOR 3";
                        headerinfosetor2.innerHTML = "SETOR 3";
                        headerinfosetor3.innerHTML = "SETOR 3";
                        headerinfosetor4.innerHTML = "SETOR 3";
                        console.log("CLIQUEI NO GRÁFICO AO LADO PARCAAAA")
                        break;
                    case 3:
                        executarPlotarGrafico(3)
                        atualizarTextoTitulo("SETOR 4")
                        valorN = 3;
                        headerinfosetor.innerHTML = "SETOR 4";
                        headerinfosetor2.innerHTML = "SETOR 4";
                        headerinfosetor3.innerHTML = "SETOR 4";
                        headerinfosetor4.innerHTML = "SETOR 4";
                        console.log("CLIQUEI NO GRÁFICO AO LADO PARCAAAA")
                        break;
                    case 4:
                        executarPlotarGrafico(4)
                        atualizarTextoTitulo("SETOR 5")
                        valorN = 4;
                        headerinfosetor.innerHTML = "SETOR 5";
                        headerinfosetor2.innerHTML = "SETOR 5";
                        headerinfosetor3.innerHTML = "SETOR 5";
                        headerinfosetor4.innerHTML = "SETOR 5";
                        console.log("CLIQUEI NO GRÁFICO AO LADO PARCAAAA")
                        break;
                    case 5:
                        executarPlotarGrafico(5)
                        atualizarTextoTitulo("SETOR 6")
                        valorN = 5;
                        headerinfosetor.innerHTML = "SETOR 6";
                        headerinfosetor2.innerHTML = "SETOR 6";
                        headerinfosetor3.innerHTML = "SETOR 6";
                        headerinfosetor4.innerHTML = "SETOR 6";
                        console.log("CLIQUEI NO GRÁFICO AO LADO PARCAAAA")
                        break;
                }
            }
        },
    }
}



const grafico_barra = new Chart(grafico_barra_canva, config_grafico_barra);

function atualizarTextoTitulo(texto) {
    grafico_linha_setor.options.plugins.title.text = texto;
    grafico_linha_setor.update();
}

function validacao_cores_cards(n) {
    var umidade_atual_critica = umidades[n][4] < 45 || umidades[n][4] > 55;
    var temperatura_atual_critica = temperaturas[n][4] < 18 || temperaturas[n][4] > 22;
    var umidade_atual_alerta = umidades[n][4] < 46.2 || umidades[n][4] > 52.6;
    var temperatura_atual_alerta = temperaturas[n][4] < 18.47 || temperaturas[n][4] > 20.6;

    var umidade_media_critica = mediaArray(umidades[n]) < 45 || mediaArray(umidades[n]) > 55;
    var temperatura_media_critica = mediaArray(temperaturas[n]) < 18 || mediaArray(temperaturas[n]) > 22;
    var umidade_media_alerta = mediaArray(umidades[n]) < 46.2 || mediaArray(umidades[n]) > 52.6;
    var temperatura_media_alerta = mediaArray(temperaturas[n]) < 18.47 || mediaArray(temperaturas[n]) > 20.6;



    var cor_marrom_escuro = "#6D4A00";
    var cor_marrom_claro = "#F3EAD8"
    var cor_vermelho_escuro = "#972648";
    var cor_vermelho_claro = "#FF004D";
    var cor_amarelo_escuro = "#FFB800";
    var cor_amarelo_claro = "#FFD700";
    var cor_branco = "#FFFFFF"


    if (umidade_atual_critica) {
        headerinfo_primeirobloco.style.backgroundColor = cor_vermelho_escuro
        headertexto1.style.color = cor_branco

        primeirobloco.style.backgroundColor = cor_vermelho_claro
        headerinfotexto.style.color = cor_branco;
        headerinfosetor.style.color = cor_branco;

        headericon1.style.display = "flex"
        headericon2.style.display = "flex"
    } else if (umidade_atual_alerta) {
        headerinfo_primeirobloco.style.backgroundColor = cor_amarelo_escuro
        headertexto1.style.color = cor_branco

        primeirobloco.style.backgroundColor = cor_amarelo_claro
        headerinfotexto.style.color = cor_branco;
        headerinfosetor.style.color = cor_branco;

        headericon1.style.display = "flex"
        headericon2.style.display = "flex"
    } else {
        headerinfo_primeirobloco.style.backgroundColor = cor_marrom_escuro
        headertexto1.style.color = cor_marrom_claro

        primeirobloco.style.backgroundColor = cor_marrom_claro
        headerinfotexto.style.color = cor_marrom_escuro;
        headerinfosetor.style.color = cor_marrom_escuro;

        headericon1.style.display = "none"
        headericon2.style.display = "none"
    }

    if (temperatura_atual_critica) {
        headerinfo_segundobloco.style.backgroundColor = cor_vermelho_escuro
        headertexto2.style.color = cor_branco

        segundobloco.style.backgroundColor = cor_vermelho_claro
        headerinfotexto2.style.color = cor_branco;
        headerinfosetor2.style.color = cor_branco;

        headericon3.style.display = "flex"
        headericon4.style.display = "flex"
    } else if (temperatura_atual_alerta) {
        headerinfo_segundobloco.style.backgroundColor = cor_amarelo_escuro
        headertexto2.style.color = cor_branco

        segundobloco.style.backgroundColor = cor_amarelo_claro
        headerinfotexto2.style.color = cor_branco;
        headerinfosetor2.style.color = cor_branco;

        headericon3.style.display = "flex"
        headericon4.style.display = "flex"
    } else {
        headerinfo_segundobloco.style.backgroundColor = cor_marrom_escuro
        headertexto2.style.color = cor_marrom_claro

        segundobloco.style.backgroundColor = cor_marrom_claro
        headerinfotexto2.style.color = cor_marrom_escuro;
        headerinfosetor2.style.color = cor_marrom_escuro;

        headericon3.style.display = "none"
        headericon4.style.display = "none"
    }

    if (temperatura_media_critica) {
        headerinfo_terceirobloco.style.backgroundColor = cor_vermelho_escuro
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
