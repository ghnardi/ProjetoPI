
setInterval(atualizarGrafico, 1000);


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

    var valor_aleatorio = Math.random() * 1000;
    var valor_aleatorio2 = Math.random() * 30;

    var min = 1;
    var max = 6;
    var intervalo = max - min + 1;
    var valor_aleatorio_sensor_quebrado = Math.random() * intervalo + min
    var valor_aleatorio_fkSensor = parseInt(valor_aleatorio_sensor_quebrado)

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
            console.log("ESTOU NO THEN DO Ellie()!")

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

    data_setor.datasets[0].data = temperaturas[n].slice(0, 6);
    data_setor.datasets[1].data = umidades[n].slice(0, 6);

    grafico_linha_setor.update();

    umidades[n].shift();
    temperaturas[n].shift();
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
const temperatura_setor1 = [];
const temperatura_setor2 = [];
const temperatura_setor3 = [];
const temperatura_setor4 = [];
const temperatura_setor5 = [];
const temperatura_setor6 = [];

const umidade_setor1 = [];
const umidade_setor2 = [];
const umidade_setor3 = [];
const umidade_setor4 = [];
const umidade_setor5 = [];
const umidade_setor6 = [];

const dataHora_setor1 = [];
const dataHora_setor2 = [];
const dataHora_setor3 = [];
const dataHora_setor4 = [];
const dataHora_setor5 = [];
const dataHora_setor6 = [];



const temperaturas = [temperatura_setor1, temperatura_setor2, temperatura_setor3, temperatura_setor4, temperatura_setor5, temperatura_setor6]
const umidades = [umidade_setor1, umidade_setor2, umidade_setor3, umidade_setor4, umidade_setor5, umidade_setor6]
const dataHora = [dataHora_setor1, dataHora_setor2, dataHora_setor3, dataHora_setor4, dataHora_setor5, dataHora_setor6]





const data_setor = {
    labels: ["a", "b", "c", "d", "e", "f",],
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
                text: 'SETOR 2',
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
console.log(temperatura_grafico_barra, umidade_grafico_barra);

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

                switch (index) {
                    case 0:
                        executarPlotarGrafico(0)
                        valorN = 0; 
                        console.log("CLIQUEI NO GRÁFICO AO LADO PARCAAAA")
                        break;
                    case 1:
                        executarPlotarGrafico(1)
                        valorN = 1; 
                        console.log("CLIQUEI NO GRÁFICO AO LADO PARCAAAA")
                        break;
                    case 2:
                        executarPlotarGrafico(2)
                        valorN = 2; 
                        console.log("CLIQUEI NO GRÁFICO AO LADO PARCAAAA")
                        break;
                    case 3:
                        executarPlotarGrafico(3)
                        valorN = 3; 
                        console.log("CLIQUEI NO GRÁFICO AO LADO PARCAAAA")
                        break;
                    case 4:
                        executarPlotarGrafico(4)
                        valorN = 4; 
                        console.log("CLIQUEI NO GRÁFICO AO LADO PARCAAAA")
                        break;
                    case 5:
                        executarPlotarGrafico(5)
                        valorN = 5; 
                        console.log("CLIQUEI NO GRÁFICO AO LADO PARCAAAA")
                        break;
                }
            }
        },
    }
}

const grafico_barra = new Chart(grafico_barra_canva, config_grafico_barra);